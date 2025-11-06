import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Bedo - Software Developer, Entrepreneur, and Growth Hacker. Discover my journey, skills, and passion for creating innovative solutions.",
  openGraph: {
    title: "About Me | Bedo - Software Developer",
    description: "Learn more about Bedo - Software Developer, Entrepreneur, and Growth Hacker.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me | Bedo - Software Developer",
    description: "Learn more about Bedo - Software Developer, Entrepreneur, and Growth Hacker.",
  },
}

export default function AboutPage() {
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
        <div className="max-w-4xl w-full">
          <h1 className="text-white text-6xl font-extrabold mb-8 tracking-tight">About Me</h1>
          
          <div className="space-y-8 text-white/90">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">Who I Am</h2>
              <p className="text-lg font-light leading-relaxed">
                Hey! I'm Bedo, a passionate Software Developer, Entrepreneur, and Growth Hacker. 
                I love building innovative solutions and turning ideas into reality through code.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">My Journey</h2>
              <p className="text-lg font-light leading-relaxed">
                My journey in tech started with curiosity and a drive to solve problems. 
                Over the years, I've worked on various projects, from web applications to 
                mobile solutions, always focusing on user experience and performance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#F5C542]">Frontend</h3>
                  <p className="text-base font-light">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#F5C542]">Backend</h3>
                  <p className="text-base font-light">Node.js, APIs, Databases</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#F5C542]">Tools</h3>
                  <p className="text-base font-light">Git, Docker, CI/CD, Cloud Services</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#F5C542]">Business</h3>
                  <p className="text-base font-light">Growth Hacking, Product Strategy, Marketing</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">What I Do</h2>
              <p className="text-lg font-light leading-relaxed">
                I create digital experiences that matter. Whether it's building a web application, 
                optimizing for growth, or helping startups scale, I'm always ready to take on new challenges 
                and learn something new.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
