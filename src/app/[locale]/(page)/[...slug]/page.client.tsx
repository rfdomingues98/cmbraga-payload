import { Blocks } from "@/components/blocks"
import { Page } from "@/payload/payload-types"

export const dynamic = "force-dynamic"

export const PageTemplate: React.FC<{ page: Page | null | undefined }> = ({ page }) => {
  return <Blocks blocks={page.layout} />
}
