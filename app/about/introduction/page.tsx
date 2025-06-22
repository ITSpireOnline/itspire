// app/about/introduction/page.tsx
"use client"; // If you plan any client-side interactivity, otherwise remove this.

import Link from 'next/link';

// Metadata for Server Components. If this file remains a Client Component,
// consider moving metadata to a parent layout (e.g., app/about/layout.tsx).
// For now, we'll keep it commented out to avoid errors if "use client" is present.
/*
export const metadata = {
  title: 'Introduction - About IT Spire',
  description: 'Learn about the journey, mission, and vision of IT Spire.',
};
*/

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-10">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          Introduction to IT Spire
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10 leading-relaxed">
          Welcome to IT Spire, a dynamic and innovative technology company committed to transforming businesses through cutting-edge digital solutions. Founded in **[Year of Founding, e.g., 2018]**, IT Spire began with a clear vision: to empower organizations by leveraging the power of technology to drive growth, efficiency, and exceptional user experiences.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
            Our Journey
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            From humble beginnings, we've grown into a reputable firm serving diverse clients across various industries. Our journey is marked by continuous learning, adaptation to new technologies, and an unwavering focus on client success. We pride ourselves on building strong relationships and delivering solutions that not only meet but exceed expectations.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            We started with a small team of passionate developers and designers, fueled by a shared desire to innovate. Through dedication and hard work, we expanded our services, expertise, and team, consistently staying ahead of the technological curve.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver innovative, high-quality, and scalable digital solutions that empower businesses to achieve their full potential in the ever-evolving digital landscape. We strive to be a trusted partner, providing strategic insights and technological excellence.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a global leader in digital transformation, recognized for our commitment to innovation, client satisfaction, and fostering a culture of continuous growth and collaboration.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Explore more about our journey and the values that drive us by visiting our{' '}
            <Link href="/about/brand-story" className="text-blue-600 hover:underline font-medium">
              Brand Story
            </Link>{' '}page.
          </p>
        </section>
      </div>
    </div>
  );
}