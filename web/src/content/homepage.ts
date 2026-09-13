/**
 * Homepage copy — typed constants sourced from 04_CONTENT/homepage.md, verbatim
 * (06_BUILD/component-rules.md §3: a block never hardcodes copy). Screen by screen; each screen is
 * added as it is built. Art-directed line breaks are the content's decision, not the container's.
 */
import type { DisplayLine } from "@/components/primitives/Display"
import type { Figure } from "@/components/blocks/ProofNumbers"
import type { IPId } from "@/components/marks/IPMark"
import type { RichParagraph } from "@/components/primitives/RichText"
import { routes } from "@/lib/routes"
import { site, entity, disciplines } from "./site"

export const screen01 = {
  eyebrow: site.descriptor.toUpperCase(), // INDIA'S FESTIVAL OF SPORT, BUSINESS & PERFORMANCE
  /** Four lines at every width — the break works at both (homepage.md, screen 01). Lime on 3 and 4. */
  headline: [
    { text: "THE BUSINESS" },
    { text: "OF SPORT." },
    { text: "THE FUTURE", lime: true },
    { text: "OF INDIA.", lime: true },
  ] satisfies readonly DisplayLine[],
  /** Two halves; each is unbreakable, the line may wrap only at the middot (typography.md §9). */
  detail: [site.datesLabel, site.venueLabel] as const,
  lockup: site.promise, // CONNECT · COLLABORATE · ELEVATE
  scrollCue: "ENTER",
} as const

export const screen02 = {
  id: "diagnosis",
  marker: { number: 1, label: "THE BIGGER PICTURE" },
  headline: [
    { text: "INDIA IS READY." },
    { text: "SPORT ISN'T", lime: true },
    { text: "CONNECTED.", lime: true },
  ] satisfies readonly DisplayLine[],
  lead: [
    "Sport in India is no longer only competition. It is infrastructure, technology, real estate, health, entertainment, employment and a new generation of opportunity.",
    "Every part of that ecosystem is growing. They are growing separately.",
  ],
  /** The stakeholder grid — four disconnections. The lines are the brief's sentences, verbatim. */
  disconnections: [
    {
      parties: ["DEVELOPERS", "SPORTING OPERATORS"],
      line: "Developers do not routinely meet sporting operators.",
    },
    { parties: ["FEDERATIONS", "CAPITAL"], line: "Federations do not routinely meet capital." },
    {
      parties: ["TECHNOLOGY", "INSTITUTIONAL BUYERS"],
      line: "Technology companies struggle to reach institutional buyers.",
    },
    {
      parties: ["ATHLETES", "THE BUSINESSES AROUND THEM"],
      line: "Athletes and performance professionals remain disconnected from the businesses being built around them.",
    },
  ],
  body: "We have the ambition. We have the talent. We have the market.",
  pullLine: [
    { text: "WHAT WE NEED IS A PLATFORM" },
    { text: "TO BRING IT ALL TOGETHER." },
  ] satisfies readonly DisplayLine[],
  /**
   * B4: all four statistics ($130B, 3X, 600M+, Top 3) are unsourced. A figure without a source does
   * not ship, so this is empty and ProofNumbers renders nothing. When a figure is sourced it is added
   * here with its source and year — the type will not accept one without them.
   */
  figures: [] as readonly Figure[],
} as const

export const screen03 = {
  id: "solution",
  marker: { number: 2, label: "THE SOLUTION" },
  /** brochure-sourced, p03 */
  headline: [{ text: "ONE ROOM." }, { text: "ONE ECOSYSTEM." }] satisfies readonly DisplayLine[],
  sub: [{ text: "ONE SHARED FUTURE FOR SPORT.", lime: true }] satisfies readonly DisplayLine[],
  subNarrow: [
    { text: "ONE SHARED FUTURE", lime: true },
    { text: "FOR SPORT.", lime: true },
  ] satisfies readonly DisplayLine[],
  /** brochure-sourced, verbatim from p03 — the documented exception for "unlock" (voice-and-tone.md §3) */
  verbs: [
    { verb: "CONNECT", descriptor: "the right people" },
    { verb: "COLLABORATE", descriptor: "across sectors" },
    { verb: "UNLOCK", descriptor: "opportunities" },
    { verb: "BUILD", descriptor: "a stronger India" },
    { verb: "CREATE", descriptor: "long-term impact" },
  ],
} as const

export const screen04 = {
  id: "portals",
  marker: { number: 3, label: "THE WORLD" },
  intro: [
    { text: "ONE PLATFORM." },
    { text: "MULTIPLE IPs." },
    { text: "ONE CONNECTED ECOSYSTEM.", lime: true },
  ] satisfies readonly DisplayLine[],
  sub: "Six distinct experiences under one platform, where sport, business, culture, innovation and the next generation converge.",
  /** Lines are the locked forms from brand-strategy.md §4 (decision D16). Hrefs from the manifest. */
  portals: [
    {
      ip: "athlimax",
      role: "THE MARKETPLACE",
      line: "Conversations. Partnerships. Real-world impact.",
      href: routes.athlimax,
    },
    { ip: "symposium", role: "THE IDEAS", line: "A higher conversation.", href: routes.symposium },
    { ip: "activ8", role: "THE EXPERIENCE", line: "Play beyond the game.", href: routes.activ8 },
    {
      ip: "afterhours",
      role: "THE CULTURE",
      line: "Where sport meets culture.",
      href: routes.afterhours,
    },
    {
      ip: "connect",
      role: "THE RELATIONSHIPS",
      line: "Connect before you arrive. Collaborate when you get there.",
      href: routes.connect,
    },
    {
      ip: "athlima20",
      role: "THE NEXT GENERATION",
      line: "20 athletes. 20 sports. One future.",
      href: routes.athlima20,
    },
  ] satisfies readonly { ip: IPId; role: string; line: string; href: string }[],
  closing: [
    { text: "MORE THAN AN EVENT." },
    { text: "A MOVEMENT FOR INDIAN SPORT.", lime: true },
  ] satisfies readonly DisplayLine[],
  /** The mobile anchor line to the doorways (user-journeys.md Journey 04; ctas.md Tier 3). */
  anchorLine: "WHY SHOULD YOU CARE? IT DEPENDS WHO YOU ARE",
} as const

export const screen05 = {
  id: "the-room",
  marker: { number: 4, label: "THE PEOPLE" },
  /** brochure-sourced, p05 */
  headline: [
    { text: "350 PEOPLE." },
    { text: "THE RIGHT PEOPLE." },
  ] satisfies readonly DisplayLine[],
  lead: "A carefully curated group of 350 decision-makers, operators, builders, athletes and investors — united by a shared belief in the future of Indian sport.",
  /** brochure-sourced, p05 — the four stakeholder groups, their definitions, who, and the verb triplets */
  groups: [
    {
      title: "SPORT",
      line: "Talent. Performance. Ecosystem.",
      who: [
        "Athletes",
        "Coaches",
        "Federations",
        "Academies",
        "Sports scientists",
        "Leagues & franchises",
      ],
      verbs: "MEET · COLLABORATE · INVEST",
    },
    {
      title: "INSTITUTIONS",
      line: "Policy. Infrastructure. Enablers.",
      who: [
        "Government",
        "Authorities",
        "Universities",
        "Sporting bodies",
        "Public sector",
        "Policy makers",
      ],
      verbs: "SHARE · LEARN · SHAPE POLICY",
    },
    {
      title: "BUSINESS",
      line: "Brands. Innovation. Execution.",
      who: [
        "CEOs & founders",
        "Brands",
        "Technology",
        "Infrastructure",
        "Media & entertainment",
        "Professional services",
      ],
      verbs: "BUILD · PARTNER · CREATE OPPORTUNITIES",
    },
    {
      title: "CAPITAL",
      line: "Investment. Growth. Long-term impact.",
      who: [
        "Investors",
        "Family offices",
        "Funds",
        "Advisors",
        "Sporting entrepreneurs",
        "Impact capital",
      ],
      verbs: "BACK · SCALE · DRIVE IMPACT",
    },
  ],
  /** brochure-sourced — the closing statement, two halves converging */
  closingLeft: [
    { text: "THE VALUE IS NOT" },
    { text: "HOW MANY PEOPLE ATTEND." },
  ] satisfies readonly DisplayLine[],
  closingRight: [
    { text: "THE VALUE IS" },
    { text: "WHO YOU MEET.", lime: true },
  ] satisfies readonly DisplayLine[],
  cta: { label: "SEE THE FULL COMPOSITION", href: routes.theRoom },
} as const

export const screen06 = {
  id: "doorways",
  marker: { number: 5, label: "YOUR PLACE IN IT" },
  headline: [
    { text: "SAME ECOSYSTEM." },
    { text: "DIFFERENT DOORWAY." },
  ] satisfies readonly DisplayLine[],
  /** The six doorways — audiences.md §2 lines, verbatim; hrefs from the manifest. */
  doorways: [
    {
      audience: "FOUNDER OR BUSINESS LEADER",
      line: "Find the people shaping sport's next economy.",
      href: routes.forBusiness,
    },
    {
      audience: "ATHLETE, COACH OR PERFORMANCE PROFESSIONAL",
      line: "Find your next level.",
      href: routes.forAthletes,
    },
    {
      audience: "INVESTOR OR FAMILY OFFICE",
      line: "Find the opportunities behind India's sporting growth.",
      href: routes.forCapital,
    },
    {
      audience: "DEVELOPER, ARCHITECT OR OPERATOR",
      line: "Sport needs places. Meet the people who decide where they get built.",
      href: routes.forInfrastructure,
    },
    {
      audience: "GOVERNMENT, FEDERATION OR INSTITUTION",
      line: "Build the infrastructure around India's sporting future.",
      href: routes.forInstitutions,
    },
    { audience: "BRAND", line: "Own a territory, not a logo.", href: routes.forBrands },
  ],
} as const

export const screen07 = {
  id: "provenance",
  marker: { number: 6, label: "WHO IS BUILDING THIS" },
  headline: [
    { text: "ATHLIMA IS NOT" },
    { text: "AN EVENT COMPANY'S EVENT." },
  ] satisfies readonly DisplayLine[],
  /**
   * The provenance paragraph, approved verbatim — decision B3 (decisions-b3-provenance.md §4a) — with
   * "the room" carrying the weight, and ATHLIMA's own line beneath it.
   */
  body: [
    [
      "ATHLIMA is an ENSPORT Ventures initiative within the ENARR Group, bringing together sport, business, capital, institutions and ideas around the future of performance in India. Built on the Group's broader experience across finance, enterprise, industry, media and philanthropy, ATHLIMA exists to create ",
      { strong: "the room" },
      " where the people shaping Indian sport can connect, collaborate and build what comes next.",
    ],
    ["ATHLIMA is being built as an institution. The two days in December are its annual convergence point, not its purpose."],
  ] satisfies readonly RichParagraph[],
  cta: { label: "ABOUT ATHLIMA, ENSPORT AND ENARR", href: routes.about },
  /** Tier 3, outbound, restrained — B3 §3. Quietly beneath the institutional copy. */
  groupCta: { label: "Explore the Group", href: entity.groupUrl },
} as const

export const screen08 = {
  id: "next-generation",
  marker: { number: 7, label: "ATHLIMA 20" },
  headline: [
    { text: "TWENTY ATHLETES." },
    { text: "TWENTY SPORTS." },
    { text: "ONE FUTURE.", lime: true },
  ] satisfies readonly DisplayLine[],
  /** brochure-sourced — the philosophy, locked */
  pullLine: [
    "Do not wait until they become champions to tell their story.",
    "Tell it while they are becoming one.",
  ],
  body: [
    "ATHLIMA 20 celebrates India's most exceptional emerging athletes — twenty individuals across twenty sporting disciplines who embody the nation's next chapter in sport.",
    "Selection is independent.",
  ],
  disciplines,
  closing: [{ text: "TOMORROW PLAYS HERE." }] satisfies readonly DisplayLine[],
  cta: { label: "SEE ATHLIMA 20", href: routes.athlima20 },
} as const

export const screen09 = {
  id: "invitation",
  headline: [{ text: "THE ROOM IS 350 PEOPLE." }] satisfies readonly DisplayLine[],
  /** Decision A1 — no application. The locked room line (CLAUDE.md Part II) carries the close. */
  sub: ["Curated, not crowded. Invitation-led.", "That is the point."],
  detail: `${site.datesLabel}  ·  ${site.venueLabel}`,
  lockup: [
    { text: "THE BUSINESS OF SPORT." },
    { text: "THE FUTURE OF INDIA.", lime: true },
  ] satisfies readonly DisplayLine[],
  emotional: { label: "ENTER ATHLIMA", href: routes.theWorld },
  /** Decision A2 — the one commercial action; there is no guest application (A1). */
  functional: { label: "BUILD WITH ATHLIMA", href: routes.partner },
} as const
