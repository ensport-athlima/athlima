import * as z from "zod/mini"
import { formErrors } from "@/content/forms"

/** The two contact routes (contact.md §02–§03) — one schema each, shared by client and Server Action. */
const required = z.string().check(z.trim(), z.minLength(1, formErrors.required))
const email = z.pipe(required, z.email(formErrors.email))
const consent = z.literal(true, formErrors.required)
const long = z.string().check(z.trim(), z.minLength(1, formErrors.required), z.minLength(20, formErrors.tooShort))

export const generalContactSchema = z.object({
  name: required,
  email,
  organisation: z.optional(z.string().check(z.trim())),
  message: long,
  consent,
})

export const institutionalContactSchema = z.object({
  institution: required,
  name: required,
  role: required,
  email,
  enquiry: long,
  consent,
})

export type GeneralContactInput = z.input<typeof generalContactSchema>
export type InstitutionalContactInput = z.input<typeof institutionalContactSchema>
export type ContactKind = "general" | "institutional"
