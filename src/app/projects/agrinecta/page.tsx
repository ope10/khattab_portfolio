import type { Metadata } from 'next'
import { getProjectBySlug } from '@/lib/projects'
import { AgriNectaCaseStudy } from '@/components/project/AgriNectaCaseStudy'

// Updated slug from 'de-traveller' to 'detraveller' to match the project object slug
const project = getProjectBySlug('agrinecta')!

export const metadata: Metadata = { 
  title: `${project.title} — ${project.badge}`, 
  description: project.subtitle 
}

export default function AgriNectaPage() {
  return <AgriNectaCaseStudy project={project} />
}