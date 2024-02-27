import { PropsWithChildren } from "react"
import { NavContainer } from "@/components/navigation/nav-container"
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
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#052B49] to-[#001524]">
      <NavContainer data={data} showModeToggle={false} />
      {children}
    </main>
  )
}
