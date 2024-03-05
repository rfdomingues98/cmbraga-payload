import { PropsWithChildren } from "react"
import { Header, Media } from "@/payload/payload-types"

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
export default function Layout({ children }: PropsWithChildren) {
  return children
}
