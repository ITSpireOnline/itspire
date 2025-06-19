import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IT-Spire-Online',
  description: 'IT-Spire-Online',
  generator: 'IT-Spire-Online',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
