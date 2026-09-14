import type { Metadata } from "next"
import { DoorwayPage } from "@/components/templates/DoorwayPage"
import { forAthletes } from "@/content/doorways"

/** One of the six audience doorways — Tier 3. The template does the work. */
export const revalidate = 3600

export const metadata: Metadata = {
  title: forAthletes.meta.title,
  description: forAthletes.meta.description,
  alternates: { canonical: forAthletes.path },
}

export default function Page() {
  return <DoorwayPage content={forAthletes} />
}
