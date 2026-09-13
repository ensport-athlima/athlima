# ACCESSIBILITY

> **Target:** WCAG 2.2 Level AA, no exceptions granted for aesthetics.
> A premium site that a screen-reader user cannot navigate is not premium. It is broken.

---

## 1. NON-NEGOTIABLES

| # | Rule |
|---|---|
| 1 | Every page has exactly one `<h1>`. Heading levels never skip. |
| 2 | Landmarks on every page: `<header>`, `<nav>`, `<main>`, `<footer>`. One `<main>`. |
| 3 | A "Skip to content" link, visually hidden until focused, is the first focusable element. |
| 4 | Full keyboard operability. Tab order follows visual order. No keyboard traps. |
| 5 | `:focus-visible` is designed — a 2px lime ring at 2px offset. `outline: none` without a replacement is forbidden. |
| 6 | Body text contrast ≥ 4.5:1. Large text (24px+, or 19px+ bold) ≥ 3:1. UI borders and icons ≥ 3:1. |
| 7 | Colour is never the only carrier of meaning. |
| 8 | Every image has `alt`. Decorative images get `alt=""`. Alt text describes function, not filename. |
| 9 | Every form input has a persistently visible `<label>`. Placeholder-as-label is forbidden. |
| 10 | Errors are announced in an `aria-live="polite"` region, listed at the top of the form, and linked to the offending field. |

---

## 2. MOTION — THE BIGGEST RISK ON THIS SITE

`prefers-reduced-motion: reduce` must be honoured globally through `gsap.matchMedia()`.

Under reduced motion:
- No parallax, no scrub, no pinning, no scale, no rotation, no horizontal auto-movement.
- Entrance animations become instant, or a ≤150ms opacity fade.
- The entry sequence does not play — the homepage renders at its resting state.
- Marquees stop. Auto-advancing anything stops.
- Video does not autoplay. Poster + play button.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
This is the safety net, not the strategy. The strategy is `gsap.matchMedia()`.

**Also:** nothing flashes more than three times per second. Ever.

---

## 3. VIDEO

- Autoplaying video is `muted`, `playsinline`, `loop`, and carries no essential information.
- Any video with narration or dialogue has captions (`<track kind="captions">`). Mux handles this — use it.
- The hero film has a pause control. A user must be able to stop moving content that plays longer than 5 seconds.
- Video is never the only place a piece of information exists.

---

## 4. THE CUSTOM CURSOR

- Purely decorative. It has `aria-hidden="true"` and `pointer-events: none`.
- The native cursor's *semantics* must survive: `cursor: pointer` on links, `text` on inputs.
- Disabled on touch, on reduced motion, and when the user is keyboard-navigating.

---

## 5. SCREEN-READER SPECIFICS FOR ATHLIMA PATTERNS

| Pattern | Requirement |
|---|---|
| Six portals | A real `<nav>` or `<ul>` of links. The visual choreography sits on top of a plain, linear list. |
| Audience doorways | Links, not buttons with JS handlers. They go somewhere. |
| Pinned horizontal sequence | Content is in DOM order. Reading the page with CSS off must still make sense. |
| Number counters | The final value is in the DOM. Wrap the animating span in `aria-hidden` and expose the real figure. |
| Masked video text | The headline is real text in the DOM, masked with CSS. Never an image of text. Never a canvas. |
| Marquee | `aria-hidden` on the duplicated copies. One readable instance only. |
| Modal / application steps | Focus moves in, is trapped, Escape closes, focus returns to the trigger. Use Radix primitives. |

---

## 6. TESTING PROTOCOL

Automated (must pass in CI):
- `eslint-plugin-jsx-a11y` — zero warnings.
- `@axe-core/playwright` on every route — zero violations.
- Lighthouse Accessibility ≥ 98.

Manual (must be done before launch, per page):
1. Unplug the mouse. Navigate the entire page. Reach and activate every interactive element.
2. VoiceOver (Safari, macOS) — read the page top to bottom. Does it make sense?
3. Zoom to 200%. Nothing clipped, nothing overlapping, no horizontal scroll.
4. `prefers-reduced-motion` on. The site must still be complete and beautiful — not broken, not empty.
5. Disable CSS. Is the content order logical?

Automated tools catch roughly 30% of real issues. The manual pass is the one that matters.
