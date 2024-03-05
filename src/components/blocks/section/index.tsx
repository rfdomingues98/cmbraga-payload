import React from "react"
import { Text } from "@/components/typography"
import { cn } from "@/lib/utils"
import { Page } from "@/payload/payload-types"

import { Blocks } from "../"

type Props = Extract<Page["layout"][0], { blockType: "section" }>

export const SectionBlock: React.FC<
  Props & {
    id?: string
  }
> = (props) => {
  const { spacing, darkerBackground, hasTitle, title, blocks } = props
  return (
    <section
      className={cn(
        "container mx-auto",
        spacing === "normal"
          ? "py-20"
          : spacing === "large"
            ? "py-28"
            : spacing === "small"
              ? "py-16"
              : spacing === "none"
                ? "py-0"
                : null,
        /* darkerBackground && "bleed-bg bleed-darker-background bg-darker-background", */
      )}
    >
      {hasTitle && (
        <Text variant="h2" className="mb-8">
          {title}
        </Text>
      )}
      <Blocks blocks={blocks} />
    </section>
  )
}
