import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, entrepreneurship, growth hacking, and the latest trends in technology.",
  openGraph: {
    title: "Blog | Bedo - Software Developer",
    description: "Read my thoughts on software development, entrepreneurship, and growth hacking.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Bedo - Software Developer",
    description: "Read my thoughts on software development, entrepreneurship, and growth hacking.",
  },
}

// This would typically come from a CMS or markdown files
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn how to build modern web applications with Next.js 14 and its new features.",
    date: "2024-01-15",
    slug: "getting-started-nextjs-14",
  },
  {
    id: 2,
    title: "Growth Hacking Strategies for Startups",
    excerpt: "Discover proven growth hacking techniques that can help your startup scale quickly.",
    date: "2024-01-10",
    slug: "growth-hacking-strategies",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
    date: "2024-01-05",
    slug: "future-web-development",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#3B5BDB] via-[#2B4BC0] to-[#1E3A8A] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2B4BC0] rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#1E3A8A] rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#2B4BC0] rounded-full opacity-25 blur-3xl" />
      </div>

      <Header />
      
      <main className="relative z-10 flex-1 px-8 py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-6xl font-extrabold mb-4 tracking-tight">Blog</h1>
          <p className="text-white/70 text-lg font-light mb-12 max-w-2xl">
            Thoughts, tutorials, and insights on software development, entrepreneurship, and technology.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-white/60 text-sm font-light mb-4">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                
                <h2 className="text-white text-3xl font-bold mb-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#F5C542] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-white/80 text-base font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#F5C542] hover:text-[#F5C542]/80 transition-colors text-sm font-medium"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm font-light">
              More articles coming soon...
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
