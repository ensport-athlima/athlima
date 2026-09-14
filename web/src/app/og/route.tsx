import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"
import { site } from "@/content/site"
import { OG_SIZE } from "@/lib/og"
import { ogFonts } from "@/lib/og-fonts"

/**
 * /og?title=…&kicker=… — the per-page Open Graph image (seo.md §1). Black ground, the kicker in lime
 * label type with the one lime rule, the title in the display face, the site line beneath. Archivo
 * from the font file. An image cannot read CSS, so the token values are repeated here by name —
 * tokens.css's --void, --paper, --ink-300 and --lime.
 */
export const runtime = "nodejs"

const VOID = "#000000"
const PAPER = "#ffffff"
const INK_300 = "#a8b0a5"
const LIME = "#c7e70c"
const MAX_TITLE = 120

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = (searchParams.get("title") ?? site.proposition).slice(0, MAX_TITLE)
  const kicker = (searchParams.get("kicker") ?? site.name).slice(0, 60).toUpperCase()
  const fonts = await ogFonts()
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: VOID, color: PAPER, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, fontFamily: "Archivo" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 24, letterSpacing: "0.14em", color: LIME }}>
          <div style={{ width: 40, height: 2, background: LIME }} />
          {kicker}
        </div>
        <div style={{ fontSize: title.length > 60 ? 60 : 84, fontFamily: "ArchivoDisplay", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.01em", maxWidth: 1040, textTransform: "uppercase" }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: INK_300 }}>
          <span>
            {site.datesLabel} · {site.venueLabel}
          </span>
          <span style={{ color: PAPER, letterSpacing: "0.14em" }}>{site.domain.toUpperCase()}</span>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts, headers: { "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800" } },
  )
}
