"use client"

/**
 * The element form of `useReveal` (motion.md §3). Blocks stay Server Components; they wrap the parts
 * that move in <Reveal> and declare the variant. This is motion-layer plumbing, not a design component —
 * it renders a plain element and owns no styling of its own.
 */
import type { ElementType, ReactNode } from "react"
import { useReveal, type RevealOptions } from "./useReveal"

export interface RevealProps extends RevealOptions {
  children: ReactNode
  as?: ElementType
  className?: string
  id?: string
}

export function Reveal({ children, as: Tag = "div", className, id, ...options }: RevealProps) {
  const ref = useReveal<HTMLElement>(options)
  return (
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  )
}
