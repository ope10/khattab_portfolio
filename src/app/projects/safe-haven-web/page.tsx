import type { Metadata } from 'next'
import { SafeHavenWebCaseStudy } from '@/components/project/SafeHavenWebCaseStudy'
import { getProjectBySlug } from '@/lib/projects'

const project = getProjectBySlug('safe-haven-web')!

export const metadata: Metadata = { title: 'Safe Haven Web App', description: project.subtitle }

export default function SafeHavenWebPage() {
  return <SafeHavenWebCaseStudy project={project} />
}
