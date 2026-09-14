import { z } from "zod"
import { formErrors } from "@/content/forms"

/** The two contact routes (contact.md §02–§03) — one schema each, shared by client and Server Action. */
const required = z.string().trim().min(1, formErrors.required)
const email = z.string().trim().min(1, formErrors.required).pipe(z.email(formErrors.email))
const consent = z.literal(true, { message: formErrors.required })

export const generalContactSchema = z.object({
  name: required,
  email,
  organisation: z.string().trim().optional(),
  message: z.string().trim().min(1, formErrors.required).min(20, formErrors.tooShort),
  consent,
})

export const institutionalContactSchema = z.object({
  institution: required,
  name: required,
  role: required,
  email,
  enquiry: z.string().trim().min(1, formErrors.required).min(20, formErrors.tooShort),
  consent,
})

export type GeneralContactInput = z.input<typeof generalContactSchema>
export type InstitutionalContactInput = z.input<typeof institutionalContactSchema>
export type ContactKind = "general" | "institutional"
