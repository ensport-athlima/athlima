import type { MetadataRoute } from "next"
import { env } from "@/lib/env"
import { site } from "@/content/site"

/** seo.md §1 — generated. Blocks /api/, preview routes and the Studio. Launch checklist T-3: no `Disallow: /`. */
export default function robots(): MetadataRoute.Robots {
  const base = env.NEXT_PUBLIC_SITE_URL || `https://${site.domain}`
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/preview/", "/studio/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
