/**
 * JSON-LD helpers (06_BUILD/seo.md). `BreadcrumbList` on nested routes; `Organization` and `Event`
 * sitewide arrive with the SEO pass. Rendered through <JsonLd>, which serialises safely.
 */
export function breadcrumbList(base: string, crumbs: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${base}${c.path}`,
    })),
  }
}

/** `</script>` inside a string must not close the tag; U+2028/2029 break old parsers. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029")
}

/** `Article` on every Journal piece (seo.md; journal.md §9): author, dates, publisher. */
export function articleJsonLd(a: {
  url: string
  title: string
  description: string
  datePublished: string
  dateModified: string
  authorName: string
  image?: string
  publisher: { name: string; url: string }
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: a.url,
    headline: a.title,
    description: a.description,
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    author: { "@type": "Person", name: a.authorName },
    publisher: { "@type": "Organization", name: a.publisher.name, url: a.publisher.url },
    ...(a.image ? { image: [a.image] } : {}),
  }
}
