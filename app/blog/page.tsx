import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, entrepreneurship, growth hacking, and the latest trends in technology.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Bedo - Software Engineer",
    description: "Read my thoughts on software development, entrepreneurship, and growth hacking.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Bedo - Software Engineer",
    description: "Read my thoughts on software development, entrepreneurship, and growth hacking.",
  },
}

export default async function BlogPage() {
  const blogPosts = await getAllPosts()
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-brand-500">
      <Header />

      <main className="relative z-10 flex-1 px-4 py-10 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-3 font-heading text-4xl font-bold tracking-tight text-white sm:mb-4 sm:text-5xl md:text-6xl">
            Blog
          </h1>
          <p className="mb-8 max-w-2xl text-base text-white/70 sm:mb-12 sm:text-lg">
            Thoughts, tutorials, and insights on software development, entrepreneurship, and technology.
          </p>

          <div className="space-y-6 sm:space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 sm:p-8"
              >
                <div className="mb-4 flex items-center gap-3 text-sm text-white/60">
                  <Calendar className="h-4 w-4 shrink-0" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <h2 className="mb-3 font-heading text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-brand-accent">
                    {post.title}
                  </Link>
                </h2>

                <p className="mb-6 text-sm leading-relaxed text-white/80 sm:text-base">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition-colors hover:text-brand-accent/80"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center sm:mt-12">
            <p className="text-sm text-white/60">More articles coming soon...</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
