import { PropsWithChildren } from "react"
import { Footer, Header, Media } from "@/payload/payload-types"
import { getSubdomain } from "@/utils/getSubdomain"

import { FooterContainer } from "./footer/footer-container"
import { NavContainer } from "./navigation/nav-container"

const logo: Media = {
  id: 0,
  url: "/agenda_braga_logo.svg",
  alt: "logo",
  updatedAt: "",
  createdAt: "",
}

const data: Header = {
  id: 0,
  logo: {
    logoLight: logo,
    logoDark: logo,
  },
  menus: [
    {
      menu: {
        relationTo: "menus",
        value: {
          id: 1,
          title: "Calendário",
          createdAt: "",
          updatedAt: "",
        },
      },
    },
    {
      menu: {
        relationTo: "menus",
        value: {
          id: 2,
          title: "Descobrir Braga",
          createdAt: "",
          updatedAt: "",
        },
      },
    },
  ],
}

type Props = PropsWithChildren<{
  headerData: Header
  footerData: Footer
}>

export const ClientGlobals = ({ children, headerData, footerData }: Props) => {
  const subdomain = getSubdomain()
  return subdomain === "agenda" ? (
    <main className="container relative mx-auto min-h-screen max-w-full">
      <NavContainer data={data} showModeToggle={false} />
      <div>{children}</div>
    </main>
  ) : (
    <main className="container relative mx-auto min-h-screen max-w-full">
      <NavContainer data={headerData} />
      <div className="container mx-auto pt-20">{children}</div>
      <FooterContainer data={footerData} />
    </main>
  )
}
