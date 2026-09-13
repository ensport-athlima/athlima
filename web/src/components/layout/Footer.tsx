import Link from "next/link"
import { AthlimaWordmark } from "@/components/marks/AthlimaWordmark"
import { Button } from "@/components/primitives/Button"
import { footer, applyCta } from "@/content/navigation"
import { routes } from "@/lib/routes"

/**
 * THE FOOTER (navigation.md §5) — where the completeness lives, so the header can stay minimal. A real
 * <footer> landmark with headings, not a wall of anonymous links. No newsletter form. The Advisory
 * Council link renders only when the route exists. The ENARR and ENSPORT marks are named plates until
 * their vectors arrive (B2); social icons render only once the accounts are confirmed [TO VERIFY].
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
          <Button variant="primary" href={applyCta.href}>
            {applyCta.label}
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
          {/* THE MARKS belong here (B2): ENARR and ENSPORT at their own colours, generous clear space, as SVG. */}
          <div className="flex flex-wrap gap-4">
            <span className="label flex min-h-12 items-center bg-ink-850 px-6 text-ink-300">
              THE ENARR GROUP
            </span>
            <span className="label flex min-h-12 items-center bg-ink-850 px-6 text-ink-300">
              ENSPORT VENTURES
            </span>
          </div>
          <p className="mt-6 text-body-sm text-ink-200">{footer.entityLine}</p>
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
