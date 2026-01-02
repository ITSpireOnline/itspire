// app/careers/internship/page.tsx
"use client"; // <-- Keep this, as you need interactivity

import Link from 'next/link';
import { Mail, Briefcase, MapPin } from 'lucide-react'; // Icons for better UI

// REMOVED: export const metadata = {...};
// You cannot export metadata from a Client Component.

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-10">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 animate-fadeIn">
          Internship Opportunities
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10 leading-relaxed">
          At IT Spire, we help students and fresh graduates turn their knowledge into real skills. Our internship programs focus on practical learning, real projects, and industry exposure to prepare you for a successful career.        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
            Why Choose an Internship at IT Spire?
          </h2>
          <ul className="space-y-4 text-gray-800 text-lg">
            <li className="flex items-start gap-3">
              <Briefcase className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <span>
                <b>Hands-on Experience:</b> Work on real-time projects used by actual clients.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <span>
                <b>Expert Guidance:</b> Get mentored by experienced developers and industry professionals.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <span>
                <b>Skill Enhancement:</b> Improve your technical abilities and professional communication skills.
                </span>
            </li>
            <li className="flex items-start gap-3">
              <Briefcase className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <span>
                <b>Industry Exposure: </b>Understand real company workflows and development standards. </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <span>
               <b>Career Opportunities:</b> Top-performing interns may receive full-time job offers
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
            Available Internship Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Internship Program Card 1 */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Web Development Intern</h3>
              <p className="text-gray-700 text-base mb-4">
                Learn modern web technologies (React, Next.js, Node.js) by contributing to our web applications.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                <li>Duration: 3-6 months</li>
                <li>Location: Ghaziabad, Uttar Pradesh (Hybrid/On-site)</li>
                <li>Stipend: Performance-based</li>
              </ul>
              <button
                onClick={() => alert("Application for Web Development Internships coming soon!")}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply Now (Coming Soon)
              </button>
            </div>

            {/* Internship Program Card 2 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-2">UI/UX Design Intern</h3>
              <p className="text-gray-700 text-base mb-4">
                Develop your design skills by creating intuitive and beautiful user interfaces and experiences.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                <li>Duration: 3-6 months</li>
                <li>Location: Ghaziabad, Uttar Pradesh (Hybrid/On-site)</li>
                <li>Stipend: Performance-based</li>
              </ul>
              <button
                onClick={() => alert("Application for UI/UX Design Internships coming soon!")}
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                Apply Now (Coming Soon)
              </button>
            </div>

            {/* You can add more internship program cards here */}
            {/* Internship Program Card 3 */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Mobile App Development Intern</h3>
              <p className="text-gray-700 text-base mb-4">
                Dive into mobile development (React Native/Flutter) and build cross-platform applications.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                <li>Duration: 3-6 months</li>
                <li>Location: Ghaziabad, Uttar Pradesh (Hybrid/On-site)</li>
                <li>Stipend: Performance-based</li>
              </ul>
              <button
                onClick={() => alert("Application for Mobile App Development Internships coming soon!")}
                className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Apply Now (Coming Soon)
              </button>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-lg text-gray-700 mb-6">
            Internship applications are currently being processed. Please check back soon for our official application portal!
          </p>
          <div className="flex justify-center items-center gap-4">
            <Mail className="w-7 h-7 text-blue-600" />
            <a
              href="mailto:itspireonline@gmail.com"
              className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
            >
              itspireonline@gmail.com
            </a>
          </div>
          <p className="mt-8 text-gray-600 text-base">
            For general career inquiries, you can also visit our{' '}
            <Link href="/careers/job-opening" className="text-blue-600 hover:underline">
              Job Opening page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}