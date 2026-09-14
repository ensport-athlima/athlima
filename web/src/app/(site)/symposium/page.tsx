import type { Metadata } from "next"
import { og } from "@/lib/og"
import { IPPage } from "@/components/templates/IPPage"
import { symposium } from "@/content/experiences"

/** One of the six experiences — Tier 2. The template does the work; a route file composes and nothing else. */
export const revalidate = 3600

export const metadata: Metadata = {
  title: symposium.meta.title,
  description: symposium.meta.description,
  alternates: { canonical: symposium.path },
  ...og(symposium.meta.title),
}

export default function Page() {
  return <IPPage content={symposium} />
}
