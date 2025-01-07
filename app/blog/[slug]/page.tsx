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
    openGraph: {
      title: post.title,
      description: post.excerpt,
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
        <article className="max-w-4xl mx-auto">
          {/* Back to blog link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm font-light"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          {/* Post header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 text-white/60 text-sm font-light mb-6">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("es-ES", {
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

            <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-white/80 text-xl font-light leading-relaxed">{post.excerpt}</p>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-2 mt-6 flex-wrap">
                <Tag className="w-4 h-4 text-white/60" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/70 text-sm font-light border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Post content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-p:text-white/90 prose-p:font-light prose-p:leading-relaxed
              prose-a:text-[#F5C542] prose-a:no-underline hover:prose-a:text-[#F5C542]/80
              prose-strong:text-white prose-strong:font-semibold
              prose-code:text-[#F5C542] prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-white/10 prose-pre:border prose-pre:border-white/20
              prose-ul:text-white/90 prose-ol:text-white/90
              prose-li:text-white/90 prose-li:font-light
              prose-blockquote:text-white/80 prose-blockquote:border-l-[#F5C542]
              prose-img:rounded-lg prose-img:border prose-img:border-white/20"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </article>
      </main>

      <Footer />
    </div>
  )
}
