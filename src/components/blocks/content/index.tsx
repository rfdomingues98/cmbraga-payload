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
    <section className={"p-2"}>
      <div className={cn("grid grid-cols-12 gap-2")}>
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { size, horizontalAlign, verticalAlign, blocks } = col

            return (
              <div
                key={index}
                className={cn(
                  "col-end-[span_8]",
                  size === "oneThird" && "col-end-[span_4]",
                  size === "half" && "col-end-[span_6]",
                  size === "twoThirds" && "col-end-[span_8]",
                  size === "full" && "col-end-[span_12]",
                  horizontalAlign === "center" && "grid justify-items-center",
                  horizontalAlign === "right" && "grid justify-items-end",
                )}
              >
                <Blocks blocks={blocks} />
              </div>
            )
          })}
      </div>
    </section>
  )
}
