'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'
import { navLinks } from '@/data/site'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (pathname.startsWith('/projects/')) {
    return (
      <header className="absolute left-0 right-0 top-4 z-10 px-4 md:top-8 md:px-6">
        <nav className="mx-auto flex h-10 w-full max-w-[1312px] items-center rounded-full bg-black px-4 md:h-12 md:px-6">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-medium text-white transition-colors hover:text-accent md:text-sm"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
              aria-hidden="true"
            >
              <path
                d="M16 10H4M9 5L4 10L9 15"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back</span>
          </Link>
        </nav>
      </header>
    )
  }

  return (
   <header className="fixed left-0 right-0 top-[27px] z-50 flex justify-center px-5 md:top-[40px] lg:top-[64px]">
  <nav className="relative flex h-[70px] w-full max-w-[393px] items-center rounded-[100px] bg-black px-5 md:h-[72px] md:max-w-none md:w-[469px] md:gap-3 md:px-4 lg:h-[84px] lg:gap-[18px] lg:p-[20px]">
    <Link
      href="/"
      className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full md:h-10 md:w-10 lg:h-11 lg:w-11"
    >
      <Image src="/images/tools/Rectangle 3838.svg" alt="Khattab Yahaya" fill sizes="64px" className="object-cover object-top" />
    </Link>
    <div className="hidden items-center gap-3 md:flex lg:gap-[18px]">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-[14px] text-white transition-colors hover:text-accent lg:text-[18px] ${pathname === link.href ? 'text-white' : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </div>

    {/* Desktop Contact Button -> Anchor link to #cta section */}
    <Button
      href="#cta"
      variant="white"
      size="md"
      className="ml-auto hidden h-10 min-w-[96px] px-4 text-[14px] md:inline-flex lg:h-11 lg:min-w-[129px] lg:px-5 lg:text-[16px]"
    >
      Contact
    </Button>

    <button
      type="button"
      aria-label="Toggle navigation menu"
      aria-expanded={isMenuOpen}
      onClick={() => setIsMenuOpen((open) => !open)}
      className="ml-auto inline-flex size-10 items-center justify-center rounded-xl bg-[#eef4fb] text-[#24364a] md:hidden"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="size-6"
        aria-hidden="true"
      >
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>

    {isMenuOpen && (
      <div className="absolute left-0 right-0 top-[78px] flex flex-col gap-1 rounded-[24px] bg-black p-4 shadow-2xl md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="rounded-xl px-4 py-3 text-white hover:bg-white/10"
          >
            {link.label}
          </Link>
        ))}
        {/* Mobile Contact Link -> Anchor link to #cta section */}
        <Link
          href="#cta"
          onClick={() => setIsMenuOpen(false)}
          className="mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-medium text-black"
        >
          Contact
        </Link>
      </div>
    )}
  </nav>
</header>
  )
}
