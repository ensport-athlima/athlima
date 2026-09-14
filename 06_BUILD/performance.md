# PERFORMANCE

> The whole thesis of this site is that it feels expensive. Slow does not feel expensive. Slow feels cheap.
> **Cinematic and fast is the brief. Cinematic and slow is a failure.**

---

## 1. BUDGETS — HARD LIMITS

Measured on **Moto G Power class hardware, 4G (Lighthouse mobile throttling)**, not on a MacBook on office wifi.
**Mid-range Android at 4G is the primary performance target.** 1440×900 is the primary *design* canvas
(`responsive-rules.md` §1); it is not where performance is measured. Both are true (decision D26).

| Metric | Budget | Fail condition |
|---|---|---|
| LCP | ≤ 2.0s | > 2.5s |
| INP | ≤ 150ms | > 200ms |
| CLS | ≤ 0.05 | > 0.1 |
| TTFB | ≤ 400ms | > 800ms |
| Total JS (gzipped, homepage) | ≤ 200 KB | > 250 KB |
| Total page weight, first view (excl. video stream) | ≤ 1.5 MB | > 2.5 MB |
| Lighthouse Performance (mobile) | ≥ 90 | < 85 |
| Fonts | ≤ 3 files, ≤ 120 KB total | — |

### The JS budget, costed (decision D2)

The 200 KB homepage budget is allocated, not aspirational:

| Allocation | ~KB gzipped |
|---|---|
| Next.js App Router + React runtime | 90 |
| GSAP core + ScrollTrigger | 40 |
| Lenis | 4 |
| ATHLIMA app code (blocks, motion layer, cursor, entry overlay) | 50 |
| Headroom | 16 |

**Not on the homepage:** `@mux/mux-player-react` (dynamically imported only on routes with real video UI),
`react-hook-form` + `zod` (form routes only), the Sentry SDK (lazy-loaded after interactive), Sanity
client code (server only). The homepage hero is a poster image plus a native `<video>` with a Mux-hosted
HLS source. `@next/bundle-analyzer` output is checked against this table before every release.

These are checked in CI. A PR that breaks a budget does not merge.

**As measured (14 September 2026, production build, Lighthouse 12 mobile with devtools throttling, on a
MacBook — not yet on a mid-range Android; that test is on the launch checklist):**

| Route | Perf | LCP | TBT | CLS | JS on the wire (gzipped) |
|---|---|---|---|---|---|
| `/` | 91–99 (TBT varies run to run) | 1.6–1.9 s | 20–360 ms | 0 | **238 KB** |
| `/athlimax` | 99 | 1.7 s | 80 ms | 0 | 240 KB |
| `/the-room` | 99 | 1.6 s | 30 ms | 0 | 242 KB |
| `/partner/enquire` | 99 | 1.6 s | 20 ms | 0 | 277 KB |
| `/journal` | 99 | 1.6 s | 20 ms | 0 | 240 KB |

Accessibility 96–100, Best Practices 100, SEO 100 on every route sampled; **axe: zero violations on all
32 routes at 1440 and 390**.

**The JS budget is not met, and the cause is the framework.** The homepage carries 238 KB gzipped against
the 200 KB allocation: React 19.3's `react-dom` (70 KB) plus Next 16's client runtime (44 KB) is 114 KB
where this table costed 90; GSAP + ScrollTrigger + CustomEase 48 KB (costed 40); Lenis, Radix Dialog,
the motion layer and the app code 35 KB (costed 54 — under); the rest is Vercel Analytics' loader and
route chunks. What was fixed to get here: Sentry no longer downloads on page load at all (it arrives on
the first interaction or the first error, with early errors buffered — 60 KB gone from every page);
zod's 61 locales were being bundled through a namespace import (100 KB on every form route — named
imports and `zod/mini` fixed it); reveal setup moved off the hydration task and never re-hides content
already in view (TBT 480 → ~100 ms; the LCP element is the hero headline); the display voice got a
size-adjusted fallback face so display lines wrap the same before and after the font lands (CLS 0.06 →
0); the corporate marks got explicit rendered sizes. **Decision needed:** either re-cost this table for
the Next 16 / React 19 runtime (≈ 240 KB), or accept that 200 KB requires dropping GSAP for the reveals
(CSS-only entrances; the pinned portals would go) — the owner's call, recorded here, not taken silently.

---

## 2. VIDEO — THE BIGGEST RISK

Video is where this site will die if it is handled casually.

**Rules**
1. The hero **never** loads a video file before LCP. LCP is the poster image (AVIF, ≤ 120 KB), painted at
   first byte with the server-rendered headline, before any JavaScript runs (decision D1). Video begins
   after the page is interactive.
2. All substantial video is hosted on Mux and served as adaptive HLS, so a 3G user gets 480p and a fibre
   user gets 1080p. Never ship a single 20 MB MP4 to everyone. **On the homepage the HLS source is played
   by a native `<video>` element, not the Mux player component** (decision D2); the Mux player is
   dynamically imported only on routes with real video UI (captions, scrubbing, long-form).
3. Micro-films (5–8s loops): ≤ 1.5 MB each, AV1/WebM with H.264 MP4 fallback, `preload="none"`,
   `IntersectionObserver`-gated. Off-screen video does not download.
4. No more than **two** videos playing simultaneously on any screen. Pause anything scrolled out of view.
5. Respect `navigator.connection.saveData` and `effectiveType` — on `2g`/`slow-2g`/save-data, poster frames only.
6. Every video element has explicit `width`/`height` or `aspect-ratio`. Zero CLS from media.

---

## 3. IMAGES

- `next/image` everywhere. AVIF first, WebP fallback.
- `sizes` is mandatory and accurate. A wrong `sizes` is the most common cause of a 3 MB image on a phone.
- `priority` on exactly one image per page — the LCP image. Never more.
- Everything else lazy-loads with a blur or dominant-colour placeholder.
- Source files delivered from photography must be downsampled before commit. No 8 MB JPEGs in the repo.

---

## 4. FONTS

- `next/font/local` with `display: swap` and preloading of the two critical faces.
- Variable fonts, subset to `latin` + `latin-ext` (add `devanagari` **only** if Hindi ships).
- `size-adjust` / `ascent-override` fallback metrics tuned so the swap causes no layout shift.
- Maximum three font files sitewide. If the design needs a fourth weight, use a variable axis.

---

## 5. JAVASCRIPT

- Server Components by default. `"use client"` is a deliberate, justified decision each time.
- GSAP plugins imported individually, never the whole bundle.
- Heavy **choreography modules** — the GSAP pin/scrub for the six portals, the Room composition's filter
  transitions — are `next/dynamic` with `ssr: false` and load on approach, not on mount. **The content
  they animate is never dynamic:** the six portals are a plain `<nav>` of six links with poster images in
  the server response, in ecosystem order, and the module is applied on top (decision D5). The
  choreography is progressive enhancement; the navigation is not.
- Third-party scripts: GA4 with `afterInteractive`, **and only after the cookie notice has been accepted**
  (decision D33, `[TO VERIFY — LEGAL]` pending DPDP advice). Sentry lazy-loaded after interactive.
  Nothing else without an explicit decision. Every tag manager container, chat widget and pixel is a
  performance tax — the answer is no by default.
- `@next/bundle-analyzer` run before every release. Anything unexpected over 30 KB gets investigated.

---

## 6. ANIMATION PERFORMANCE

- Animate `transform` and `opacity` only. Animating `top`, `left`, `width`, `height`, `margin`,
  `box-shadow` or `filter` on scroll is forbidden.
- `will-change` applied immediately before an animation and removed after. Never left on statically.
- No more than ~8 concurrent ScrollTriggers on any viewport. Kill triggers for sections far off-screen.
- Scroll handlers go through GSAP's ticker or `ScrollTrigger`, never a raw `scroll` listener.
- Target 60fps. Profile with the Performance panel at 6× CPU throttle. Long tasks over 50ms get fixed.

---

## 7. CACHING & DELIVERY

- Static assets: `Cache-Control: public, max-age=31536000, immutable` (Next handles hashed assets).
- ISR revalidation as specified in `architecture.md`.
- Vercel Edge Network. Confirm the Mumbai/Singapore region is serving Indian traffic — **the majority of
  this audience is in India, and that must be the region the site is tuned for.**
- Preconnect to the Mux and Sanity CDN origins.

---

## 8. MONITORING

- `@vercel/speed-insights` in production. Watch field data, not lab data — lab data is a rehearsal.
- Lighthouse CI on every PR against the budgets above.
- A monthly performance review is part of the operating rhythm, not a launch-week activity.
