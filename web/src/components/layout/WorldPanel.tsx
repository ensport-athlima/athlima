"use client"

/**
 * THE WORLD panel (navigation.md §2) — the only nav item with a sub-panel. Desktop only. Full-width,
 * not a dropdown list: the six IPs as large type on the left, the five pillars on the right, THE TWO
 * DAYS strip beneath. A real menu: arrow keys move, Escape returns focus to the trigger. No background
 * media in v1 — the loops are B2; the type is the navigation.
 */
import Link from "next/link"
import { useEffect, useRef, type KeyboardEvent } from "react"
import { IPMark } from "@/components/marks/IPMark"
import { worldIPs, worldPillars, worldPanelStrip } from "@/content/navigation"
import { cn } from "@/lib/cn"

export interface WorldPanelProps {
  id: string
  open: boolean
  onClose: () => void
  /** Escape: close and return focus to the trigger. */
  onEscape: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  /** Focus arriving inside the panel cancels a pending close. */
  onFocus: () => void
}

export function WorldPanel({
  id,
  open,
  onClose,
  onEscape,
  onMouseEnter,
  onMouseLeave,
  onFocus,
}: WorldPanelProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener("pointerdown", onDocClick)
    return () => document.removeEventListener("pointerdown", onDocClick)
  }, [open, onClose])

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const items = ref.current?.querySelectorAll<HTMLAnchorElement>("a[data-menu-item]")
    if (!items || items.length === 0) return
    const list = Array.from(items)
    const i = list.indexOf(document.activeElement as HTMLAnchorElement)
    if (e.key === "Escape") {
      e.preventDefault()
      onEscape()
    } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault()
      list[(i + 1) % list.length]?.focus()
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault()
      list[(i - 1 + list.length) % list.length]?.focus()
    } else if (e.key === "Home") {
      e.preventDefault()
      list[0]?.focus()
    } else if (e.key === "End") {
      e.preventDefault()
      list[list.length - 1]?.focus()
    }
  }

  return (
    <div
      id={id}
      ref={ref}
      role="menu"
      aria-label="The World"
      hidden={!open}
      tabIndex={-1}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onClose()
      }}
      className={cn(
        "absolute inset-x-0 top-full border-t border-ink-800 bg-ink-900 text-paper transition-opacity duration-(--dur-fast) ease-sharp",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="mx-auto grid max-w-content-max grid-cols-12 gap-x-gutter px-margin py-12">
        <ul className="col-span-7 flex flex-col gap-4" role="none">
          {worldIPs.map((w) => (
            <li key={w.ip} role="none">
              <Link
                href={w.href}
                role="menuitem"
                data-menu-item
                className="group flex items-baseline gap-6 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
              >
                <IPMark
                  ip={w.ip}
                  className="text-display-sm transition-transform duration-(--dur-fast) ease-sharp group-hover:translate-x-2"
                />
                <span className="text-body-sm text-ink-300">{w.descriptor}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="col-span-5 col-start-8 border-l border-ink-800 pl-gutter">
          <p className="label">FIVE PILLARS</p>
          <ul className="mt-4 flex flex-col gap-2" role="none">
            {worldPillars.map((p) => (
              <li key={p.href} role="none">
                <Link
                  href={p.href}
                  role="menuitem"
                  data-menu-item
                  className="display inline-block text-display-sm text-paper transition-colors duration-(--dur-fast) ease-sharp hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 mt-8 border-t border-ink-800 pt-4">
          <Link
            href={worldPanelStrip.href}
            role="menuitem"
            data-menu-item
            className="label inline-flex items-center gap-2 text-paper hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
          >
            {worldPanelStrip.label} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
