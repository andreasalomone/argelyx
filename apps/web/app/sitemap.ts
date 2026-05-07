import type { MetadataRoute } from "next"

const BASE_URL = "https://www.algelyx.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/legal/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/legal/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]
}
