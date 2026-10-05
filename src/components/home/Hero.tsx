import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[148px] lg:pt-[64px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[26%] top-[-190px] h-[940px] w-[940px] rounded-full border border-[#19304a]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-[318px] h-[1020px] w-[1020px] rounded-full border border-[#19304a]"
      />

      <div className="relative mx-auto grid w-full max-w-[1447px] grid-cols-1 items-center px-4 pb-0 lg:min-h-[812px] lg:grid-cols-[minmax(0,746px)_600px] lg:gap-[70px] lg:px-0">
        <div className="order-2 mt-5 flex w-[361px] max-w-full flex-col gap-[21px] lg:order-1 lg:mt-0 lg:min-h-[593px] lg:w-auto lg:justify-center lg:gap-[24px] lg:pl-[124px]">
          <div className="flex items-center gap-3 text-[16px] font-regular uppercase text-accent lg:text-[18px]">
            <span className="h-px w-[56px] bg-accent lg:w-[140px]" />
            Hello
          </div>

          <h1 className="text-[42px] font-regular leading-[1.3] tracking-[-0.05em] text-[#e7e7e9] sm:text-[52px] lg:text-[116px] lg:leading-[.98] lg:tracking-[-0.065em]">
            I’m Khattab
            <span className="block">Yahaya</span>
          </h1>

          <p className="max-w-[361px] text-[16px] leading-[1.85] tracking-[0.005em] text-[#d1d1d4] lg:max-w-[745px] lg:text-[18px] lg:leading-[2.02]">
            As a Product Designer with over four years of experience, I focus on
            delivering value and satisfaction to both users and businesses. I
            believe that the key to a successful product lies in balancing these
            two aspects while considering engineering constraints. It&apos;s not
            just about dreaming; I&apos;m here to turn those dreams into
            reality.
          </p>

          <Button
            href="https://cal.com/yahaya-khattab-t6uvcs/30min"
            variant="accent"
            size="lg" 
            external
            className="mt-[26px] h-[62px] w-full text-[18px] font-normal lg:mt-4 lg:h-[56px] lg:w-[198px]"
          >
            Let’s talk
          </Button>
        </div>

        <div className="group order-1 relative mx-auto flex h-[481px] w-[361px] max-w-full cursor-pointer items-end justify-center overflow-hidden lg:order-2 lg:mx-0 lg:h-[800px] lg:w-[600px] lg:justify-end">
          {/* Default Image */}
          <Image
            src="/images/profile/ChatGPT Image Oct 1, 2026, 06_07_10 PM (1) 1.svg"
            alt="Khattab Yahaya"
            width={600}
            height={800}
            priority
            className="h-full w-full object-cover object-top transition-opacity duration-500 ease-in-out group-hover:opacity-0 lg:h-auto lg:max-w-[600px]"
          />

          {/* Color Image on Hover */}
          <Image
            src="/images/profile/Property 1=Variant2.svg"
            alt="Khattab Yahaya"
            width={600}
            height={800}
            priority
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 lg:h-auto lg:max-w-[600px]"
          />
        </div>
      </div>
    </section>
  );
}
