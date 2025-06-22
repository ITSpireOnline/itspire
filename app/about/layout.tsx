// app/about/layout.tsx
import Footer from '@/components/footer';
import type { Metadata } from 'next';

// Define your base URL for consistent absolute URLs in metadata
// Replace with your actual website URL
const WEBSITE_HOST_URL = 'https://www.itspire.online';

export const metadata: Metadata = {
  // 1. Basic Metadata:
  title: {
    default: 'About Us - IT Spire', // Default title for about section and nested pages
    template: '%s | About IT Spire', // Template for titles of nested about pages
  },
  description: 'Learn about IT Spire\'s mission, vision, values, and brand story. Discover who we are and what drives us to deliver innovative digital solutions.',
  keywords: [
    'IT Spire about us',
    'IT Spire mission',
    'IT Spire vision',
    'IT Spire values',
    'IT Spire history',
    'tech company background',
    'digital solutions company',
    'company profile',
  ],
  authors: [{ name: 'IT Spire Team' }],
  creator: 'IT Spire',
  publisher: 'IT Spire',

  // 2. Canonical URL:
  metadataBase: new URL(WEBSITE_HOST_URL), // Set base URL for relative paths
  alternates: {
    canonical: `${WEBSITE_HOST_URL}/about/introduction`, // Canonical URL for the main About Us section
  },

  // 3. Open Graph Metadata (for social media sharing):
  openGraph: {
    title: 'About Us - IT Spire',
    description: 'Learn about IT Spire\'s mission, vision, values, and brand story. Discover who we are and what drives us.',
    url: `${WEBSITE_HOST_URL}/about`,
    siteName: 'IT Spire',
    images: [
      {
        url: `${WEBSITE_HOST_URL}/images/og-about.jpg`, // Replace with an actual OG image for About Us
        width: 1200,
        height: 630,
        alt: 'About IT Spire - Our Story',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 4. Twitter Card Metadata:
//   twitter: {
//     card: 'summary_large_image',
//     site: '@ITSpireOfficial', // Replace with your company's Twitter handle
//     creator: '@ITSpireOfficial', // Replace with your company's Twitter handle
//     title: 'About Us - IT Spire',
//     description: 'Learn about IT Spire\'s mission, vision, values, and brand story. Discover who we are and what drives us.',
//     images: [`${WEBSITE_HOST_URL}/images/twitter-about.jpg`], // Replace with an actual Twitter image for About Us
//   },

  // 5. Robots Meta Tag:
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },

  // 6. Viewport:
  viewport: 'width=device-width, initial-scale=1',

  // 7. Theme Color:
  themeColor: '#ffffff', // Or your brand's primary color
};

export default function AboutLayout({
  children, // This prop represents the child pages (e.g., introduction/page.tsx, brand-story/page.tsx)
}: {
  children: React.ReactNode;
}) {
  return (
    // You can add shared UI elements here that wrap all "About Us" pages
    // For example, a shared sidebar, header, or footer specific to this section.
    // For now, it simply renders the children directly.
    <div className="relative"> {/* Add a div or fragment for layout */}
      {children}
      <Footer />
    </div>
  );
}