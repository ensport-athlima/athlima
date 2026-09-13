import { useId } from "react"
import { cn } from "@/lib/cn"
import {
  ATHLIMAX_ARTWORK,
  SYMPOSIUM_ARTWORK,
  ACTIV8_ARTWORK,
  AFTERHOURS_ARTWORK,
  type IPArtwork,
} from "./ip-mark-artwork"

/**
 * THE SIX IP MARKS — artwork, not type (typography.md §1). Placed as inline SVG with a real <title>;
 * letterforms take currentColor, the accent is the brand lime (ATHLIMAX's X, THE SYMPOSIUM's final M,
 * ACTIV8's 8) or, for AFTERHOURS alone, the dusk gradient — the one gradient in the system, and it
 * belongs to this wordmark (colour.md §4).
 *
 * DEVELOPMENT PLACEHOLDERS (B2): the four vectors are traces of the supplied raster —
 * 05_MEDIA/logos/vector/README.md — replaced path for path when the brand owner's originals arrive.
 *
 * [TO VERIFY — B2 — TYPESET FALLBACK] ATHLIMA CONNECT and ATHLIMA 20 have no artwork at all, not even
 * raster; nothing can be traced. Until a designer draws them they are set in the wordmark-adjacent voice
 * — a flagged, temporary breach of typography.md §1, marked `data-typeset-fallback`. When each lock-up
 * lands, its entry in ARTWORK below is filled and the fallback goes.
 */
export type IPId = "athlimax" | "symposium" | "activ8" | "afterhours" | "connect" | "athlima20"

export const IP_NAMES: Record<IPId, string> = {
  athlimax: "ATHLIMAX",
  symposium: "THE SYMPOSIUM",
  activ8: "ACTIV8",
  afterhours: "AFTERHOURS",
  connect: "ATHLIMA CONNECT",
  athlima20: "ATHLIMA 20",
}

const ARTWORK: Partial<Record<IPId, IPArtwork>> = {
  athlimax: ATHLIMAX_ARTWORK,
  symposium: SYMPOSIUM_ARTWORK,
  activ8: ACTIV8_ARTWORK,
  afterhours: AFTERHOURS_ARTWORK,
}

export interface IPMarkProps {
  ip: IPId
  decorative?: boolean
  className?: string
}

function Artwork({
  ip,
  artwork,
  decorative,
  className,
}: {
  ip: IPId
  artwork: IPArtwork
  decorative: boolean
  className?: string
}) {
  // A mark can appear several times on one page (nav panel, portals, footer); the gradient id must not.
  const gradientId = `dusk-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`
  const dusk = ip === "afterhours"
  const viewBoxHeight = Number(artwork.viewBox.split(" ")[3])
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={artwork.viewBox}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : IP_NAMES[ip]}
      className={cn("block w-auto max-w-full self-start", className)}
      // Sized by the surrounding font-size: the principal word's cap height = 1em, so call sites size a
      // mark exactly as they size type (text-display-md, text-label …). Geometry, not a design value.
      style={{ height: `${(viewBoxHeight / artwork.cap).toFixed(3)}em` }}
    >
      {decorative ? null : <title>{IP_NAMES[ip]}</title>}
      {dusk ? (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--dusk-violet)" />
            <stop offset="55%" stopColor="var(--dusk-indigo)" />
            <stop offset="100%" stopColor="var(--dusk-blue)" />
          </linearGradient>
        </defs>
      ) : null}
      <g fill="currentColor" transform={artwork.transform}>
        {artwork.body.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      {/* The lime accent yields to currentColor inside the AFTERHOURS page (decision D15) — a one-colour
          rendering of the mark, never a recolouring of it. */}
      <g fill={dusk ? `url(#${gradientId})` : "var(--mark-accent, var(--lime))"} transform={artwork.transform}>
        {artwork.accent.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  )
}

export function IPMark({ ip, decorative = false, className }: IPMarkProps) {
  const artwork = ARTWORK[ip]
  if (artwork) {
    return <Artwork ip={ip} artwork={artwork} decorative={decorative} className={className} />
  }
  return (
    <span
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : IP_NAMES[ip]}
      data-typeset-fallback
      className={cn("wide inline-block leading-none tracking-wider", className)}
    >
      {IP_NAMES[ip]}
    </span>
  )
}
