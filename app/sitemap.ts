import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-data'

const routes = [
  '',
  '/sobre',
  '/produtos',
  '/servicos',
  '/portfolio',
  '/faq',
  '/contato',
  '/politica-de-privacidade',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
