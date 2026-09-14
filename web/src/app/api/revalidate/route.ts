import { revalidateTag } from "next/cache"
import { parseBody } from "next-sanity/webhook"
import { NextResponse, type NextRequest } from "next/server"
import { env } from "@/lib/env"
import { TAGS, type Tag } from "@/lib/sanity/queries"

/**
 * On-demand revalidation from a Sanity webhook (architecture.md §1). Editors publish and see it live
 * within a minute. Node runtime. The webhook signature is verified with SANITY_REVALIDATE_SECRET.
 */
export const runtime = "nodejs"

const TYPE_TO_TAG: Record<string, Tag> = {
  article: TAGS.journal,
  person: TAGS.people,
  event: TAGS.events,
  partner: TAGS.partners,
  siteSettings: TAGS.site,
  mediaSlot: TAGS.site,
}

interface WebhookBody {
  _type?: string
}

export async function POST(req: NextRequest) {
  if (!env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Revalidation is not configured." }, { status: 503 })
  }
  const { isValidSignature, body } = await parseBody<WebhookBody>(req, env.SANITY_REVALIDATE_SECRET)
  if (!isValidSignature) {
    return NextResponse.json({ message: "Invalid signature." }, { status: 401 })
  }
  const type = body?._type
  const tag = type ? TYPE_TO_TAG[type] : undefined
  if (!tag) {
    return NextResponse.json({ message: "No tag for this document type.", type }, { status: 400 })
  }
  revalidateTag(tag, "max")
  return NextResponse.json({ revalidated: true, tag, now: Date.now() })
}
