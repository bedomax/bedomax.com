import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#3B5BDB] via-[#2B4BC0] to-[#1E3A8A] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2B4BC0] rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#1E3A8A] rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#2B4BC0] rounded-full opacity-25 blur-3xl" />
      </div>

      <Header />
      <Hero />
      <Footer />
    </div>
  )
}
