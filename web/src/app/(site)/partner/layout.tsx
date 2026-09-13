import type { ReactNode } from "react"
import { PartnerSubNav } from "@/components/layout/PartnerSubNav"

/**
 * The PARTNER cluster shares one sub-navigation (navigation.md §4). It sits beneath the fixed site nav —
 * hence the top offset — and above every page in the cluster.
 */
export default function PartnerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="pt-nav">
        <PartnerSubNav />
      </div>
      {children}
    </>
  )
}
