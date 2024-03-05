import { Metadata } from "next"
import { draftMode } from "next/headers"
import { notFound } from "next/navigation"
import { Sidebar } from "@/components/navigation/nav-sidebar"
import { getPayloadClient } from "@/payload/getPayload"
import type { Page } from "@/payload/payload-types"
import { generateMeta } from "@/utils/generateMeta"
import { unstable_setRequestLocale } from "next-intl/server"

import { fetchPage } from "./_actions"
import { PageTemplate } from "./page.client"

export const dynamic = "force-dynamic"

export default async function Page({ params: { slug, locale } }) {
  unstable_setRequestLocale(locale)
  const { isEnabled: isDraftMode } = draftMode()
  const page = await fetchPage(slug, isDraftMode)

  if (!page) {
    return notFound()
  }

  return page.menu ? (
    <div className="flex gap-10">
      <Sidebar />
      <div className="prose max-w-full flex-1 px-10 pb-20 xl:prose-xl ">
        <PageTemplate page={page} />
      </div>
    </div>
  ) : (
    <PageTemplate page={page} />
  )
}

export async function generateStaticParams() {
  const payload = await getPayloadClient()
  try {
    const { docs } = await payload.find({ collection: "pages" })

    return docs.map(({ breadcrumbs }) => ({
      slug: breadcrumbs?.[breadcrumbs.length - 1]?.url?.replace(/^\/|\/$/g, "").split("/"),
    }))
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()
  let page: Page | null = null

  try {
    page = await fetchPage(slug, isDraftMode)
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render static fallback pages for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  return generateMeta({ doc: page })
}
