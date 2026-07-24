import { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Bedo's personal website - Software Developer, Entrepreneur, and Growth Hacker. Discover my projects, ideas, and everything that keeps me creating.",
  openGraph: {
    title: "Bedo - Software Developer",
    description: "Welcome to Bedo's personal website - Software Developer, Entrepreneur, and Growth Hacker.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedo - Software Developer",
    description: "Welcome to Bedo's personal website - Software Developer, Entrepreneur, and Growth Hacker.",
  },
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-brand-500">
      <Image
        src="/images/hero-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover"
        aria-hidden="true"
      />

      <Header />
      <Hero />
      <Footer />
    </div>
  )
}
