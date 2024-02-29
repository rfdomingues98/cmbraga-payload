import { type PropsWithChildren } from "react"
import { getPayloadClient } from "@/payload/getPayload"
import { Footer, Header } from "@/payload/payload-types"
import { useLocale } from "next-intl"

import { ClientGlobals } from "./globals.client"

export const Globals = async ({ children }: PropsWithChildren) => {
  const locale = useLocale()
  const payload = await getPayloadClient()
  const header = (await payload.findGlobal({
    slug: "header",
    depth: 2,
    locale,
    fallbackLocale: "pt",
  })) as Header

  const footer = (await payload.findGlobal({
    slug: "footer",
    locale,
    fallbackLocale: "pt",
  })) as unknown as Footer

  return (
    <ClientGlobals headerData={header} footerData={footer}>
      {children}
    </ClientGlobals>
  )
}
