import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/data/projects'

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-24 xl:py-32">
      <Container>
        {/* Header */}
        <header className="max-w-[428px]">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="mt-3 text-[28px] font-semibold uppercase leading-none tracking-[-0.03em] text-white xl:text-[40px]">
            Featured Projects
          </h2>
          <p className="mt-4 text-sm leading-[1.4] text-white/80 xl:text-base">
            These projects show how I combine creativity and strategy to design
            simple, user-focused experiences that solve real problems.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-10 flex w-full flex-col items-center gap-8 md:mt-14 md:items-stretch md:gap-[120px] xl:mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container> 
    </section>
  )
}
