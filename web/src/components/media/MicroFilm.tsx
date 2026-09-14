"use client"

import { useEffect, useRef, useState } from "react"
import { MOTION } from "@/motion/registry"
import type { FilmAsset } from "@/lib/media"
import { mediaUrl } from "@/lib/media"
import { cn } from "@/lib/cn"

/**
 * MicroFilm (components.md Tier 2; imagery.md §5): a 5–8 s muted loop. Poster-first, `preload="none"`,
 * IntersectionObserver-gated — off-screen video does not download and pauses when scrolled away.
 * Poster only under reduced motion, save-data and 2g. Silent by definition. Decorative: the poster's
 * alt is empty and the element is hidden from assistive technology; the text over it carries meaning.
 */
interface NetworkInformationLike {
  saveData?: boolean
  effectiveType?: string
}

export function posterOnly(): boolean {
  if (typeof window === "undefined") return true
  if (window.matchMedia(MOTION.reduced).matches) return true
  const c = (navigator as Navigator & { connection?: NetworkInformationLike }).connection
  if (c?.saveData) return true
  if (c?.effectiveType === "2g" || c?.effectiveType === "slow-2g") return true
  return false
}

export function MicroFilm({ film, className }: { film: FilmAsset; className?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (posterOnly()) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setEnabled(true)
            void el.play().catch(() => {})
          } else {
            el.pause()
          }
        }
      },
      { rootMargin: "200px 0px", threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      aria-hidden="true"
      muted
      playsInline
      loop
      preload="none"
      poster={mediaUrl(film.poster, 1920)}
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
      style={{ objectPosition: film.poster.focal ? `${film.poster.focal.x * 100}% ${film.poster.focal.y * 100}%` : undefined }}
    >
      {/* Sources attach only once in view, so nothing downloads for a portal never scrolled to. */}
      {enabled ? (
        <>
          {film.webm ? <source src={film.webm} type="video/webm" /> : null}
          <source src={film.mp4} type="video/mp4" />
        </>
      ) : null}
    </video>
  )
}
