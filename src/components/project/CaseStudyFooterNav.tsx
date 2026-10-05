import Link from "next/link";
import type { Project } from "@/types";

interface CaseStudyFooterNavProps {
  nextProject?: Project;
}

export function CaseStudyFooterNav({ nextProject }: CaseStudyFooterNavProps) {
  return (
    <footer className="mt-16 hidden w-full md:mt-24 md:block lg:mt-28">
      <nav
        aria-label="Case study navigation"
        className="flex min-h-[88px] w-full max-w-[1300px] items-center justify-between rounded-full border border-white/10 bg-black px-6 sm:px-8 md:h-[116px] md:px-12 lg:px-14 shadow-2xl"
      >
        {/* Left: Back to Projects */}
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2.5 text-sm font-medium text-white transition-colors hover:text-accent sm:text-base md:text-[18px]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="transition-transform duration-200 group-hover:-translate-x-1"
            aria-hidden="true"
          >
            <path
              d="M16 10H4M9 5L4 10L9 15"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back</span>
        </Link>

        {/* Right: Next Project */}
        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group inline-flex items-center gap-3 text-left transition-colors sm:gap-4 md:gap-6"
          >
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs font-normal text-[#8E8E93] md:text-sm">
                Next Project
              </span>
              <span className="mt-1 text-xs font-medium text-white transition-colors group-hover:text-accent sm:text-sm md:text-base lg:text-[18px]">
                {nextProject.title}
                {nextProject.badge ? ` – ${nextProject.badge}` : ""}
              </span>
            </div>

            <div className="flex shrink-0 items-center justify-center text-accent transition-transform duration-200 group-hover:translate-x-1.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="size-5 md:size-6"
              >
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </div>
          </Link>
        )}
      </nav>
    </footer>
  );
}
