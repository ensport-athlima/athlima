import type { Metadata } from "next"
import { IPPage } from "@/components/templates/IPPage"
import { afterhours } from "@/content/experiences"

/** One of the six experiences — Tier 2. The template does the work; a route file composes and nothing else. */
export const revalidate = 3600

export const metadata: Metadata = {
  title: afterhours.meta.title,
  description: afterhours.meta.description,
  alternates: { canonical: afterhours.path },
}

export default function Page() {
  return <IPPage content={afterhours} />
}
