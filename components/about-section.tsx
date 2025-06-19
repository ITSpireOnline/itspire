"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Shield } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         {/* Image Column */}
<div className="relative w-fit">
  <Image
    src="/experiance.jpg?height=500&width=600"
    alt="About IT Spire"
    width={600}
    height={500}
    className="rounded-2xl shadow-2xl object-cover"
  />

  {/* Experience Badge inside image, bottom center */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
    <div className="bg-blue-600 text-white rounded-full w-44 h-44 flex flex-col items-center justify-center text-center shadow-xl border-4 border-white">
      <div className="text-4xl font-extrabold">2</div>
      <div className="text-sm px-3 mt-1 leading-tight">
        Years of Experience<br />in IT Services
      </div>
    </div>
  </div>
</div>


          {/* Content Column */}
          <div className="space-y-6">
            <div>
              <h4 className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
                Who We Are
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Trusted Partner for <span className="text-blue-600">IT Industry</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                IT Spire is a certified and award-winning IT company. Since 2023, we’ve been delivering top-notch IT
                solutions across Android, iOS, web development, and digital marketing.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Certified Company</h4>
                  <p className="text-gray-600">
                    Trusted and certified for quality, security, and speed—delivering business-focused IT solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Award Winning</h4>
                  <p className="text-gray-600">
                    Proud recipient of multiple industry awards for excellence in mobile, web, and digital innovation.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-base">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 text-base"
              >
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
