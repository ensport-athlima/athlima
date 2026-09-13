# PERFORMANCE

> The whole thesis of this site is that it feels expensive. Slow does not feel expensive. Slow feels cheap.
> **Cinematic and fast is the brief. Cinematic and slow is a failure.**

---

## 1. BUDGETS — HARD LIMITS

Measured on **Moto G Power class hardware, 4G (Lighthouse mobile throttling)**, not on a MacBook on office wifi.

| Metric | Budget | Fail condition |
|---|---|---|
| LCP | ≤ 2.0s | > 2.5s |
| INP | ≤ 150ms | > 200ms |
| CLS | ≤ 0.05 | > 0.1 |
| TTFB | ≤ 400ms | > 800ms |
| Total JS (gzipped, homepage) | ≤ 180 KB | > 250 KB |
| Total page weight, first view (excl. video stream) | ≤ 1.5 MB | > 2.5 MB |
| Lighthouse Performance (mobile) | ≥ 90 | < 85 |
| Fonts | ≤ 3 files, ≤ 120 KB total | — |

These are checked in CI. A PR that breaks a budget does not merge.

---

## 2. VIDEO — THE BIGGEST RISK

Video is where this site will die if it is handled casually.

**Rules**
1. The hero **never** loads a video file before LCP. LCP is the poster image (AVIF, ≤ 120 KB) plus the
   server-rendered headline. Video begins after the page is interactive.
2. All substantial video goes through Mux: adaptive bitrate, so a 3G user gets 480p and a fibre user gets 1080p.
   Never ship a single 20 MB MP4 to everyone.
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
- Heavy blocks (ecosystem map, 3D depth, the pinned sequence) are `next/dynamic` with `ssr: false`
  and load on approach, not on mount.
- Third-party scripts: GA4 with `afterInteractive`. Nothing else without an explicit decision. Every tag
  manager container, chat widget and pixel is a performance tax — the answer is no by default.
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
