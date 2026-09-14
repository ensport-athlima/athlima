import type { Metadata } from "next"
import { DoorwayPage } from "@/components/templates/DoorwayPage"
import { forInstitutions } from "@/content/doorways"

/** One of the six audience doorways — Tier 3. The template does the work. */
export const revalidate = 3600

export const metadata: Metadata = {
  title: forInstitutions.meta.title,
  description: forInstitutions.meta.description,
  alternates: { canonical: forInstitutions.path },
}

export default function Page() {
  return <DoorwayPage content={forInstitutions} />
}
