import type { Metadata } from "next"
import { IPPage } from "@/components/templates/IPPage"
import { connect } from "@/content/experiences"

/** One of the six experiences — Tier 2. The template does the work; a route file composes and nothing else. */
export const revalidate = 3600

export const metadata: Metadata = {
  title: connect.meta.title,
  description: connect.meta.description,
  alternates: { canonical: connect.path },
}

export default function Page() {
  return <IPPage content={connect} />
}
