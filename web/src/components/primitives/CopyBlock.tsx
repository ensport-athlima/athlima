"use client"

import { useState } from "react"
import { Button } from "./Button"

/**
 * A block of approved text with its COPY control (press.md §03). Copies through the clipboard API; if
 * that is unavailable the text is still plain, selectable and complete — the button is a convenience,
 * never the only route. The state change is announced.
 */
export function CopyBlock({ label, text, copy, copied }: { label: string; text: string; copy: string; copied: string }) {
  const [done, setDone] = useState(false)
  return (
    <div className="border-t border-ink-800 pt-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="label text-paper">{label}</p>
        <Button
          variant="ghost"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(text)
              setDone(true)
              window.setTimeout(() => setDone(false), 2000)
            } catch {
              // No clipboard access: the text beneath is selectable.
            }
          }}
        >
          {done ? copied : copy}
        </Button>
        <span role="status" className="sr-only">
          {done ? `${label}: ${copied}` : ""}
        </span>
      </div>
      <p className="mt-4 max-w-measure text-body text-ink-100">{text}</p>
    </div>
  )
}
