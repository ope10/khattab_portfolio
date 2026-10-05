import { ToolCard } from './ToolCard'
import { tools } from '@/data/tools'

export function TechStack() {
  return (
    <section className="w-full bg-[#121212] py-[24px] px-[24px] lg:py-[70px] lg:px-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[24px] lg:gap-[70px]">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-white text-center leading-tight">
          My Tech Stacks
        </h2>

        {/* 3x2 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full justify-items-center">
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>

      </div>
    </section>
  )
}