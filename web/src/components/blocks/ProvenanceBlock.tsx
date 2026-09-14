import Image from "next/image"
import { Display, type DisplayLine } from "@/components/primitives/Display"
import { SectionMarker } from "@/components/primitives/SectionMarker"
import { Button } from "@/components/primitives/Button"
import { RichText, richToString, type RichParagraph } from "@/components/primitives/RichText"
import { Reveal } from "@/motion/Reveal"
import { cn } from "@/lib/cn"

/**
 * BLOCK: ProvenanceBlock
 * ROLE IN EXPERIENCE: Credibility — the screen that converts the institutional audience: there is a real
 *   institution behind this, not a promoter. Two of six journeys convert here.
 * POSITION: Homepage screen 07 — the site's one light section (data-surface="light"). Also /about.
 * PRIMARY CTA: Tier 3 — ABOUT ATHLIMA, ENSPORT AND ENARR → /about; beneath it, quieter, the outbound
 *   Explore the Group → enarr.com (decision B3 §3).
 * SOURCE OF TRUTH: 04_CONTENT/homepage.md screen 07; 08_OPERATIONS/decisions-b3-provenance.md §4a.
 * MOTION: REVEAL only. The calmest moment on the page.
 * MARKS: ENARR (navy and gold) and ENSPORT (gold and white) at their own colours, never recoloured,
 *   each on a --paper-warm plate (colour.md §1). They are the supplied raster, cut out with alpha —
 *   deliberately not traced: a single-colour trace would destroy two gradient marks, and a bad trace of
 *   someone else's corporate mark is worse than a clean raster (05_MEDIA/logos/vector/README.md). The
 *   one raster-mark exception on the site, recorded in components.md MARKS; replaced by the Group's
 *   vectors when they arrive (B2). The ENSPORT lock-up carries its own line — BUILT TO INSPIRE VICTORY
 *   — so the block does not repeat it.
 */
export interface ProvenanceBlockProps {
  id: string
  marker: { number: number; label: string }
  headline: readonly DisplayLine[]
  body: readonly RichParagraph[]
  /** The corporate office (decision B3 §2) — labelled Corporate Office, never Registered Office (B3a). */
  office?: { label: string; lines: readonly string[] }
  /** Homepage: ABOUT ATHLIMA, ENSPORT AND ENARR → /about. Absent on /about itself. */
  cta?: { label: string; href: string }
  groupCta: { label: string; href: string }
  className?: string
}

/** The 2× cut-outs (360px); next/image derives the 1× and the modern formats. Displayed at 180px. */
export const CORPORATE_MARKS = [
  // ENARR is navy and gold — 1.97 on --void, so it lives on a light plate (colour.md §1).
  { src: "/marks/enarr.png", alt: "The ENARR Group", width: 180, height: 126, plate: "light" },
  // ENSPORT is gold and white — it lives on black, whatever the surface around it.
  { src: "/marks/ensport.png", alt: "ENSPORT Ventures", width: 180, height: 94, plate: "dark" },
] as const

export function ProvenanceBlock({
  id,
  marker,
  headline,
  body,
  office,
  cta,
  groupCta,
  className,
}: ProvenanceBlockProps) {
  const headingId = `${id}-headline`
  return (
    <section
      id={id}
      data-surface="light"
      aria-labelledby={headingId}
      className={cn("bg-paper px-margin py-section-standard text-void", className)}
    >
      <div className="mx-auto max-w-content-max lg:grid lg:grid-cols-12 lg:gap-x-gutter">
        <Reveal className="lg:col-start-2 lg:col-end-9">
          <SectionMarker number={marker.number} label={marker.label} />
          <Display as="h2" id={headingId} size="md" lines={headline} className="mt-4" />

          <div className="stack-p mt-8 max-w-measure">
            {body.map((p) => (
              <p key={richToString(p)} className="text-body text-ink-700">
                <RichText runs={p} />
              </p>
            ))}
          </div>

          <ul className="mt-16 grid grid-cols-1 gap-gutter sm:grid-cols-2" aria-label="Built by">
            {CORPORATE_MARKS.map((m) => (
              <li
                key={m.src}
                className={cn(
                  "flex min-h-40 items-center justify-center px-8 py-8",
                  m.plate === "light" ? "bg-paper-warm" : "bg-void",
                )}
              >
                <Image
                  src={m.src}
                  alt={m.alt}
                  width={m.width}
                  height={m.height}
                  sizes="180px"
                  className="h-auto w-auto max-h-24"
                />
              </li>
            ))}
          </ul>

          {office ? (
            <address className="mt-8 text-caption text-ink-500 not-italic">
              <span className="label block text-ink-600">{office.label}</span>
              {office.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          ) : null}

          <div className="mt-12 flex flex-col items-start gap-6">
            {cta ? (
              <Button variant="ghost" href={cta.href}>
                {cta.label}
              </Button>
            ) : null}
            <a
              href={groupCta.href}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-8 items-center gap-2 text-body-sm text-ink-600 underline-offset-4 transition-colors duration-(--dur-fast) ease-sharp hover:text-void hover:underline"
            >
              {groupCta.label}
              <span aria-hidden="true">→</span>
              <span className="sr-only">(enarr.com, opens in a new tab)</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
