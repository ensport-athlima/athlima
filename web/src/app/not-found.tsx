import type { Metadata } from "next"
import Link from "next/link"
import { routes } from "@/lib/routes"

/** 404 — copy locked in 04_CONTENT/ctas.md §5. Designed, on-brand, with a route back into the world. */
export const metadata: Metadata = { title: "Not found", robots: { index: false } }

export default function NotFound() {
  return (
    <main
      id="content"
      className="flex min-h-svh flex-col justify-center px-margin py-section-standard"
    >
      <h1 className="display text-display-lg text-paper">THIS ROOM DOESN&rsquo;T EXIST.</h1>
      <p className="mt-8 max-w-measure text-body-lg text-ink-200">
        The page you&rsquo;re looking for isn&rsquo;t here. The rest of ATHLIMA is.
      </p>
      <Link
        href={routes.home}
        className="label mt-12 inline-flex min-h-touch w-fit items-center bg-lime px-8 text-void transition-colors duration-(--dur-base) ease-sharp hover:bg-lime-bright"
      >
        RETURN TO ATHLIMA
      </Link>
    </main>
  )
}
