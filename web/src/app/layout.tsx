import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SmoothScrollProvider } from "@/motion/SmoothScrollProvider"
import { env } from "@/lib/env"
import { site } from "@/content/site"
import "./globals.css"

/**
 * Archivo variable — wght 100–900, wdth 62–125 — subset to latin + latin-ext, one file, 117,628 bytes
 * (typography.md §1, performance.md §4: ≤ 3 files, ≤ 120 KB). Metric-matched fallback so the swap
 * causes zero layout shift.
 */
const archivo = localFont({
  src: "../fonts/archivo-var.woff2",
  variable: "--font-archivo",
  display: "swap",
  weight: "100 900",
  preload: true,
  adjustFontFallback: "Arial",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
})

const siteUrl = env.NEXT_PUBLIC_SITE_URL || `https://${site.domain}`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    // seo.md §1 — `Page Name — ATHLIMA`; the homepage is a real proposition, not "ATHLIMA | Home".
    default: `${site.name} — ${site.descriptor}`,
    template: `%s — ${site.name}`,
  },
  description: `${site.descriptor}. ${site.dates}, ${site.venue}. ${site.builtBy}`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  // No favicon set exists yet (vector artwork — B2; launch checklist T-1). An empty data URL stops the
  // browser requesting /favicon.ico, which 404s and logs a console error. Replaced by the real set.
  icons: { icon: "data:," },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className={archivo.variable}>
      <body className="bg-void text-ink-100 antialiased">
        {/*
          accessibility.md §1.3 — the first focusable element. Reachable from the first frame of the
          entry overlay. Becomes the SkipLink layout component when the layout tier is built (D22).
        */}
        <a
          href="#content"
          className="sr-only-focusable label fixed top-4 left-4 z-50 bg-lime px-4 py-3 text-void"
        >
          SKIP TO CONTENT
        </a>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
