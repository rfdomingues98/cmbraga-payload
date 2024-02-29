import { Metadata } from "next"
import { draftMode } from "next/headers"
import { notFound } from "next/navigation"
import { getPayloadClient } from "@/payload/getPayload"
import type { Page } from "@/payload/payload-types"
import { generateMeta } from "@/utils/generateMeta"

import { PageTemplate } from "./page.client"

export default async function Page({ params: { slug = "home" } }) {
  const { isEnabled: isDraftMode } = draftMode()

  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: "pages",
    where: { slug: { equals: slug } },
    draft: isDraftMode,
    pagination: false,
  })

  const page = docs[0]

  if (!page) {
    return notFound()
  }

  return <PageTemplate page={page} />
}

export async function generateStaticParams() {
  const payload = await getPayloadClient()
  try {
    const { docs } = await payload.find({ collection: "pages" })
    return docs?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug = "home" } }): Promise<Metadata> {
  const payload = await getPayloadClient()
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    const { docs } = await payload.find({
      collection: "pages",
      where: { slug: { equals: slug } },
      draft: isDraftMode,
    })
    page = docs[0]
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render static fallback pages for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  return generateMeta({ doc: page })
}
