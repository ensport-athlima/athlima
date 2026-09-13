import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react"
import { FieldError } from "./FieldError"
import { cn } from "@/lib/cn"

/**
 * TIER 5 — the form fields (components.md). One shape for all three: a persistent visible <label>, the
 * control, an optional helper, an inline error. `--ink-850` well, `--border` boundary, lime focus ring;
 * error state pairs `--signal-error` with an icon and text. `inputmode` and `autocomplete` are set by
 * the caller per field. Never placeholder-as-label.
 */
interface FieldChrome {
  id: string
  label: string
  helper?: string
  error?: string
  className?: string
}

const CONTROL =
  "mt-3 block w-full min-h-touch border bg-ink-850 px-4 py-3 text-body text-paper transition-colors duration-(--dur-fast) ease-sharp focus:border-lime focus:outline-none focus-visible:outline-none"

function Wrap({
  id,
  label,
  helper,
  error,
  className,
  children,
}: FieldChrome & { children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label block text-paper">
        {label}
      </label>
      {children}
      {helper ? (
        <p id={`${id}-helper`} className="mt-2 text-caption text-ink-300">
          {helper}
        </p>
      ) : null}
      <FieldError id={`${id}-error`} message={error} />
    </div>
  )
}

function describedBy(id: string, helper?: string, error?: string) {
  const ids = [helper ? `${id}-helper` : null, error ? `${id}-error` : null].filter(Boolean)
  return ids.length ? ids.join(" ") : undefined
}

export function TextField({
  id,
  label,
  helper,
  error,
  className,
  ...input
}: FieldChrome & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "className">) {
  return (
    <Wrap id={id} label={label} helper={helper} error={error} className={className}>
      <input
        id={id}
        aria-describedby={describedBy(id, helper, error)}
        aria-invalid={error ? true : undefined}
        className={cn(CONTROL, error ? "border-signal-error" : "border-border")}
        {...input}
      />
    </Wrap>
  )
}

export function TextArea({
  id,
  label,
  helper,
  error,
  className,
  ...textarea
}: FieldChrome & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "className">) {
  return (
    <Wrap id={id} label={label} helper={helper} error={error} className={className}>
      {/* Grows with its content (field-sizing); a min-height, never a fixed one that clips at 200% zoom. */}
      <textarea
        id={id}
        rows={4}
        aria-describedby={describedBy(id, helper, error)}
        aria-invalid={error ? true : undefined}
        className={cn(CONTROL, "[field-sizing:content] min-h-32 resize-y", error ? "border-signal-error" : "border-border")}
        {...textarea}
      />
    </Wrap>
  )
}

export function Select({
  id,
  label,
  helper,
  error,
  className,
  options,
  placeholder = "Choose one",
  ...select
}: FieldChrome & {
  options: readonly { value: string; label: string }[]
  placeholder?: string
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "id" | "className">) {
  return (
    <Wrap id={id} label={label} helper={helper} error={error} className={className}>
      {/* Native <select>, styled minimally — never a custom listbox (components.md). */}
      <select
        id={id}
        defaultValue=""
        aria-describedby={describedBy(id, helper, error)}
        aria-invalid={error ? true : undefined}
        className={cn(CONTROL, "appearance-none", error ? "border-signal-error" : "border-border")}
        {...select}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </Wrap>
  )
}

export function Checkbox({
  id,
  label,
  className,
  ...input
}: { id: string; label: string; className?: string } & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "className" | "type">) {
  return (
    <label htmlFor={id} className={cn("group flex min-h-touch cursor-pointer items-start gap-4", className)}>
      {/*
        24px box, lime check on --void; the label is the click target; unticked by default, always.
        The native input stays in the tree (keyboard, AT, form data) but is visually hidden; the box and
        the check are drawn beside it and follow its state through `peer`.
      */}
      <input id={id} type="checkbox" className="peer sr-only" {...input} />
      <span
        aria-hidden="true"
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-border bg-ink-850 text-lime transition-colors duration-(--dur-fast) ease-sharp peer-checked:border-lime peer-checked:bg-void peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-lime [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12.5l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-body text-ink-100">{label}</span>
    </label>
  )
}
