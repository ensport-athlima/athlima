import type { NextConfig } from "next"
import bundleAnalyzer from "@next/bundle-analyzer"
import { withSentryConfig } from "@sentry/nextjs"
import { redirects } from "./src/lib/routes"

const isDev = process.env.NODE_ENV === "development"

/**
 * Security headers — launch checklist T-3. The CSP names every origin the locked stack talks to and
 * nothing else. `'unsafe-inline'` for scripts is a scaffold-stage concession to Next's inline
 * bootstrap; it is replaced with a nonce before launch. `'unsafe-eval'` exists in development only.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://cdn.sanity.io https://image.mux.com https://www.google-analytics.com",
  "media-src 'self' blob: https://stream.mux.com https://*.mux.com",
  "font-src 'self'",
  "connect-src 'self' https://*.sanity.io https://stream.mux.com https://*.mux.com https://inferred.litix.io https://www.google-analytics.com https://*.ingest.sentry.io https://*.ingest.us.sentry.io https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  "worker-src 'self' blob:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false, // sitemap.md §5 — no trailing slash
  images: {
    formats: ["image/avif", "image/webp"], // performance.md §3
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "image.mux.com" },
    ],
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      // The pipeline's derivatives carry a content hash in their name (scripts/build-media.ts), so
      // they are immutable — a re-delivery changes the URL, never the bytes behind one.
      { source: "/media/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
    ]
  },
  async redirects() {
    // sitemap.md §5 — every one is a 301 and reads from the manifest, never a hardcoded string.
    return redirects.map(({ source, destination }) => ({ source, destination, permanent: true }))
  },
}

const withAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "1" })

/**
 * Sentry (decision D2): the SDK itself is lazy-loaded from src/instrumentation-client.ts after the
 * page is interactive; this wrapper only handles source maps at build time and is silent without
 * an auth token.
 */
export default withSentryConfig(withAnalyzer(nextConfig), {
  silent: true,
  telemetry: false,
  widenClientFileUpload: false,
  disableLogger: true,
  automaticVercelMonitors: false,
  sourcemaps: { disable: !process.env.SENTRY_AUTH_TOKEN },
})
