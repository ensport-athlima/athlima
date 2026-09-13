import { cn } from "@/lib/cn"

/**
 * THE SIX IP MARKS.
 *
 * [TO VERIFY — B2 — TYPESET FALLBACK] typography.md §1: wordmarks are artwork, never typeset. This
 * component breaks that rule deliberately and temporarily: no usable vector exists for any of the six
 * (ATHLIMAX / THE SYMPOSIUM / ACTIV8 / AFTERHOURS are 300–1600px rasters; ATHLIMA CONNECT and ATHLIMA 20
 * have no artwork at all). Until the brand owner's vectors arrive, each mark is set in the
 * wordmark-adjacent voice with the brand-strategy accent rules (brand-strategy.md §2): the final X of
 * ATHLIMAX, the final M of THE SYMPOSIUM and the 8 of ACTIV8 are lime; AFTERHOURS is "AFTER" in paper and
 * "HOURS" in the dusk gradient — the one gradient in the system, and it belongs to this wordmark only.
 * When a vector lands, that IP's case below returns its SVG component; nothing else changes.
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

export interface IPMarkProps {
  ip: IPId
  decorative?: boolean
  className?: string
}

function Glyphs({ ip }: { ip: IPId }) {
  switch (ip) {
    case "athlimax":
      return (
        <>
          ATHLIMA<span className="text-lime">X</span>
        </>
      )
    case "symposium":
      return (
        <>
          THE SYMPOSIU<span className="text-lime">M</span>
        </>
      )
    case "activ8":
      return (
        <>
          ACTIV<span className="text-lime">8</span>
        </>
      )
    case "afterhours":
      return (
        <>
          AFTER
          <span className="[background-image:var(--dusk-gradient)] bg-clip-text text-transparent">
            HOURS
          </span>
        </>
      )
    case "connect":
      return <>ATHLIMA CONNECT</>
    case "athlima20":
      return <>ATHLIMA 20</>
  }
}

export function IPMark({ ip, decorative = false, className }: IPMarkProps) {
  return (
    <span
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : IP_NAMES[ip]}
      data-typeset-fallback
      className={cn("wide inline-block leading-none tracking-wider whitespace-nowrap", className)}
    >
      <Glyphs ip={ip} />
    </span>
  )
}
