import { cn } from '@/lib/utils'
import { Sparkle } from './Sparkle'

interface BadgeProps {
  label: string
  className?: string
}

export function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex h-7 w-fit items-center gap-2 rounded-[10px] bg-[#c4c4c4] pl-2 pr-3 text-sm text-[#1a1a1a] xl:h-8 xl:text-base',
        className
      )}
    >
      <Sparkle className="size-3.5 text-accent" />
      {label}
    </span>
  )
}