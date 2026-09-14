"use client"

import { useState } from "react"

/**
 * ShareRow (components.md Tier 6): copy link, LinkedIn, X, WhatsApp. Small, last, in the sticky aside.
 * Share intents, not SDKs — no third-party scripts. Text labels; the copied state is announced.
 */
export function ShareRow({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)
  const u = encodeURIComponent(url)
  const t = encodeURIComponent(title)
  const links = [
    { label: "LINKEDIN", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: "X", href: `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
    { label: "WHATSAPP", href: `https://wa.me/?text=${t}%20${u}` },
  ]
  const cls = "label inline-flex min-h-8 items-center hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
  return (
    <div>
      <p className="label text-paper">SHARE</p>
      <ul className="mt-2 flex flex-wrap gap-x-5">
        <li>
          <button
            type="button"
            className={cls}
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(url)
                setCopied(true)
                window.setTimeout(() => setCopied(false), 2000)
              } catch {
                // No clipboard: the address bar has the link.
              }
            }}
          >
            {copied ? "COPIED" : "COPY LINK"}
          </button>
          <span role="status" className="sr-only">
            {copied ? "Link copied" : ""}
          </span>
        </li>
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} rel="noopener" target="_blank" className={cls}>
              {l.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
