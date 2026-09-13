"use client"

/**
 * The mobile APPLY bar (navigation.md §3; decision D8). Bottom-anchored below lg, respects the safe
 * area, hides on scroll-down and reveals on scroll-up so it is always one gesture away and never covers
 * content (the page carries matching bottom padding). Absent on /apply, where it would point at the
 * current page. The Tier-1 CTA: permanent, visually distinct, never animated for attention.
 */
import { usePathname } from "next/navigation"
import { Button } from "@/components/primitives/Button"
import { applyCta } from "@/content/navigation"
import { routes } from "@/lib/routes"
import { useScrollDirection } from "@/motion/useScrollDirection"
import { cn } from "@/lib/cn"

export function ApplyBar() {
  const pathname = usePathname()
  const dir = useScrollDirection()
  if (pathname === routes.apply) return null
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-ink-800 bg-ink-900 px-margin pt-3 transition-transform duration-(--dur-base) ease-sharp lg:hidden",
        dir === "down" && "translate-y-full",
      )}
      style={{ paddingBottom: "calc(var(--space-3) + env(safe-area-inset-bottom))" }}
    >
      <Button variant="primary" href={applyCta.href} className="w-full">
        {applyCta.label}
      </Button>
    </div>
  )
}
