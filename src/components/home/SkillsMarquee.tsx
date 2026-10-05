import { skills } from '@/data/skills'

export function SkillsMarquee() {
  // Duplicate for infinite loop
  const doubled = [...skills, ...skills]

  return (
    <section
      aria-label="Skills"
      className="flex h-[91px] w-full items-center overflow-hidden bg-black"
    >
      <ul className="flex w-max animate-marquee motion-reduce:animate-none">
        {doubled.map((skill, i) => (
          <li
            key={i}
            aria-hidden={i >= skills.length}
            className="flex h-[30px] shrink-0 items-center whitespace-nowrap pr-[120px] font-mono text-[18px] font-medium italic leading-[169%] text-text-muted"
          >
            <span className="text-accent">*</span>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}