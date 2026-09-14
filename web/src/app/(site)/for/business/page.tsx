import type { Metadata } from "next"
import { DoorwayPage } from "@/components/templates/DoorwayPage"
import { forBusiness } from "@/content/doorways"

/** One of the six audience doorways — Tier 3. The template does the work. */
export const revalidate = 3600

export const metadata: Metadata = {
  title: forBusiness.meta.title,
  description: forBusiness.meta.description,
  alternates: { canonical: forBusiness.path },
}

export default function Page() {
  return <DoorwayPage content={forBusiness} />
}
