"use client"

/**
 * The cookie notice (ctas.md §5; decision D33). Bottom-anchored, never a modal. ACCEPT · DECLINE.
 * Analytics loads only after ACCEPT, and only if an ID is configured. The choice is remembered per
 * viewer; a decline does not return. [TO VERIFY — LEGAL] whether DPDP requires prior consent; consent-
 * gated is the default until counsel says otherwise.
 */
import Link from "next/link"
import { useEffect, useState } from "react"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Button } from "@/components/primitives/Button"
import { cookieNotice } from "@/content/navigation"
import { readConsent, writeConsent, type Consent } from "@/lib/analytics"

export function CookieNotice({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<Consent | "unknown">("unknown")

  useEffect(() => {
    const stored = readConsent()
    // Read once after hydration; the server never knows the viewer's choice.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(stored ?? "unknown")
  }, [])

  const decide = (value: Consent) => {
    writeConsent(value)
    setConsent(value)
  }

  return (
    <>
      {consent === "accepted" && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      {consent === "unknown" ? (
        <section
          aria-label="Cookies"
          className="cookie-notice fixed inset-x-0 z-[45] border-t border-ink-800 bg-ink-900 px-margin py-4"
        >
          <div className="mx-auto flex max-w-content-max flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-body-sm text-ink-100">
              {cookieNotice.text}{" "}
              <Link
                href={cookieNotice.policyHref}
                className="text-lime underline-offset-4 hover:underline"
              >
                {cookieNotice.policyLabel}
              </Link>
            </p>
            <div className="flex gap-3">
              <Button variant="secondary" onClick={() => decide("declined")}>
                {cookieNotice.decline}
              </Button>
              <Button variant="primary" onClick={() => decide("accepted")}>
                {cookieNotice.accept}
              </Button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
