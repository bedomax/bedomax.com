"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT ME", href: "/about" },
  { name: "PROJECTS", href: "/projects" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT ME", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="relative z-10 flex flex-col gap-6 px-6 pt-8 md:flex-row md:items-start md:justify-between md:px-14">
      <Link href="/" className="flex items-end gap-3">
        <Image src="/images/logo-icon.svg" alt="Bedomax logo" width={59} height={46} priority />
        <span className="pb-1 text-sm text-white/60">@bedomax</span>
      </Link>

      <nav
        aria-label="Main navigation"
        className="flex flex-row flex-wrap gap-x-6 gap-y-3 md:flex-col md:items-end md:gap-y-[23px] md:pt-8"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className="group relative pb-2 text-sm tracking-[2px] text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 right-0 h-1 bg-brand-accent transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                }`}
              />
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
