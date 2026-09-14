import type { Metadata } from "next"
import { DoorwayPage } from "@/components/templates/DoorwayPage"
import { forBrands } from "@/content/doorways"

/** One of the six audience doorways — Tier 3. The template does the work. */
export const revalidate = 3600

export const metadata: Metadata = {
  title: forBrands.meta.title,
  description: forBrands.meta.description,
  alternates: { canonical: forBrands.path },
}

export default function Page() {
  return <DoorwayPage content={forBrands} />
}
