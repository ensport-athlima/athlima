# VECTOR ARTWORK — DEVELOPMENT PLACEHOLDERS

> **Traced or cut out from the supplied raster artwork. Every file here is a placeholder.**
> Replace with the brand owner's originals when B2 lands. They exist so the build is not blocked and so
> nothing on the site is a grey box.

## SVG — traced, two-tone, theme-aware

| File | Mark | Accent |
|---|---|---|
| `athlima-wordmark.svg` | ATHLIMA | lime on the final A |
| `athlima-a.svg` | The A device, filled | `currentColor` |
| `athlima-a-stroke.svg` | The A device, single stroked centreline | **This is what the entry sequence draws** — `stroke-dasharray` on one path. Geometry identical to the filled version; the miter join reconstructs the apex. |
| `athlimax.svg` | ATHLIMAX | lime X |
| `symposium.svg` | THE SYMPOSIUM | lime slash on the final M |
| `activ8.svg` | ACTIV8 + PLAY BEYOND THE GAME | lime 8 |
| `afterhours.svg` | AFTERHOURS | violet→indigo→blue gradient on HOURS, via `<linearGradient>` reading `--dusk-*` |

Letterforms use `currentColor`; accents read the CSS custom properties with a hard-coded fallback. Drop them
on any surface and they inherit. Each carries a `<title>` for the accessible name.

## PNG — corporate marks, cut out with alpha

`enarr.png` / `enarr@2x.png` · `ensport.png` / `ensport@2x.png`

**Deliberately not traced.** Both are gradient marks — a gold gradient tree on a navy plate, a gold torch.
A single-colour trace would destroy them, and a bad trace of someone's corporate mark is worse than a clean
raster. Cut out at 180px display width (360px @2x), background made transparent. They sit on their own
plate in the provenance section per `colour.md` §1, so transparency is what matters.

## Icons

`icons/` — 16, 32, 48, 180, 192, 512, generated from the A device: lime on black, generous padding.
`favicon-source.svg` is the square master. `.ico` was not generated — modern practice is to ship PNG plus
the SVG; add a `.ico` only if analytics show real IE/legacy traffic.

---

## STILL MISSING — the real B2 ask

- **ATHLIMA CONNECT** and **ATHLIMA 20** lock-ups. **No artwork exists at all, not even raster.** These
  cannot be traced from anything. A designer has to draw them. They are needed for homepage screen 04, the
  `/connect` and `/athlima-20` page entries, and the IP rail at the foot of all six IP pages.
- Genuine vector originals for everything above.
- The brand owner's own favicon and app-icon set, if one exists.

## The verification that is owed before launch

Overlay each placeholder on its supplied raster at the same size and confirm the outlines match. A traced
wordmark that is 2% wrong is invisible alone and obvious beside the real one. Add this to
`07_QA/launch-checklist.md` T-14.
