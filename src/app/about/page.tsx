import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/AboutHero'
import { StatsBar } from '@/components/about/StatsBar'
import { Services } from '@/components/about/Services'
import { Experience } from '@/components/about/Experience'
import { TechStack } from '@/components/about/TechStack'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn more about Khattab Yahaya – a product designer with 4+ years of experience creating user-centred digital experiences.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsBar />
      <Services />
      <Experience />
      <TechStack />
      <FAQ variant="about" />
      <CTA />
    </>
  )
}
