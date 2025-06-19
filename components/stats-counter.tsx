"use client"

import { useState, useEffect, useRef } from "react"

const stats = [
  { number: 5, label: "Mobile Apps", suffix: "+" },
  { number: 12, label: "Websites", suffix: "+" },
  { number: 100, label: "Happy Clients", suffix: "%" },
]

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

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < number) {
            return Math.min(prev + Math.ceil(number / 50), number)
          }
          return number
        })
      }, 50)

      return () => clearInterval(timer)
    }
  }, [isVisible, number])

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
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <CounterItem key={index} number={stat.number} label={stat.label} suffix={stat.suffix} />
          ))}
        </div>
      </div>
    </section>
  )
}
