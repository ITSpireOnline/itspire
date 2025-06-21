// components/StatsCounter.tsx
"use client"

import { useState, useEffect, useRef } from "react"
// Only import Firestore functions needed for *reading* data on the client
import { db } from "@/firebase/firebaseConfig"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"

interface StatItem {
  id: string;
  value: number;
  label: string;
  suffix: string;
}

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

function CounterItem({ number, label, suffix }: { number: number; label: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isVisible) {
      setCount(0);
      timer = setInterval(() => {
        setCount((prev) => {
          if (prev < number) {
            const incrementStep = Math.ceil(number / 100);
            return Math.min(prev + incrementStep, number);
          }
          return number;
        });
      }, 50);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isVisible, number]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-center justify-center text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        <span>{count}</span>
        <span>{suffix}</span>
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  )
}

export default function StatsCounter() {
  const [fetchedStats, setFetchedStats] = useState<StatItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasIncrementedRef = useRef(false); // To ensure visit count only increments once per page load

  useEffect(() => {
    const recordAndFetchStats = async () => {
      try {

        if (!hasIncrementedRef.current) {
          const recordVisitResponse = await fetch('/api/record-visit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },

          });

          if (!recordVisitResponse.ok) {
            const errorData = await recordVisitResponse.json();
            console.error("Failed to record visit:", errorData.message);
          } else {
            console.log("Visit recorded successfully on server.");
            hasIncrementedRef.current = true; // Mark as incremented for this session
          }
        }

        // --- 2. Fetch all website stats from Firestore ---
        const statsCollectionRef = collection(db, "websiteStats");
        const websiteStatsSnapshot = await getDocs(statsCollectionRef);

        const loadedStats: StatItem[] = [];
        websiteStatsSnapshot.forEach((doc) => {
          const data = doc.data();
          loadedStats.push({
            id: doc.id,
            value: data.value,
            label: data.label,
            suffix: data.suffix,
          });
        });

        // --- 3. Fetch today's visitor count directly from Firestore for DISPLAY ---
        // This reads the count that the API route just incremented.
        const todayDate = getTodayDate();
        const visitorDocRef = doc(db, "visitors", todayDate);
        const visitorDocSnap = await getDoc(visitorDocRef);
        let currentVisitorsCount = 0;
        if (visitorDocSnap.exists()) {
          currentVisitorsCount = visitorDocSnap.data().count;
        }

        // Add today's visitor stat to the list for display
        loadedStats.push({
          id: 'totalVisitorsToday',
          value: currentVisitorsCount,
          label: "Total Visitors Today",
          suffix: "+",
        });

        // Define a desired order for display
        const displayOrder = ["totalVisitorsToday", "mobileApps", "websites", "happyClients"];
        loadedStats.sort((a, b) => displayOrder.indexOf(a.id) - displayOrder.indexOf(b.id));

        setFetchedStats(loadedStats);

      } catch (err: any) {
        console.error("Error fetching or updating stats:", err);
        setError(`Failed to load or update statistics: ${err.message || "Unknown error"}`);
      } finally {
        setLoading(false);
      }
    };

    recordAndFetchStats();
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) {
    return (
      <section className="py-16 bg-gray-50 flex justify-center items-center">
        <p className="text-lg text-gray-600 animate-pulse">Loading statistics...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-red-100 flex justify-center items-center">
        <p className="text-lg text-red-700">{error}</p>
      </section>
    );
  }

  if (fetchedStats.length === 0) {
    return (
      <section className="py-16 bg-gray-50 flex justify-center items-center">
        <p className="text-lg text-gray-600">No statistics available. Please check database configuration and rules.</p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {fetchedStats.map((stat) => (
            <CounterItem
              key={stat.id}
              number={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}