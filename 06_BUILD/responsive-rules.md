# RESPONSIVE RULES

> ATHLIMA is designed for a large desktop display **and** for a Mumbai commuter on a mid-range Android.
> Both are primary, with different jobs (decision D26): **1440×900 is the primary design canvas. Mid-range
> Android at 4G is the primary performance target.** Neither is a fallback.

---

## 1. BREAKPOINTS

| Token | Min-width | Design target |
|---|---|---|
| `base` | 0 | 390px (iPhone 14/15 class) |
| `sm` | 640px | Large phone, small tablet portrait |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape / small laptop |
| `xl` | 1280px | Laptop |
| `2xl` | 1536px | Desktop — **1440×900 is the primary design canvas** (it falls in the `xl` range and is the most common desktop visitor) |
| `3xl` | 1920px | Large desktop — layout caps here |

Design is **mobile-first in code**, desktop-first in art direction. Write base styles for 390px and layer up.

Above 1600px the content column is capped at 1600px and centred; backgrounds and full-bleed media continue
to bleed. (`03_DESIGN_SYSTEM/grid.md` §1 is the source of truth for this value.) ATHLIMA must not become
a stretched line of text on a 34" ultrawide.

---

## 2. TYPE

Fluid type via `clamp()` between the `base` and `3xl` anchors — defined once in `03_DESIGN_SYSTEM/typography.md`
and exposed as tokens. Never set a font-size per breakpoint by hand.

Hard floors — these mirror `03_DESIGN_SYSTEM/typography.md` §2, which is the source of truth:
- Body copy never below **17px**.
- Captions and legal never below **14px**.
- Uppercase tracked labels never below **13px**.
- Display type on mobile must still fit its container without hyphenation hacks. If a headline breaks
  badly at 390px, the headline is too long — fix the copy, not the CSS.

---

## 3. WHAT CHANGES ON MOBILE — AND WHAT DOESN'T

**Must be preserved on mobile:**
- The entry moment. It is shorter and simpler, but the emotional beat survives.
- The six portals. They become a vertical stack of full-bleed panels, not a shrunken grid.
- The audience doorways.
- The permanent APPLY affordance.
- All video — as poster-first, tap-to-play, or short muted loops.

**Must change on mobile:**
- Pinned horizontal scrub sequences → vertical stacked sections. Never force horizontal scroll on touch
  for primary content.
- Custom cursor → removed entirely.
- Hover-revealed content → always visible, or moved behind a tap.
- Multi-column editorial → single column.
- The hero film → poster frame + a 5s muted loop, full film behind a play affordance. Never autoplay a
  large file on cellular.

---

## 4. THE APPLY BAR

`APPLY` is permanently visible at every breakpoint. On mobile it is a bottom-anchored bar that:
- Respects `env(safe-area-inset-bottom)`.
- Hides on scroll-down, reveals on scroll-up.
- Never covers the last line of page content — the page gets bottom padding equal to the bar height.

---

## 5. TOUCH

- Minimum target 44 × 44px. Minimum 8px gap between adjacent targets.
- No hover-dependent information anywhere.
- Horizontal rails are swipeable with momentum and show a partial next item so the affordance is obvious.
- `touch-action: pan-y` on vertical scroll surfaces to stop accidental horizontal drag.
- Test with a thumb, not a mouse pointer at a touch viewport size.

---

## 6. VIEWPORT UNITS

Use `svh` / `dvh`, never bare `vh`, for full-height sections. Mobile browser chrome collapsing must not
cause a jump. A full-bleed hero is `h-svh` (a token utility, not an arbitrary value).

---

## 7. THE MANDATORY TEST MATRIX

No page is "done" until it has been checked at:

- 390 × 844 (iPhone 14)
- 430 × 932 (iPhone Pro Max)
- 768 × 1024 (iPad portrait)
- 1024 × 768 (iPad landscape)
- 1440 × 900 (MacBook — the primary design canvas and the most common desktop visitor)
- 1920 × 1080
- 390 × 844 with text size at 200% (browser zoom)

Plus: landscape phone, which is where full-height heroes usually break.
