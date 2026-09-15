# DECISION H — THE HERO'S LIGHT MAY BLOOM
### Owner override, 15 September 2026

> The owner asked for the hero's drawn scene to be brighter — "a neon glow". `CLAUDE.md` V.4,
> `design-principles.md`, `colour.md` §"never for", `imagery.md` §6, `component-rules.md` and
> `visual-qa.md` all forbid glow, and were told why (Part III: black + neon green + glow is the crypto
> failure mode). The concern was put to the owner in full and the owner chose to proceed. Per Part VII
> the override is recorded here and the files are amended in the same commit.

## H1 — WHAT IS PERMITTED

**A bloom on a real light source inside a drawn or photographed scene** — the hero's LED edge, the pool
it casts, a practical light in a photograph. The light is the subject; the bloom is how light behaves.
It is built as a blurred duplicate of the source itself (an SVG `feGaussianBlur` on the lit edge),
never as a halo added behind a mark.

## H2 — WHAT STAYS FORBIDDEN

Glow on **type**, on **controls** (buttons, links, focus rings), on **the wordmark or any mark used as a
mark**, on **cards or panels**, and any lime `box-shadow` / `text-shadow` / radial glow behind an
element. The counting rule stands: the bloom is part of the one lime element it belongs to, not a second.

## H3 — THE GUARD

The scene is reviewed against Part III at every visual QA: if it reads as Web3, the bloom's opacity comes
down before anything else is touched. Its strength lives in two tokens on the scene
(`--hero-bloom-opacity`, `--hero-bloom-radius`) so it is one line to dial.
