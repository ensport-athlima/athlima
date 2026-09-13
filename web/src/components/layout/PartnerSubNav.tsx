"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { partnerSubNav } from "@/content/partner"
import { cn } from "@/lib/cn"

/**
 * The PARTNER secondary navigation (navigation.md §4): THE PROPOSITION · THE MODEL · THE JOURNEY ·
 * ENQUIRE. Four items in one row at every width (it scrolls, never wraps, never becomes a menu).
 * The current item is indicated by more than colour — `aria-current`, weight and an underline rule.
 * Sits beneath the site nav on every /partner route.
 */
export function PartnerSubNav() {
  const pathname = usePathname()
  return (
    <nav aria-label="Partner" className="border-b border-ink-800 bg-void px-margin">
      <ul className="mx-auto flex h-subnav max-w-content-max gap-x-8 overflow-x-auto whitespace-nowrap">
        {partnerSubNav.map((item) => {
          const current =
            item.href === "/partner" ? pathname === item.href : pathname.startsWith(item.href)
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "label relative inline-flex min-h-touch items-center transition-colors duration-(--dur-fast) ease-sharp hover:text-paper focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-lime",
                  current && "font-bold text-paper after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-lime",
                )}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
