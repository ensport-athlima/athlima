"use client"

import { startTransition, useActionState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { submitPartnerEnquiry, type PartnerEnquiryState } from "@/app/actions/partner-enquiry"
import { partnerEnquirySchema, type PartnerEnquiryInput } from "@/lib/schemas/partner-enquiry"
import { formErrors, partnerEnquiry } from "@/content/forms"
import { Button } from "@/components/primitives/Button"
import { FormShell, type SummaryError } from "./FormShell"
import { Checkbox, Select, TextArea, TextField } from "./Field"

/**
 * FORM: the partner enquiry — the site's one conversion (decisions A1, A2; conversion-strategy.md
 * §4.2). One page, not multi-step (D12). Validated on the client by the shared zod schema, then again
 * by the Server Action; on success the action redirects to /partner/enquire/received. The fields stay
 * uncontrolled (react-hook-form `register`), so the browser's FormData is what is sent. The form is a
 * client island inside a static page; nothing here animates.
 */
const INITIAL: PartnerEnquiryState = { status: "idle" }
const F = partnerEnquiry.fields

export function PartnerEnquiryForm() {
  const [state, formAction, pending] = useActionState(submitPartnerEnquiry, INITIAL)
  const summaryRef = useRef<HTMLDivElement | null>(null)
  // The mount time, for the action's too-fast-to-be-a-person check. Set after mount, not in render.
  const mountedAt = useRef(0)
  useEffect(() => {
    mountedAt.current = Date.now()
  }, [])
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm<PartnerEnquiryInput>({
    resolver: zodResolver(partnerEnquirySchema),
    mode: "onSubmit",
    reValidateMode: "onBlur",
    // On an invalid submit, focus goes to the error summary (announced, every error linked to its
    // field — accessibility.md §1.10), not to the first field.
    shouldFocusError: false,
  })

  // Client errors first; the server's (a second opinion on the same schema) fill in behind them.
  const serverErrors = state.status === "invalid" ? state.fieldErrors : {}
  const message = (key: keyof PartnerEnquiryInput) =>
    (errors[key]?.message as string | undefined) ?? serverErrors[key]

  const summary: SummaryError[] = (Object.keys(F) as (keyof typeof F)[])
    .filter((k) => k !== "prospectus")
    .flatMap((k) => {
      const m = message(k as keyof PartnerEnquiryInput)
      return m ? [{ id: k, label: F[k].label, message: m }] : []
    })

  if (state.status === "unavailable") {
    return <p className="text-body-lg text-paper">{partnerEnquiry.unavailable}</p>
  }

  return (
    <FormShell
      summary={state.status === "failed" ? state.message : formErrors.summary(summary.length)}
      errors={state.status === "failed" ? [] : submitCount > 0 || state.status === "invalid" ? summary : []}
      summaryRef={summaryRef}
      trust={partnerEnquiry.trust}
    >
      {state.status === "failed" ? (
        <p role="alert" className="mb-10 border-l-2 border-signal-error pl-6 text-body text-paper">
          {state.message}
        </p>
      ) : null}
      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          const form = event.currentTarget
          void handleSubmit(
            () => {
              const data = new FormData(form)
              data.set("rendered", String(mountedAt.current))
              startTransition(() => formAction(data))
            },
            () => summaryRef.current?.focus(),
          )(event)
        }}
        className="flex flex-col gap-8"
      >
        {/* Honeypot — hidden from everyone including assistive technology. A person cannot fill it. */}
        <div aria-hidden="true" className="absolute -left-full h-px w-px overflow-hidden">
          <label htmlFor="pe-website">Website</label>
          <input id="pe-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <TextField id="organisation" label={F.organisation.label} autoComplete="organization" error={message("organisation")} {...register("organisation")} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <TextField id="name" label={F.name.label} autoComplete="name" error={message("name")} {...register("name")} />
          <TextField id="role" label={F.role.label} autoComplete="organization-title" error={message("role")} {...register("role")} />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <TextField id="email" label={F.email.label} type="email" inputMode="email" autoComplete="email" error={message("email")} {...register("email")} />
          <TextField id="phone" label={F.phone.label} type="tel" inputMode="tel" autoComplete="tel" error={message("phone")} {...register("phone")} />
        </div>
        <Select id="category" label={F.category.label} helper={F.category.helper} options={partnerEnquiry.categories} error={message("category")} {...register("category")} />
        <TextArea id="territory" label={F.territory.label} helper={F.territory.helper} error={message("territory")} {...register("territory")} />
        <Select id="scale" label={F.scale.label} helper={F.scale.helper} options={partnerEnquiry.scales} error={message("scale")} {...register("scale")} />
        <Checkbox id="prospectus" label={F.prospectus.label} {...register("prospectus")} />

        <div className="mt-4">
          <Button variant="primary" type="submit" disabled={pending}>
            {partnerEnquiry.button}
          </Button>
        </div>
      </form>
    </FormShell>
  )
}
