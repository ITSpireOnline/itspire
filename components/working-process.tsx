import Image from "next/image"
import { CheckCircle, BrainCircuit, Rocket, Wrench } from "lucide-react"

export default function WorkingProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-300 to-gray-100">
      {/* Section Header */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Process</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">How We Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We build innovative, user-focused websites that combine creativity, functionality, and performance to ensure business success.
          </p>
        </div>
      </div>

      {/* Full Width Image */}
      <div className="w-[75%] mx-auto">
        <Image
          src="/working-process.svg"
          alt="Working Process Illustration"
          width={1200}
          height={500}
          className="rounded-lg  w-full h-auto object-contain"
        />
      </div>
    </section>
  )
}
