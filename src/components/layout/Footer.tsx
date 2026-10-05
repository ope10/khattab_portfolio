import Link from 'next/link'
import { siteConfig } from '@/data/site'
import Image from 'next/image'

// Social SVG Icons matching Figma design
function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'X', href: 'https://x.com', icon: XIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
  { label: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-black text-white">
      {/* 
        Container with exact padding:
        Desktop (lg): pt-[70px] pb-[70px] px-[120px] | Gap: 45px
        Mobile: pt-[24px] pb-[64px] px-[16px] | Gap: 10px
      */}
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[10px] px-4 pt-6 pb-16 sm:px-[16px] lg:gap-[45px] lg:px-[120px] lg:py-[70px]">
        
        {/* Top Header Row */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-black font-bold text-xs">
              <Image
                  src="/images/tools/Group (1).svg"
                  alt="Logo"
                  width={18}
                  height={18}
                />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              {siteConfig.name} 
            </span>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-white/80">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="transition-colors hover:text-white"
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <hr className="my-2 border-t border-white/10 lg:my-0" />

        {/* Copyright Subtext */}
        <div className="text-center">
          <p className="text-xs text-white/60 sm:text-sm">
            ©{year} | {siteConfig.name}. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  )
}