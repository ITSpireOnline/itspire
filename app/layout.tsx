
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import HeaderAndPopupWrapper from '@/components/HeaderAndPopupWrapper'; // <--- NEW IMPORT

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: {
    default: 'IT Spire Online - Innovating Digital Experiences',
    template: '%s | IT Spire Online',
  },
  description: 'IT Spire Online specializes in innovative web development, mobile app creation, UI/UX design, and digital marketing solutions to elevate your business online. Get cutting-edge technology and creative expertise.',
  keywords: [
    'IT Spire',
    'itspire',
    'IT Spire Online',
    'web development',
    'mobile app development',
    'UI UX design',
    'digital marketing',
    'SEO services',
    'custom software',
    'tech solutions',
    'IT services',
    'India',
    'Ghaziabad', // Added based on context
    'Uttar Pradesh', // Added based on context
  ],
  alternates: {
    canonical: 'https://www.itspire.online/', // Added trailing slash for consistency
  },
  openGraph: {
    title: 'IT Spire Online - Innovating Digital Experiences',
    description: 'IT Spire Online specializes in innovative web development, mobile app creation, UI/UX design, and digital marketing solutions to elevate your business online.',
    url: 'https://www.itspire.online/',
    siteName: 'IT Spire Online',
    images: [
      {
        url: 'https://www.itspire.online/sachin.png', // Assuming 'sachin.png' is publicly accessible
        width: 1200,
        height: 630,
        alt: 'IT Spire Online - Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Spire Online - Innovating Digital Experiences',
    description: 'IT Spire Online specializes in innovative web development, mobile app creation, UI/UX design, and digital marketing solutions to elevate your business online.',
    images: ['https://www.itspire.online/sachin.png'], // Using the same image for consistency
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  creator: 'IT Spire Online',
  publisher: 'IT Spire Online',
};

// 2. Define your viewport object as a SEPARATE top-level export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // You can add other viewport-related properties here if needed,
  // for example: themeColor, colorScheme, userScalable, etc.
  // themeColor: '#FFFFFF',
  // colorScheme: 'light',
  // userScalable: false,
};

// --- Your RootLayout component ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderAndPopupWrapper />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}