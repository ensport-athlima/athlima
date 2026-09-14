import type { ReactNode } from "react"
import { Display } from "@/components/primitives/Display"
import { Eyebrow } from "@/components/primitives/Eyebrow"
import { Scrim } from "@/components/media/Scrim"
import { MediaSlot } from "@/components/media/MediaSlot"
import { filmLabels } from "@/content/navigation"
import { screen01 } from "@/content/homepage"
import { cn } from "@/lib/cn"

/**
 * BLOCK: EntrySequence
 * ROLE IN EXPERIENCE: Emotion + orientation — in under ten seconds, without scrolling, a stranger
 *   understands that something serious is being built around Indian sport, in Mumbai this December,
 *   and that getting in is not automatic (CLAUDE.md Part XI).
 * POSITION: Homepage screen 01.
 * PRIMARY CTA: none. The scroll cue is the only affordance. The first screen sells nothing.
 * SOURCE OF TRUTH: 04_CONTENT/homepage.md, screen 01.
 * MOTION: none in the resting state — this block is a Server Component and ships no client JS. The
 *   entry overlay (motion.md §7, decision D1) is EntryOverlay.tsx, the client half of this block, mounted
 *   through the `overlay` slot. It draws over this finished hero; it never hides, delays or creates
 *   anything rendered here, and it is absent from the server HTML.
 *
 * The eyebrow "appears with the nav": its top offset is the nav's height plus the dense section padding.
 */
export interface EntrySequenceProps {
  /** The id of the next screen. When absent the scroll cue is text — never a dead href. */
  nextId?: string
  /** The entry overlay — <EntryOverlay />. Client-only; renders nothing on the server. */
  overlay?: ReactNode
  className?: string
}

export function EntrySequence({ nextId, overlay, className }: EntrySequenceProps) {
  const cue = (
    <>
      {screen01.scrollCue} <span aria-hidden="true">↓</span>
    </>
  )

  return (
    <section
      aria-labelledby="entry-headline"
      className={cn("relative flex min-h-svh flex-col bg-void", className)}
    >
      {/*
        THE HERO — Mumbai at night (B2): the `home.hero` slot. A still is the page's one priority image
        and its LCP element; a film adds itself after load with the poster as frame one (VideoHero).
      */}
      <MediaSlot name="home.hero" sizes="100vw" priority film="hero" filmLabels={filmLabels} />
      <Scrim toward="bottom" />

      <div className="pb-hero relative z-20 flex flex-1 flex-col px-margin pt-[calc(var(--nav-h)+var(--section-pad-dense))]">
        <Eyebrow wide>{screen01.eyebrow}</Eyebrow>

        <Display
          as="h1"
          id="entry-headline"
          size="xl"
          lines={screen01.headline}
          className="mt-auto"
        />

        <div className="mt-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <p className="label">
              <span className="whitespace-nowrap">{screen01.detail[0]}</span>
              {" · "}
              <span className="whitespace-nowrap">{screen01.detail[1]}</span>
            </p>
            <p className="label mt-2">{screen01.lockup}</p>
          </div>
          {nextId ? (
            <a
              href={`#${nextId}`}
              className="label ml-auto text-ink-400 transition-colors duration-(--dur-fast) ease-sharp hover:text-paper"
            >
              {cue}
            </a>
          ) : (
            <p className="label ml-auto text-ink-400">{cue}</p>
          )}
        </div>
      </div>

      {overlay}
    </section>
  )
}
