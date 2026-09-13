/**
 * The five-value `phase` enum (01_STRATEGY/digital-strategy.md §5; brand-strategy.md §8).
 * Every date-sensitive component takes an explicit `phase` prop typed to this — never to a
 * three-state simplification. The value is CMS-driven; switching phase is a content operation.
 * A site that reads "14–15 December 2026" in the future tense on 20 December has failed.
 */
export const PHASES = ["foundation", "build", "approach", "live", "legacy"] as const
export type Phase = (typeof PHASES)[number]

/** The three broad states the five phases collapse into, for copy that only needs tense. */
export type PhaseState = "pre-event" | "live" | "post-event"

export function phaseState(phase: Phase): PhaseState {
  if (phase === "live") return "live"
  if (phase === "legacy") return "post-event"
  return "pre-event"
}

export function isPhase(value: unknown): value is Phase {
  return typeof value === "string" && (PHASES as readonly string[]).includes(value)
}
