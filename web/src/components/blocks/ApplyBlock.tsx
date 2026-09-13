import { Display, type DisplayLine } from "@/components/primitives/Display"
import { Button } from "@/components/primitives/Button"
import { AthlimaA } from "@/components/marks/AthlimaA"
import { Reveal } from "@/motion/Reveal"
import { cn } from "@/lib/cn"

/**
 * BLOCK: ApplyBlock
 * ROLE IN EXPERIENCE: Conversion — the closing invitation. One emotional CTA, one functional CTA — the
 *   page's only Tier-2 pair (ctas.md §6). The calmest close on the page (page-hierarchy.md §7).
 * POSITION: Homepage screen 09; the last block of every destination page.
 * PRIMARY CTA: the functional CTA (primary button). Strings come from ctas.md §1 via the caller.
 * SOURCE OF TRUTH: 04_CONTENT/homepage.md screen 09; 04_CONTENT/ctas.md §1.
 * MOTION: the A reveals with EASE_ARCH / SLOW (transform + opacity — a stroke draw on scroll would animate
 *   stroke-dashoffset, which the scroll rule forbids); REVEAL-LINES on the statement and the lock-up;
 *   REVEAL on the rest. Nothing else. Server Component.
 */
export interface ApplyBlockProps {
  id: string
  /** The A, drawn once, as light. Homepage only by default. */
  showMark?: boolean
  headline: readonly DisplayLine[]
  sub?: readonly string[]
  detail?: string
  lockup?: readonly DisplayLine[]
  emotional?: { label: string; href: string }
  functional?: { label: string; href: string }
  /** A Tier-3 inline link instead of a Tier-2 pair — for pages whose pair lives elsewhere. */
  tertiary?: { label: string; href: string }
  className?: string
}

export function ApplyBlock({
  id,
  showMark = false,
  headline,
  sub,
  detail,
  lockup,
  emotional,
  functional,
  tertiary,
  className,
}: ApplyBlockProps) {
  const headingId = `${id}-headline`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("bg-void px-margin py-section-dramatic", className)}
    >
      <div className="mx-auto flex max-w-content-max flex-col items-center text-center">
        {showMark ? (
          <Reveal ease="arch" duration="slow" className="text-lime">
            {/* width = min(24vw, 14rem): once per viewport, as light, never with a glow (imagery.md §6). */}
            <div style={{ width: "min(24vw, 14rem)" }}>
              <AthlimaA variant="filled" decorative />
            </div>
          </Reveal>
        ) : null}

        <Reveal variant="lines" className={cn(showMark && "mt-16")}>
          <Display as="h2" id={headingId} size="lg" lines={headline} />
        </Reveal>

        {sub ? (
          <Reveal className="mt-8 max-w-[30em] text-balance">
            {sub.map((line) => (
              <p key={line} className="text-body-lg text-ink-100">
                {line}
              </p>
            ))}
          </Reveal>
        ) : null}

        {detail ? (
          <Reveal className="mt-8">
            <p className="label">{detail}</p>
          </Reveal>
        ) : null}

        {emotional || functional ? (
          <Reveal className="mt-16 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
            {emotional ? (
              <Button variant="secondary" href={emotional.href}>
                {emotional.label}
              </Button>
            ) : null}
            {functional ? (
              <Button variant="primary" href={functional.href}>
                {functional.label}
              </Button>
            ) : null}
          </Reveal>
        ) : null}
        {tertiary ? (
          <Reveal className="mt-12">
            <Button variant="ghost" href={tertiary.href}>
              {tertiary.label}
            </Button>
          </Reveal>
        ) : null}

        {lockup ? (
          <Reveal variant="lines" className="mt-24">
            <Display as="p" size="md" lines={lockup} />
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
