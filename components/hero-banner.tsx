// components/HeroBanner.tsx
"use client"; // This component uses useState and useEffect, so it must be a client component

import { useState, useEffect } from "react";
import Image from "next/image";
import { db } from "@/firebase/firebaseConfig"; // Adjust path as per your setup
import { doc, getDoc } from "firebase/firestore";

// 1. Define the TypeScript interface for a single banner slide
interface BannerSlide {
  title: string;
  highlight: string;
  description: string;
  image: string; // Path to the image
}

export default function HeroBanner() {
  // 2. Type the bannerSlides state as an array of BannerSlide
  const [bannerSlides, setBannerSlides] = useState<BannerSlide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Type for error state

  useEffect(() => {
    // Function to fetch data from Firestore
    const fetchBannerSlides = async () => {
      try {
        const docRef = doc(db, "bannerSlides", "uRwpf1Ijp66cklStNrOU"); // 'bannerSlides' is collection, 'data' is document ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const fetchedData = docSnap.data();
          // 3. Type assertion for fetchedData.slides to BannerSlide[]
          if (fetchedData && Array.isArray(fetchedData.slides)) {
            setBannerSlides(fetchedData.slides as BannerSlide[]);
          } else {
            setError("Data format invalid: 'slides' array not found or incorrect.");
          }
        } else {
          setError("No such document found in Firestore: 'bannerSlides/data'.");
        }
      } catch (err: any) { // Type the error caught in catch block
        console.error("Error fetching banner slides:", err);
        setError(`Failed to fetch banner data: ${err.message || "Unknown error"}.`);
      } finally {
        setLoading(false);
      }
    };

    fetchBannerSlides();

    // Auto-advance logic for the carousel
    // Only set up interval if there are slides, to prevent division by zero
    let interval: NodeJS.Timeout;
    if (bannerSlides.length > 0) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
      }, 4000); 
    }


    // Cleanup interval on component unmount or if bannerSlides change
    return () => {
        if (interval) clearInterval(interval);
    };
  }, [bannerSlides.length]); // Re-run effect if number of slides changes (e.g., after fetching)

  // Handle loading and error states
  if (loading) {
    return (
      <section className="relative w-full h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <p className="text-xl text-gray-600 animate-pulse">Loading amazing digital experiences...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative w-full h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] flex items-center justify-center bg-red-100">
        <p className="text-xl text-red-700">Error: {error}</p>
      </section>
    );
  }

  if (bannerSlides.length === 0) {
    return (
      <section className="relative w-full h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-600">No banner slides available. Please add data to Firestore.</p>
      </section>
    );
  }

  // 4. current is implicitly typed as BannerSlide due to indexing bannerSlides array
  const current = bannerSlides[currentSlide];

  return (
    <section className="relative w-full h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={current.image}
          alt={current.title}
          layout="fill"
          objectFit="cover"
          priority // Prioritize loading for the main banner image
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      <div className="relative z-10 text-center text-white p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
          {current.title}{" "}
          <span className="text-blue-400">{current.highlight}</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-light max-w-2xl mx-auto drop-shadow">
          {current.description}
        </p>
        <div className="mt-8 space-x-4">
          {/* Add buttons or calls to action here, e.g. */}
          {/* <Button variant="primary">Learn More</Button>
          <Button variant="outline">Contact Us</Button> */}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 z-20 flex space-x-2">
        {bannerSlides.map((_slide, index) => ( // _slide to indicate parameter is unused
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-gray-400 hover:bg-gray-200"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}