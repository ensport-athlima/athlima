import type { ReactNode, RefObject } from "react"
import { cn } from "@/lib/cn"

/**
 * FormShell (components.md): the wrapper for every form. The error summary at the top — an
 * `aria-live` region, each error linked to its field (accessibility.md §1.10) — the form beside a
 * trust panel that answers the doubts at the point of conversion (conversion-strategy.md §7).
 * Progress is for multi-step forms only; the partner enquiry is one page (decision D12).
 */
export interface SummaryError {
  id: string
  label: string
  message: string
}

export interface FormShellProps {
  summary: string
  errors: readonly SummaryError[]
  summaryRef?: RefObject<HTMLDivElement | null>
  trust: readonly { term: string; detail: string }[]
  /** The aside's accessible name — unique when two forms share a page. */
  trustLabel?: string
  children: ReactNode
  className?: string
}

export function FormShell({ summary, errors, summaryRef, trust, trustLabel = "Before you send", children, className }: FormShellProps) {
  return (
    <div className={cn("lg:grid lg:grid-cols-12 lg:gap-x-gutter", className)}>
      <div className="lg:col-span-7">
        <div ref={summaryRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
          {errors.length ? (
            <div className="mb-10 border-l-2 border-signal-error pl-6">
              <p className="text-body text-paper">{summary}</p>
              <ul className="mt-3 flex flex-col gap-1">
                {errors.map((e) => (
                  <li key={e.id}>
                    <a href={`#${e.id}`} className="text-body-sm text-signal-error underline underline-offset-4 hover:text-paper">
                      {e.label}: {e.message}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        {children}
      </div>
      <aside aria-label={trustLabel} className="mt-16 border-t border-ink-800 pt-8 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-gutter">
        <dl className="flex flex-col gap-8">
          {trust.map((t) => (
            <div key={t.term}>
              <dt className="label text-paper">{t.term}</dt>
              <dd className="mt-2 text-body-sm text-ink-200">{t.detail}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </div>
  )
}
