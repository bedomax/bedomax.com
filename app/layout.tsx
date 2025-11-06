import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bedomax.com"
const siteName = "Bedo - Software Developer"
const siteDescription = "Personal website of Bedo - Software Developer, Entrepreneur, and Growth Hacker. Sharing projects, ideas, and everything that keeps me creating."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Software Developer",
    "Entrepreneur",
    "Growth Hacker",
    "Web Development",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Bedo",
    "bedomax",
  ],
  authors: [{ name: "Bedo", url: siteUrl }],
  creator: "Bedo",
  publisher: "Bedo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@bedomax",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Structured Data (JSON-LD) for SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bedo",
    url: siteUrl,
    jobTitle: "Software Developer",
    description: siteDescription,
    sameAs: [
      "https://github.com/bedomax",
      "https://linkedin.com/in/bedomax",
      "https://twitter.com/bedomax",
    ],
    image: `${siteUrl}/professional-headshot.png`,
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    author: {
      "@type": "Person",
      name: "Bedo",
    },
  }

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
