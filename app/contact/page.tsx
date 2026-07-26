import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MessageSquare, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bedo. Whether you have a project in mind, a question, or just want to connect, I'd love to hear from you.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Bedo - Software Engineer",
    description: "Get in touch with Bedo. Whether you have a project in mind or just want to connect, I'd love to hear from you.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Bedo - Software Engineer",
    description: "Get in touch with Bedo. Whether you have a project in mind or just want to connect, I'd love to hear from you.",
  },
}

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-brand-500">
      <Header />

      <main className="relative z-10 flex flex-1 items-start justify-center px-4 py-10 sm:px-6 sm:py-16 md:items-center md:px-8 md:py-20">
        <div className="w-full max-w-2xl">
          <h1 className="mb-3 font-heading text-4xl font-bold tracking-tight text-white sm:mb-4 sm:text-5xl md:text-6xl">
            Get In Touch
          </h1>
          <p className="mb-8 max-w-xl text-base text-white/70 sm:mb-12 sm:text-lg">
            Whether you have a project in mind, a question, or just want to connect, I&apos;d love to hear from you.
            Let&apos;s build something amazing together.
          </p>

          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <a
                href="mailto:i@bedomax.com"
                className="flex items-center gap-4 rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent/20">
                  <Mail className="h-6 w-6 text-brand-accent" />
                </div>
                <div>
                  <h2 className="mb-1 text-lg font-semibold text-white">Email</h2>
                  <p className="text-sm text-white/70">i@bedomax.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/bedomax/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent/20">
                  <MessageSquare className="h-6 w-6 text-brand-accent" />
                </div>
                <div>
                  <h2 className="mb-1 text-lg font-semibold text-white">LinkedIn</h2>
                  <p className="text-sm text-white/70">Connect with me</p>
                </div>
              </a>
            </div>

            <form className="space-y-5 rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur-sm sm:space-y-6 sm:p-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-accent px-6 py-3 font-semibold text-brand-navy transition-colors hover:bg-brand-accent/90"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>

            <p className="text-center text-sm text-white/60">
              I typically respond within 24-48 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
