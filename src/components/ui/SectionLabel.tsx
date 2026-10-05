import { cn } from '@/lib/utils'
import { Sparkle } from './Sparkle'

interface SectionLabelProps {
  children: string
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-white/80',
        className
      )}
    >
      <Sparkle className="size-3.5 text-accent" />
      {children}
    </p>
  )
}