"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()
  
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT ME", href: "/about" },
    { name: "PROJECTS", href: "/projects" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT ME", href: "/contact" },
  ]

  return (
    <header className="relative z-10 px-8 py-6 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group -mt-2">
        <div className="w-12 h-12 bg-[#F5C542] transform -skew-x-12" />
        <span className="text-white/80 text-sm font-light tracking-wide">@bedomax</span>
      </Link>

      {/* Navigation */}
      <nav className="flex flex-col items-end gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-white text-sm font-light tracking-wide hover:opacity-80 transition-opacity"
            >
              {item.name}
              {isActive && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F5C542]" />}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
