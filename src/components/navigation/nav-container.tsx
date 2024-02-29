"use client"

import { useEffect, useState } from "react"
import { useScrollDirection } from "@/hooks/use-scroll-direction"
import { cn } from "@/lib/utils"
import { Header } from "@/payload/payload-types"
import { useElementSize, useWindowScroll } from "@mantine/hooks"

import { MainNav } from "./main-nav"

type NavContainerProps = {
  data: Header
  showModeToggle?: boolean
}

export function NavContainer({ data, showModeToggle = true }: NavContainerProps) {
  const { ref, width, height } = useElementSize()
  const [url, setUrl] = useState("agenda.localhost:3000")
  const [scroll] = useWindowScroll()
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    setUrl(window.location.hostname)
  }, [])

  const subdomain = url.split(".")[0]
  return (
    <header
      ref={ref}
      id="navbar"
      className={cn(
        "fixed z-40 w-full transition-all duration-300",
        scroll.y === 0 || scrollDirection === "up" ? "top-0" : "-top-[100px]",
        scroll.y !== 0 && "bg-[#001524]/20 backdrop-blur-sm",
        subdomain !== "agenda" && scroll.y === 0 && "border-b-transparent bg-background",
        subdomain !== "agenda" &&
          scroll.y !== 0 &&
          "border-b-gray-400/20 bg-background/95 dark:border-b-primary/20",
        subdomain !== "agenda" && "sticky border-b duration-300 dark:text-foreground",
      )}
      data-height={height}
      data-width={width}
    >
      <MainNav data={data} showModeToggle={showModeToggle} />
    </header>
  )
}
