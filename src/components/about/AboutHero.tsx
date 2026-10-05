import Image from 'next/image'
import { Container } from '@/components/ui/Container'

export function AboutHero() {
  return (
    <section className="pt-24 pb-16 lg:pt-64 lg:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Inner General Layout Container: Max-width 1349px */}
      <Container className="max-w-[1349px]">
        {/* Desktop Gap: 40px | Mobile Gap: 32px */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-[40px]">
          
          {/* 
            Image Block:
            Mobile: Top (order-1), Width: 361px, Height: 481px, Radius: 24.05px
            Desktop (lg): Right (order-2), Width: 600px, Height: 800px, Radius: 40px
          */}
          <div className="order-1 lg:order-2 w-full max-w-[361px] h-[481px] lg:max-w-[600px] lg:h-[800px] shrink-0 relative overflow-hidden rounded-[24.05px] lg:rounded-[40px] bg-surface border border-border">
            <Image
              src="/images/profile/Frame 2147226335.svg"
              alt="Khattab Yahaya"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* 
            Text Content Block:
            Mobile: Bottom (order-2), Max-Width: 361px, Gap: 36px
            Desktop (lg): Left (order-1), Max-Width: 635px, Gap: 36px
          */}
          <div className="order-2 lg:order-1 w-full max-w-[361px] lg:max-w-[635px] flex flex-col gap-[36px]">
            <h1 className="text-[42px] sm:text-5xl lg:text-[64px] font-medium text-text-primary leading-[1.1] tracking-[-0.03em]">
              About Me
            </h1> 

            <div className="flex flex-col gap-6 text-[#E5E5E7]  text-base lg:text-[18px] leading-[28px]">
              <p>
                I’m a product designer focused on turning ideas into simple, intuitive digital experiences[cite: 8, 9]. I enjoy working through the full design process, from understanding user needs to creating clean, functional interfaces that are easy to use[cite: 8, 9]. I care about clarity, usability, and designing products that genuinely solve real problems[cite: 8, 9].
              </p>
              <p>
                I also serve as the Co-product manager for Techxcite, an annual tech event by Bread of Hope that inspires young minds to explore careers in tech[cite: 8, 9]. Over the years, I’ve successfully hosted three impactful editions, sparking curiosity and driving positive change[cite: 8, 9].
              </p>
              <p>
                Whether collaborating with cross-functional teams or working directly with users, my goal remains the same, to design experiences that make a lasting impact and address real-world challenges.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}