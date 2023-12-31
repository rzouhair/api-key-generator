import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from './GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

const name = 'Home'
export const title = 'Generate Random API Keys - Free Online Tool'
export const description = 'Need API keys quickly? Use our free generator to create unique keys instantly. No hassle, no cost, just secure authentication.'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL as string),
  alternates: {
    canonical: '/',
  },
  title,
  description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name,
    description,
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
