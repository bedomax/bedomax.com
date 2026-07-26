import { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: {
    absolute: "Bedo - Software Engineer, Entrepreneur & Growth Hacker",
  },
  description: "Welcome to Bedo's personal website - Software Engineer, Entrepreneur, and Growth Hacker building apps and platforms. Discover my projects, stories, and photography.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bedo - Software Engineer, Entrepreneur & Growth Hacker",
    description: "Software Engineer building apps and platforms. Discover my projects, stories, and photography.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedo - Software Engineer, Entrepreneur & Growth Hacker",
    description: "Software Engineer building apps and platforms. Discover my projects, stories, and photography.",
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
