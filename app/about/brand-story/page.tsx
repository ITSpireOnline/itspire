"use client";

import Link from "next/link";
import Image from "next/image";

export default function BrandStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-8 md:p-16">

        {/* Header */}
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-fadeIn">
          The IT Spire Brand Story
        </h1>
        <p className="text-lg text-gray-700 text-center mb-16 leading-relaxed animate-fadeIn delay-200">
          IT Spire was created with friendship, trust, and a shared vision. What started as an idea between three friends has grown into a technology brand focused on innovation, quality, and meaningful digital impact.
        </p>

        {/* Genesis */}
        <section className="mb-20 animate-fadeIn delay-400">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-4 border-blue-200 pb-2">
            How It All Started
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            IT Spire was founded by <strong>three friends</strong> who shared a passion for technology, design, and problem-solving. While working on different projects and learning from real-world challenges, they realized that many businesses struggled to find reliable and creative digital partners.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Combining their individual strengths—development, design, and strategy—they decided to collaborate and build something meaningful. Their goal was simple: create digital solutions that are powerful, user-friendly, and designed for long-term success.
          </p>
        </section>

        {/* Milestones */}
        <section className="mb-20 animate-fadeIn delay-600">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-4 border-blue-200 pb-2">
            Growth & Milestones
          </h2>
          <ul className="list-disc list-inside text-gray-800 text-lg space-y-4">
            <li><strong>2023</strong>: Three friends officially launched IT Spire.</li>
            <li><strong>2023</strong>: Successfully delivered our first client project.</li>
            <li><strong>2023</strong>: Expanded services to include web, app, and UI/UX design.</li>
            <li><strong>2023</strong>: Built a strong client base with high satisfaction.</li>
            <li><strong>2023</strong>: Established our workspace in Noida Sec-62.</li>
          </ul>
        </section>

        {/* Founder Cards */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-blue-700 mb-12 border-b-4 border-blue-200 pb-2 text-center">
            Meet the Founders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Sachin */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-xl p-6 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
                <Image src="/sachin.png" alt="Sachin Kumar" width={128} height={128} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Sachin Kumar</h3>
              <p className="text-sm text-blue-600 font-medium mb-2">Founder</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Managing operations at IT Spire while delivering reliable and scalable solutions using .NET technologies.
              </p>
            </div>

            {/* Gaurav */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl shadow-xl p-6 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
                <Image src="/gaurav-2.jpg" alt="Kumar Gaurav" width={128} height={128} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Kumar Gaurav</h3>
              <p className="text-sm text-blue-600 font-medium mb-2">Director</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Leading IT Spire with a focus on modern React development and high-quality, scalable web solutions.
              </p>
            </div>

            {/* Dharmandra */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl shadow-xl p-6 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
                <Image src="/dharm.jpg" alt="Dharmandra Kumar" width={128} height={128} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Dharmandra Kumar</h3>
              <p className="text-sm text-blue-600 font-medium mb-2">CEO</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Overseeing finances at IT Spire while optimizing digital presence and SEO strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-4 border-blue-200 pb-2 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300 text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Friendship & Trust</h3>
              <p className="text-gray-700">Our foundation is built on mutual respect and trust.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300 text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Quality First</h3>
              <p className="text-gray-700">We never compromise on quality, design, or performance.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300 text-center">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Client Success</h3>
              <p className="text-gray-700">Your success is our success—every project matters.</p>
            </div>
          </div>
        </section>

        {/* Footer Link */}
        <section className="text-center animate-fadeIn delay-800">
          <p className="text-lg text-gray-700">
            Want to know more? Visit our{" "}
            <Link href="/about/introduction" className="text-blue-600 hover:underline font-medium">
              Introduction page
            </Link>
            .
          </p>
        </section>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
