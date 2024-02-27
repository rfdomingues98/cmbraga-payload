import React from "react"
import { cn } from "@/lib/utils"
import { Page } from "@/payload/payload-types"

import { Blocks } from "../"

type Props = Extract<Page["layout"][0], { blockType: "content" }>

export const ContentBlock: React.FC<
  Props & {
    id?: string
  }
> = (props) => {
  const { columns } = props

  return (
    <section className={cn("relative flex flex-col gap-5 lg:flex-row lg:gap-8 xl:gap-20")}>
      {columns &&
        columns.length > 0 &&
        columns.map((col, index) => {
          const { size, horizontalAlign, verticalAlign, blocks } = col

          return (
            <div
              key={index}
              className={cn(
                "flex flex-col gap-6",
                size === "oneThird" && "basis-4/12",
                size === "half" && "basis-6/12",
                size === "twoThirds" && "basis-8/12",
                size === "full" && "basis-full",
                horizontalAlign === "left" && "items-start",
                horizontalAlign === "center" && "items-center",
                horizontalAlign === "right" && "items-end",
                verticalAlign === "top" && "justify-start",
                verticalAlign === "middle" && "justify-center",
                verticalAlign === "bottom" && "justify-end",
              )}
            >
              <Blocks blocks={blocks} />
            </div>
          )
        })}
    </section>
  )
}
