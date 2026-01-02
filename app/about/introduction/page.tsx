// // app/about/introduction/page.tsx
// "use client"; // If you plan any client-side interactivity, otherwise remove this.

// import Link from 'next/link';

// // Metadata for Server Components. If this file remains a Client Component,
// // consider moving metadata to a parent layout (e.g., app/about/layout.tsx).
// // For now, we'll keep it commented out to avoid errors if "use client" is present.
// /*
// export const metadata = {
//   title: 'Introduction - About IT Spire',
//   description: 'Learn about the journey, mission, and vision of IT Spire.',
// };
// */

// export default function IntroductionPage() {
//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-10">
//         <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
//           Introduction to IT Spire
//         </h1>
//         <p className="text-lg text-gray-700 text-center mb-10 leading-relaxed">
//           Welcome to IT Spire, a dynamic and innovative technology company committed to transforming businesses through cutting-edge digital solutions. Founded in **[Year of Founding, e.g., 2018]**, IT Spire began with a clear vision: to empower organizations by leveraging the power of technology to drive growth, efficiency, and exceptional user experiences.
//         </p>

//         <section className="mb-12">
//           <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
//             Our Journey
//           </h2>
//           <p className="text-lg text-gray-800 leading-relaxed mb-4">
//             From humble beginnings, we've grown into a reputable firm serving diverse clients across various industries. Our journey is marked by continuous learning, adaptation to new technologies, and an unwavering focus on client success. We pride ourselves on building strong relationships and delivering solutions that not only meet but exceed expectations.
//           </p>
//           <p className="text-lg text-gray-800 leading-relaxed">
//             We started with a small team of passionate developers and designers, fueled by a shared desire to innovate. Through dedication and hard work, we expanded our services, expertise, and team, consistently staying ahead of the technological curve.
//           </p>
//         </section>

//         <section className="mb-12">
//           <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
//             Our Mission & Vision
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
//               <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Mission</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 To deliver innovative, high-quality, and scalable digital solutions that empower businesses to achieve their full potential in the ever-evolving digital landscape. We strive to be a trusted partner, providing strategic insights and technological excellence.
//               </p>
//             </div>
//             <div className="bg-green-50 p-6 rounded-lg shadow-sm">
//               <h3 className="text-xl font-semibold text-green-800 mb-3">Our Vision</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 To be a global leader in digital transformation, recognized for our commitment to innovation, client satisfaction, and fostering a culture of continuous growth and collaboration.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className="text-center">
//           <p className="text-lg text-gray-700 mb-6">
//             Explore more about our journey and the values that drive us by visiting our{' '}
//             <Link href="/about/brand-story" className="text-blue-600 hover:underline font-medium">
//               Brand Story
//             </Link>{' '}page.
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// }
"use client";

import Link from "next/link";

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-8 md:p-16">

        {/* Header */}
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 animate-fadeIn">
          Introduction to IT Spire
        </h1>
        <p className="text-lg text-gray-700 text-center mb-16 leading-relaxed animate-fadeIn delay-200">
          Welcome to IT Spire, a forward-thinking tech company built on **friendship, innovation, and trust**. Our goal is to empower businesses with digital solutions that drive growth, efficiency, and exceptional user experiences.
        </p>

        {/* Our Journey */}
        <section className="mb-20 animate-fadeIn delay-400">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-4 border-blue-200 pb-2">
            Our Journey
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            From a small team of three friends with complementary skills, we turned a shared vision into reality. Starting with web, app, and UI/UX projects, we steadily grew our expertise, client base, and team.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Our journey is driven by curiosity, collaboration, and a passion for delivering solutions that genuinely help businesses thrive in a fast-changing digital world.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-24 animate-fadeIn delay-600">
          <h2 className="text-3xl font-bold text-blue-700 mb-12 border-b-4 border-blue-200 pb-2 text-center">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300 text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver innovative, high-quality, and scalable digital solutions that empower businesses to reach their full potential. We aim to be a trusted partner for every client, combining technology and strategy.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300 text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a global leader in digital transformation, recognized for innovation, client satisfaction, and a culture that encourages growth, learning, and collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Link */}
        <section className="text-center animate-fadeIn delay-800">
          <p className="text-lg text-gray-700">
            Discover more about the story behind IT Spire and our values on the{' '}
            <Link href="/about/brand-story" className="text-blue-600 hover:underline font-medium">
              Brand Story
            </Link>{' '}
            page.
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
