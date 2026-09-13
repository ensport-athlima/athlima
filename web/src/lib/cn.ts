import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/** Merges class names. Every block accepts an optional `className` merged with this (component-rules.md §3). */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
