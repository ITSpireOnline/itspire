// app/not-found.tsx
import Link from 'next/link';
import Image from 'next/image'; // Keep if you plan to use an image
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found - IT Spire',
  description: 'Oops! The page you are looking for could not be found. Please check the URL or return to the homepage.',
  robots: {
    index: false, // Important: Tell search engines NOT to index 404 pages
    follow: false,
  },
  // You might also want to set a canonical URL to your homepage here
  // alternates: {
  //   canonical: 'https://www.itspire.com/', // Replace with your actual homepage URL
  // },
  // Open Graph/Twitter meta can be inherited from the root layout,
  // or customized specifically for the 404 page if desired.
};

// not-found.tsx does not receive props like onConsultClick
// It is rendered by Next.js directly when a route is not found.
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 text-center">
      {/* Optional: Add a custom 404 image or illustration */}
      {/* <Image
        src="/images/404-illustration.svg" // Create a custom 404 illustration or icon
        alt="Page Not Found Illustration"
        width={400}
        height={300}
        className="mb-8"
      /> */}

      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-blue-600 mb-4 animate-bounce-slow">
        404
      </h1>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        We're sorry, but the page you requested could not be found. It might have been moved or deleted.
        Please check the URL or try navigating back to our homepage.
      </p>

      <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center">
        <Link 
          href="/" 
          passHref 
          className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <span className="mr-2">&larr;</span> Go to Homepage
        </Link>
        {/* Changed button to Link and pointed to a /contact-us page */}
        <Link 
          href="/contact-us" // Assuming you have or will create a /contact-us page
          passHref 
          className="group inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Contact Support <span className="ml-2">&rarr;</span>
        </Link>
      </div>

      <p className="mt-12 text-sm text-gray-500">
        If you believe this is an error, please reach out to us.
      </p>
    </div>
  );
}