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

/**
 * Sitewide (seo.md §1, §3): `Organization` for ATHLIMA and **`Event` as the primary schema** — ATHLIMA
 * is an event at a third-party venue, not a business location. No `offers` (there are no tickets), no
 * `LocalBusiness` (decision D28), no `Person`. The venue's street address is not in the repository and
 * is not invented: locality and country only.
 */
export function organizationJsonLd(a: { name: string; url: string; logo: string; parent: { name: string; url: string } }) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${a.url}#organization`,
    name: a.name,
    url: a.url,
    logo: a.logo,
    parentOrganization: { "@type": "Organization", name: a.parent.name, url: a.parent.url },
  }
}

export function eventJsonLd(a: {
  name: string
  description: string
  url: string
  startDate: string
  endDate: string
  venue: string
  locality: string
  country: string
  organizerId: string
  image: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: a.name,
    description: a.description,
    url: a.url,
    startDate: a.startDate,
    endDate: a.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: a.venue,
      address: { "@type": "PostalAddress", addressLocality: a.locality, addressCountry: a.country },
    },
    organizer: { "@id": a.organizerId },
    image: [a.image],
  }
}
