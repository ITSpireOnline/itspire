
import { NextRequest, NextResponse } from 'next/server';
import { collection, doc, setDoc, serverTimestamp, increment, runTransaction, getDoc, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig'; 

const getTodayDate = () => {
  const today = new Date();
  const year = today.getUTCFullYear(); // Use UTC year
  const month = String(today.getUTCMonth() + 1).padStart(2, '0'); // Use UTC month
  const day = String(today.getUTCDate()).padStart(2, '0');     // Use UTC day
  return `${year}-${month}-${day}`;
};

export async function POST(req: NextRequest) {
  const forwardedFor = req.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '';

  let locationData: { [key: string]: any } = {};

  const isLocalOrPrivateIp = ip === '::1' ||
                             ip === '127.0.0.1' ||
                             ip.startsWith('192.168.') ||
                             ip.startsWith('10.') ||
                             ip.startsWith('172.16.');

  if (ip && !isLocalOrPrivateIp) {
    try {
      const geoResponse = await fetch(`http://ip-api.com/json/${ip}`);
      const geoJson = await geoResponse.json();

      if (geoJson.status === 'success') {
        locationData = {
          country: geoJson.country,
          countryCode: geoJson.countryCode,
          region: geoJson.regionName,
          city: geoJson.city,
          zip: geoJson.zip,
          lat: geoJson.lat,
          lon: geoJson.lon,
          timezone: geoJson.timezone,
          isp: geoJson.isp,
          org: geoJson.org,
        };
      } else {
        console.error("Geolocation API error for IP:", ip, "Message:", geoJson.message || "Unknown error");
      }
    } catch (error) {
      console.error("Failed to fetch geolocation data for IP:", ip, error);
    }
  } else {
      console.warn("Skipping geolocation for local/private/null IP:", ip);
  }

  try {
    const todayDate = getTodayDate();
    const dailyVisitorDocRef =doc(db, "dailyVisitors", todayDate);
    const visitIdCounterRef = doc(db, "globalCounters", "visitIdCounter");
    const detailedVisitLogsCollectionRef = collection(db, "detailedVisitLogs");

    await runTransaction(db, async (transaction) => {
      
      const visitIdCounterSnap = await transaction.get(visitIdCounterRef); 


      const currentGlobalId = visitIdCounterSnap.exists() ? visitIdCounterSnap.data().currentId : 0;
      const newGlobalId = currentGlobalId + 1;

      transaction.set(dailyVisitorDocRef, {
        count: increment(1),
        label: "Total Visitors Today",
        suffix: "+",
        lastRecordedIp: ip,
        lastVisitTimestamp: serverTimestamp(),
      }, { merge: true });

      transaction.set(visitIdCounterRef, { currentId: newGlobalId }, { merge: true });

      const newDetailedVisitDocRef = doc(detailedVisitLogsCollectionRef);
      transaction.set(newDetailedVisitDocRef, {
        visitId: newGlobalId,
        ipAddress: ip,
        timestamp: serverTimestamp(),
        userAgent: req.headers.get('user-agent') || null,
        pageAccessed: req.nextUrl.pathname,
        ...(Object.keys(locationData).length > 0 && { location: locationData }),
      });
    });

    return NextResponse.json({ success: true, message: 'Visit recorded successfully with sequential ID.' });

  } catch (error: any) {
    console.error("Error recording visit with sequential ID:", error);
    return NextResponse.json({ success: false, message: 'Failed to record visit.', error: error.message }, { status: 500 });
  }
}