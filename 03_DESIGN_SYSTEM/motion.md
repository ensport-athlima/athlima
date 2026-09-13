# MOTION

> The site should feel expensive, not clever.
> Every value here is a token. A component never contains a hardcoded duration or easing curve.

---

## 1. THE EASING TOKENS

Defined once in `web/src/motion/easings.ts`. Five curves. No others.

| Token | Curve | Character | Use |
|---|---|---|---|
| `EASE_OUT` | `cubic-bezier(0.16, 1, 0.3, 1)` | Fast start, long settle | **The default.** Entrances, reveals, most things. |
| `EASE_IN_OUT` | `cubic-bezier(0.65, 0, 0.35, 1)` | Symmetrical | Movement between two states — panels, transitions |
| `EASE_SHARP` | `cubic-bezier(0.4, 0, 0.2, 1)` | Brisk, mechanical | UI: hovers, focus, small state changes |
| `EASE_ARCH` | `cubic-bezier(0.22, 1, 0.36, 1)` | Heavy, architectural | Large elements. The A. Full-bleed reveals. |
| `LINEAR` | `none` | Constant | Scroll-scrubbed sequences and marquees only |

**`EASE_OUT` is the answer unless there is a specific reason otherwise.** Consistency of easing is a large
part of what makes a site feel like one hand made it.

**No bounce. No elastic. No overshoot.** Anywhere.

---

## 2. THE DURATION TOKENS

Defined once in `web/src/motion/durations.ts`.

| Token | ms | Use |
|---|---|---|
| `INSTANT` | 100 | Focus rings, immediate feedback |
| `FAST` | 200 | Hover, small UI state |
| `BASE` | 300 | The default UI transition |
| `MEDIUM` | 500 | Content reveals |
| `SLOW` | 800 | Large reveals, image masks |
| `CINEMATIC` | 1200 | The ceiling. Nothing exceeds it. |
| `ENTRY_DRAW` | 900 | The entry overlay only: the A draws (§7). |
| `ENTRY_DISSOLVE` | 600 | The entry overlay only: the overlay dissolves (§7). `ENTRY_DRAW + ENTRY_DISSOLVE = 1500`, the overlay's ceiling. |

**Nothing exceeds 1200ms.** If something needs longer, it is a scroll-scrubbed sequence, where the user
controls the pace.

### Stagger
| Token | ms | Use |
|---|---|---|
| `STAGGER_TIGHT` | 40 | Items in a list or grid |
| `STAGGER_LINE` | 60 | Lines of display type |
| `STAGGER_LOOSE` | 100 | Large distinct elements |

Maximum **eight** staggered items. Beyond that the last item arrives too late and the visitor has moved on.

---

## 3. THE STANDARD MOTIONS

Every one of these is implemented once in `web/src/motion/` and consumed by name. A component declares
intent; the motion layer implements it.

### REVEAL — the workhorse
```
from: opacity 0, y +24px
to:   opacity 1, y 0
duration: MEDIUM (500)
easing: EASE_OUT
trigger: element top hits 85% of viewport height
once: true
```
Used by almost every section. `useReveal()`.

### REVEAL-LINES — display type
```
each line: opacity 0 → 1, y +100% → 0, clipped by its own overflow-hidden parent
stagger: STAGGER_LINE (60)
duration: SLOW (800)
easing: EASE_ARCH
once: true
```
The signature display entrance. A mask, not a fade.

### REVEAL-COVER — imagery
```
a solid --void cover element sits over the image (same box, overflow hidden)
cover: translateX/Y 0 → 100% in the scroll direction, then removed
duration: SLOW (800)
easing: EASE_ARCH
once: true
```
**Never a `clip-path` animation** (decision D10 — only `transform` and `opacity` animate on scroll, no
exceptions). **Never a scale-up. Never a blur-in.** The reveal reads as a wipe; the mechanism is a
translated cover.

### PARALLAX
```
y: -8% to +8% across the element's scroll range
scrub: 1 (one second of smoothing)
easing: LINEAR
```
Maximum **two per page**.

### PIN-SCRUB — the six portals
```
pin the section, translate the horizontal track by scroll
scrub: 1
snap: to panel, with a 300ms duration
```
Desktop only. **Abandoned entirely on touch.**

### COUNTER
```
0 → target value
duration: SLOW (800)
easing: EASE_OUT
once: true — never re-counts
```
The final value is in the DOM from the start; the animating span is `aria-hidden`.

---

## 4. HOVER AND STATE

| Element | At rest | Hover | Duration | Easing |
|---|---|---|---|---|
| Text link | No underline | Lime rule draws in from the left | `FAST` | `EASE_SHARP` |
| Primary button | Lime fill, black text | Fill brightens to `--lime-bright` | `BASE` | `EASE_SHARP` |
| Secondary button | 1px `--border`, white text | Border → lime, background fills black→`--ink-900` from the bottom | `BASE` | `EASE_SHARP` |
| Index item | Rule at `--ink-800` | Rule → lime; content shifts +8px right | `BASE` | `EASE_SHARP` |
| Portal panel | 100% | Scales to 1.02, siblings drop to 40% opacity | `MEDIUM` | `EASE_OUT` |
| Image in a link | 100% | Inner image scales to 1.04 inside a fixed frame | `MEDIUM` | `EASE_OUT` |
| Nav item | White | Lime underline draws in | `FAST` | `EASE_SHARP` |

**No scale on buttons. No shadows. No glow. No lift.** Hover changes something other than opacity, always.

**Focus-visible** matches hover in appearance and adds a 2px lime ring at 2px offset. Never `outline: none`
without a designed replacement.

---

## 5. THE SCROLL SYSTEM

**One scroll system. Lenis, bridged to GSAP ScrollTrigger.**

```
duration: 1.1
easing: exponential ease-out
smoothWheel: true
smoothTouch: FALSE   ← never smooth-scroll touch. It fights the platform and feels broken.
```

**Rules:**
- One Lenis instance, created in `SmoothScrollProvider`, mounted once in the root layout.
- Nothing else instantiates Lenis or calls `window.scrollTo`.
- `ScrollTrigger.refresh()` after fonts load and after layout-shifting image loads. Wired once, centrally.
- Maximum **eight** active ScrollTriggers per viewport. Kill triggers for sections far off-screen.
- No raw `scroll` event listeners anywhere in the codebase.
- **No scroll-jacking.** The visitor always controls the pace. Pinned sections advance with the scroll,
  they do not take it over.

---

## 6. PAGE TRANSITIONS

```
0–200    OUT: current page opacity 1 → 0, y 0 → -16px, EASE_IN_OUT
0–250    a black panel wipes up from the bottom, EASE_ARCH (overlaps the fade)
250–500  IN: panel wipes off the top, EASE_ARCH — new content is already painted beneath it
400–900  new page content completes its reveal, EASE_OUT (begins before the panel clears)
```

**Total budget: 600ms** from click to meaningful new content — the new page is legible at ~500ms; the
reveal finishing at 900ms is polish on already-readable content, not a delay. Cinematic does not mean slow. If a
transition makes the site feel like it is loading, it is wrong.

View Transitions API where supported, GSAP fallback where not. Under reduced motion: an instant cut.

---

## 7. THE ENTRY SEQUENCE

The one `CINEMATIC` moment on the entire site. **It is an overlay drawn on top of an already-finished
hero — never a curtain in front of one.** *(Decision D1, `08_OPERATIONS/decisions-2026-09-13.md`.)*

**At first byte, before any JavaScript runs,** the resting hero is complete and painted: the city poster,
the server-rendered headline, the detail line, the navigation. The poster is the LCP element. If JS never
loads, the visitor has a complete, correct hero.

```
0ms      The resting hero is already painted: poster, headline, nav. (JS has just become available.)
0–900    The A is drawn over the hero: ONE continuous centreline stroke, stroke-dasharray/offset from
         its full length to 0, ENTRY_DRAW, EASE_ARCH, in a full-viewport, pointer-transparent overlay.
         The A sits in the hero's void — the empty right half from `sm` up, the empty upper half on
         portrait phones — and never over the headline.
900–1500 The overlay dissolves completely, opacity 1 → 0, ENTRY_DISSOLVE, EASE_OUT, and unmounts. The A
         is the arrival, not a permanent element of the resting hero. (A settle-onto-the-poster
         transform returns when the poster carries the A as architecture — B2.)
≥ 1500   The hero video begins, only after the page is interactive.
```

**The gate** (`06_BUILD/architecture.md` §5): the overlay mounts only if every one of these holds — not
yet played this session · no reduced-motion preference · no save-data and not `2g`/`slow-2g` · the page
is at the top with no hash · **JS became available within 3 seconds of navigation** (an arrival drawn
over a hero the visitor has been reading for three seconds is not an arrival). It is absent from the
server HTML entirely.

**Hard constraints:**
- The sequence never hides, delays, or creates the headline, the poster or the navigation. All three are
  painted at first byte and remain visible beneath the overlay.
- The overlay adds nothing to LCP: the LCP element is the poster, complete before the sequence starts.
  The 2.0s LCP budget in `06_BUILD/performance.md` §1 applies unchanged.
- Total overlay duration ≤ 1500ms. Nothing in the sequence exceeds `CINEMATIC` (1200ms).
- Session-flagged — once per session
- Skipped entirely under reduced motion, save-data, and `2g`/`slow-2g`
- Keyboard-escapable from the first frame; the skip link is reachable immediately
- **No skip button.** If it needs one, it is too long.

---

## 8. REDUCED MOTION

Handled centrally through `gsap.matchMedia()` in `web/src/motion/registry.ts`. **Not per component.**

Under `prefers-reduced-motion: reduce`:
- No transform, no scale, no rotation, no parallax, no pinning, no scrub
- Entrances become a ≤150ms opacity fade, or instant
- The entry sequence does not play
- Marquees are static
- Counters render their final value
- Video does not autoplay
- Page transitions are instant cuts
- The custom cursor is disabled

The CSS blanket rule in `06_BUILD/accessibility.md` is the safety net. `gsap.matchMedia()` is the strategy.

**And:** the reduced-motion version of every page is a finished design, not a broken one. See
`07_QA/visual-qa.md` section F.

---

## 9. PERFORMANCE CONSTRAINTS

- **Only `transform` and `opacity` animate on scroll.** Animating `top`, `left`, `width`, `height`,
  `margin`, `box-shadow` or `filter` is forbidden.
- `will-change` is applied immediately before an animation and removed after. Never left on statically.
- Every GSAP call lives inside `useGSAP()` from `@gsap/react`, scoped to a ref, for automatic cleanup.
- GSAP plugins are imported individually. Never the whole bundle.
- Target 60fps at **6× CPU throttle**. Profile it; do not assume it.
- Long tasks over 50ms get fixed, not excused.

---

## 10. THE JUSTIFICATION RULE

Before any animation is built, this sentence must be completable, honestly:

> *"This animation serves ______ (orientation / emotion / discovery / credibility / conversion) by ______."*

If it cannot be completed, the animation does not get built. This is recorded in the block header comment
required by `06_BUILD/component-rules.md` §2.
