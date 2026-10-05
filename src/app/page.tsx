import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { SkillsMarquee } from '@/components/home/SkillsMarquee'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Khattab Yahaya – Product Designer',
  description:
    'Portfolio of Khattab Yahaya, a product designer creating intuitive digital experiences in fintech, travel, and marketplace sectors.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsMarquee />
      <FeaturedProjects />
      <FAQ variant="home" />
      <CTA />
    </>
  )
}
