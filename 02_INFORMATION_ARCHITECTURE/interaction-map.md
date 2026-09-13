# INTERACTION MAP

> Every interaction on this site must serve one of five purposes:
> **orientation · emotion · discovery · credibility · conversion.**
> An interaction that serves none of them is decoration, and decoration is what makes an expensive site
> look cheap.

---

> **All durations and easings in this file are token names. `03_DESIGN_SYSTEM/motion.md` §§1–2 is the
> source of truth for their values; never hardcode a number from this file.**

## 1. THE SIGNATURE INTERACTIONS

Five. Only five. These are what people will remember and what makes the site distinctive. Everything else
is craft, not signature.

---

### SIGNATURE 01 — THE ENTRY
**Where:** Homepage, first load, first visit of a session.
**Purpose:** emotion + orientation.

**What happens:** The page loads black. The ATHLIMA **A** is drawn as an architectural form — two strokes
rising and meeting — over roughly 900ms. As it completes, the city resolves behind it. Then the headline
is revealed, line by line, and the navigation fades in.

**Constraints — all binding:**
- Total duration to interactive hero: **≤ 2.5 seconds**, and the headline is in the DOM from the first byte
- The A is drawn with SVG stroke animation, not video and not canvas
- The city behind it is a poster image first; video begins only after the page is interactive
- Session-flagged: it plays once per session, never again
- Skipped entirely under reduced motion, on save-data, and on `2g`/`slow-2g`
- Fully keyboard-escapable at any moment — the skip link is reachable from the first frame
- **No "skip intro" button.** If a sequence needs one, it is too long.

**Why it earns its place:** it is the "you are entering a world, not opening a page" thesis, executed in
under three seconds. It is also the single most likely thing to be over-built. Guard the budget.

---

### SIGNATURE 02 — THE SIX PORTALS
**Where:** Homepage screen 04; The World section 03.
**Purpose:** discovery + orientation.

**What happens:** Six full-bleed panels, one per IP. On desktop they occupy a pinned horizontal sequence
scrubbed by vertical scroll — the visitor scrolls down and moves sideways through the ecosystem. Each panel
is the IP's mark, its line, and its signature loop. Hovering a panel brings it forward and recedes the
others. Clicking enters that world.

**Constraints:**
- On touch, the pin is abandoned entirely: six stacked full-bleed panels, vertical. **Never force
  horizontal scroll on primary content on mobile.**
- The DOM order is the ecosystem order, and the section reads correctly with CSS disabled
- It is a real `<nav>` of six links. The choreography sits on top of a plain list.
- At most one video plays at a time. Off-screen panels do not download.
- Under reduced motion: a static six-panel grid, all six visible, no pin, no scrub.

**Why it earns its place:** *"Multiple IPs. One connected ecosystem."* is an argument about relationship,
and relationship is spatial. A grid of six cards asserts it; a sequence demonstrates it.

---

### SIGNATURE 03 — THE ECOSYSTEM MAP
**Where:** The World, section 04.
**Purpose:** credibility + discovery.

**What happens:** An interactive diagram of the sporting economy. Nodes for the stakeholder types —
athletes, federations, government, developers, investors, technology, brands, academies. Lines between them
show which relationships ATHLIMA creates. Selecting a node highlights its connections and dims the rest;
a short line explains what that connection produces.

**Constraints:**
- Inline SVG with real text. Not canvas, not an image, not WebGL.
- Every node is a real, focusable, keyboard-operable control.
- It must be **legible and complete as a static picture.** If it only makes sense once it has animated or
  been interacted with, it has failed.
- A text alternative — a plain list of relationships — is available to assistive technology and is present
  in the DOM.
- On mobile it becomes a simplified vertical version. Complexity is reduced, not scrolled sideways.

**Why it earns its place:** "the ecosystem is active but not connected" is the central claim of the entire
platform. This is the one place the website can *prove* it rather than assert it. Build it properly or cut
it — a half-built ecosystem map is worse than none.

---

### SIGNATURE 04 — THE DOORWAYS
**Where:** Homepage screen 06.
**Purpose:** conversion.

**What happens:** Six doorways, one per audience. Type-led, not cards. At rest: six lines of large type in
a column. On hover or focus, a doorway expands — its audience line appears, and a portrait or scene of that
audience resolves behind it. Clicking enters that audience's page.

**Constraints:**
- Six real links. Not buttons with JS handlers.
- On touch, all six lines and their audience lines are visible without interaction. **No hover-dependent
  information.**
- On mobile, this block sits **higher in the page order than on desktop** — see `user-journeys.md`, Journey 04.
- Keyboard: tabbing through the six triggers the same expansion as hovering.

**Why it earns its place:** it is the highest-value interaction on the site. It converts an anonymous
visitor into a qualified one in one click, and it is the mechanism that makes six audiences possible
without six homepages.

---

### SIGNATURE 05 — THE ROOM
**Where:** `/the-room`, section 03.
**Purpose:** credibility.

**What happens:** A visual representation of the composition of the 350. Filterable by the four stakeholder
groups and by the five pillars. Selecting a filter re-composes the view and states what that segment means
for the visitor. It shows **structure and proportion**, not necessarily individuals.

**Constraints:**
- Works entirely with categories and counts. **Named individuals appear only where written confirmation
  exists** — see `01_STRATEGY/positioning.md` §6. Design it so it is complete and compelling with zero
  names, then let names strengthen it if they arrive.
- Filters are real URL state, so a composition view can be shared.
- Under reduced motion, filter changes are instant, not animated.
- Never implies a confirmed guest list.

**Why it earns its place:** "The value is not how many people attend. The value is who you meet." This is
the only way to demonstrate that on a screen.

---

## 2. THE CRAFT INTERACTIONS

Not signatures. Present everywhere, and collectively they are what separates an expensive-feeling site from
a competent one.

| Interaction | Specification |
|---|---|
| **Link hover** | A lime rule draws in from the left over `FAST`. Never a colour change alone, never an underline that simply appears. |
| **Button hover** | Per `03_DESIGN_SYSTEM/motion.md` §4 — primary brightens to `--lime-bright`; secondary fills from the bottom. `BASE`. No scale, no shadow, no glow. |
| **Focus-visible** | 2px lime ring at 2px offset. Designed, consistent, and never removed. |
| **Text reveal** | Display type reveals by line with `STAGGER_LINE` and a mask, not a fade. Body copy fades. |
| **Image reveal** | A mask wipe in the scroll direction over `SLOW`. Never a scale-up, never a blur-in. |
| **Section entry** | `REVEAL` — 24px offset, 0 opacity, `MEDIUM`, `STAGGER_TIGHT`. |
| **Number counters** | Count once, on first entry only. Never re-count. The final value is in the DOM; the animating span is `aria-hidden`. |
| **Custom cursor** | Four modes only: default, link, drag, video. Off on touch, off under reduced motion, off during keyboard navigation. Never over text inputs. |
| **Page transition** | ≤ 600ms to legible new content. Timeline in `03_DESIGN_SYSTEM/motion.md` §6. |
| **Marquee** | Only in the footer and the ATHLIMA 20 discipline strip. Pauses on hover and on focus. Duplicated copies are `aria-hidden`. |
| **Parallax** | At most **two** parallax moments per page. It is a spotlight, not a wallpaper. |
| **Scroll progress** | A 1px lime rule at the top of Journal articles only. Nowhere else. |

---

## 3. THE PROHIBITED INTERACTIONS

Never build these, whatever the reference site does:

- Cursor trails, particle followers, magnetic everything
- Scroll-jacking that removes the visitor's control over pace
- Horizontal scroll on touch for primary content
- Anything that animates every time it re-enters the viewport
- Text that is hard to read while it animates
- Autoplaying carousels
- Hover states that carry information not otherwise available
- Preloaders with percentage counters *(if the site needs one, the site is too heavy)*
- Confetti, sparkles, glows, lens flares
- Sound on load
- Modal overlays for content that could be a page
- 3D that does not survive a slow connection
- Animation as an excuse for slow content

---

## 4. THE MOTION BUDGET

**Per viewport:**
- Maximum **three** simultaneous animations
- Maximum **eight** active ScrollTriggers
- Maximum **two** playing videos
- Every animation completes within 800ms of its trigger
- Nothing loops except a deliberate ambient loop, and there is at most one per screen

**Per page:**
- At most **two scroll-triggered signature interactions**, and never two in the same viewport. The Entry
  does not count against this — it completes before scrolling begins. The homepage therefore carries the
  Entry plus the Portals (screen 04) and the Doorways (screen 06); no other page carries more than one.
- Two parallax moments
- Three full-bleed dramatic sections

**Global:**
- 60fps at 6× CPU throttle
- Only `transform` and `opacity` animate on scroll
- One scroll system: Lenis bridged to ScrollTrigger. Nothing else touches scroll.

---

## 5. REDUCED MOTION — THE PARALLEL DESIGN

`prefers-reduced-motion: reduce` is not a degraded fallback. It is a second, equally finished design.

| Signature | Reduced-motion version |
|---|---|
| The Entry | No sequence. The homepage renders at its resting state, complete, from the first paint. |
| The Six Portals | Static six-panel grid. All six visible. Poster frames, no video. |
| The Ecosystem Map | Fully rendered static diagram. Interaction still works; transitions are instant. |
| The Doorways | All six expanded, all audience lines visible, all imagery present. |
| The Room | Filters work; changes apply instantly. |
| Text reveals | Present, no transform. Or instant. |
| Image reveals | Present, no mask animation. |
| Counters | Final value, rendered immediately. |
| Cursor | Native cursor. |
| Marquees | Static. |

**The QA gate:** screenshot every page with reduced motion enabled. **Each one must look finished,
intentional, and beautiful.** If a page looks broken or empty in that mode, the motion was carrying meaning
that the layout should have been carrying.

---

## 6. THE JUSTIFICATION RULE

Before any animation is built, it must be possible to complete this sentence:

> *"This animation serves ______ (orientation / emotion / discovery / credibility / conversion) by ______."*

If the sentence cannot be completed honestly, the animation does not get built.

This rule is enforced in the block header comment required by `06_BUILD/component-rules.md` §2, and it is
checked in `07_QA/visual-qa.md` section F.
