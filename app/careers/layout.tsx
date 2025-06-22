// app/careers/layout.tsx
import Footer from '@/components/footer';
import type { Metadata } from 'next';

// Define your base URL for consistent absolute URLs in metadata
// This is crucial for Open Graph and Canonical URLs
const WEBSITE_HOST_URL = 'https://www.itspire.online'; // Replace with your actual website URL

export const metadata: Metadata = {

  title: {
    default: 'Careers at IT Spire', 
    template: '%s | IT Spire Careers', 
  },
  description: 'Explore rewarding job openings and internship opportunities at IT Spire. Join our innovative team and grow your career with us.',
  keywords: [
    'IT Spire careers',
    'tech jobs',
    'software engineering jobs',
    'IT internships',
    'developer jobs',
    'career opportunities',
    'job openings',
    'hiring',
    'tech company careers',
    'work at IT Spire',
  ],
  authors: [{ name: 'IT Spire Team' }],
  creator: 'IT Spire',
  publisher: 'IT Spire',

  // 2. Canonical URL:
  // Helps prevent duplicate content issues, especially important if you have
  // different URLs pointing to similar content (e.g., /careers and /jobs)
  metadataBase: new URL(WEBSITE_HOST_URL), // Set base URL for relative paths
  alternates: {
    canonical: `${WEBSITE_HOST_URL}/careers`,
  },

  // 3. Open Graph Metadata (for social media sharing):
  // When your page is shared on platforms like Facebook, LinkedIn, etc.
  openGraph: {
    title: 'Careers at IT Spire',
    description: 'Explore rewarding job openings and internship opportunities at IT Spire. Join our innovative team and grow your career with us.',
    url: `${WEBSITE_HOST_URL}/careers`,
    siteName: 'IT Spire',
    images: [
      {
        url: `${WEBSITE_HOST_URL}/images/og-careers.jpg`, // Replace with an actual OG image for careers
        width: 1200,
        height: 630,
        alt: 'IT Spire Careers - Join Our Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 4. Twitter Card Metadata:
  // For when your page is shared on Twitter
  // twitter: {
  //   card: 'summary_large_image',
  //   site: '@ITSpireOfficial', // Replace with your company's Twitter handle
  //   creator: '@ITSpireOfficial', // Replace with your company's Twitter handle
  //   title: 'Careers at IT Spire',
  //   description: 'Explore rewarding job openings and internship opportunities at IT Spire. Join our innovative team and grow your career with us.',
  //   images: [`${WEBSITE_HOST_URL}/images/twitter-careers.jpg`], // Replace with an actual Twitter image for careers
  // },

  // 5. Robots Meta Tag:
  // Tells search engine crawlers how to index and follow links on the page.
  // Generally, you want to index and follow for public pages like careers.
  robots: {
    index: true,
    follow: true,
    // You can be more specific for Googlebot if needed
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true, // Prevents images on this page from being indexed (optional)
      'max-snippet': -1, // Allows Google to show snippets of any length
      'max-video-preview': -1, // Allows Google to show video previews of any length
      'max-image-preview': 'large', // Allows Google to show large image previews
    },
  },

  // 6. Viewport:
  // Essential for responsive design, usually handled by Next.js defaults.
  // You can set it explicitly if you have specific needs.
  viewport: 'width=device-width, initial-scale=1',

  // 7. Theme Color:
  // For browser UI elements on mobile devices (e.g., address bar color).
  themeColor: '#ffffff', // Or your brand's primary color
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}