"use client"

import { useActionState, useId } from "react"
import { captureEmail, type EmailCaptureList, type EmailCaptureState } from "@/app/actions/email-capture"
import { Button } from "@/components/primitives/Button"
import { cn } from "@/lib/cn"

/**
 * FORM: EmailCapture (components.md; decision D4) — a single field with its own inline confirmation.
 * Persistently labelled (accessibility.md); the error is announced; the confirmation replaces the form.
 * Never a modal, never in the footer. Strings come from the calling content file (ctas.md §4a).
 *
 * Renders only when the caller knows the datastore is configured — see IPPage — so it never posts
 * nowhere. The `unavailable` state exists for the window between a deploy and a migration.
 */
export interface EmailCaptureProps {
  list: EmailCaptureList
  field: { label: string; helper: string }
  button: string
  confirmation: string
  className?: string
}

const INITIAL: EmailCaptureState = { status: "idle" }

export function EmailCapture({ list, field, button, confirmation, className }: EmailCaptureProps) {
  const [state, action, pending] = useActionState(captureEmail, INITIAL)
  const id = useId()
  const inputId = `${id}-email`
  const helperId = `${id}-helper`
  const errorId = `${id}-error`

  if (state.status === "done") {
    return (
      <p role="status" className={cn("text-body-lg text-paper", className)}>
        {confirmation}
      </p>
    )
  }
  if (state.status === "unavailable") {
    // Storage is not reachable. Say nothing false; the visitor keeps the page's other routes.
    return null
  }

  const invalid = state.status === "invalid"
  return (
    <form action={action} noValidate className={cn("max-w-measure", className)}>
      <input type="hidden" name="list" value={list} />
      {/* Honeypot: hidden from everyone, including assistive technology. A bot fills it; a person cannot. */}
      <div aria-hidden="true" className="absolute -left-full h-px w-px overflow-hidden">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label htmlFor={inputId} className="label block text-paper">
        {field.label}
      </label>
      <input
        id={inputId}
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        aria-describedby={invalid ? `${helperId} ${errorId}` : helperId}
        aria-invalid={invalid || undefined}
        className={cn(
          "mt-3 block w-full min-h-touch border-b bg-transparent px-0 py-3 text-body-lg text-paper transition-colors duration-(--dur-fast) ease-sharp placeholder:text-ink-500 focus:border-lime focus:outline-none focus-visible:outline-none",
          invalid ? "border-signal-error" : "border-ink-600",
        )}
      />
      <p id={helperId} className="mt-2 text-caption text-ink-300">
        {field.helper}
      </p>
      {invalid ? (
        <p id={errorId} role="alert" className="mt-2 text-body-sm text-signal-error">
          {state.message}
        </p>
      ) : null}
      <div className="mt-8">
        <Button variant="primary" type="submit" disabled={pending}>
          {button}
        </Button>
      </div>
    </form>
  )
}
