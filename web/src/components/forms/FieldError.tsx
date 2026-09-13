/**
 * Inline, beneath the field, linked by `aria-describedby` (components.md `FieldError`). Colour is never
 * the only signal: the error icon (iconography.md) and the text carry it too.
 */
export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-2 flex items-start gap-2 text-body-sm text-signal-error">
      <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-1 h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="8" cy="8" r="7" />
        <path d="M8 4.5v4.5M8 11.5v.5" strokeLinecap="round" />
      </svg>
      <span>{message}</span>
    </p>
  )
}
