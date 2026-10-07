import Image from "next/image";
import Link from "next/link";
import { CaseStudyFooterNav } from "@/components/project/CaseStudyFooterNav";
import { getNextProject, getPrevProject } from "@/lib/projects";
import type { Project } from "@/types";

const heroImage = "/images/projects/safe-haven-web/Safehaven.svg";
const existingApplication =
  "/images/projects/safe-haven-web/Frame%202147226318.svg";
const designSystem = "/images/projects/safe-haven-web/Frame%202147226303.svg";
const uiDesign = "/images/projects/safe-haven-web/Frame%202147226323.svg";

function Narrative({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-5 md:grid-cols-[280px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[480px_minmax(0,1fr)] lg:gap-10">
      <h2 className="text-[22px] font-medium tracking-[-0.02em] text-white md:text-[24px] lg:text-[26px]">
        {title}
      </h2>
      <div className="max-w-[650px] text-[14px] leading-6 text-white md:text-[15px] md:leading-7 lg:text-[16px] lg:leading-8">
        {children}
      </div>
    </section>
  );
}

export function SafeHavenWebCaseStudy({ project }: { project: Project }) {
  const nextProject = getNextProject(project.slug);
  const prevProject = getPrevProject(project.slug);

  return (
    <article className="relative bg-[#1d1d1f] pb-12 pt-[100px] text-white md:pt-[120px] lg:pt-[144px]">
      {/* Background pattern for hero */}
      <Image
        src="/images/tools/Group 47614.svg"
        alt=""
        aria-hidden
        width={1283}
        height={1496}
        className="pointer-events-none absolute select-none"
        style={{ top: '-390px', left: '361px' }}
      />
      <div className="mx-auto w-full max-w-[1312px] px-4 md:px-6 xl:px-0">
         <header className="flex flex-col border-b border-white/10 pb-8">
          <div className="flex flex-col gap-6 w-full">
            {/* Badge & Title Block */}
            <div className="flex flex-col items-start gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
                <span className="text-[#C1FA51] text-sm">✦</span>
                <span> Web App</span>
              </span>

              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[48px]">
                Safe Haven MFB
              </h1>
            </div>

            {/* Subtitle / Description */}
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-[640px]">
              {project.subtitle}
            </p>

            {/* Metadata Grid (2-col mobile, 4-col tablet & desktop) */}
            <dl className="grid grid-cols-2 gap-y-6 gap-x-8 sm:grid-cols-4 max-w-[670px] pt-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Client :
                </dt>
                <dd className="mt-1 text-sm md:text-base font-medium text-white">
                  {project.client}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Industry :
                </dt>
                <dd className="mt-1 text-sm md:text-base font-medium text-white">
                  {project.industry}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Role :
                </dt>
                <dd className="mt-1 text-sm md:text-base font-medium text-white">
                  {project.role}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Year :
                </dt>
                <dd className="mt-1 text-sm md:text-base font-medium text-white">
                  {project.year}
                </dd>
              </div>
            </dl>
          </div>
        </header>

        <section className="mt-7 overflow-hidden rounded-lg">
          <Image
            src={heroImage}
            alt="Safe Haven web application preview"
            width={1300}
            height={669}
            priority
            className="h-auto w-full"
          />
        </section>

       <div className="mt-14 space-y-14 md:mt-16 md:space-y-16 lg:mt-20 lg:space-y-20">
  {/* Problem */}
  <Narrative title="Problem">
    <p className="whitespace-pre-line">{project.problem}</p>
  </Narrative>

  {/* Solutions */}
  <Narrative title="Solutions">
    <div className="space-y-4">
      <p className="whitespace-pre-line">{project.solution}</p>
      {project.solutionFeatures && project.solutionFeatures.length > 0 && (
        <ul className="space-y-1.5 pl-1 text-white/85">
          {project.solutionFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="shrink-0">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </Narrative>

  {/* Design Process */}
  <Narrative title="Design Process">
    <div className="space-y-4">
      {project.designProcess?.intro && (
        <p>{project.designProcess.intro}</p>
      )}

      {project.designProcess?.focusAreasIntro && (
        <p className="font-medium text-white">
          {project.designProcess.focusAreasIntro}
        </p>
      )}

      {project.designProcess?.focusAreas &&
        project.designProcess.focusAreas.length > 0 && (
          <ul className="space-y-1.5 pl-1 text-white/85">
            {project.designProcess.focusAreas.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

      {project.designProcess?.outro && (
        <p className="pt-1">{project.designProcess.outro}</p>
      )}
    </div>
  </Narrative>
</div>

        <section className="mt-16 md:mt-20 lg:mt-28">
          <p className="mb-5 font-inter text-[18px] italic text-[#99A1AF] md:text-[20px] lg:text-[24px]">
            Some Screenshots From the Old Application
          </p>
          <div className="overflow-hidden rounded-lg bg-white/5">
            <Image
              src={existingApplication}
              alt="Existing Safe Haven web application screens"
              width={1300}
              height={2292}
              className="h-auto w-full"
            />
          </div>
        </section>

        <section className="mt-16 md:mt-20 lg:mt-28">
          <Narrative title="Design System">
            <p>
              I started by reviewing the current brand UI kits. By analyzing
              them with scalability in mind, I revamped the design system and
              ensured consistency across the board. This involved creating
              reusable brand components and assets, including typography,
              colors, icons, and grid systems.
            </p>
          </Narrative>
          <div className="mt-7 overflow-hidden rounded-lg bg-white/5">
            <Image
              src={designSystem}
              alt="Safe Haven web design system"
              width={1300}
              height={1597}
              className="h-auto w-full"
            />
          </div>
        </section>

        <section className="mt-16 md:mt-20 lg:mt-28">
          <Narrative title="UI Design">
            <p>
              I created the UI designs using Figma, ensuring that all team
              members collaborated effectively and contributed their ideas
              throughout the process. This approach helped align everyone
              towards a common goal.
            </p>
          </Narrative>
          <div className="mt-7 overflow-hidden rounded-lg bg-white/5">
            <Image
              src={uiDesign}
              alt="Safe Haven web interface designs"
              width={1300}
              height={5678}
              className="h-auto w-full"
            />
          </div>
        </section>

        <section className="mt-16 grid gap-5 border-t border-white/10 pt-10 md:mt-20 md:grid-cols-[280px_minmax(0,1fr)] md:gap-8 lg:mt-28 lg:grid-cols-[480px_minmax(0,1fr)] lg:gap-10">
          <h2 className="text-[26px] font-medium md:text-[30px] lg:text-[34px]">
            Conclusion
          </h2>
          <p className="max-w-[750px] text-[15px] leading-6 tracking-[0] text-white md:text-[16px] md:leading-7 lg:text-[18px] lg:leading-7">
            Redesigning SafeHaven’s mobile and web products gave me the
            opportunity to work on a complex fintech ecosystem and rethink how
            users interact with everyday banking services. My focus was on
            creating clearer user journeys, simplifying complex financial
            experiences, and establishing a more consistent experience across
            both platforms. Beyond individual screens, I contributed to the
            product structure, user flows, reusable components, and design
            system that support a more scalable product experience. The project
            strengthened my ability to balance user needs, business
            requirements, and the complexities of financial products while
            designing for a real-world banking environment.
          </p>
        </section>

        {/* Case Study Footer Navigation */}
        <CaseStudyFooterNav prevProject={prevProject} nextProject={nextProject} />
      </div>
    </article>
  );
}
