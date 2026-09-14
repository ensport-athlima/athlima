import type { Metadata } from "next"
import { og } from "@/lib/og"
import { DoorwayPage } from "@/components/templates/DoorwayPage"
import { forInfrastructure } from "@/content/doorways"

/** One of the six audience doorways — Tier 3. The template does the work. */
export const revalidate = 3600

export const metadata: Metadata = {
  title: forInfrastructure.meta.title,
  description: forInfrastructure.meta.description,
  alternates: { canonical: forInfrastructure.path },
  ...og(forInfrastructure.meta.title),
}

export default function Page() {
  return <DoorwayPage content={forInfrastructure} />
}
