import type { MetadataRoute } from 'next'
import { getAllProjectSlugs } from '@/lib/projects'

const BASE_URL = 'https://khattabyahaya.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectSlugs = getAllProjectSlugs()

  const projectUrls = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...projectUrls,
  ]
}
