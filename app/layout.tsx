import type React from "react"
import type { Metadata } from "next"
import { Lato, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
  preload: true,
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bedomax.com"
const siteName = "Bedo - Software Engineer"
const siteDescription = "Personal website of Bedo - Software Engineer, Entrepreneur, and Growth Hacker. Sharing projects, ideas, and everything that keeps me creating."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Software Engineer",
    "Software Developer",
    "Entrepreneur",
    "Growth Hacker",
    "Web Development",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Ruby on Rails",
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
    locale: "en_US",
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
  // NOTE: no site-wide canonical here — Next.js metadata inheritance would make
  // every route canonicalize to the homepage. Each page declares its own.
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
    name: "Bedo Maximiliano Cáceres",
    alternateName: "Bedo",
    url: siteUrl,
    jobTitle: "Software Engineer",
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressCountry: "CL",
    },
    sameAs: [
      "https://github.com/bedomax",
      "https://www.linkedin.com/in/bedomax/",
      "https://x.com/bedomax",
      "https://instagram.com/bedomax",
    ],
    image: `${siteUrl}/images/about-avatar.png`,
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.variable} ${montserrat.variable} font-sans antialiased`}>
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
