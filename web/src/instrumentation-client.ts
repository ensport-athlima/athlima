/**
 * Client-side Sentry, lazy (decision D2; performance.md §1 — "not on the homepage"). The SDK is not
 * downloaded on page load at all: it arrives on the first user interaction, or on the first error —
 * whichever comes first — so a visitor who reads and leaves never pays its 60 KB. Errors that happen
 * before the SDK exists are buffered and replayed to it.
 */
type Buffered = { kind: "error"; event: ErrorEvent } | { kind: "rejection"; event: PromiseRejectionEvent }
const buffer: Buffered[] = []
let loading = false

const load = () => {
  if (loading) return
  loading = true
  detach()
  void import("../sentry.client.config").then(async () => {
    if (!buffer.length) return
    const Sentry = await import("@sentry/nextjs")
    for (const b of buffer.splice(0)) {
      if (b.kind === "error") Sentry.captureException(b.event.error ?? new Error(b.event.message))
      else Sentry.captureException(b.event.reason instanceof Error ? b.event.reason : new Error(String(b.event.reason)))
    }
  })
}

const onError = (event: ErrorEvent) => {
  buffer.push({ kind: "error", event })
  load()
}
const onRejection = (event: PromiseRejectionEvent) => {
  buffer.push({ kind: "rejection", event })
  load()
}
const INTERACTIONS = ["pointerdown", "keydown", "touchstart"] as const

const detach = () => {
  for (const type of INTERACTIONS) window.removeEventListener(type, load)
  window.removeEventListener("error", onError)
  window.removeEventListener("unhandledrejection", onRejection)
}

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_SENTRY_DSN) {
  window.addEventListener("error", onError)
  window.addEventListener("unhandledrejection", onRejection)
  for (const type of INTERACTIONS) window.addEventListener(type, load, { once: true, passive: true })
}
