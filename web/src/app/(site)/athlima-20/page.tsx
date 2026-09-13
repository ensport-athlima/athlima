import type { Metadata } from "next"
import { IPPage } from "@/components/templates/IPPage"
import { athlima20 } from "@/content/experiences"

/** One of the six experiences — Tier 2. The template does the work; a route file composes and nothing else. */
export const revalidate = 3600

export const metadata: Metadata = {
  title: athlima20.meta.title,
  description: athlima20.meta.description,
  alternates: { canonical: athlima20.path },
}

export default function Page() {
  return <IPPage content={athlima20} />
}
