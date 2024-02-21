"use client"

import { Blocks } from "@/components/blocks"
import { Page } from "@/payload/payload-types"
import { useLivePreview } from "@payloadcms/live-preview-react"

export const PageTemplate: React.FC<{ page: Page | null | undefined }> = ({ page }) => {
  const { data } = useLivePreview({
    serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL || "",
    depth: 2,
    initialData: page,
  })

  return <Blocks blocks={page.layout} />
}
