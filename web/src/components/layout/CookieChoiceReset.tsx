"use client"

import { clearConsent } from "@/lib/analytics"
import { Button } from "@/components/primitives/Button"

/** /legal/cookies — clears the remembered choice and reloads, so the notice returns (legal.md). */
export function CookieChoiceReset({ label }: { label: string }) {
  return (
    <Button
      variant="secondary"
      onClick={() => {
        clearConsent()
        window.location.reload()
      }}
    >
      {label}
    </Button>
  )
}
