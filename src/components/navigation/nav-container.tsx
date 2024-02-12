"use client"

import { cn } from "@/lib/utils"
import { Header } from "@/payload/payload-types"
import { useElementSize, useWindowScroll } from "@mantine/hooks"

import { MainNav } from "./main-nav"

type NavContainerProps = {
  data: Header
}

export function NavContainer({ data }: NavContainerProps) {
  const { ref, width, height } = useElementSize()
  const [scroll] = useWindowScroll()
  return (
    <header
      ref={ref}
      id="navbar"
      className={cn(
        "sticky top-0 z-40 border-b transition-[border] duration-300 dark:text-foreground",
        scroll.y === 0 && "border-b-transparent bg-background",
        scroll.y !== 0 &&
          "border-b-gray-400/20 bg-background/90 backdrop-blur-sm dark:border-b-primary/20",
      )}
      data-height={height}
      data-width={width}
    >
      <div className=" flex h-20 items-center justify-between px-[2.5rem] py-4">
        <MainNav data={data} />
      </div>
    </header>
  )
}
