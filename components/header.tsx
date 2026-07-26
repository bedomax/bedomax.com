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
    <header className="relative z-20 flex items-start justify-between gap-6 px-4 pt-6 sm:px-6 sm:pt-8 md:px-14">
      <Link href="/" className="flex shrink-0 items-end gap-2 sm:gap-3">
        <Image
          src="/images/logo-icon.svg"
          alt="Bedomax logo"
          width={59}
          height={46}
          priority
          className="h-9 w-auto sm:h-[46px]"
        />
        <span className="pb-1 text-sm text-white/60">@bedomax</span>
      </Link>

      <nav
        aria-label="Main navigation"
        className="flex flex-col items-end gap-y-3 pt-1 sm:gap-y-4 md:gap-y-[23px] md:pt-8"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className="group relative text-right text-[11px] tracking-[1.5px] text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent sm:text-xs sm:tracking-[2px] md:text-sm"
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 right-0 h-1 bg-brand-accent transition-opacity ${
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
