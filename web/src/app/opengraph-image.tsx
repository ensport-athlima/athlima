import { ImageResponse } from "next/og"
import { site } from "@/content/site"
import { OG_SIZE } from "@/lib/og"
import { ogFonts } from "@/lib/og-fonts"

/** The default Open Graph image — the proposition, the dates, the venue — for any route without its own. */
export const alt = `${site.name} — ${site.descriptor}`
export const size = OG_SIZE
export const contentType = "image/png"

const VOID = "#000000"
const PAPER = "#ffffff"
const INK_300 = "#a8b0a5"
const LIME = "#c7e70c"

export default async function OpenGraphImage() {
  const fonts = await ogFonts()
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: VOID, color: PAPER, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, fontFamily: "Archivo" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 24, letterSpacing: "0.14em", color: LIME }}>
          <div style={{ width: 40, height: 2, background: LIME }} />
          {site.descriptor.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "ArchivoDisplay", fontSize: 96, fontWeight: 800, lineHeight: 0.98, letterSpacing: "-0.01em", textTransform: "uppercase" }}>
          <span>THE BUSINESS OF SPORT.</span>
          <span style={{ color: LIME }}>THE FUTURE OF INDIA.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: INK_300 }}>
          <span>
            {site.datesLabel} · {site.venueLabel}
          </span>
          <span style={{ color: PAPER, letterSpacing: "0.14em" }}>{site.domain.toUpperCase()}</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  )
}
