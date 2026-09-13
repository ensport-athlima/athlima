# RESPONSIVE QA

Run at every viewport in the matrix in `06_BUILD/responsive-rules.md`. Do not sample — check all of them.

---

## PER VIEWPORT

- [ ] Zero horizontal overflow. (`document.documentElement.scrollWidth > window.innerWidth` → fail.)
- [ ] No text clipped, truncated unintentionally, or overlapping.
- [ ] No image squashed, stretched, or cropping its subject out.
- [ ] Full-height sections use `svh`/`dvh` and do not jump when browser chrome collapses.
- [ ] Tap targets ≥ 44×44px with ≥ 8px separation.
- [ ] The APPLY affordance is present, reachable, and not covering content.
- [ ] Nav opens, closes, traps focus, and closes on route change and on Escape.
- [ ] Every hover-dependent piece of information is reachable without hover.
- [ ] Video behaves per the rules: no autoplay of large files on mobile.
- [ ] Forms are usable one-handed. Correct `inputmode` and `autocomplete` on every field. The keyboard does
      not cover the active input.

---

## SPECIFIC BREAK POINTS TO HUNT

These are where sites like this actually fail:

1. **Landscape phone (844×390).** Full-height heroes become unusable. Check every one.
2. **iPad portrait (768×1024).** The dead zone between mobile and desktop layouts — usually neither is applied well.
3. **390px with a long word.** Test the longest headline, the longest name, the longest email address.
4. **200% browser zoom at 1280px.** WCAG requires this to work.
5. **Text-only zoom / large system font.** Fixed-height containers overflow.
6. **Very tall desktop (1440×1440).** Sections designed at 900px height look empty.
7. **Ultrawide (2560px+).** Confirm the content cap holds and backgrounds bleed correctly.
8. **Slow 3G throttle.** What does the page look like at 3 seconds? Is it a black screen? That is a fail.
9. **Rotation mid-scroll.** ScrollTrigger must refresh; the page must not land in the wrong place.
10. **Browser back button** after a page transition. State must be correct, not mid-animation.

---

## CROSS-BROWSER

Minimum: Chrome, Safari (macOS **and** iOS — they differ), Firefox, Edge, Samsung Internet.

Safari-specific traps to check every time:
- `position: sticky` inside a transformed ancestor (the nav backdrop, the Journal aside)
- `position: sticky` inside overflow containers
- Video autoplay policy (`playsinline` missing = fullscreen takeover on iOS)
- `100vh` behaviour
- Scroll-linked animation smoothness
- `mask-image` prefixing
