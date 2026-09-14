import { ImageResponse } from "next/og"
import { sanityFetch } from "@/lib/sanity/client"
import { articleQuery, TAGS } from "@/lib/sanity/queries"
import { articleOrNullSchema, parser } from "@/lib/sanity/schemas"
import { PILLAR_LABELS } from "@/content/navigation"
import { ogFonts } from "@/lib/og-fonts"

/**
 * The article's OG image (journal.md §5): set in the ATHLIMA type system — pillar, title, byline on
 * black with the one lime rule. Not a logo on a black square. Archivo from the font file.
 * An image cannot read CSS, so the token values are repeated here by name — they are tokens.css's
 * --void, --paper, --ink-300 and --lime, and change with them.
 */
const VOID = "#000000"
const PAPER = "#ffffff"
const INK_300 = "#a8b0a5"
const LIME = "#c7e70c"
export const alt = "ATHLIMA Journal"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const a = await sanityFetch({ query: articleQuery, params: { slug }, tags: [TAGS.journal], revalidate: 60, parse: parser("article", articleOrNullSchema) })
  const fonts = await ogFonts()
  const title = a?.title ?? "The Journal"
  const pillar = a ? a.pillars.map((p) => PILLAR_LABELS[p]).join(" · ") : "ATHLIMA"
  const byline = a ? `${a.author.name} · ${a.author.role}` : "Ideas that move India."
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: VOID, color: PAPER, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, fontFamily: "Archivo" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 24, letterSpacing: "0.14em", color: LIME }}>
          <div style={{ width: 40, height: 2, background: LIME }} />
          {pillar}
        </div>
        <div style={{ fontFamily: "ArchivoDisplay", fontSize: title.length > 70 ? 60 : 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.01em", maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: INK_300 }}>
          <span>{byline}</span>
          <span style={{ color: PAPER, letterSpacing: "0.14em" }}>ATHLIMA JOURNAL</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  )
}
