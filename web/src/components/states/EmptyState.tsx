/**
 * EmptyState (components.md Tier 7): on-brand copy with a route out. Never "no results", never a
 * spinner. The Journal's: `Nothing here yet. The [PILLAR] thinking is being written.`
 */
import Link from "next/link"

export function EmptyState({ text, route }: { text: string; route?: { label: string; href: string } }) {
  return (
    <div className="border-t border-ink-800 py-12">
      <p className="max-w-measure text-body-lg text-paper">{text}</p>
      {route ? (
        <Link href={route.href} className="label mt-6 inline-flex min-h-touch items-center gap-2 hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime">
          {route.label}
          <span aria-hidden="true" className="text-lime">→</span>
        </Link>
      ) : null}
    </div>
  )
}
