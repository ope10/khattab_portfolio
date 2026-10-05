import type { Metadata } from 'next'
import { getProjectBySlug } from '@/lib/projects'
import { DeTravellerCaseStudy } from '@/components/project/DeTravellerCaseStudy'

// Updated slug from 'de-traveller' to 'detraveller' to match the project object slug
const project = getProjectBySlug('detraveller')!

export const metadata: Metadata = { 
  title: `${project.title} — ${project.badge}`, 
  description: project.subtitle 
}

export default function DeTravellerPage() {
  return <DeTravellerCaseStudy project={project} />
}