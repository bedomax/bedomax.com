import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, ArrowLeft, Tag } from "lucide-react"
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.image ? [post.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bedomax.com"
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${siteUrl}/blog/${slug}`,
    ...(post.image && { image: post.image }),
    author: {
      "@type": "Person",
      name: post.author || "Bedo",
      url: siteUrl,
    },
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-brand-500">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <Header />

      <main className="relative z-10 flex-1 px-4 py-10 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <article className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white sm:mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <header className="mb-8 sm:mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-white/60 sm:mb-6">
              <Calendar className="h-4 w-4 shrink-0" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.author && (
                <>
                  <span className="text-white/40">•</span>
                  <span>{post.author}</span>
                </>
              )}
            </div>

            <h1 className="mb-4 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:mb-6 sm:text-5xl md:text-6xl">
              {post.title}
            </h1>

            <p className="text-base leading-relaxed text-white/80 sm:text-xl">{post.excerpt}</p>

            {post.tags && post.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-6">
                <Tag className="h-4 w-4 text-white/60" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/70 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div
            className="prose prose-invert prose-base sm:prose-lg max-w-none
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-white
              prose-p:leading-relaxed prose-p:text-white/90
              prose-a:text-brand-accent prose-a:no-underline hover:prose-a:text-brand-accent/80
              prose-strong:font-semibold prose-strong:text-white
              prose-code:rounded prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-code:text-brand-accent
              prose-pre:border prose-pre:border-white/20 prose-pre:bg-white/10
              prose-ul:text-white/90 prose-ol:text-white/90
              prose-li:text-white/90
              prose-blockquote:border-l-brand-accent prose-blockquote:text-white/80
              prose-img:rounded-lg prose-img:border prose-img:border-white/20"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </article>
      </main>

      <Footer />
    </div>
  )
}
