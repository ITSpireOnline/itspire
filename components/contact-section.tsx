"use client"

import { useState } from "react"
import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="flex justify-center mt-10 lg:mt-0">
            <Image
              src="/customer-support-team.jpg"
              alt="Customer Support Team"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl object-cover"
              priority
            />
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Let’s Talk
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl">
              Fill out the form and our team will connect with you shortly to understand your needs.
            </p>

            <Card className="shadow-2xl border border-gray-200">
              <CardContent className="p-8 md:p-10 bg-white rounded-2xl space-y-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="text-base"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="text-base"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="text-base"
                  />
                  <Textarea
                    name="message"
                    placeholder="Tell us more about your project*"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="text-base"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
