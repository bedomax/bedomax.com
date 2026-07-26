"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "HOME", short: "HOME", href: "/" },
  { name: "ABOUT ME", short: "ABOUT", href: "/about" },
  { name: "PROJECTS", short: "PROJECTS", href: "/projects" },
  { name: "BLOG", short: "BLOG", href: "/blog" },
  { name: "CONTACT ME", short: "CONTACT", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="relative z-20 w-full">
      <div className="flex flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6 md:px-14 md:py-6">
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
          className="-mx-4 flex items-center gap-x-5 overflow-x-auto overscroll-x-contain border-y border-white/10 px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-x-6 md:mx-0 md:max-w-none md:gap-x-8 md:overflow-visible md:border-0 md:px-0 md:py-0 [&::-webkit-scrollbar]:hidden"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className="group relative shrink-0 whitespace-nowrap pb-1.5 text-xs tracking-[2px] text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent md:pb-2 md:text-sm"
              >
                <span className="md:hidden">{item.short}</span>
                <span className="hidden md:inline">{item.name}</span>
                <span
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-brand-accent transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                  }`}
                />
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
