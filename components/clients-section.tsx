"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const projectCards = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  image: `/projects/project${(i % 5) + 1}.jpg`, // project1.jpg to project5.jpg (repeat)
  description: "Live client project running successfully.",
}))

export default function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const scroll = () => {
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth / 2
      } else {
        container.scrollLeft -= 1 // 👈 scroll left instead of right
      }
    }

    const interval = setInterval(scroll, 20) // smooth scroll
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-white to-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-blue-600 font-semibold uppercase mb-2">Live Projects</h4>
          <h2 className="text-4xl font-bold text-gray-800">Client Projects in Action</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4">
            Real-time showcase of client work powered by our services.
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex w-max space-x-6 px-2"
            style={{ width: "max-content" }}
          >
            {[...projectCards, ...projectCards].map((project, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4"
              >
                <div className="relative w-full h-36 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
