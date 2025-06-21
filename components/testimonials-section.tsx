// components/testimonials-section.tsx
"use client" // This component uses useState and useEffect, so "use client" is necessary

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "When I decided to start my business, I had no idea where to begin. The Web developed by ITSpire groomed my business. Very professional and creative.",
    name: "Dharmendra Kumar",
    position: "Client of Company",
    image: "/dharm.jpg", // Make sure this path is correct and accessible in `public`
    videoUrl: "/video1.mp4", // Make sure this path is correct and accessible in `public`
  },
  {
    id: 2,
    quote:
      "I am really impressed with their work. Looking for a long professional relationship.",
    name: "Sachin Kumar",
    position: "Client of Company",
    image: "/sachin.png", // Make sure this path is correct and accessible in `public`
    videoUrl: "/video1.mp4", // Using the same video for all for now, consider unique videos
  },
  {
    id: 3,
    quote:
      "IT Support that I always recommend. From App to Website and Maintenance to Digital Marketing - everything handled smoothly.",
    name: "Kumar Gaurav",
    position: "Client of Company",
    image: "/gaurav.png", // Make sure this path is correct and accessible in `public`
    videoUrl: "/video1.mp4", // Using the same video for all for now
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  // State to control client-side rendering of the video
  const [hasMounted, setHasMounted] = useState(false); // <--- NEW STATE

  const testimonial = testimonials[current]

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    // Set hasMounted to true after the component mounts on the client side
    setHasMounted(true); // <--- SET TO TRUE ON MOUNT

    // Auto-advance interval
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(interval)
  }, []) // Empty dependency array means this runs once on mount

  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 via-white to-indigo-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
           <h4 className="text-indigo-600 font-semibold text-xl md:text-2xl tracking-widest uppercase">
              Testimonials
          </h4>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mt-4">
              What Our Clients Say
          </h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Testimonial Card */}
          <div className="bg-white p-10 rounded-3xl shadow-xl relative z-10 space-y-6">
            <blockquote className="text-xl md:text-2xl text-gray-700 font-medium italic leading-relaxed">
              “{testimonial.quote}”
            </blockquote>

            {/* Profile Info */}
            <div className="flex items-center gap-4 pt-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full object-cover border-2 border-indigo-500 w-[60px] h-[60px]"
                unoptimized // Use unoptimized if these are small profile pics and you don't want Next.js processing
              />
              <div>
                <p className="text-base font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center items-center gap-6 pt-4">
              <Button
                onClick={prev}
                className="bg-gray-100 hover:bg-indigo-100 p-2 rounded-full shadow-sm transition"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === current ? "bg-indigo-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <Button
                onClick={next}
                className="bg-gray-100 hover:bg-indigo-100 p-2 rounded-full shadow-sm transition"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </Button>
            </div>
          </div>

          {/* Right - Video (Preserve size & ratio) */}
          <div className="bg-white rounded-3xl p-3 shadow-2xl w-full flex justify-center items-center">
            {/* Conditionally render the video only if hasMounted is true */}
            {hasMounted ? ( // <--- CONDITIONAL RENDERING
              <video
                key={testimonial.id} // Important for React to re-render video on testimonial change
                src={testimonial.videoUrl}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl max-h-[500px] w-auto object-contain border border-gray-200"
              />
            ) : (
              // Placeholder for server rendering and initial client load
              <div className="w-full h-[300px] md:h-[500px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
                <span className="text-lg">Loading video...</span>
                {/* You could add an image thumbnail here if available */}
                {/* <Image src={testimonial.thumbnailUrl} alt="Video thumbnail" width={500} height={300} /> */}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Blurred Circles */}
      <div className="absolute top-10 right-10 w-36 h-36 bg-blue-200/40 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-indigo-200/40 rounded-full blur-3xl z-0" />
    </section>
  )
}