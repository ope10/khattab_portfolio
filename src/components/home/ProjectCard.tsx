import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

function ArrowUpRight() {
  return (
    <Image
      src="/images/tools/SVG.svg"
      alt="Arrow up right"
      width={24}
      height={24}
      className="transition-transform duration-200 group-hover:rotate-45"
    />
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { card } = project;
  const isReversed = card.reverse ?? false; // Flag to flip layout on desktop

  return (
    <article
      className="sticky top-0 relative flex h-[553px] w-full max-w-[361px] md:max-w-none flex-col overflow-hidden rounded-[20px] bg-[#313131] pb-6 md:sticky md:grid md:h-[560px] md:grid-cols-2 md:gap-0 md:pb-0"
      style={{ top: `${96 + index * 20}px`, zIndex: index + 1 }}
     >
      {/* Copy Container: order-2 on mobile (below image), uses isReversed order only on desktop (md:) */}
      <div
        className={cn(
          "order-2 relative z-10 flex flex-col px-5 pt-6 md:justify-center md:px-16 md:pt-0",
          isReversed ? "md:order-2" : "md:order-1",
        )}
       >
        <div className="max-w-[552px] h-[301px]">
          <Badge label={project.badge} />

          <h3 className="mt-3 text-2xl font-medium leading-[1.1] tracking-[-0.04em] text-white/90 md:mt-4 md:text-[44px]">
            {project.title}
          </h3>

          <p className="mt-3  text-[16px]  tracking-[-0.05em] text-white/85 md:mt-5 md:text-[16px] lg:text-[16px]  ">
            {project.subTitle}
          </p>

          <Link
            href={`/projects/${project.slug}`}
            className="group mt-6 inline-flex h-11 w-[156px] items-center justify-center gap-3 rounded-full bg-white text-sm font-medium text-black transition hover:bg-[#C6F432] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:mt-9 md:h-14 md:w-[198px] md:text-base"
          >
            View
            <ArrowUpRight />
          </Link>
        </div>
      </div>

      {/* Artwork Container: order-1 on mobile (above text), uses isReversed order only on desktop (md:) */}
      <div
        className={cn(
          "order-1 relative h-[264px] shrink-0 overflow-hidden md:h-full",
          isReversed ? "md:order-1" : "md:order-2",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            card.mobileArtClassName,
            card.artClassName,
          )}
        >
          <Image
            src={project.coverImage}
            width={card.width}
            height={card.height}
            alt={`${project.title} ${project.badge} mockup`}
            sizes="(min-width: 768px) 600px, 450px"
            className={cn("h-auto w-full object-cover", card.imageClassName)}
          />
        </div>
      </div>
    </article>
  );
}
