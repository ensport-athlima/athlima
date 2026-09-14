import type { Metadata } from "next"
import { DoorwayPage } from "@/components/templates/DoorwayPage"
import { forCapital } from "@/content/doorways"

/** One of the six audience doorways — Tier 3. The template does the work. */
export const revalidate = 3600

export const metadata: Metadata = {
  title: forCapital.meta.title,
  description: forCapital.meta.description,
  alternates: { canonical: forCapital.path },
}

export default function Page() {
  return <DoorwayPage content={forCapital} />
}
