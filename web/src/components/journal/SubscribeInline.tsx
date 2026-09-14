import { EmailCapture } from "@/components/forms/EmailCapture"
import { journal } from "@/content/journal"
import { configured } from "@/lib/env"

/**
 * SubscribeInline (components.md Tier 6): the Journal subscription, in context — the index and article
 * footers. Never the site footer, never a modal. One list (journal.md §8). Uses EmailCapture, and like
 * it renders only when storage exists; the offer line stands regardless.
 */
export function SubscribeInline({ id }: { id?: string }) {
  const s = journal.subscribe
  return (
    <section id={id} aria-label={s.label} className="border-t border-ink-800 pt-8">
      <p className="label text-paper">{s.label}</p>
      <p className="mt-3 max-w-measure text-body-lg text-ink-100">{s.offer}</p>
      {configured.postgres ? (
        <EmailCapture list="journal" field={s.field} button={s.button} confirmation={s.confirmation} className="mt-8" />
      ) : null}
    </section>
  )
}
