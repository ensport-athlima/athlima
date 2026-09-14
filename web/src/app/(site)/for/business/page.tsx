import type { Metadata } from "next"
import { og } from "@/lib/og"
import { DoorwayPage } from "@/components/templates/DoorwayPage"
import { forBusiness } from "@/content/doorways"

/** One of the six audience doorways — Tier 3. The template does the work. */
export const revalidate = 3600

export const metadata: Metadata = {
  title: forBusiness.meta.title,
  description: forBusiness.meta.description,
  alternates: { canonical: forBusiness.path },
  ...og(forBusiness.meta.title),
}

export default function Page() {
  return <DoorwayPage content={forBusiness} />
}
