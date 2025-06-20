"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"

export default function FloatingButtons() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <>
      {/* Desktop WhatsApp Float */}
      {!isMobile && (
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            href="https://api.whatsapp.com/send/?phone=919958663840"
            target="_blank"
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-6 h-6" />
          </Link>
        </div>
      )}

      {/* Mobile Fixed Buttons */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-3">
          <div className="flex gap-3">
            <Link
              href="tel:+91-887-368-1868"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              CALL US
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=918873681868&text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%2E"
              target="_blank"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WHATSAPP
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
