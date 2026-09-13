/**
 * The locked facts (01_STRATEGY/website-thesis.md §2). Typed constants sourced from the brief —
 * fixed marketing copy lives here, not in components (06_BUILD/component-rules.md §3).
 * Nothing in this file is a claim that needs confirmation; anything that does lives in the CMS and
 * ships only when confirmed.
 */
export const site = {
  name: "ATHLIMA",
  descriptor: "India's Festival of Sport, Business & Performance",
  proposition: "THE BUSINESS OF SPORT. THE FUTURE OF INDIA.",
  promise: "CONNECT · COLLABORATE · ELEVATE",
  edition: "ATHLIMA 2026",
  dates: "14–15 December 2026",
  datesLabel: "14–15 DECEMBER 2026",
  venue: "The St. Regis Mumbai",
  venueLabel: "THE ST. REGIS MUMBAI",
  floor: "9th floor",
  domain: "athlima.in",
  /** The relationship, as a sentence — decision B3 (08_OPERATIONS/decisions-b3-provenance.md §4a, §5). */
  builtBy: "ATHLIMA is an ENSPORT Ventures initiative within the ENARR Group.",
  /** The institutional line (B3 §4c). The middot is a middot. */
  institutionalLine: "An ENSPORT Ventures initiative · ENARR Group",
  diagnosis: "THE ECOSYSTEM IS ACTIVE. BUT NOT CONNECTED.",
  /** ISO-8601, Asia/Kolkata. For Event JSON-LD. */
  startDate: "2026-12-14",
  endDate: "2026-12-15",
} as const

/**
 * The entity — decision B3 (08_OPERATIONS/decisions-b3-provenance.md §1–§3). The full legal name and
 * the CIN appear in the statutory line and the legal pages only; running copy says "ENSPORT Ventures".
 *
 * [TO VERIFY — B3a] The registered office per the MCA record, a telephone number and an email address
 * are required on the site by s.12(3)(c) of the Companies Act 2013. Until supplied, `statutory` has no
 * such fields and the footer renders the two lines it can (B3b). The address below is the corporate
 * office — it is never labelled "Registered Office" until B3a confirms it is.
 */
export const entity = {
  legalName: "ENSPORT Ventures Private Limited",
  cin: "U93110MH2026PTC474328",
  group: "ENARR Group",
  groupUrl: "https://www.enarr.com",
  corporateOffice: {
    label: "Corporate Office",
    lines: ["324, A to Z Estate, G K Marg", "Lower Parel West, Mumbai – 400013", "Maharashtra, India"],
  },
} as const

export const pillarsInOrder = ["BUILD", "EQUIP", "ENABLE", "PERFORM", "GOVERN"] as const

export const ips = [
  { name: "ATHLIMAX", role: "THE MARKETPLACE" },
  { name: "THE SYMPOSIUM", role: "THE IDEAS" },
  { name: "ACTIV8", role: "THE EXPERIENCE" },
  { name: "AFTERHOURS", role: "THE CULTURE" },
  { name: "ATHLIMA CONNECT", role: "THE RELATIONSHIPS" },
  { name: "ATHLIMA 20", role: "THE NEXT GENERATION" },
] as const

/** ATHLIMA 20 — the twenty disciplines, locked (brand-strategy.md §4). */
export const disciplines = [
  "ATHLETICS",
  "SWIMMING",
  "FOOTBALL",
  "CRICKET",
  "HOCKEY",
  "TENNIS",
  "BADMINTON",
  "TABLE TENNIS",
  "BOXING",
  "WRESTLING",
  "WEIGHTLIFTING",
  "SHOOTING",
  "ARCHERY",
  "GYMNASTICS",
  "CYCLING",
  "ROWING",
  "MARTIAL ARTS",
  "EQUESTRIAN",
  "SURFING",
  "PARA SPORT",
] as const
