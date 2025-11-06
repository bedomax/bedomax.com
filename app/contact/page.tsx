import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MessageSquare, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bedo. Whether you have a project in mind, a question, or just want to connect, I'd love to hear from you.",
  openGraph: {
    title: "Contact | Bedo - Software Developer",
    description: "Get in touch with Bedo. Whether you have a project in mind or just want to connect, I'd love to hear from you.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Bedo - Software Developer",
    description: "Get in touch with Bedo. Whether you have a project in mind or just want to connect, I'd love to hear from you.",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#3B5BDB] via-[#2B4BC0] to-[#1E3A8A] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2B4BC0] rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#1E3A8A] rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#2B4BC0] rounded-full opacity-25 blur-3xl" />
      </div>

      <Header />
      
      <main className="relative z-10 flex-1 flex items-center justify-center px-8 py-32">
        <div className="max-w-2xl w-full">
          <h1 className="text-white text-6xl font-extrabold mb-4 tracking-tight">Get In Touch</h1>
          <p className="text-white/70 text-lg font-light mb-12 max-w-xl">
            Whether you have a project in mind, a question, or just want to connect, 
            I'd love to hear from you. Let's build something amazing together.
          </p>

          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:hello@bedomax.com"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#F5C542]/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#F5C542]" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-1">Email</h3>
                  <p className="text-white/70 text-sm font-light">hello@bedomax.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#F5C542]/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[#F5C542]" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-1">LinkedIn</h3>
                  <p className="text-white/70 text-sm font-light">Connect with me</p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <form className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-white text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F5C542] focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-white text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F5C542] focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-white text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F5C542] focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F5C542] text-[#1E3A8A] px-6 py-3 rounded-lg font-semibold hover:bg-[#F5C542]/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>

            <p className="text-white/60 text-sm font-light text-center">
              I typically respond within 24-48 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
