import type { MetadataRoute } from "next"
import { env, isStaging } from "@/lib/env"
import { site } from "@/content/site"

/**
 * seo.md §1 — generated. Blocks /api/, preview routes and the Studio. Launch checklist T-3: no
 * `Disallow: /` on athlima.in. A `.vercel.app` address is a staging address and is never indexed —
 * the whole site is disallowed there, and the layout adds `noindex` (isStaging).
 */
export default function robots(): MetadataRoute.Robots {
  const base = env.NEXT_PUBLIC_SITE_URL || `https://${site.domain}`
  return {
    rules: [
      isStaging
        ? { userAgent: "*", disallow: "/" }
        : {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/preview/", "/studio/"],
          },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
