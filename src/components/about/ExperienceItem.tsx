import type { ExperienceItemData as ExperienceItemType } from '@/types'

interface ExperienceItemProps {
  item: ExperienceItemType
  isLast?: boolean
}

export function ExperienceItem({ item, isLast }: ExperienceItemProps) {
  return (
    <div className="relative pl-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-6 bottom-0 w-px bg-border" />
      )}
      {/* Dot */}
      <div className="absolute left-0 top-1 w-3.5 h-3.5 rounded-full border-2 border-accent bg-background" />

      <div className="space-y-3 pb-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
            {item.period}
          </span>
          <span className="text-text-muted text-xs">{item.company}</span>
        </div>
        <h3 className="text-base font-semibold text-text-primary">{item.role}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{item.summary}</p>
        <ul className="space-y-1.5">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-xs text-text-muted">
              <span className="text-accent mt-0.5 flex-shrink-0">—</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
