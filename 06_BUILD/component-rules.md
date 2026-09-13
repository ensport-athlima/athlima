# COMPONENT RULES

> **Governs:** how every piece of UI in the ATHLIMA site is written.

---

## 1. THE THREE TIERS

### Tier 1 — Primitives (`components/primitives/`)
Small, dumb, reusable. No layout opinions beyond their own box. No data fetching. No GSAP.
Examples: `Button`, `Eyebrow`, `SectionMarker`, `Display`, `Rule`, `Tag`, `Caption`, `Marquee`, `Cursor`, `Counter`.

### Tier 2 — Media (`components/media/`)
Anything that renders an image or video with the ATHLIMA treatment (masking, reveal, crop behaviour).
Examples: `VideoHero`, `MicroFilm`, `ImageReveal`, `MediaFrame`, `PortraitCard`, `Scrim`, `MaskedVideoText`.

### Tier 3 — Blocks (`components/blocks/`)
Full-bleed page sections. Each one is a named, documented moment in the experience.
Examples: `EntrySequence`, `EcosystemPortals`, `AudienceDoorways`, `ProofNumbers`, `JournalRail`, `ApplyBlock`.

**The complete, closed inventory is `03_DESIGN_SYSTEM/components.md`. Nothing is built that is not on it.**

**A route file composes blocks. It does not contain markup of its own beyond `<main>` and ordering.**

---

## 2. EVERY BLOCK MUST DECLARE ITS ROLE

Every file in `components/blocks/` opens with this header comment. No exceptions.

```tsx
/**
 * BLOCK: EcosystemPortals
 * ROLE IN EXPERIENCE: Discovery — converts "what is ATHLIMA" into six enterable worlds.
 * POSITION: Homepage screen 04. Also /the-world section 03.
 * PRIMARY CTA: none (navigational)
 * SOURCE OF TRUTH: 04_CONTENT/experiences.md
 * MOTION: pinned horizontal scrub, see motion/usePinnedSequence
 */
```

If Claude cannot fill in "ROLE IN EXPERIENCE" in one sentence, the block should not exist.

---

## 3. PROPS

- Props are typed with an exported `interface`, never inline, never `any`, never `React.FC`.
- **No boolean prop soup.** `variant="dark"` beats `isDark`. Three or more booleans on one component means
  it should be split.
- Content comes in as props from the server. A block never hardcodes copy. Copy lives in Sanity or, for
  fixed marketing copy, in `content/` as typed constants sourced from `04_CONTENT/*.md`.
- Every block accepts an optional `className` merged with `cn()` (clsx + tailwind-merge).

---

## 4. STYLING

- Tailwind utilities only, driven by the tokens in `03_DESIGN_SYSTEM/`.
- **No arbitrary values for anything the token system covers.** `text-[43px]` is a bug. `text-display-lg` is correct.
  Arbitrary values are permitted only for genuinely one-off geometry (a specific clip-path, a mask position).
- Order utilities: layout → spacing → sizing → typography → colour → effects → state. Enforce with
  `prettier-plugin-tailwindcss`.
- Dark is the default surface. Light sections are the deliberate exception and are marked with a
  `data-surface="light"` attribute so the nav and cursor can invert against them.

---

## 5. STATE

- Local state first. Then URL state (`useSearchParams`) for anything shareable — a filtered Journal view must
  have a URL.
- Global state only for: nav open/closed, cursor mode, entry-sequence completion. One small Zustand store or
  a single context. Nothing more.
- No global state for data. Data comes from the server.

---

## 6. INTERACTION QUALITY BAR

Every interactive element must have:

- A visible, designed `:focus-visible` state — not the browser default, not `outline: none`.
- A hover state that changes something other than opacity.
- An active/pressed state.
- A disabled state that is legible (contrast ≥ 3:1) and explains itself.
- A minimum hit area of 44 × 44px on touch, achieved with padding, not by making the visual larger.

**The cursor.** ATHLIMA uses a custom cursor. It must:
- Be disabled entirely on touch devices and under reduced motion.
- Never replace the native cursor over text inputs or textareas.
- Never lag more than ~80ms behind the pointer.
- Have at most four modes: default, link, drag, video. Not one per section.

---

## 7. LOADING & EMPTY STATES

Every component that renders CMS data must handle three states explicitly:

1. **Loading** — a designed skeleton matching the final layout's dimensions. Never a spinner. Never a layout shift.
2. **Empty** — a designed, on-brand message. "No results" in the ATHLIMA voice, with a route out.
3. **Error** — an `error.tsx` boundary per route segment. Never a white screen, never a raw stack trace.

---

## 8. THE ANTI-PATTERN LIST

Do not build, and do not accept if generated:

- Card grids with drop shadows and rounded corners as the default answer to "show several things".
- Generic three-column icon + heading + paragraph "features" rows.
- A carousel with dots where a horizontal scroll rail would be better.
- Accordions used to hide content that should have been cut.
- Gradient-text headlines.
- Glassmorphism / frosted panels.
- Glow effects on lime. (See `03_DESIGN_SYSTEM/colour.md` — this is a named prohibition.)
- Parallax on everything. Parallax is a spotlight, not a wallpaper.
- Counting-up numbers that count up every time they re-enter the viewport.
- A "Back to top" button.
