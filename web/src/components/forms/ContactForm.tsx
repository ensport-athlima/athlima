"use client"

import { startTransition, useActionState, useEffect, useRef } from "react"
import { useForm, type FieldValues, type Path, type Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { submitContact, type ContactState } from "@/app/actions/contact"
import { generalContactSchema, institutionalContactSchema, type ContactKind } from "@/lib/schemas/contact"
import { contact, formErrors } from "@/content/forms"
import { Button } from "@/components/primitives/Button"
import { FormShell, type SummaryError } from "./FormShell"
import { Checkbox, TextArea, TextField } from "./Field"

/**
 * FORM: the contact routes (contact.md) — general (§02) and institutional (§03, `#institutional`).
 * Same machinery as the partner enquiry: shared zod schema on both sides, the error summary focused
 * on an invalid submit, honeypot and timing, storage before email. Confirmation is inline — the
 * brief specifies it — so the form is replaced by one sentence on success.
 * The institutional variant is the site's most formal register: no lime word, one lime element.
 */
const INITIAL: ContactState = { status: "idle" }

type FieldSpec = { label: string; helper?: string }

export function ContactForm({ kind }: { kind: ContactKind }) {
  const copy = kind === "general" ? contact.general : contact.institutional
  const schema = kind === "general" ? generalContactSchema : institutionalContactSchema
  const specs = copy.fields as Record<string, FieldSpec>
  const fields = (k: string): FieldSpec => {
    const f = specs[k]
    if (!f) throw new Error(`ContactForm: no copy for field "${k}" (contact.md)`)
    return f
  }
  const action = submitContact.bind(null, kind)
  const [state, formAction, pending] = useActionState(action, INITIAL)
  const summaryRef = useRef<HTMLDivElement | null>(null)
  const mountedAt = useRef(0)
  useEffect(() => {
    mountedAt.current = Date.now()
  }, [])
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm<FieldValues>({
    // Two schemas, one component: the resolver is typed for the union, the form for plain field values.
    resolver: zodResolver(schema) as unknown as Resolver<FieldValues>,
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: false,
  })

  const serverErrors = state.status === "invalid" ? state.fieldErrors : {}
  const message = (key: string) => (errors[key]?.message as string | undefined) ?? serverErrors[key]
  const summary: SummaryError[] = Object.keys(specs).flatMap((k) => {
    const m = message(k)
    return m ? [{ id: `${kind}-${k}`, label: fields(k).label, message: m }] : []
  })
  const reg = (k: string) => register(k as Path<FieldValues>)
  const id = (k: string) => `${kind}-${k}`

  if (state.status === "done") {
    return (
      <p role="status" className="text-body-lg text-paper">
        {copy.confirmation}
      </p>
    )
  }
  if (state.status === "unavailable") {
    return <p className="text-body-lg text-paper">{contact.unavailable}</p>
  }

  return (
    <FormShell
      summary={formErrors.summary(summary.length)}
      errors={submitCount > 0 || state.status === "invalid" ? summary : []}
      summaryRef={summaryRef}
      trust={contact.trust}
      trustLabel={kind === "general" ? "Before you send your message" : "Before you send your enquiry"}
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
        <div aria-hidden="true" className="absolute -left-full h-px w-px overflow-hidden">
          <label htmlFor={id("website")}>Website</label>
          <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {kind === "general" ? (
          <>
            <TextField id={id("name")} label={fields("name").label} autoComplete="name" error={message("name")} {...reg("name")} />
            <TextField id={id("email")} label={fields("email").label} type="email" inputMode="email" autoComplete="email" error={message("email")} {...reg("email")} />
            <TextField id={id("organisation")} label={fields("organisation").label} helper={fields("organisation").helper} autoComplete="organization" error={message("organisation")} {...reg("organisation")} />
            <TextArea id={id("message")} label={fields("message").label} helper={fields("message").helper} error={message("message")} {...reg("message")} />
          </>
        ) : (
          <>
            <TextField id={id("institution")} label={fields("institution").label} autoComplete="organization" error={message("institution")} {...reg("institution")} />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <TextField id={id("name")} label={fields("name").label} autoComplete="name" error={message("name")} {...reg("name")} />
              <TextField id={id("role")} label={fields("role").label} autoComplete="organization-title" error={message("role")} {...reg("role")} />
            </div>
            <TextField id={id("email")} label={fields("email").label} helper={fields("email").helper} type="email" inputMode="email" autoComplete="email" error={message("email")} {...reg("email")} />
            <TextArea id={id("enquiry")} label={fields("enquiry").label} helper={fields("enquiry").helper} error={message("enquiry")} {...reg("enquiry")} />
          </>
        )}

        <div>
          <Checkbox id={id("consent")} label={fields("consent").label} {...reg("consent")} />
          {message("consent") ? (
            <p id={`${id("consent")}-error`} role="alert" className="mt-2 text-body-sm text-signal-error">
              {message("consent")}
            </p>
          ) : null}
        </div>

        <div className="mt-4">
          <Button variant="primary" type="submit" disabled={pending}>
            {copy.button}
          </Button>
        </div>
      </form>
    </FormShell>
  )
}
