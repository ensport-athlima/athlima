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
  builtBy: "An IP of ENSPORT Ventures Pvt. Ltd., within The ENARR Group.",
  diagnosis: "THE ECOSYSTEM IS ACTIVE. BUT NOT CONNECTED.",
  /** ISO-8601, Asia/Kolkata. For Event JSON-LD. */
  startDate: "2026-12-14",
  endDate: "2026-12-15",
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
