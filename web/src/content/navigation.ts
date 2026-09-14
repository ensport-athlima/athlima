/**
 * Navigation and footer content (02_INFORMATION_ARCHITECTURE/navigation.md; 04_CONTENT/ctas.md §5).
 * Four items and one permanent CTA — locked (decision A2 for the CTA). Every href is a manifest route.
 */
import { routes, journalPillar, pillars, type Pillar } from "@/lib/routes"
import type { IPId } from "@/components/marks/IPMark"
import { site, entity } from "./site"

export const primaryNav = [
  { label: "THE WORLD", href: routes.theWorld, hasPanel: true },
  { label: "THE ROOM", href: routes.theRoom },
  { label: "PARTNER", href: routes.partner },
  { label: "JOURNAL", href: routes.journal },
] as const

/** The permanent CTA — decision A2. The one commercial action on the site. */
export const permanentCta = { label: "BUILD WITH ATHLIMA", href: routes.partner } as const

/** The six IPs as they appear in the World panel and the mobile menu — brand-strategy.md §4 lines. */
export const worldIPs: readonly { ip: IPId; descriptor: string; href: string }[] = [
  { ip: "athlimax", descriptor: "The marketplace", href: routes.athlimax },
  { ip: "symposium", descriptor: "The ideas", href: routes.symposium },
  { ip: "activ8", descriptor: "The experience", href: routes.activ8 },
  { ip: "afterhours", descriptor: "The culture", href: routes.afterhours },
  { ip: "connect", descriptor: "The relationships", href: routes.connect },
  { ip: "athlima20", descriptor: "The next generation", href: routes.athlima20 },
]

export const PILLAR_LABELS: Record<Pillar, string> = {
  build: "BUILD",
  equip: "EQUIP",
  enable: "ENABLE",
  perform: "PERFORM",
  govern: "GOVERN",
}

export const worldPillars = pillars.map((p) => ({
  label: PILLAR_LABELS[p],
  href: journalPillar(p),
}))

export const worldPanelStrip = { label: "THE TWO DAYS", href: routes.programme } as const

/** The mobile menu's tertiary row. */
export const tertiaryNav = [
  { label: "About", href: routes.about },
  { label: "Programme", href: routes.programme },
  { label: "Contact", href: routes.contact },
  { label: "Press", href: routes.press },
] as const

export const menuStrings = { open: "MENU", close: "CLOSE", skip: "SKIP TO CONTENT" } as const

/** ctas.md §5 — the video pause control. */
export const filmLabels = { pause: "PAUSE FILM", play: "PLAY FILM" } as const

export const cookieNotice = {
  text: "We use a small number of cookies to understand how the site is used. Nothing else.",
  accept: "ACCEPT",
  decline: "DECLINE",
  policyLabel: "Cookies",
  policyHref: routes.legalCookies,
} as const

/** The footer — navigation.md §5, exactly. */
export const footer = {
  statement: site.proposition,
  detail: `${site.datesLabel} · ${site.venueLabel}`,
  columns: [
    {
      heading: "THE WORLD",
      links: [
        { label: "ATHLIMAX", href: routes.athlimax },
        { label: "The Symposium", href: routes.symposium },
        { label: "ACTIV8", href: routes.activ8 },
        { label: "Afterhours", href: routes.afterhours },
        { label: "ATHLIMA Connect", href: routes.connect },
        { label: "ATHLIMA 20", href: routes.athlima20 },
        { label: "The Two Days", href: routes.programme },
      ],
    },
    {
      heading: "THE ROOM",
      links: [
        { label: "The composition", href: routes.theRoom },
        // Advisory Council renders only when the route exists (sitemap.md §4) — see Footer.
      ],
    },
    {
      heading: "PARTNER",
      links: [
        { label: "The proposition", href: routes.partner },
        { label: "The model", href: routes.partnerModel },
        { label: "The journey", href: routes.partnerJourney },
        { label: "Enquire", href: routes.partnerEnquire },
      ],
    },
    {
      heading: "MORE",
      links: [
        { label: "The Journal", href: routes.journal },
        { label: "About ATHLIMA", href: routes.about },
        { label: "ENSPORT Ventures", href: routes.about },
        { label: "The ENARR Group", href: routes.about },
        { label: "Press", href: routes.press },
        { label: "Contact", href: routes.contact },
      ],
    },
  ],
  doorways: [
    { label: "FOR BUSINESS", href: routes.forBusiness },
    { label: "FOR ATHLETES", href: routes.forAthletes },
    { label: "FOR CAPITAL", href: routes.forCapital },
    { label: "FOR INFRASTRUCTURE", href: routes.forInfrastructure },
    { label: "FOR INSTITUTIONS", href: routes.forInstitutions },
    { label: "FOR BRANDS", href: routes.forBrands },
  ],
  /**
   * The footer block — decision B3 §4d. Line one is brand; the rest is the statutory block.
   * [TO VERIFY — B3a/B3b] The registered office, telephone and email (Companies Act 2013 s.12(3)(c))
   * are not yet supplied; until they are, only these two lines render. Launch checklist T-3.
   */
  brandLine: `${site.edition} · ${site.institutionalLine}`,
  statutoryLine: `${entity.legalName} · CIN ${entity.cin}`,
  legal: [
    { label: "Privacy", href: routes.legalPrivacy },
    { label: "Terms", href: routes.legalTerms },
    { label: "Cookies", href: routes.legalCookies },
  ],
  copyright: `© 2026 ${entity.legalName}`,
  /** The Advisory Council route exists only with five written confirmations (sitemap.md §4). CMS later. */
  advisoryCouncilLive: false,
  advisoryCouncil: { label: "Advisory Council", href: routes.advisoryCouncil },
} as const
