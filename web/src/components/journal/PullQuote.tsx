/** PullQuote (components.md Tier 6): display-sm, a lime rule, breaks the measure. The citable moment. */
export function PullQuote({ text, attribution }: { text: string; attribution?: string | null }) {
  return (
    <figure className="my-12 border-l-2 border-lime pl-8 lg:-ml-16 lg:pl-14">
      <blockquote className="text-display-sm leading-(--lh-display-sm) font-medium text-paper">{text}</blockquote>
      {attribution ? <figcaption className="label mt-4">{attribution}</figcaption> : null}
    </figure>
  )
}
