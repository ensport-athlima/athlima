/**
 * The smallest possible rich text: a paragraph as a list of plain runs and emphasised runs, so a
 * content file (a .ts constant) can mark one phrase without carrying JSX. Emphasis is weight, never
 * italic (globals.css base layer).
 */
export type RichRun = string | { strong: string }
export type RichParagraph = readonly RichRun[]

export function RichText({ runs }: { runs: RichParagraph }) {
  return (
    <>
      {runs.map((run, i) =>
        typeof run === "string" ? run : <strong key={i}>{run.strong}</strong>,
      )}
    </>
  )
}

/** The plain string of a paragraph — for keys, meta descriptions and accessible names. */
export function richToString(runs: RichParagraph): string {
  return runs.map((run) => (typeof run === "string" ? run : run.strong)).join("")
}
