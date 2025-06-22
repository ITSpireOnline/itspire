// app/careers/job-opening/page.tsx
"use client";

import Link from 'next/link';
// Replaced DesignServices with Palette
import { Mail, Briefcase, Users, Code, TrendingUp, Palette } from 'lucide-react';

export default function JobOpeningPage() {
  const handleApplyClick = (jobTitle: string) => {
    alert(`Thank you for your interest in the ${jobTitle} position! Our application portal will be live soon. Please check back!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-10">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          Current Job Openings
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10 leading-relaxed">
          Join IT Spire and be a part of a dynamic team dedicated to innovation and excellence. We're always looking for passionate individuals who are ready to make a significant impact.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
            Vacancies at IT Spire
          </h2>

          {/* Job Listing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Job Card 1: Senior Web Developer */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <Code className="w-5 h-5" /> Senior Web Developer
              </h3>
              <p className="text-gray-700 text-base mb-4">
                We're seeking an experienced Web Developer with strong React.js and Next.js skills to lead our cutting-edge projects.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                <li>Experience: 3-5 years</li>
                <li>Location: Ghaziabad, Uttar Pradesh (Hybrid)</li>
                <li>Key Skills: React, Next.js, Node.js, MongoDB</li>
              </ul>
              <button
                onClick={() => handleApplyClick("Senior Web Developer")}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto"
              >
                Apply Now (Coming Soon)
              </button>
            </div>

            {/* Job Card 2: UI/UX Designer */}
            <div className="bg-green-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-2 flex items-center gap-2">
                <Palette className="w-5 h-5" /> UI/UX Designer {/* Changed from DesignServices to Palette */}
              </h3>
              <p className="text-gray-700 text-base mb-4">
                Passionate about creating intuitive and visually stunning user experiences? Join our design team!
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                <li>Experience: 2-4 years</li>
                <li>Location: Ghaziabad, Uttar Pradesh (On-site)</li>
                <li>Key Skills: Figma, Sketch, Adobe XD, Prototyping</li>
              </ul>
              <button
                onClick={() => handleApplyClick("UI/UX Designer")}
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors w-full md:w-auto"
              >
                Apply Now (Coming Soon)
              </button>
            </div>

            {/* Job Card 3: Digital Marketing Specialist */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-purple-800 mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> Digital Marketing Specialist
              </h3>
              <p className="text-gray-700 text-base mb-4">
                Drive our online presence! We're looking for an SEO and content marketing expert.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                <li>Experience: 1-3 years</li>
                <li>Location: Ghaziabad, Uttar Pradesh (Remote/Hybrid)</li>
                <li>Key Skills: SEO, SEM, Content Marketing, Social Media</li>
              </ul>
              <button
                onClick={() => handleApplyClick("Digital Marketing Specialist")}
                className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors w-full md:w-auto"
              >
                Apply Now (Coming Soon)
              </button>
            </div>

            {/* Job Card 4: Junior Software Tester */}
            <div className="bg-red-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-red-800 mb-2 flex items-center gap-2">
                <Briefcase className="w-5 h-5" /> Junior Software Tester
              </h3>
              <p className="text-gray-700 text-base mb-4">
                Ensure the quality of our products. Perfect for freshers eager to start in QA.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                <li>Experience: 0-1 year</li>
                <li>Location: Ghaziabad, Uttar Pradesh (On-site)</li>
                <li>Key Skills: Manual Testing, Test Cases, Bug Reporting</li>
              </ul>
              <button
                onClick={() => handleApplyClick("Junior Software Tester")}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors w-full md:w-auto"
              >
                Apply Now (Coming Soon)
              </button>
            </div>

          </div>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Didn't Find Your Role?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Even if you don't see an open position that matches your skills, we're always interested in connecting with talented individuals. Send us your resume!
          </p>
          <div className="flex justify-center items-center gap-4 mb-4">
            <Mail className="w-7 h-7 text-blue-600" />
            <a
              href="mailto:itspireonline@gmail.com" // Replace with your actual careers email
              className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
            >
              itspireonline@gmail.com
            </a>
          </div>
          <p className="mt-8 text-gray-600 text-base">
            Looking for a learning opportunity? Check out our{' '}
            <Link href="/careers/internship" className="text-blue-600 hover:underline">
              Internship Programs
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}