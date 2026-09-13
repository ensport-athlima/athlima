import { cn } from "@/lib/cn"

/**
 * THE ATHLIMA A DEVICE (imagery.md §6) — artwork, not type. Two variants from the same geometry:
 *   filled  — the device as a solid form
 *   stroke  — one centreline path, stroked; the entry sequence draws it with stroke-dasharray/offset
 *             (motion.md §7, decision D1). The miter join reconstructs the apex exactly.
 * Once per viewport, never rotated, never with a glow, never a bullet.
 *
 * DEVELOPMENT PLACEHOLDER (B2): geometry measured from the brochure and rebuilt as exact symmetric
 * geometry — 05_MEDIA/logos/vector/README.md. Replaced when the brand owner's vector arrives.
 */
export interface AthlimaAProps {
  variant?: "filled" | "stroke"
  title?: string
  decorative?: boolean
  className?: string
  /** stroke variant only — forwarded so the overlay can address the path. */
  pathRef?: React.Ref<SVGPathElement>
  /** stroke variant only — the initial dash state, so the first paint is empty before GSAP runs. */
  pathStyle?: React.CSSProperties
}

export const ATHLIMA_A_VIEWBOX = "0 0 460 348"
/** Length of the stroke centreline (two legs of √(181² + 271.5²)), for stroke-dasharray. */
export const ATHLIMA_A_STROKE_LENGTH = 652.6

export function AthlimaA({
  variant = "filled",
  title = "ATHLIMA",
  decorative = false,
  className,
  pathRef,
  pathStyle,
}: AthlimaAProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={ATHLIMA_A_VIEWBOX}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : title}
      className={cn("block h-auto w-full", className)}
    >
      {decorative ? null : <title>{title}</title>}
      {variant === "stroke" ? (
        <path
          ref={pathRef}
          style={pathStyle}
          d="M49 348 L230 76.5 L411 348"
          fill="none"
          stroke="currentColor"
          strokeWidth="82"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
        />
      ) : (
        <path fill="currentColor" d="M230 0 460 348 360 348 230 153 98 348 0 348Z" />
      )}
    </svg>
  )
}
