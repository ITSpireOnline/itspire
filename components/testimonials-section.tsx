"use client"

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
    image: "/dharm.jpg",
    videoUrl: "/video1.mp4",
  },
  {
    id: 2,
    quote:
      "I am really impressed with their work. Looking for a long professional relationship.",
    name: "Sachin Kumar",
    position: "Client of Company",
    image: "/sachin.png",
    videoUrl: "/video1.mp4",
  },
  {
    id: 3,
    quote:
      "IT Support that I always recommend. From App to Website and Maintenance to Digital Marketing - everything handled smoothly.",
    name: "Kumar Gaurav",
    position: "Client of Company",
    image: "/gaurav.png",
    videoUrl: "/video1.mp4",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const testimonial = testimonials[current]

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

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
                unoptimized
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
            <video
              src={testimonial.videoUrl}
              controls
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl max-h-[500px] w-auto object-contain border border-gray-200"
            />
          </div>
        </div>
      </div>

      {/* Decorative Blurred Circles */}
      <div className="absolute top-10 right-10 w-36 h-36 bg-blue-200/40 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-indigo-200/40 rounded-full blur-3xl z-0" />
    </section>
  )
}
