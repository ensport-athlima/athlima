/**
 * THE ROUTE MANIFEST (06_BUILD/architecture.md §7). The only place path strings exist.
 * Navigation, the sitemap, redirects and every internal link read from here.
 *
 * Hand-written from 02_INFORMATION_ARCHITECTURE/sitemap.md §1 and checked against it by
 * scripts/check-routes.mjs on every build. If the two disagree, the build fails — fix the brief or
 * this file, never one without the other.
 */

export const routes = {
  home: "/",

  theWorld: "/the-world",
  athlimax: "/athlimax",
  symposium: "/symposium",
  activ8: "/activ8",
  afterhours: "/afterhours",
  connect: "/connect",
  athlima20: "/athlima-20",

  theRoom: "/the-room",
  advisoryCouncil: "/the-room/advisory-council", // conditional — ≥5 written confirmations (sitemap §4)

  partner: "/partner",
  partnerModel: "/partner/model",
  partnerJourney: "/partner/journey",
  partnerEnquire: "/partner/enquire",
  partnerEnquireReceived: "/partner/enquire/received",

  forIndex: "/for",
  forBusiness: "/for/business",
  forAthletes: "/for/athletes",
  forCapital: "/for/capital",
  forInfrastructure: "/for/infrastructure",
  forInstitutions: "/for/institutions",
  forBrands: "/for/brands",

  programme: "/programme",

  journal: "/journal",

  about: "/about",

  contact: "/contact",
  contactInstitutional: "/contact#institutional",
  press: "/press",

  legalPrivacy: "/legal/privacy",
  legalTerms: "/legal/terms",
  legalCookies: "/legal/cookies",
} as const

export type RouteKey = keyof typeof routes
export type RoutePath = (typeof routes)[RouteKey]

/** Dynamic route patterns, as the sitemap writes them. */
export const dynamicRoutes = {
  journalArticle: "/journal/[slug]",
  journalPillar: "/journal/pillar/[pillar]",
  journalSeries: "/journal/series/[series]",
} as const

/** Special pages the sitemap counts as routes; Next renders them from not-found.tsx and error.tsx. */
export const specialRoutes = ["/404", "/500"] as const

export const pillars = ["build", "equip", "enable", "perform", "govern"] as const
export type Pillar = (typeof pillars)[number]

export const series = ["conversations", "research", "athlete-stories"] as const
export type Series = (typeof series)[number]

export const journalArticle = (slug: string) => `${routes.journal}/${slug}` as const
export const journalPillar = (pillar: Pillar) => `${routes.journal}/pillar/${pillar}` as const
export const journalSeries = (s: Series) => `${routes.journal}/series/${s}` as const

/** Routes that never appear in sitemap.xml. */
export const noindexRoutes: readonly RoutePath[] = [routes.contactInstitutional, routes.partnerEnquireReceived]

/** Every static route that belongs in sitemap.xml, in sitemap order. */
export const indexableStaticRoutes: readonly RoutePath[] = (
  Object.values(routes) as RoutePath[]
).filter((p) => !noindexRoutes.includes(p) && p !== routes.forIndex)

/** sitemap.md §5 — configure on day one. */
export const redirects: ReadonlyArray<{ source: string; destination: RoutePath }> = [
  { source: "/home", destination: routes.home },
  { source: "/index", destination: routes.home },
  // There is no guest application (decision A1). Old access URLs land on the room.
  { source: "/apply", destination: routes.theRoom },
  { source: "/tickets", destination: routes.theRoom },
  { source: "/register", destination: routes.theRoom },
  { source: "/pricing", destination: routes.theRoom },
  { source: "/sponsor", destination: routes.partner },
  { source: "/sponsors", destination: routes.partner },
  { source: "/exhibitors", destination: routes.partner },
  { source: "/blog", destination: routes.journal },
  { source: "/news", destination: routes.journal },
  { source: "/20under20", destination: routes.athlima20 },
  { source: "/athlima20", destination: routes.athlima20 },
  { source: "/activate", destination: routes.activ8 },
  { source: "/about-us", destination: routes.about },
  { source: "/contact-us", destination: routes.contact },
  { source: "/ensport", destination: routes.about },
  { source: "/enarr", destination: routes.about },
]
