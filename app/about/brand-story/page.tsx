// app/about/brand-story/page.tsx
"use client"; // If you plan any client-side interactivity, otherwise remove this.

import Link from 'next/link';

// Metadata for Server Components. If this file remains a Client Component,
// consider moving metadata to a parent layout (e.g., app/about/layout.tsx).

// export const metadata = {
//   title: 'Brand Story - IT Spire',
//   description: 'Discover the founding principles, values, and milestones that shaped IT Spire.',
// };


export default function BrandStoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-10">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          The IT Spire Brand Story
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10 leading-relaxed">
          Every great company has a story, and IT Spire is no exception. Our brand is built on core principles of innovation, integrity, and a relentless pursuit of excellence. This is the narrative of how we came to be and what continues to inspire us.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
            The Genesis
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            IT Spire was born out of a simple yet profound realization: businesses, regardless of their size, needed reliable, creative, and forward-thinking digital partners. Our founder, **[Founder's Name/Brief Origin Story]**, envisioned a company that wouldn't just build software, but would build solutions that genuinely transform operations and accelerate growth. The initial spark came from identifying a gap in the market for quality, customer-centric digital services that combined technical prowess with strategic business understanding.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            The early days were about laying the foundation – building a team of passionate individuals who shared the vision, and establishing a culture of curiosity and continuous improvement. We focused on small projects, meticulously delivering value and building trust, one client at a time.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
            Milestones & Growth
          </h2>
          <ul className="list-disc list-inside text-gray-800 text-lg space-y-4 leading-relaxed">
            <li>**[2025]**: Launched our first major [type of project, e.g., e-commerce platform].</li>
            <li>**[2025]**: Expanded our team to include [number] specialized [roles, e.g., UI/UX designers].</li>
            <li>**[2025]**: Opened our new office in Ghaziabad, enhancing our collaborative environment.</li>
            <li>**[2025]**: Achieved [significant accomplishment, e.g., 98% client satisfaction rate].</li>
            <li>**[2025]**: Introduced [new service, e.g., AI-powered analytics] to our offerings.</li>
          </ul>
          <p className="text-lg text-gray-800 leading-relaxed mt-6">
            Each milestone represents a step forward in our commitment to innovation and excellence. We’re proud of our growth, but more so, we're proud of the lasting impact we've made on our clients' success stories.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">Innovation</h3>
              <p className="text-gray-700 text-base">
                We embrace new ideas and technologies to create forward-thinking solutions.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Integrity</h3>
              <p className="text-gray-700 text-base">
                We operate with honesty, transparency, and ethical conduct in all our dealings.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">Client Focus</h3>
              <p className="text-gray-700 text-base">
                Our clients' success is our priority; we tailor solutions to their unique needs.
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-pink-800 mb-2">Excellence</h3>
              <p className="text-gray-700 text-base">
                We strive for the highest quality in every project, constantly improving.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Collaboration</h3>
              <p className="text-gray-700 text-base">
                We believe in the power of teamwork, both internally and with our clients.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            For a quick overview, head back to our{' '}
            <Link href="/about/introduction" className="text-blue-600 hover:underline font-medium">
              Introduction page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}