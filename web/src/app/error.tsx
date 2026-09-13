"use client"

import { useEffect } from "react"

/**
 * 500 — copy locked in 04_CONTENT/ctas.md §5. Never a white screen, never a stack trace.
 * The second sentence of the locked body carries a monitored address that is [TO VERIFY — B5];
 * a bare bracket never renders, so only the first sentence ships until B5 lands.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Sentry is lazy-loaded (decision D2); report through it if it has arrived, never block on it.
    void import("@sentry/nextjs").then((sentry) => sentry.captureException(error))
  }, [error])

  return (
    <main
      id="content"
      className="flex min-h-svh flex-col justify-center px-margin py-section-standard"
    >
      <h1 className="display text-display-lg text-paper">SOMETHING BROKE.</h1>
      <p className="mt-8 max-w-measure text-body-lg text-ink-200">
        Not your fault. Try again in a moment.
      </p>
      <button
        type="button"
        onClick={reset}
        className="label mt-12 inline-flex min-h-touch w-fit items-center bg-lime px-8 text-void transition-colors duration-(--dur-base) ease-sharp hover:bg-lime-bright"
      >
        TRY AGAIN
      </button>
    </main>
  )
}
