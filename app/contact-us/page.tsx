// app/contact-us/page.tsx
"use client"; // This page needs to be a client component because it renders an interactive form

// Import the correct component. If it's a full-page form, consider renaming it from "ContactFormPopup"
// to something like "ContactPageForm" for clarity, but I'll use your provided name for now.
import ContactFormPopup from "@/components/ContactFormPopup"; // Using your provided component name
import Footer from "@/components/footer";

// Note on Metadata in Client Components:
// For client components (like this page.tsx), static `metadata` exports are ignored by Next.js.
// Metadata should be defined in a parent Server Component layout (e.g., app/layout.tsx, or app/contact-us/layout.tsx if you create one).
// I've commented out the metadata block as a reminder.
/*
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact Us - IT Spire',
  description: 'Get in touch with IT Spire for inquiries, support, or partnership opportunities.',
  // ... other SEO properties like keywords, openGraph, etc.
};
*/

export default function ContactUsPage() {
  // onConsultClick is NOT available here as a prop.
  // This page is reached by direct navigation, so no need for a button to "open" the form.

  return (
    <div>
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We'd love to hear from you! Fill out the form below or reach us directly.
            {/* The button with onConsultClick is removed because it's not a valid prop here */}
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 lg:p-10">
          {/* Render your form component directly.
              If ContactFormPopup has an `isOpen` prop, you'd likely set it to true here,
              or if it's just the form itself, it won't need such a prop.
              Assuming it's just the form, no props related to opening/closing are needed for this page.
          */}
        </div>

        {/* Optional: Add direct contact info */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Ways to Connect</h3>
          <p className="text-lg text-gray-700">
            Email: <a href="mailto:itspireonline@gmail.com" className="text-blue-600 hover:underline">itspireonline@gmail.com</a>
          </p>
          <p className="text-lg text-gray-700 mt-2">
            Phone: <a href="tel:+918873681868" className="text-blue-600 hover:underline">+91 887 368 1868</a> {/* Replace with actual phone number */}
          </p>
          <p className="text-lg text-gray-700 mt-2">
            Address: Sector 59  IT Spire Avenue, Noida, UttarPradesh, India
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}