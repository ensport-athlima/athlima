"use client"

import { useEffect, useRef, useState } from "react"
import { posterOnly } from "./MicroFilm"
import type { FilmAsset } from "@/lib/media"
import { mediaUrl, objectPosition } from "@/lib/media"
import { cn } from "@/lib/cn"

/**
 * VideoHero (components.md Tier 2; imagery.md §5; decision D2): poster-first — the poster is rendered by
 * the server (MediaSlot) and is the LCP element; this component adds the film beside it after the page
 * has loaded, on idle, never before LCP. A native <video>: Mux HLS first (Safari, iOS), the MP4
 * rendition second (everyone else) — no player library. Pause control PAUSE FILM / PLAY FILM
 * (ctas.md §5): content that moves for longer than five seconds must be stoppable. Poster only under
 * reduced motion, save-data and 2g. Muted and captioned where there is speech.
 */
export function VideoHero({ film, labels, className }: { film: FilmAsset; labels: { pause: string; play: string }; className?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (posterOnly()) return
    let idle = 0
    const start = () => {
      idle = typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(() => setReady(true), { timeout: 2000 })
        : window.setTimeout(() => setReady(true), 500)
    }
    if (document.readyState === "complete") start()
    else window.addEventListener("load", start, { once: true })
    return () => {
      window.removeEventListener("load", start)
      if (typeof window.cancelIdleCallback === "function") window.cancelIdleCallback(idle)
      else window.clearTimeout(idle)
    }
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!ready || !el) return
    el.load()
    void el.play().then(() => setPlaying(true)).catch(() => {})
  }, [ready])

  if (!ready) return null

  const toggle = () => {
    const el = ref.current
    if (!el) return
    if (el.paused) {
      void el.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      el.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <video
        ref={ref}
        aria-hidden={film.captions ? undefined : "true"}
        muted
        playsInline
        loop
        preload="none"
        poster={mediaUrl(film.poster, 1920)}
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
        style={{ objectPosition: objectPosition(film.poster) }}
      >
        {film.hls ? <source src={film.hls} type="application/x-mpegURL" /> : null}
        {film.webm ? <source src={film.webm} type="video/webm" /> : null}
        <source src={film.mp4} type="video/mp4" />
        {film.captions ? <track kind="captions" src={film.captions} srcLang="en" default /> : null}
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={!playing}
        className="label absolute right-margin bottom-6 z-30 inline-flex min-h-touch items-center text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
      >
        {playing ? labels.pause : labels.play}
      </button>
    </>
  )
}
