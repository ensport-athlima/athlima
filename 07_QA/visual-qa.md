# VISUAL QA

> Run this against every page before it is called finished. Claude must run it on itself and report
> honestly, including failures. A page that passes 38 of 40 checks is not finished; it is 38/40.

---

## A. FIRST IMPRESSION (the 5-second test)

1. Screenshot the first viewport at 1440×900. Look at it cold.
2. Does it communicate **scale, ambition, exclusivity, performance** within 5 seconds?
3. Could this screenshot be any other brand's homepage with the logo swapped? If yes → **fail**.
4. Is there a single clear focal point, or is it competing for attention with itself?
5. Is the primary CTA discoverable without scrolling?

---

## B. TYPOGRAPHY

- [ ] Every type size maps to a token. No arbitrary `text-[Npx]`.
- [ ] Display type is optically tracked in (negative letter-spacing at large sizes).
- [ ] No line of body copy exceeds ~75 characters.
- [ ] No orphans or widows in headlines. Line breaks in display type are art-directed, not accidental.
- [ ] No hyphenation in display type.
- [ ] Baseline rhythm is consistent — headings and body sit on the same vertical system.
- [ ] Caps-locked text has increased letter-spacing.
- [ ] No more than **three display sizes** visible in any one viewport (labels, captions and body sizes
      do not count). Two competing display sizes on one screen usually means two headlines.

---

## C. SPACING & LAYOUT

- [ ] Every gap is a token from the spacing scale. No `mt-[37px]`.
- [ ] Vertical rhythm between sections is deliberate and consistent — the same section type has the same padding everywhere.
- [ ] Alignment: elements line up to the grid. Turn on a grid overlay and check.
- [ ] Negative space is generous. If it feels crowded, it is crowded. Premium is mostly emptiness.
- [ ] Nothing is accidentally centred that should be left-aligned, or vice versa.
- [ ] Optical alignment beats mathematical alignment where they conflict (punctuation, icons, round shapes).

---

## D. COLOUR

- [ ] Lime is used as a **signal**, not a surface. Count its appearances in the viewport: more than three → review.
- [ ] No glow, no neon bloom, no lime drop-shadows.
- [ ] No gradient text.
- [ ] Blacks are the token black, not `#000` unless the token says so.
- [ ] Every text/background pair passes contrast. Check the lime-on-black and black-on-lime pairs specifically.
- [ ] Light sections invert the nav and cursor correctly.

---

## E. IMAGERY & VIDEO

- [ ] Every image is art-directed — cropped with intent, not centre-cropped by default.
- [ ] No stock-looking imagery. No smiling people in gyms giving thumbs up.
- [ ] Image treatment (grade, contrast, grain) is consistent across the page.
- [ ] Video posters match the first frame — no flash on play.
- [ ] Nothing important is cropped out at any breakpoint.
- [ ] Aspect ratios are consistent within a set. A rail of portraits is one ratio, not five.

---

## F. MOTION

- [ ] Every animation serves orientation, emotion, discovery, credibility or conversion. Name which one.
- [ ] Nothing animates twice on the same scroll pass.
- [ ] Nothing re-animates when scrolling back up unless that is a designed decision.
- [ ] Entrance animations complete within 800ms of the element entering view.
- [ ] No animation delays a user's ability to read or click.
- [ ] Scrolling at speed does not produce a queue of pending animations.
- [ ] 60fps at 6× CPU throttle.
- [ ] `prefers-reduced-motion` — screenshot the page in this mode. **It must still look finished and intentional.**

---

## G. DETAIL (where premium actually lives)

- [ ] Focus states are designed and beautiful.
- [ ] Hover states are on everything interactive and are more interesting than an opacity change.
- [ ] Cursor changes correctly over every element type.
- [ ] Selected-text colour is set and on-brand.
- [ ] Scrollbar is styled or deliberately native.
- [ ] The favicon set is complete, including the Apple touch icon and a dark-mode variant.
- [ ] The OG image is designed and correct — paste the URL into Slack and look at it.
- [ ] The 404 page is designed and on-brand, with a route back into the world.
- [ ] Loading skeletons match final layout dimensions exactly.
- [ ] No visible flash of unstyled or unpositioned content on load.

---

## H. THE HONEST QUESTION

> Would this page sit comfortably next to the current work on Awwwards, FWA, or a top-tier studio's
> portfolio? Not "is it good for an AI-built site" — is it good?

If the answer is no, write down specifically why, and fix that. "It looks a bit generic" is not a finding.
"The section rhythm is identical for six sections in a row so the page has no crescendo" is a finding.
