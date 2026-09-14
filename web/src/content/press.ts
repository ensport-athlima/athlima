/**
 * /press — typed constants sourced from 04_CONTENT/press.md, verbatim. The boilerplate is byte-for-byte
 * 01_STRATEGY/positioning.md §9. Honoured by omission: the press kit (B2 — the marks are traced
 * placeholders, not distributable brand assets; no photography exists) and the press contact (four
 * [TO VERIFY]s). "350" follows B1.
 */
import { routes } from "@/lib/routes"
import { entity, site, pillarsInOrder, ips } from "./site"

export const press = {
  meta: {
    title: "Press",
    description: "The facts, in one place. Everything a journalist needs to write about ATHLIMA accurately, without having to ask: the fact sheet and the approved boilerplate.",
  },
  entry: {
    eyebrow: "PRESS",
    headline: [{ text: "THE FACTS," }, { text: "IN ONE PLACE." }],
    lead: "Everything a journalist needs to write about ATHLIMA accurately, without having to ask.",
  },
  factSheet: {
    marker: "FACT SHEET",
    facts: [
      { term: "What", detail: `${site.name} — ${site.descriptor}. A curated, invitation-led platform for the people who build, equip, enable, perform and govern Indian sport.` },
      { term: "When", detail: site.dates },
      { term: "Where", detail: `${site.venue}, ${site.floor}` },
      { term: "Edition", detail: `The first. ${site.edition}.` },
      { term: "The room", detail: "350 people, across four groups: sport, institutions, business and capital. By invitation." },
      { term: "The six experiences", detail: ips.map((ip) => `${ip.name} (${ip.role.toLowerCase()})`).join(" · ") },
      { term: "The five pillars", detail: pillarsInOrder.join(" · ") },
      { term: "Built by", detail: `${entity.legalName} (CIN ${entity.cin}), within the ${entity.group}. In running copy: an ENSPORT Ventures initiative within the ENARR Group.` },
      { term: "Website", detail: site.domain },
    ],
  },
  boilerplate: {
    marker: "BOILERPLATE",
    lead: "Three lengths. Approved, verbatim, and not to be reworded.",
    copy: "COPY",
    copied: "COPIED",
    /** positioning.md §9 — byte for byte. */
    items: [
      { label: "FIVE WORDS", text: "The room where Indian sport meets." },
      { label: "ONE SENTENCE", text: "ATHLIMA is a curated, invitation-led platform bringing together 350 of the most consequential people across Indian sport, business, government and capital — in Mumbai, on 14–15 December 2026." },
      { label: "ONE PARAGRAPH", text: "ATHLIMA is India's Festival of Sport, Business & Performance — a curated, invitation-led platform built by ENSPORT Ventures within The ENARR Group. Across two days at The St. Regis Mumbai, it brings together 350 of the people who build, equip, enable, perform and govern Indian sport: athletes and federations, government and institutions, developers and investors, technology companies and brands. Through six connected experiences — ATHLIMAX, The Symposium, ACTIV8, Afterhours, ATHLIMA Connect and ATHLIMA 20 — it creates the conditions for relationships that Indian sport currently has no reliable way of forming. The ambition is not to build the biggest sporting event in India. It is to build one of the most consequential rooms in Indian sport." },
    ],
  },
  path: routes.press,
} as const
