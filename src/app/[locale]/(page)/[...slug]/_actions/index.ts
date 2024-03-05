"use server"

import { getPayloadClient } from "@/payload/getPayload"
import { Page } from "@/payload/payload-types"

export const fetchPage = async (
  incomingSlugSegments?: string[],
  draft?: boolean,
): Promise<Page | null> => {
  const slugSegments = incomingSlugSegments || ["home"]
  const slug = slugSegments.at(-1)
  const payload = await getPayloadClient()
  const data = await payload.find({
    collection: "pages",
    where: { slug: { equals: slug } },
    draft,
  })

  const pagePath = `/${slugSegments.join("/")}`
  const page = data.docs.find(({ breadcrumbs }: Page) => {
    if (!breadcrumbs) return false
    const { url } = breadcrumbs[breadcrumbs.length - 1]
    return url === pagePath
  })

  if (page) {
    return page
  }

  return null
}
