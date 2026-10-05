import { projects } from '@/data/projects'
import type { Project } from '@/types'

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getNextProject(slug: string): Project | undefined {
  const project = getProjectBySlug(slug)
  if (!project?.nextSlug) return undefined
  return getProjectBySlug(project.nextSlug)
}

export function getPrevProject(slug: string): Project | undefined {
  const project = getProjectBySlug(slug)
  if (!project?.prevSlug) return undefined
  return getProjectBySlug(project.prevSlug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}
