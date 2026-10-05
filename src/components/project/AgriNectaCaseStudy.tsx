import Image from "next/image";
import Link from "next/link";
import { CaseStudyFooterNav } from "@/components/project/CaseStudyFooterNav";
import { getNextProject } from "@/lib/projects";
import type { Project } from "@/types";

// Asset paths matching your Figma layout
const heroImage = "/images/projects/agrinecta/AgricNecta.svg";
const landingPageImage = "/images/projects/agrinecta/Frame 45.svg";

const uiScreens = [
  "/images/projects/agrinecta/Frame 2147226318.svg",
//   "/images/projects/cropxchange/ui-2.png",
//   "/images/projects/cropxchange/ui-3.png",
//   "/images/projects/cropxchange/ui-4.png",
//   "/images/projects/cropxchange/ui-5.png",
];

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

export function AgriNectaCaseStudy({ project }: { project: Project }) {
  const nextProject = getNextProject(project.slug);

  return (
    <article className="bg-[#1d1d1f] pb-12 pt-[100px] text-white md:pt-[120px] lg:pt-[144px]">
      <div className="mx-auto w-full max-w-[1312px] px-4 md:px-6 xl:px-0">
        {/* Case Study Header */}
        <header className="flex flex-col border-b border-white/10 pb-8">
          <div className="flex flex-col gap-6 w-full">
            {/* Badge & Title Block */}
            <div className="flex flex-col items-start gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
                <span className="text-[#C1FA51] text-sm">✦</span>
                <span>Web App</span>
              </span>

              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[48px]">
                AgriNecta
              </h1>
            </div>

            {/* Subtitle / Description */}
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-[800px] whitespace-pre-line">
              {project.subtitle}
            </p>

            {/* Metadata Grid */}
            <dl className="grid grid-cols-2 gap-y-6 gap-x-8 sm:grid-cols-4 max-w-[670px] pt-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Client:
                </dt>
                <dd className="mt-1 text-sm md:text-base font-medium text-white">
                  {project.client}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Industry:
                </dt>
                <dd className="mt-1 text-sm md:text-base font-medium text-white">
                  {project.industry}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Role:
                </dt>
                <dd className="mt-1 text-sm md:text-base font-medium text-white">
                  {project.role}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Year:
                </dt>
                <dd className="mt-1 text-sm md:text-base font-medium text-white">
                  {project.year}
                </dd>
              </div>
            </dl>
          </div>
        </header>

        {/* Hero Banner Section */}
        <section className="mt-7 overflow-hidden rounded-lg">
          <Image
            src={heroImage}
            alt="AgriNecta web application hero preview"
            width={1300}
            height={669}
            priority
            className="h-auto w-full"
          />
        </section>

        {/* Narrative Sections: Problem, Challenges, Solutions */}
        <div className="mt-14 space-y-14 md:mt-16 md:space-y-16 lg:mt-20 lg:space-y-20">
          {/* Problem */}
          <Narrative title="Problem">
            <p className="whitespace-pre-line">{project.problem}</p>
          </Narrative>

          {/* Challenges */}
          {project.challenges && (
            <Narrative title="Challenges">
              <p className="whitespace-pre-line">{project.challenges}</p>
            </Narrative>
          )}

          {/* Solutions */}
          <Narrative title="Solutions">
            <p className="whitespace-pre-line">{project.solution}</p>
          </Narrative>
        </div>

        {/* Landing Page Preview Section */}
        <section className="mt-16 md:mt-20 lg:mt-28">
          <Narrative title="Landing Page">
            <p className="text-white/85">
              Welcome to the AgriNecta homepage! Here, users can discover everything about our platform and kickstart their onboarding journey.
            </p>
          </Narrative>
          <div className="mt-7 overflow-hidden rounded-lg">
            <Image
              src={landingPageImage}
              alt="AgriNecta landing page view"
              width={1300}
              height={1800}
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* UI Screens Stacked List */}
        <section className="mt-16 md:mt-20 lg:mt-28">
          <h2 className="mb-8 text-[22px] font-medium tracking-[-0.02em] text-white md:text-[24px] lg:text-[26px]">
            UI Screens
          </h2>
          <div className="flex flex-col gap-10">
            {uiScreens.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt={`AgriNecta UI screen dashboard view ${index + 1}`}
                  width={1300}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mt-16 grid gap-5 border-t border-white/10 pt-10 md:mt-20 md:grid-cols-[280px_minmax(0,1fr)] md:gap-8 lg:mt-28 lg:grid-cols-[480px_minmax(0,1fr)] lg:gap-10">
          <h2 className="text-[26px] font-medium md:text-[30px] lg:text-[34px]">
            Conclusion
          </h2>
          <p className="max-w-[750px] whitespace-pre-line text-[15px] leading-6 tracking-[0] text-white md:text-[16px] md:leading-7 lg:text-[18px] lg:leading-7">
            {project.conclusion}
          </p>
        </section>

        {/* Case Study Footer Navigation */}
        <CaseStudyFooterNav nextProject={nextProject} />
      </div>
    </article>
  );
}