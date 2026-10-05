// import { experience, ExperienceItemData} from '@/data/experience'
import { experience } from '@/data/experience'
import type { ExperienceItemData } from '@/types/index'

export function Experience() {
  return (
    <section className="w-full bg-[#121212] pt-6 pb-[64px] px-4 lg:pt-[70px] lg:pb-[70px] lg:px-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between lg:flex-row lg:items-start gap-12 lg:gap-0">
        
        {/* Left Side Header Text Block */}
        <div className="w-full max-w-[361px] lg:max-w-[430px]  flex flex-col gap-[24px] lg:sticky lg:top-32">
          <h2 className="text-[48px] sm:text-5xl lg:text-[48px] font-medium leading-[1.1] tracking-[-5px] text-white">
            Discover My Journey in Design
          </h2>
          <p className="text-base lg:text-[16px] leading-[28px] text-white/70">
            From exploring ideas as a freelance designer to building full–scale products, my path has been driven by a passion for creating user–centered digital experiences, combining clarity, usability, and thoughtful design in every project.
          </p>
        </div>

        {/* Right Side Experience List */}
        <div className="w-full max-w-[361px] lg:max-w-[619px] flex flex-col gap-12 lg:gap-16">
          {experience.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ExperienceCard({ item }: { item: ExperienceItemData }) {
  return (
    <div className="flex flex-col gap-3">
      {/* Date Period Accent Label */}
      <span className="text-sm lg:text-[15px] font-medium text-[#C1FA51]">
        {item.period}
      </span>

      {/* Role and Company Heading */}
      <h3 className="text-2xl lg:text-[28px] font-semibold text-white leading-snug">
        {item.company} – {item.role}
      </h3>

      {/* Optional Company Summary Paragraph */}
      {item.summary && (
        <p className="text-base text-white/80 leading-relaxed mt-1">
          {item.summary}
        </p>
      )}

      {/* Bulleted Highlights List */}
      <ul className="flex flex-col gap-3 mt-2 text-base text-white/80 list-disc pl-5 leading-relaxed">
        {item.highlights.map((highlight: string, idx: number) => (
          <li key={idx} className="pl-1">
            {highlight}
          </li>
        ))}
      </ul>

      {/* Optional Key Contribution Paragraph */}
      {item.keyContribution && (
        <p className="text-base text-white/80 leading-relaxed mt-3">
          <span className="font-semibold text-white">Key contribution: </span>
          {item.keyContribution}
        </p>
      )}
    </div>
  )
}