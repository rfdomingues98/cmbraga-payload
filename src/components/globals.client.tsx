"use client"

import { useSelectedLayoutSegments } from "next/navigation"
import { Header, Media } from "@/payload/payload-types"

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

export const ClientGlobals = ({ children, headerData, footerData }) => {
  const segments = useSelectedLayoutSegments()
  return segments[0] === "agenda" ? (
    <>
      <main className="min-h-screen bg-gradient-to-b from-[#052B49] to-[#001524]">
        <NavContainer data={data} showModeToggle={false} />
        {children}
      </main>
    </>
  ) : (
    <>
      <NavContainer data={headerData} />
      <main className="container mx-auto flex flex-1 flex-col py-20">{children}</main>
      <FooterContainer data={footerData} />
    </>
  )
}
