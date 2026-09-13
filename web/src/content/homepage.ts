/**
 * Homepage copy — typed constants sourced from 04_CONTENT/homepage.md, verbatim
 * (06_BUILD/component-rules.md §3: a block never hardcodes copy). Screen by screen; each screen is
 * added as it is built. Art-directed line breaks are the content's decision, not the container's.
 */
import type { DisplayLine } from "@/components/primitives/Display"
import type { Figure } from "@/components/blocks/ProofNumbers"
import { site } from "./site"

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
