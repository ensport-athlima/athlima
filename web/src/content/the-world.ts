/**
 * /the-world — typed constants sourced from 04_CONTENT/the-world.md, verbatim.
 */
import type { DisplayLine } from "@/components/primitives/Display"
import { routes } from "@/lib/routes"
import { site } from "./site"
import { screen04 } from "./homepage"

export const theWorld = {
  meta: {
    title: "The World",
    description:
      "The ecosystem, the five pillars and the six experiences of ATHLIMA — India's Festival of Sport, Business & Performance, 14–15 December 2026, The St. Regis Mumbai.",
  },
  entry: {
    id: "entry",
    eyebrow: "THE WORLD",
    /** brochure-sourced, p04 */
    headline: [
      { text: "MULTIPLE IPs." },
      { text: "ONE CONNECTED", lime: true },
      { text: "ECOSYSTEM.", lime: true },
    ] satisfies readonly DisplayLine[],
    /** The approved one-paragraph description — positioning.md §9, verbatim. "350" follows B1. */
    lead: "ATHLIMA is India's Festival of Sport, Business & Performance — a curated, invitation-led platform built by ENSPORT Ventures within The ENARR Group. Across two days at The St. Regis Mumbai, it brings together 350 of the people who build, equip, enable, perform and govern Indian sport: athletes and federations, government and institutions, developers and investors, technology companies and brands. Through six connected experiences — ATHLIMAX, The Symposium, ACTIV8, Afterhours, ATHLIMA Connect and ATHLIMA 20 — it creates the conditions for relationships that Indian sport currently has no reliable way of forming. The ambition is not to build the biggest sporting event in India. It is to build one of the most consequential rooms in Indian sport.",
    emotional: { label: "SEE THE WHOLE ECOSYSTEM", href: "#ecosystem" },
    functional: { label: "EXPLORE THE SIX", href: "#portals" },
  },
  pillars: {
    id: "ecosystem",
    marker: { number: 1, label: "THE ECOSYSTEM" },
    /** brochure-sourced — brand-pillars.md §4 */
    headline: [
      { text: "ONE ECOSYSTEM." },
      { text: "FIVE DIMENSIONS." },
      { text: "ONE PLATFORM" },
      { text: "DESIGNED TO" },
      { text: "CONNECT THEM." },
    ] satisfies readonly DisplayLine[],
    body: "These are not themes. They are the five parts of the sporting economy, and every partner, every guest, every session and every piece of ATHLIMA's thinking is classified by them. A developer can follow BUILD through the whole platform. A federation can follow GOVERN.",
  },
  portals: {
    id: "portals",
    marker: { number: 2, label: "THE SIX" },
    intro: [
      { text: "SIX EXPERIENCES." },
      { text: "ONE PLATFORM." },
    ] satisfies readonly DisplayLine[],
    sub: screen04.sub,
    portals: screen04.portals,
  },
  connection: {
    id: "connection",
    marker: { number: 3, label: "HOW THEY CONNECT" },
    headline: [{ text: "SIX DOORS." }, { text: "ONE BUILDING." }] satisfies readonly DisplayLine[],
    body: [
      "The six are not a programme. They are one route through one room.",
      "A conversation that starts in ATHLIMA Connect, before anyone arrives, continues on the ATHLIMAX floor. It is tested on the Symposium stage, felt at ACTIV8, deepened at Afterhours — and it outlasts December in ATHLIMA 20, where the next generation is already being told its story.",
      'Every one of them is classified by the same five pillars. Every one of them puts the same four groups in the same room. That is what "connected" means here: not a theme, but a structure.',
    ],
    /** brochure-sourced — positioning.md §3 */
    pullLine: [
      { text: "THE ECOSYSTEM IS ACTIVE." },
      { text: "BUT NOT CONNECTED.", lime: true },
    ] satisfies readonly DisplayLine[],
  },
  twoDays: {
    id: "two-days",
    marker: { number: 4, label: "THE TWO DAYS" },
    headline: [
      { text: "14–15 DECEMBER 2026." },
      { text: "THE ST. REGIS MUMBAI." },
    ] satisfies readonly DisplayLine[],
    /** What the brochures settle, and nothing they do not. The day-by-day flow is [TO VERIFY] and absent. */
    facts: [
      { term: "Where", detail: `${site.venue}, ${site.floor}.` },
      { term: "When", detail: `Two days, ${site.dates}.` },
      {
        term: "The day",
        detail:
          "ATHLIMAX, The Symposium, ACTIV8, ATHLIMA Connect — running as one floor, not a schedule of rooms.",
      },
      { term: "The night", detail: "AFTERHOURS." },
      { term: "The close", detail: "ATHLIMA 20." },
    ],
    cta: { label: "THE TWO DAYS", href: routes.programme },
  },
  invitation: {
    id: "invitation",
    /** brochure-sourced, p03 */
    headline: [
      { text: "ONE ROOM." },
      { text: "ONE ECOSYSTEM." },
      { text: "ONE SHARED FUTURE", lime: true },
      { text: "FOR SPORT.", lime: true },
    ] satisfies readonly DisplayLine[],
    sub: ["The room is 350 people. Who is in it matters more than how many."],
    tertiary: { label: "SEE THE FULL COMPOSITION", href: routes.theRoom },
  },
} as const
