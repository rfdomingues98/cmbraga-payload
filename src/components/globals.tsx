import { type PropsWithChildren } from "react"
import { getPayloadClient } from "@/payload/getPayload"
import { Footer, Header } from "@/payload/payload-types"
import { useLocale } from "next-intl"

import { FooterContainer } from "./footer/footer-container"
import { NavContainer } from "./navigation/nav-container"

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
    <>
      <NavContainer data={header} />
      <main className="container mx-auto flex flex-1 flex-col py-20">{children}</main>
      <FooterContainer data={footer} />
    </>
  )
}
