# DEVELOPMENT PLACEHOLDER VECTORS

> **These are traced from the supplied raster artwork. They are development placeholders.**
> Replace them with the brand owner's real vector files when B2 lands. Until then they unblock
> screens 01, 03, 04, 07, 08 and 09.

| File | What | Notes |
|---|---|---|
| `athlima-a.svg` | The A device, filled | Clean geometry, not a trace. Symmetric, six vertices. Uses `currentColor`. |
| `athlima-a-stroke.svg` | The A device as a single stroked centreline | **This is what the entry sequence draws.** `stroke-dasharray` / `stroke-dashoffset` on one path. Geometry is identical to the filled version — the miter join reconstructs the apex exactly. |
| `athlima-wordmark.svg` | ATHLIMA wordmark, two colours | Letterforms use `currentColor`; the accent on the final A uses `var(--lime, #C7E70C)`. Traced with potrace from `athlima-master.jpg`. |

## Provenance
- The A device geometry was measured from page 16 of `athlima-brochure-revised.pdf` rendered at 300dpi,
  then rebuilt as exact symmetric geometry rather than left as a trace — a traced outline carries raster
  jitter and would not animate cleanly.
- The wordmark is a potrace outline of `05_MEDIA/logos/athlima-master.jpg`. Curves are faithful but are
  **not** the original outlines. Kerning and optical corrections in the source file are preserved only to
  the accuracy of the trace.

## Still missing (B2)
- ATHLIMAX, THE SYMPOSIUM, ACTIV8, AFTERHOURS lock-ups as vector
- **ATHLIMA CONNECT and ATHLIMA 20 lock-ups — no artwork exists at all, even as raster**
- ENARR and ENSPORT marks as vector
- The favicon and app-icon set

## The verification that is owed
Before launch, overlay each placeholder on the supplied raster at the same size and confirm the outlines
match. A traced wordmark that is 2% wrong is invisible in isolation and obvious beside the real one.
