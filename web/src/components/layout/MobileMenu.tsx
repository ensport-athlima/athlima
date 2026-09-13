"use client"

/**
 * The mobile menu (navigation.md §3). A labelled MENU / CLOSE control — never a bare hamburger. Opening
 * takes over the screen: four items as large type, the six IPs beneath THE WORLD as a secondary tier,
 * About / Programme / Contact / Press as a tertiary row. Focus trapped, Escape closes, route change
 * closes, body scroll locked — Radix Dialog, unstyled (tech-stack.md §5.2). APPLY is not here; it is the
 * permanent bottom bar.
 */
import * as Dialog from "@radix-ui/react-dialog"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { IPMark, IP_NAMES } from "@/components/marks/IPMark"
import { primaryNav, worldIPs, tertiaryNav, menuStrings } from "@/content/navigation"
import { AthlimaWordmark } from "@/components/marks/AthlimaWordmark"
import { routes } from "@/lib/routes"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Route change closes the menu — derived during render, the React-sanctioned way.
  const [seenPath, setSeenPath] = useState(pathname)
  if (seenPath !== pathname) {
    setSeenPath(pathname)
    setOpen(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="label flex min-h-touch items-center px-2 text-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime lg:hidden"
        >
          {open ? menuStrings.close : menuStrings.open}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[55] bg-void" />
        <Dialog.Content
          aria-label="Menu"
          className="fixed inset-0 z-[56] flex flex-col overflow-y-auto bg-void px-margin text-paper"
        >
          <div className="flex min-h-nav items-center justify-between">
            <Link href={routes.home} aria-label="ATHLIMA — home" onClick={() => setOpen(false)}>
              <AthlimaWordmark decorative className="h-6 w-auto" />
            </Link>
            <Dialog.Close asChild>
              <button
                type="button"
                className="label flex min-h-touch items-center px-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
              >
                {menuStrings.close}
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <Dialog.Description className="sr-only">
            The four sections of ATHLIMA, the six experiences, and more.
          </Dialog.Description>

          <nav aria-label="Primary" className="mt-12 flex flex-col gap-8">
            {primaryNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="display block text-display-md text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime aria-[current=page]:text-lime"
                >
                  {item.label}
                </Link>
                {"hasPanel" in item && item.hasPanel ? (
                  <ul className="mt-4 flex flex-col gap-3 border-l border-ink-800 pl-6">
                    {worldIPs.map((w) => (
                      <li key={w.ip}>
                        <Link
                          href={w.href}
                          className="inline-flex min-h-touch items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                        >
                          <IPMark ip={w.ip} decorative className="text-label" />
                          <span className="sr-only">{IP_NAMES[w.ip]}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </nav>

          <nav
            aria-label="More"
            className="mt-16 mb-apply-bar flex flex-wrap gap-x-8 gap-y-3 border-t border-ink-800 pt-8"
          >
            {tertiaryNav.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="inline-flex min-h-touch items-center text-body-sm text-ink-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
              >
                {t.label}
              </Link>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
