import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'accent' | 'white' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  variant = 'accent',
  size = 'md',
  href,
  external,
  className,
  children,
  onClick,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'

  const variants = {
    accent: 'bg-accent text-background hover:bg-accent-hover',
    white: 'bg-white text-background hover:bg-neutral-200',
    outline: 'border border-border text-text-primary hover:border-text-secondary',
    ghost: 'text-text-secondary hover:text-text-primary',
  }

  const sizes = {
    sm: 'px-4 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
