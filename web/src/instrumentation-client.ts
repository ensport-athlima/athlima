/**
 * Client-side Sentry, lazy (decision D2). The SDK is dynamically imported after `load`, in an idle
 * callback, so it is never in the critical path and sits outside the 200 KB homepage allocation.
 */
const init = () => {
  void import("../sentry.client.config")
}

const whenIdle = (fn: () => void) => {
  if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(fn)
  else window.setTimeout(fn, 0)
}

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_SENTRY_DSN) {
  if (document.readyState === "complete") whenIdle(init)
  else window.addEventListener("load", () => whenIdle(init), { once: true })
}
