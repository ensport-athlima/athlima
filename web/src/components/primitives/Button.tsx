import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

/**
 * Three variants. No others (components.md `Button`; motion.md §4).
 *   primary   — lime ground, void text. The functional CTA. One per section.
 *   secondary — transparent, 1px --border, paper text; border → lime and --ink-900 fills from the bottom.
 *   ghost     — text + a lime arrow; the arrow travels 4px, a lime rule draws under the label.
 * --fs-label, uppercase, +0.1em, min 44px, zero radius, no shadow, no scale. Focus ring 2px lime at 2px.
 * White text on lime is impossible here by construction (colour.md §2). Strings come from ctas.md only.
 */
export type ButtonVariant = "primary" | "secondary" | "ghost"

interface BaseProps {
  variant: ButtonVariant
  children: ReactNode
  className?: string
}
interface LinkProps extends BaseProps {
  href: string
  type?: never
  onClick?: never
  disabled?: never
}
interface ActionProps extends BaseProps {
  href?: never
  type?: "button" | "submit"
  onClick?: () => void
  disabled?: boolean
}
export type ButtonProps = LinkProps | ActionProps

const BASE =
  "group inline-flex min-h-touch items-center justify-center gap-2 rounded-none text-label font-medium tracking-(--ls-button) uppercase no-underline transition-colors duration-(--dur-base) ease-sharp focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"

const VARIANT: Record<ButtonVariant, string> = {
  primary:
    "bg-lime px-8 py-3 text-void hover:bg-lime-bright active:bg-lime-deep disabled:cursor-not-allowed disabled:bg-ink-600 disabled:text-void",
  secondary:
    "relative isolate overflow-hidden border border-border bg-transparent px-8 py-3 text-paper hover:border-lime active:border-lime-deep active:text-ink-200 disabled:cursor-not-allowed disabled:border-ink-700 disabled:text-ink-disabled before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-ink-900 before:transition-transform before:duration-(--dur-base) before:ease-sharp hover:before:translate-y-0",
  ghost:
    "relative px-0 text-paper active:text-ink-200 disabled:cursor-not-allowed disabled:text-ink-disabled after:absolute after:bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-lime after:transition-[width] after:duration-(--dur-fast) after:ease-sharp hover:after:w-[calc(100%-1.5em)]",
}

function Label({ variant, children }: { variant: ButtonVariant; children: ReactNode }) {
  if (variant !== "ghost") return <>{children}</>
  return (
    <>
      {children}
      <span
        aria-hidden="true"
        className="text-lime transition-transform duration-(--dur-fast) ease-sharp group-hover:translate-x-1 group-disabled:text-ink-disabled"
      >
        →
      </span>
    </>
  )
}

export function Button(props: ButtonProps) {
  const { variant, children, className } = props
  const classes = cn(BASE, VARIANT[variant], className)
  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        <Label variant={variant}>{children}</Label>
      </Link>
    )
  }
  const { type = "button", onClick, disabled } = props as ActionProps
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      <Label variant={variant}>{children}</Label>
    </button>
  )
}
