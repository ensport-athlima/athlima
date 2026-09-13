import Link from "next/link"
import { breadcrumbList, serializeJsonLd } from "@/lib/json-ld"
import { env } from "@/lib/env"
import { site } from "@/content/site"
import { cn } from "@/lib/cn"

/**
 * `PARTNER / THE MODEL` (components.md `Breadcrumb`; navigation.md §6). Nested routes only — never on
 * a top-level page. The last crumb is the current page and is not a link. Carries `BreadcrumbList`
 * JSON-LD (seo.md). Label voice: the technical label.
 */
export interface Crumb {
  name: string
  path: string
}

export function Breadcrumb({ crumbs, className }: { crumbs: readonly Crumb[]; className?: string }) {
  const base = env.NEXT_PUBLIC_SITE_URL || `https://${site.domain}`
  return (
    <nav aria-label="Breadcrumb" className={cn("label", className)}>
      <ol className="flex flex-wrap items-center gap-x-3">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1
          return (
            <li key={c.path} className="flex items-center gap-x-3">
              {last ? (
                <span aria-current="page" className="text-paper">
                  {c.name}
                </span>
              ) : (
                <Link
                  href={c.path}
                  className="inline-flex min-h-8 items-center hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                >
                  {c.name}
                </Link>
              )}
              {last ? null : (
                <span aria-hidden="true" className="text-ink-600">
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>
      {/* JSON-LD is the one legitimate use: the payload is our own serialised object, with `<` escaped. */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbList(base, crumbs)) }}
      />
    </nav>
  )
}
