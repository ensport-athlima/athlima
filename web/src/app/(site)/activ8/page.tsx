import type { Metadata } from "next"
import { IPPage } from "@/components/templates/IPPage"
import { activ8 } from "@/content/experiences"

/** One of the six experiences — Tier 2. The template does the work; a route file composes and nothing else. */
export const revalidate = 3600

export const metadata: Metadata = {
  title: activ8.meta.title,
  description: activ8.meta.description,
  alternates: { canonical: activ8.path },
}

export default function Page() {
  return <IPPage content={activ8} />
}
