import type { Metadata } from "next"
import { og } from "@/lib/og"
import { IPPage } from "@/components/templates/IPPage"
import { athlimax } from "@/content/experiences"

/** One of the six experiences — Tier 2. The template does the work; a route file composes and nothing else. */
export const revalidate = 3600

export const metadata: Metadata = {
  title: athlimax.meta.title,
  description: athlimax.meta.description,
  alternates: { canonical: athlimax.path },
  ...og(athlimax.meta.title),
}

export default function Page() {
  return <IPPage content={athlimax} />
}
