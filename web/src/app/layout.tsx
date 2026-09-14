import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SmoothScrollProvider } from "@/motion/SmoothScrollProvider"
import { SkipLink } from "@/components/layout/SkipLink"
import { Nav } from "@/components/layout/Nav"
import { Footer } from "@/components/layout/Footer"
import { CtaBar } from "@/components/layout/CtaBar"
import { CookieNotice } from "@/components/layout/CookieNotice"
import { env } from "@/lib/env"
import { eventJsonLd, organizationJsonLd, serializeJsonLd } from "@/lib/json-ld"
import { site, entity } from "@/content/site"
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

const organization = organizationJsonLd({
  name: site.name,
  url: siteUrl,
  logo: `${siteUrl}/icons/icon-512.png`,
  parent: { name: entity.legalName, url: entity.groupUrl },
})
const event = eventJsonLd({
  name: site.edition,
  description: `${site.descriptor}. ${site.dates}, ${site.venue}.`,
  url: siteUrl,
  startDate: site.startDate,
  endDate: site.endDate,
  venue: site.venue,
  locality: "Mumbai",
  country: "IN",
  organizerId: `${siteUrl}#organization`,
  image: `${siteUrl}/opengraph-image`,
})

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
  // The default OG image is the file convention beside this file (opengraph-image.tsx); routes set
  // their own through lib/og.ts.
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  // Icons come from the file conventions beside this file: icon0.png (32), icon1.svg, apple-icon.png
  // (180) and manifest.ts (192, 512) — the A device, lime on black (05_MEDIA/logos/vector/icons; B2).
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
      <body className="has-cta-bar bg-void text-ink-100 antialiased">
        {/* seo.md §1, §3 — Organization sitewide, Event as the primary schema. Our own serialised object. */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: serializeJsonLd([organization, event]) }}
        />
        <SkipLink />
        <SmoothScrollProvider>
          <Nav />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <CtaBar />
        <CookieNotice gaId={env.NEXT_PUBLIC_GA_ID} />
        {/* Vercel's cookieless analytics inject their own script on Vercel only; off Vercel they 404. */}
        {process.env.VERCEL ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  )
}
