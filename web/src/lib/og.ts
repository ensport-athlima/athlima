/**
 * Open Graph images (seo.md §1): generated per page with next/og, set in the ATHLIMA type system —
 * never a logo on a black square. Every route's metadata calls `og(title, kicker)`; the image itself
 * is rendered by app/og/route.tsx. Journal articles have their own route with the byline.
 */
export const OG_SIZE = { width: 1200, height: 630 } as const

export function ogImageUrl(title: string, kicker?: string): string {
  const params = new URLSearchParams({ title })
  if (kicker) params.set("kicker", kicker)
  return `/og?${params}`
}

/** The metadata fragment: openGraph.images and twitter.images, both pointing at the generated image. */
export function og(title: string, kicker?: string) {
  const url = ogImageUrl(title, kicker)
  const image = { url, width: OG_SIZE.width, height: OG_SIZE.height, alt: `${kicker ? `${kicker} — ` : ""}${title}` }
  return {
    openGraph: { images: [image] },
    twitter: { card: "summary_large_image" as const, images: [url] },
  }
}
