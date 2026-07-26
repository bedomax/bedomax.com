import Image from "next/image"

const socialLinks = [
  { name: "INSTAGRAM", href: "https://instagram.com/bedomax" },
  { name: "X", href: "https://x.com/bedomax" },
  { name: "FACEBOOK", href: "https://facebook.com/bedomax" },
  { name: "LINKEDIN", href: "https://www.linkedin.com/in/bedomax/" },
  { name: "GITHUB", href: "https://github.com/bedomax" },
  { name: "SPOTIFY", href: "https://open.spotify.com/user/bedomax" },
]

export function Footer() {
  return (
    <footer className="relative z-10 bg-brand-700 px-4 py-5 sm:px-6 md:px-14">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-10 md:gap-x-14">
        <Image
          src="/images/avatar.png"
          alt="Bedo Maximiliano Cáceres"
          width={48}
          height={48}
          className="size-10 rounded-full sm:size-12"
        />

        <nav
          aria-label="Social links"
          className="flex flex-1 flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-8 md:gap-x-12"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/50 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent sm:text-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <Image src="/images/footer-emoji.svg" alt="" width={27} height={25} aria-hidden="true" />
      </div>
    </footer>
  )
}
