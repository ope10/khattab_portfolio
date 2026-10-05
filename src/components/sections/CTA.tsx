import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/site'

export function CTA() {
  return (
    <section id="cta" className="py-24 border-t border-border scroll-mt-24">
      <Container className="max-w-[1200px]">
        {/* Card: 1200px width, 434px height, 20px radius, #292929 bg */}
        <div className="relative flex min-h-[434px] w-full flex-col items-center justify-center rounded-[20px] bg-[#292929] px-6 py-12 text-center md:py-0">
          
          {/* Inner Content Block: 414px max-width, 48px gap */}
          <div className="flex max-w-[414px] flex-col items-center gap-[48px]">
            
            {/* Heading + Subtitle Block */}
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl md:text-[44px] leading-[1.1]">
                Let's work together
              </h2>
              <p className="text-sm text-white/80 sm:text-base leading-[24px]">
                Have a project in mind? I'd love to hear about it. Let's schedule a call and talk about
                how we can work together.
              </p>
            </div>

            {/* Action Button */}
            <Button
              href={`https://cal.com/yahaya-khattab-t6uvcs/30min`}
              variant="accent"
              size="lg"
              external
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium transition"
            >
              Let's Talk
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>

          </div>

        </div>
      </Container>
    </section>
  )
}