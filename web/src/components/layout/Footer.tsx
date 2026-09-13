import Link from "next/link"
import Image from "next/image"
import { CORPORATE_MARKS } from "@/components/blocks/ProvenanceBlock"
import { AthlimaWordmark } from "@/components/marks/AthlimaWordmark"
import { Button } from "@/components/primitives/Button"
import { footer, permanentCta } from "@/content/navigation"
import { routes } from "@/lib/routes"
import { cn } from "@/lib/cn"

/**
 * THE FOOTER (navigation.md §5) — where the completeness lives, so the header can stay minimal. A real
 * <footer> landmark with headings, not a wall of anonymous links. No newsletter form. The Advisory
 * Council link renders only when the route exists. The entity block follows decision B3 §4d — the brand
 * line and the statutory line; registered office, telephone and email join it when supplied (B3a/B3b).
 * Social icons render only once the accounts are confirmed [TO VERIFY].
 */
export function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-900 px-margin pt-section-dense pb-section-tight text-ink-100">
      <div className="mx-auto max-w-content-max">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href={routes.home}
              aria-label="ATHLIMA — home"
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              <AthlimaWordmark decorative className="h-6 w-auto" />
            </Link>
            <p className="display mt-6 text-display-sm text-paper">{footer.statement}</p>
            <p className="label mt-4">{footer.detail}</p>
          </div>
          <Button variant="primary" href={permanentCta.href}>
            {permanentCta.label}
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-gutter gap-y-12 border-t border-ink-800 pt-12 md:grid-cols-4">
          {footer.columns.map((col) => (
            <nav key={col.heading} aria-labelledby={`footer-${col.heading}`}>
              <h2 id={`footer-${col.heading}`} className="label text-paper">
                {col.heading}
              </h2>
              <ul className="mt-4 flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="inline-flex min-h-8 items-center text-body-sm text-ink-200 transition-colors duration-(--dur-fast) ease-sharp hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                {col.heading === "THE ROOM" && footer.advisoryCouncilLive ? (
                  <li>
                    <Link
                      href={footer.advisoryCouncil.href}
                      className="inline-flex min-h-8 items-center text-body-sm text-ink-200 hover:text-paper"
                    >
                      {footer.advisoryCouncil.label}
                    </Link>
                  </li>
                ) : null}
              </ul>
            </nav>
          ))}
        </div>

        <nav aria-label="Doorways" className="mt-12 border-t border-ink-800 pt-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.doorways.map((d) => (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className="label inline-flex min-h-8 items-center text-ink-300 hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                >
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 border-t border-ink-800 pt-8">
          {/* ENARR and ENSPORT at their own colours on their own plates — see ProvenanceBlock's MARKS note. */}
          <ul className="flex flex-wrap gap-4" aria-label="Built by">
            {CORPORATE_MARKS.map((m) => (
              <li
                key={m.src}
                className={cn(
                  "flex min-h-20 items-center px-6 py-4",
                  m.plate === "light" ? "bg-paper-warm" : "bg-void",
                )}
              >
                <Image
                  src={m.src}
                  alt={m.alt}
                  width={m.width}
                  height={m.height}
                  sizes="120px"
                  className="h-auto w-auto max-h-12"
                />
              </li>
            ))}
          </ul>
          <p className="mt-6 text-body-sm text-ink-200">{footer.brandLine}</p>
          <p className="mt-1 text-caption text-ink-400">{footer.statutoryLine}</p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-ink-800 pt-6 text-caption text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex gap-6">
            {footer.legal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex min-h-8 items-center hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
