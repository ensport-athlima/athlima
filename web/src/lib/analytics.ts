"use client"

/**
 * Consent-gated analytics (decision D33; tech-stack.md §2). GA4 loads only after the cookie notice is
 * accepted, and only if an ID is configured. The choice is remembered per viewer. Vercel Analytics and
 * Speed Insights are cookieless and unaffected.
 */
export type Consent = "accepted" | "declined"

const KEY = "athlima:consent"

export function readConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(KEY)
    return v === "accepted" || v === "declined" ? v : null
  } catch {
    return null
  }
}

export function writeConsent(value: Consent): void {
  try {
    window.localStorage.setItem(KEY, value)
  } catch {
    // Storage unavailable: the notice will show again next visit. Acceptable.
  }
}
