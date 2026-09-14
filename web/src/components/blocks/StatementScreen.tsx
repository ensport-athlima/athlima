import type { ReactNode } from "react"
import { Display, type DisplayLine } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Eyebrow } from "@/components/primitives/Eyebrow"
import { Button } from "@/components/primitives/Button"
import { Scrim } from "@/components/media/Scrim"
import { MediaSlot } from "@/components/media/MediaSlot"
import type { SlotName } from "@/content/media"
import { Reveal } from "@/motion/Reveal"
import { cn } from "@/lib/cn"

/**
 * BLOCK: StatementScreen
 * ROLE IN EXPERIENCE: Orientation — a single display statement, given room. The workhorse
 *   (components.md): the pivot on the homepage (screen 03), the entry and the statement sections of
 *   /the-world, and every page that needs one sentence at the largest size.
 * POSITION: Homepage screen 03 first; everywhere after.
 * PRIMARY CTA: none of its own; the `entry` variant can carry a page's Tier-2 pair when the page's job
 *   is to route (the-world.md §01).
 * SOURCE OF TRUTH: the calling page's content file.
 * MOTION: REVEAL on the marker/eyebrow; REVEAL (SLOW, EASE_ARCH) on the mark; REVEAL-LINES on the
 *   statement and the sub-line; REVEAL on lead/body/CTAs; REVEAL (items) on the footer slot. Via
 *   <Reveal>; this block is a Server Component.
 * LAYOUT: `editorial` — L3, columns 2–8; `centred` — L2, centred, for statements of two lines or fewer
 *   (grid.md §6); `entry` — L1 full bleed, 100svh, eyebrow top-left, statement in the lower half, a
 *   still-image slot behind (B2) with the scrim. Padding standard or dramatic.
 */
export interface StatementScreenProps {
  id: string
  variant?: "statement" | "entry"
  marker?: { number: number; label: string }
  eyebrow?: string
  /** The mark — supplied artwork placed as SVG. */
  mark?: ReactNode
  lines: readonly DisplayLine[]
  narrow?: readonly DisplayLine[]
  size?: "xl" | "lg" | "md"
  /** Sentence case — permitted at md only (typography.md §3): a question, a quoted fear. */
  uppercase?: boolean
  /** The heading level. Entry variants are h1; a statement that opens a sub-page (the model, the journey) is h1 too. */
  heading?: "h1" | "h2"
  /** Entry variant: the still behind the statement — a slot name from content/media.ts. */
  media?: SlotName
  sub?: readonly DisplayLine[]
  subNarrow?: readonly DisplayLine[]
  /** The sub-line is lime in full — screen 03 only (decision D14). */
  subWholeLime?: boolean
  /** A lead paragraph (body-lg) beneath the statement. */
  lead?: string
  /** Body paragraphs (body) beneath the lead. */
  body?: readonly string[]
  /** The page's Tier-2 pair, where the entry's job is to route (the-world.md §01). */
  ctas?: {
    emotional?: { label: string; href: string }
    functional?: { label: string; href: string }
  }
  align?: "editorial" | "centred"
  padding?: "standard" | "dramatic"
  /**
   * Entry variant: the hero normally pads for the fixed site nav that overlays it. Beneath a secondary
   * nav (the PARTNER cluster) the page is already offset, so the hero pads as a section instead.
   */
  underSubNav?: boolean
  /** A footer slot beneath everything — e.g. the five-verb row, a pull line. [data-item] children stagger. */
  children?: ReactNode
  stagger?: "tight" | "loose"
  className?: string
}

export function StatementScreen({
  id,
  variant = "statement",
  marker,
  eyebrow,
  mark,
  lines,
  narrow,
  size = "lg",
  uppercase = true,
  heading,
  media,
  sub,
  subNarrow,
  subWholeLime = false,
  lead,
  body,
  ctas,
  align = "editorial",
  padding = "standard",
  underSubNav = false,
  children,
  stagger = "tight",
  className,
}: StatementScreenProps) {
  const centred = align === "centred"
  const entry = variant === "entry"
  const headingId = `${id}-statement`

  const inner = (
    <div
      className={cn(
        centred ? "flex flex-col items-center text-center" : "lg:col-start-2 lg:col-end-9",
      )}
    >
      {marker ? (
        <Reveal className={cn(centred && "flex justify-center")}>
          <SectionMarker number={marker.number} label={marker.label} />
        </Reveal>
      ) : null}
      {eyebrow ? (
        <Reveal>
          <Eyebrow wide>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}

      {mark ? (
        <Reveal ease="arch" duration="slow" className="mt-16 w-full max-w-4xl text-paper">
          {mark}
        </Reveal>
      ) : null}

      <Reveal
        variant="lines"
        className={cn(mark ? "mt-16" : entry ? "mt-auto pt-section-dense" : "mt-4")}
      >
        <Display
          as={heading ?? (entry ? "h1" : "h2")}
          id={headingId}
          size={size}
          lines={lines}
          narrow={narrow}
          uppercase={uppercase}
        />
      </Reveal>

      {sub ? (
        <Reveal variant="lines" className="mt-6">
          <Display as="p" size="md" lines={sub} narrow={subNarrow} wholeLime={subWholeLime} />
        </Reveal>
      ) : null}

      {lead ? (
        <Reveal className="mt-8 max-w-measure">
          <p className="text-body-lg text-ink-100">{lead}</p>
        </Reveal>
      ) : null}

      {body ? (
        <Reveal className="stack-p mt-8 max-w-measure">
          {body.map((p) => (
            <p key={p} className="text-body text-ink-100">
              {p}
            </p>
          ))}
        </Reveal>
      ) : null}

      {ctas && (ctas.emotional || ctas.functional) ? (
        <Reveal
          className={cn(
            "mt-12 flex flex-col gap-4 sm:flex-row sm:items-center",
            centred && "sm:justify-center",
          )}
        >
          {ctas.emotional ? (
            <Button variant="secondary" href={ctas.emotional.href}>
              {ctas.emotional.label}
            </Button>
          ) : null}
          {ctas.functional ? (
            <Button variant="primary" href={ctas.functional.href}>
              {ctas.functional.label}
            </Button>
          ) : null}
        </Reveal>
      ) : null}

      {children ? (
        <Reveal variant="items" stagger={stagger} className="mt-24 w-full max-w-4xl">
          {children}
        </Reveal>
      ) : null}
    </div>
  )

  if (entry) {
    // The hero holds the eyebrow, the statement and the CTAs at 100svh; the lead and body follow in an
    // L3 editorial band beneath it (the-world.md §01: "L1 Full bleed, 100svh. Then L3 Editorial").
    return (
      <section id={id} aria-labelledby={headingId} className={cn("bg-void", className)}>
        <div
          className={cn(
            "relative flex flex-col",
            underSubNav ? "min-h-[calc(100svh-var(--nav-h)-var(--subnav-h))]" : "min-h-svh",
          )}
        >
          {/* THE STILL (B2): the page's entry slot — a single graded image, not a film. */}
          {media ? <MediaSlot name={media} sizes="100vw" priority /> : <div aria-hidden="true" className="absolute inset-0 bg-ink-950" />}
          <Scrim toward="bottom" />
          <div
            className={cn(
              "pb-hero relative z-20 flex flex-1 flex-col px-margin",
              underSubNav ? "pt-section-dense" : "pt-[calc(var(--nav-h)+var(--section-pad-dense))]",
            )}
          >
            <div className="mx-auto flex w-full max-w-content-max flex-1 flex-col">
              {eyebrow ? (
                <Reveal>
                  <Eyebrow wide>{eyebrow}</Eyebrow>
                </Reveal>
              ) : null}
              {mark ? (
                // The IP's mark, above the statement (experiences.md 01 ENTRY: "the mark, the line").
                <Reveal ease="arch" duration="slow" className="mt-8 text-display-md text-paper">
                  {mark}
                </Reveal>
              ) : null}
              <Reveal variant="lines" className="mt-auto pt-section-dense">
                <Display as="h1" id={headingId} size={size} lines={lines} narrow={narrow} />
              </Reveal>
              {sub ? (
                <Reveal variant="lines" className="mt-6">
                  <Display as="p" size="md" lines={sub} narrow={subNarrow} wholeLime={subWholeLime} />
                </Reveal>
              ) : null}
              {ctas && (ctas.emotional || ctas.functional) ? (
                <Reveal className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                  {ctas.emotional ? (
                    <Button variant="secondary" href={ctas.emotional.href}>
                      {ctas.emotional.label}
                    </Button>
                  ) : null}
                  {ctas.functional ? (
                    <Button variant="primary" href={ctas.functional.href}>
                      {ctas.functional.label}
                    </Button>
                  ) : null}
                </Reveal>
              ) : null}
            </div>
          </div>
        </div>
        {lead || body ? (
          <div className="px-margin py-section-standard">
            <div className="mx-auto max-w-content-max lg:grid lg:grid-cols-12 lg:gap-x-gutter">
              <div className="lg:col-start-2 lg:col-end-9">
                {lead ? (
                  <Reveal className="max-w-measure">
                    <p className="text-body-lg text-ink-100">{lead}</p>
                  </Reveal>
                ) : null}
                {body ? (
                  <Reveal className="stack-p mt-8 max-w-measure">
                    {body.map((p) => (
                      <p key={p} className="text-body text-ink-100">
                        {p}
                      </p>
                    ))}
                  </Reveal>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </section>
    )
  }

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "bg-void px-margin",
        padding === "dramatic" ? "py-section-dramatic" : "py-section-standard",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-content-max",
          !centred && "lg:grid lg:grid-cols-12 lg:gap-x-gutter",
        )}
      >
        {inner}
      </div>
    </section>
  )
}
