// components/StatsCounter.tsx
"use client"

import { useState, useEffect, useRef } from "react"
// Import Firebase Firestore functions
import { db } from "@/firebase/firebaseConfig"
import { collection, doc, getDoc, getDocs, updateDoc, increment, setDoc } from "firebase/firestore"

// Define the interface for a stat item fetched from Firestore
interface StatItem {
  id: string; // The document ID (e.g., "mobileApps", "visitors")
  value: number; // The numerical value of the stat
  label: string;
  suffix: string;
}

// Helper function to get today's date in YYYY-MM-DD format
const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
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

    // Cleanup the observer when the component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
      observer.disconnect()
    }
  }, []) // Empty dependency array ensures this effect runs once on mount

  useEffect(() => {
    let timer: NodeJS.Timeout; // Define timer variable outside if block for proper cleanup

    if (isVisible) {
      setCount(0); // Reset count to re-animate if it becomes visible again
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

    // Cleanup the interval when visibility changes or component unmounts
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isVisible, number]); // Re-run effect when visibility changes or target number changes

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

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const statsCollectionRef = collection(db, "websiteStats");
        const snapshot = await getDocs(statsCollectionRef);

        const loadedStats: StatItem[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          loadedStats.push({
            id: doc.id,
            value: data.value, // Use 'value' field from DB
            label: data.label,
            suffix: data.suffix,
          });
        });

        // Fetch and increment today's visitor count
        const todayDate = getTodayDate();
        const visitorDocRef = doc(db, "visitors", todayDate); // Document for today's visitors

        // Use a transaction or combined op eration for robustness if needed,
        // but for a simple increment, updateDoc is often sufficient.
        await setDoc(visitorDocRef, {
          count: increment(1),
          label: "Total Visitors Today", // Store label here for this stat
          suffix: "+",
        }, { merge: true }); // Use merge: true to create if not exists, or update if it does.

        // After incrementing, get the *current* count for display
        const visitorDocSnap = await getDoc(visitorDocRef);
        let currentVisitorsCount = 0;
        if (visitorDocSnap.exists()) {
          currentVisitorsCount = visitorDocSnap.data().count;
        }

        // Add today's visitor stat to the list of loaded stats
        loadedStats.push({
          id: 'totalVisitorsToday', // Consistent ID for mapping
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

    fetchStats();
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
              key={stat.id} // Using stat.id as key for stability
              number={stat.value} // Use 'value' from fetched data
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}