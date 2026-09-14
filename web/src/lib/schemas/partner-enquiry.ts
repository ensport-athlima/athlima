import * as z from "zod/mini"
import { formErrors, partnerEnquiry } from "@/content/forms"

/**
 * The partner enquiry — one zod schema shared by the client resolver and the Server Action
 * (architecture.md §6). zod/mini: the tree-shakeable, functional build — the client pays for the
 * checks it uses, not the library. Messages come from ctas.md §2 through content/forms.ts.
 */
const categoryValues = partnerEnquiry.categories.map((c) => c.value) as [string, ...string[]]
const scaleValues = partnerEnquiry.scales.map((s) => s.value) as [string, ...string[]]

const required = z.string().check(z.trim(), z.minLength(1, formErrors.required))

export const partnerEnquirySchema = z.object({
  organisation: required,
  name: required,
  role: required,
  email: z.pipe(required, z.email(formErrors.email)),
  phone: z.string().check(z.trim(), z.minLength(1, formErrors.required), z.regex(/^\+\d[\d\s().-]{6,}$/, formErrors.phone)),
  category: z.enum(categoryValues, formErrors.required),
  territory: z.string().check(z.trim(), z.minLength(1, formErrors.required), z.minLength(20, formErrors.tooShort)),
  scale: z.enum(scaleValues, formErrors.required),
  prospectus: z._default(z.boolean(), false),
})

export type PartnerEnquiryInput = z.input<typeof partnerEnquirySchema>
export type PartnerEnquiry = z.output<typeof partnerEnquirySchema>
