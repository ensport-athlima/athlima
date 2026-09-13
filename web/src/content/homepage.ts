/**
 * Homepage copy — typed constants sourced from 04_CONTENT/homepage.md, verbatim
 * (06_BUILD/component-rules.md §3: a block never hardcodes copy). Screen by screen; each screen is
 * added as it is built. Art-directed line breaks are the content's decision, not the container's.
 */
import type { DisplayLine } from "@/components/primitives/Display"
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
