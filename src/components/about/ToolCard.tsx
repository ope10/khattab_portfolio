import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { Tool } from '@/types'

interface ToolCardProps {
  tool: Tool
  className?: string
}

export function ToolCard({ tool, className }: ToolCardProps) {
  return (
    <div
      className={cn(
        'w-full max-w-[361px] lg:max-w-[384px] h-[232px] rounded-[20px]',
        'bg-[#F9FAFB] backdrop-blur-[20px] p-8 flex flex-col justify-between items-start',
        'shadow-[0px_1px_1px_0px_rgba(5,17,45,0.06),0px_4px_4px_0px_rgba(154,196,255,0.06)]',
        'transition-all duration-200 hover:translate-y-[-2px]',
        className
      )}
    >
      {/* Icon Wrapper */}
      <div className="w-[65px] h-[65px] rounded-[20px] bg-black/5 flex items-center justify-center shrink-0">
        <Image
          src={tool.icon}
          alt={tool.name}
          width={37}
          height={37}
          className="object-contain"
        />
      </div>

      {/* Content Block */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl font-semibold text-[#111827] leading-tight">
          {tool.name}
        </h3>
        <p className="text-[16px] font-regular text-[#64748B] leading-relaxed ">
          {tool.description}
        </p>
      </div>
    </div>
  )
}