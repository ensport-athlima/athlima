/**
 * /programme — typed constants sourced from 04_CONTENT/programme.md, verbatim. What the brochures
 * settle, and nothing beyond it: no times, no sessions, no voices, no invented schedule.
 *
 * Honoured by omission: the day-by-day flow; "the lawn" (venue nomenclature unverified); the ATHLIMA 20
 * "close" row (recognition on Day 2 is gated); the FloorPlan block (B1 — 22 spaces vs six pavilions —
 * and nomenclature; an honest plan needs the venue's own drawing). "Six pavilions" is the B1 default.
 */
import type { DisplayLine } from "@/components/primitives/Display"
import { routes } from "@/lib/routes"
import { site } from "./site"

export const programme = {
  meta: {
    title: "The Programme",
    description: `Two days. One floor. ${site.dates}, ${site.venue}, ${site.floor}. Six experiences, running as one room rather than a schedule of separate halls.`,
  },
  entry: {
    id: "entry",
    eyebrow: "THE PROGRAMME",
    headline: [{ text: "TWO DAYS." }, { text: "ONE FLOOR." }] satisfies readonly DisplayLine[],
    lead: `${site.dates}. ${site.venue}, ${site.floor}. Six experiences, running as one room rather than as a schedule of separate halls.`,
  },
  shape: {
    id: "the-two-days",
    marker: { number: 1, label: "THE TWO DAYS" },
    headline: [{ text: "THE STRUCTURE." }, { text: "AS SETTLED." }] satisfies readonly DisplayLine[],
    /** The structure, as settled by the brochures — and nothing beyond it. */
    facts: [
      { term: "The floor", detail: "ATHLIMAX — the marketplace, six pavilions." },
      { term: "The stage", detail: "THE SYMPOSIUM — six themes, six formats." },
      { term: "Outdoors", detail: "ACTIV8 — six zones." },
      { term: "Throughout", detail: "ATHLIMA CONNECT — meetings pre-arranged for Founding Partners." },
      { term: "The night", detail: "AFTERHOURS." },
    ],
    body: [
      "The programme is confirmed in stages, and this page says only what is confirmed. When sessions are settled, they appear here. When voices are confirmed — in writing, by the people themselves — they appear beside the sessions they belong to. Not before.",
    ],
  },
  floor: {
    id: "the-floor",
    marker: { number: 2, label: "THE FLOOR" },
    headline: [{ text: "ONE CONNECTED" }, { text: "ENVIRONMENT." }] satisfies readonly DisplayLine[],
    lead: `The ${site.floor} of ${site.venue}: the marketplace floor, the Symposium stage, the ACTIV8 outdoors, the Afterhours terrace.`,
    zones: [
      { title: "THE MARKETPLACE FLOOR", line: "ATHLIMAX", href: routes.athlimax },
      { title: "THE SYMPOSIUM STAGE", line: "THE SYMPOSIUM", href: routes.symposium },
      { title: "OUTDOORS", line: "ACTIV8", href: routes.activ8 },
      { title: "THE TERRACE", line: "AFTERHOURS", href: routes.afterhours },
    ],
  },
  night: {
    id: "the-night",
    marker: { number: 3, label: "AFTERHOURS" },
    /** In paper, not the gradient — the gradient belongs to the wordmark on /afterhours only. */
    headline: [{ text: "THE DAY INSPIRES." }, { text: "THE NIGHT CELEBRATES." }] satisfies readonly DisplayLine[],
    body: ["The evening is its own experience — dining, music, culture and the Runway."],
    cta: { label: "SEE THE EVENING", href: `${routes.afterhours}#evening` },
  },
  invitation: {
    id: "invitation",
    headline: [{ text: "THE ROOM IS" }, { text: "350 PEOPLE.", lime: true }] satisfies readonly DisplayLine[],
    /** The second of the two places it is said (decision A4). No CTA. */
    statement: [{ text: "ATHLIMA IS BY INVITATION." }] satisfies readonly DisplayLine[],
  },
  path: routes.programme,
} as const
