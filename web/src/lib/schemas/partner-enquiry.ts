import { z } from "zod"
import { formErrors, partnerEnquiry } from "@/content/forms"

/**
 * The partner enquiry — one zod schema shared by the client resolver and the Server Action
 * (architecture.md §6). Messages come from ctas.md §2 through content/forms.ts.
 */
const categoryValues = partnerEnquiry.categories.map((c) => c.value) as [string, ...string[]]
const scaleValues = partnerEnquiry.scales.map((s) => s.value) as [string, ...string[]]

const required = z.string().trim().min(1, formErrors.required)

export const partnerEnquirySchema = z.object({
  organisation: required,
  name: required,
  role: required,
  email: z.string().trim().min(1, formErrors.required).pipe(z.email(formErrors.email)),
  phone: z
    .string()
    .trim()
    .min(1, formErrors.required)
    .regex(/^\+\d[\d\s().-]{6,}$/, formErrors.phone),
  category: z.enum(categoryValues, { message: formErrors.required }),
  territory: z.string().trim().min(1, formErrors.required).min(20, formErrors.tooShort),
  scale: z.enum(scaleValues, { message: formErrors.required }),
  prospectus: z.boolean().default(false),
})

export type PartnerEnquiryInput = z.input<typeof partnerEnquirySchema>
export type PartnerEnquiry = z.output<typeof partnerEnquirySchema>
