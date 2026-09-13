"use client"

/**
 * THE NAVIGATION (navigation.md §§1–3, §7). Four items and one permanent CTA — locked. Fixed to the
 * top; transparent at rest; a near-black backdrop past 100px (never a blur); inverts to void type over a
 * light section by reading data-surface, never guessing; never hides on desktop. THE WORLD is the only
 * item with a panel. Present and painted from the first byte; the entry overlay sits beneath it.
 */
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import { AthlimaWordmark } from "@/components/marks/AthlimaWordmark"
import { Button } from "@/components/primitives/Button"
import { primaryNav, permanentCta } from "@/content/navigation"
import { routes } from "@/lib/routes"
import { gsap } from "@/motion/registry"
import { MobileMenu } from "./MobileMenu"
import { WorldPanel } from "./WorldPanel"

const SCROLLED_AFTER_PX = 100

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [onLight, setOnLight] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const panelId = useId()
  const triggerRef = useRef<HTMLAnchorElement | null>(null)
  const closeTimer = useRef<number | null>(null)

  // Backdrop past 100px — read on GSAP's ticker, never a raw scroll listener (motion.md §5).
  useEffect(() => {
    let last = -1
    const tick = () => {
      const next = window.scrollY > SCROLLED_AFTER_PX
      if (next !== (last === 1)) {
        last = next ? 1 : 0
        setScrolled(next)
      }
    }
    gsap.ticker.add(tick)
    return () => gsap.ticker.remove(tick)
  }, [])

  // Invert over a light section: observe every [data-surface="light"] against a band the nav's height.
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-surface="light"]')
    if (sections.length === 0) return
    const navH =
      parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) * 16 || 64
    const io = new IntersectionObserver(
      (entries) => {
        const any = entries.some((e) => e.isIntersecting)
        setOnLight((prev) => (any ? true : entries.every((e) => !e.isIntersecting) ? false : prev))
      },
      { rootMargin: `0px 0px -${Math.max(window.innerHeight - navH, 0)}px 0px`, threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [pathname])

  // Route change closes the panel — derived during render.
  const [seenPath, setSeenPath] = useState(pathname)
  if (seenPath !== pathname) {
    setSeenPath(pathname)
    setPanelOpen(false)
  }

  const openPanel = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setPanelOpen(true)
  }, [])
  const scheduleClose = useCallback(() => {
    closeTimer.current = window.setTimeout(() => setPanelOpen(false), 150)
  }, [])
  const closeAndRestore = useCallback(() => {
    // Focus first (its onFocus would reopen), then close — the last state update wins.
    triggerRef.current?.focus()
    setPanelOpen(false)
  }, [])

  return (
    <header
      className="site-nav fixed inset-x-0 top-0 z-50"
      data-scrolled={scrolled ? "" : undefined}
      data-on-light={onLight ? "" : undefined}
    >
      <nav aria-label="Primary" className="relative">
        <div className="mx-auto flex min-h-nav max-w-content-max items-center gap-8 px-margin">
          <Link
            href={routes.home}
            aria-label="ATHLIMA — home"
            className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
          >
            <AthlimaWordmark decorative className="h-5 w-auto" />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {primaryNav.map((item) => {
              const current = pathname === item.href || pathname.startsWith(item.href + "/")
              const hasPanel = "hasPanel" in item && item.hasPanel
              return (
                <li key={item.href}>
                  <Link
                    ref={hasPanel ? triggerRef : undefined}
                    href={item.href}
                    onMouseEnter={hasPanel ? openPanel : undefined}
                    onMouseLeave={hasPanel ? scheduleClose : undefined}
                    className="nav-item label inline-flex min-h-touch items-center text-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                    aria-current={current ? "page" : undefined}
                    aria-haspopup={hasPanel ? "menu" : undefined}
                    aria-expanded={hasPanel ? panelOpen : undefined}
                    aria-controls={hasPanel ? panelId : undefined}
                    onFocus={hasPanel ? openPanel : undefined}
                    onKeyDown={
                      hasPanel
                        ? (e) => {
                            if (e.key === "ArrowDown") {
                              e.preventDefault()
                              openPanel()
                              window.setTimeout(() => {
                                document
                                  .getElementById(panelId)
                                  ?.querySelector<HTMLElement>("[data-menu-item]")
                                  ?.focus()
                              }, 0)
                            }
                          }
                        : undefined
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="ml-auto hidden lg:block">
            <Button variant="primary" href={permanentCta.href} className="min-h-10 px-6">
              {permanentCta.label}
            </Button>
          </div>

          <div className="ml-auto lg:hidden">
            <MobileMenu />
          </div>
        </div>

        <div className="hidden lg:block">
          <WorldPanel
            id={panelId}
            open={panelOpen}
            onClose={() => setPanelOpen(false)}
            onEscape={closeAndRestore}
            onMouseEnter={openPanel}
            onMouseLeave={scheduleClose}
          />
        </div>
      </nav>
    </header>
  )
}
