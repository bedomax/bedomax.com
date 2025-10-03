import { Instagram, Facebook, Linkedin, Github, Music, Smile } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const socialLinks = [
    { name: "INSTAGRAM", icon: Instagram, href: "https://instagram.com" },
    { name: "X", icon: null, href: "https://x.com" },
    { name: "FACEBOOK", icon: Facebook, href: "https://facebook.com" },
    { name: "LINKEDIN", icon: Linkedin, href: "https://linkedin.com" },
    { name: "GITHUB", icon: Github, href: "https://github.com" },
    { name: "SPOTIFY", icon: Music, href: "https://spotify.com" },
  ]

  return (
    <footer className="relative z-10 bg-[#1E3A8A] px-8 py-6">
      <div className="flex items-center justify-between">
        {/* Profile Image */}
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
          <Image src="/professional-headshot.png" alt="Profile" width={64} height={64} className="object-cover" />
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 text-xs font-light tracking-wide hover:text-white transition-colors flex items-center gap-2"
            >
              {link.icon && <link.icon className="w-4 h-4" />}
              {link.name === "X" && <span className="text-sm font-semibold">𝕏</span>}
              <span className="hidden md:inline">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Smiley Icon */}
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
          <Smile className="w-6 h-6 text-white" />
        </div>
      </div>
    </footer>
  )
}
