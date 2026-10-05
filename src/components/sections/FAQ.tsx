import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Accordion } from '@/components/ui/Accordion'
import { faqs } from '@/data/faqs'

interface FAQProps {
  variant?: 'home' | 'about'
}

export function FAQ({ variant = 'home' }: FAQProps) {
  return (
    <section className="py-24 border-t border-border" id="faq">
      <Container>
        {/* Adjusted grid to give the right column room for 678px */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-4 lg:max-w-md">
            <SectionLabel>FAQs</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Your Questions
              <br />
              Answered
            </h2>
            <p className="text-text-secondary text-[16px] sm:text-base leading-relaxed max-w-sm">
              Here are some of the questions I get most often as a freelance designer. If yours isn't listed, feel free to reach out and I'll be glad to help.
            </p>
          </div>

          {/* Right Column with exact width matching Figma (677.61px -> 678px) */}
          <div className="w-full lg:w-[678px] lg:max-w-[678px] shrink-0"> 
            <Accordion items={faqs} /> 
          </div>
        </div>
      </Container>
    </section>
  )
}