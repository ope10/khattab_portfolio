import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function AboutHero() {
  return (
    <section className="pt-24 pb-16 lg:pt-64 lg:pb-24 relative overflow-hidden">
      {/* Background pattern */}
      <Image
        src="/images/tools/Group 47614.svg"
        alt=""
        aria-hidden
        width={1283}
        height={1496}
        className="pointer-events-none absolute select-none"
        style={{ top: "-390px", left: "361px" }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Inner Container Layout: Max-width 1349px, Height 800px */}
      <Container className="max-w-[1349px]">
        {/* Desktop Layout: Gap 40px, Height 800px */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-[40px] lg:h-[800px]">
          {/* 
            Left Text Content Block:
            Desktop: Width 635px, Height 713px, Gap 24px between Heading and Text
          */}
          <div className="order-2 lg:order-1 w-full max-w-[361px] lg:max-w-[635px] lg:h-[713px] flex flex-col gap-[24px]">
            <h1 className="text-[42px] sm:text-5xl lg:text-[64px] font-medium text-text-primary leading-[1.1] tracking-[-0.03em]">
              About Me
            </h1>

            {/* Paragraphs Container: Width 635px, Height 560px */}
            <div className="flex flex-col gap-20 text-[#E5E5E7] text-base lg:text-[18px] leading-[30px] lg:w-[635px] lg:max-w-[635px] lg:h-[560px]">
              <p>
                I’m a product designer focused on turning ideas into simple,
                intuitive digital experiences. I enjoy working through the full
                design process, from understanding user needs to creating clean,
                functional interfaces that are easy to use. I care about
                clarity, usability, and designing products that genuinely solve
                real problems. 
              </p>
              <p>
                I also serve as the Co-product manager for Techxcite, an annual
                tech event by Bread of Hope that inspires young minds to explore
                careers in tech. Over the years, I’ve successfully hosted three
                impactful editions, sparking curiosity and driving positive
                change.
              </p>
              <p>
                Whether collaborating with cross-functional teams or working
                directly with users, my goal remains the same, to design
                experiences that make a lasting impact and address real-world
                challenges.
              </p>
            </div>
          </div>

          {/* 
            Right Image Block:
            Desktop: Width 600px, Height 800px, Border Radius 40px
          */}
          <div className="order-1 lg:order-2 w-full max-w-[361px] h-[481px] lg:w-[600px] lg:max-w-[600px] lg:h-[800px] shrink-0 relative overflow-hidden rounded-[24.05px] lg:rounded-[40px] bg-surface border border-border">
            <Image
              src="/images/profile/Frame 2147226335.svg"
              alt="Khattab Yahaya"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
