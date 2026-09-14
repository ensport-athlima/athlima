"use client"

/**
 * The mobile CTA bar (navigation.md §3; decisions D8, A2). Bottom-anchored below lg, respects the safe
 * area, hides on scroll-down and reveals on scroll-up so it is always one gesture away and never covers
 * content (the page carries matching bottom padding). Absent on the routes it points at, where it would
 * point at the current page. The Tier-1 CTA — BUILD WITH ATHLIMA — permanent, visually distinct, never
 * animated for attention.
 */
import { usePathname } from "next/navigation"
import { Button } from "@/components/primitives/Button"
import { permanentCta } from "@/content/navigation"
import { useScrollDirection } from "@/motion/useScrollDirection"
import { cn } from "@/lib/cn"

export function CtaBar() {
  const pathname = usePathname()
  const dir = useScrollDirection()
  if (pathname === permanentCta.href || pathname.startsWith(`${permanentCta.href}/`)) return null
  return (
    <nav
      aria-label={permanentCta.label}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-ink-800 bg-ink-900 px-margin pt-3 transition-transform duration-(--dur-base) ease-sharp lg:hidden",
        dir === "down" && "translate-y-full",
      )}
      style={{ paddingBottom: "calc(var(--space-3) + env(safe-area-inset-bottom))" }}
    >
      <Button variant="primary" href={permanentCta.href} className="w-full">
        {permanentCta.label}
      </Button>
    </nav>
  )
}
