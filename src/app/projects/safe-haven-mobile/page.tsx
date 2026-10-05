import type { Metadata } from 'next'
import { SafeHavenMobileCaseStudy } from '@/components/project/SafeHavenMobileCaseStudy'
import { getProjectBySlug } from '@/lib/projects'

const project = getProjectBySlug('safe-haven-mobile')!

export const metadata: Metadata = { title: 'Safe Haven Mobile App', description: project.subtitle }

export default function SafeHavenMobilePage() {
  return <SafeHavenMobileCaseStudy project={project} />
}
