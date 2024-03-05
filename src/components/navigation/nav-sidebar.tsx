"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Link } from "@/navigation"
import { useElementSize } from "@mantine/hooks"

import { ScrollArea } from "../ui/scroll-area"

const menus = {
  main: {
    label: "Câmara Municipal",
    link: "/",
  },
  submenus: [
    {
      label: "Paços de Concelho",
      link: "/",
    },
    {
      label: "Presidente",
      link: "/",
    },
    {
      label: "Executivo",
      link: "/",
    },
    {
      label: "Reuniões da Câmara",
      link: "/",
    },
    {
      label: "Heráldica",
      link: "/",
    },
    {
      label: "Estrutura Orgânica",
      link: "/",
    },
  ],
}

type SidebarProps = React.HTMLAttributes<HTMLDivElement> & {
  menus?: any
}

export function Sidebar({}: SidebarProps) {
  const { ref, height } = useElementSize()

  useEffect(() => {
    if (ref.current && height !== 0) {
      document.body.style.setProperty("--submenu-scroll-height", `calc(85vh - ${height}px - 40px)`)
    }
  }, [height])

  return (
    <aside className="sticky bottom-0 left-0 max-h-[85vh] min-w-[350px] max-w-[400px] self-end overflow-hidden rounded-md bg-darker-background">
      <nav className="">
        <div ref={ref} className="px-3">
          <h2 className="my-2 px-4 py-2 text-base font-medium text-primary ">
            <Link href={menus.main.link} className="hover:text-link">
              {menus.main.label}
            </Link>
          </h2>
          <Separator className="h-2 bleed-bg bleed-background" />
        </div>
        <ScrollArea className="my-2 h-[--submenu-scroll-height]">
          <div className="px-3">
            {menus.submenus.map((menu) => (
              <Button
                key={`${menu.label}-menu`}
                variant="ghost"
                className="w-full justify-start text-base font-normal"
                asChild
              >
                <Link href={menu.link}>{menu.label}</Link>
              </Button>
            ))}
            {menus.submenus.map((menu) => (
              <Button
                key={`${menu.label}-menu`}
                variant="ghost"
                className="w-full justify-start text-base font-normal"
                asChild
              >
                <Link href={menu.link}>{menu.label}</Link>
              </Button>
            ))}
            {menus.submenus.map((menu) => (
              <Button
                key={`${menu.label}-menu`}
                variant="ghost"
                className="w-full justify-start text-base font-normal"
                asChild
              >
                <Link href={menu.link}>{menu.label}</Link>
              </Button>
            ))}
            {menus.submenus.map((menu) => (
              <Button
                key={`${menu.label}-menu`}
                variant="ghost"
                className="w-full justify-start text-base font-normal"
                asChild
              >
                <Link href={menu.link}>{menu.label}</Link>
              </Button>
            ))}
            {menus.submenus.map((menu) => (
              <Button
                key={`${menu.label}-menu`}
                variant="ghost"
                className="w-full justify-start text-base font-normal"
                asChild
              >
                <Link href={menu.link}>{menu.label}</Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </nav>
    </aside>
  )
}
