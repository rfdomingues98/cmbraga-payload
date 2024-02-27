import React, { Fragment } from "react"
import { Page } from "@/payload/payload-types"
import { toKebabCase } from "@/utils/toKebabCase"

import { AlertsCarousel } from "./alerts-carousel"
import { ContentBlock } from "./content"
import { HeroBlock } from "./hero"
import { MediaBlock } from "./media"
import { RichTextBlock } from "./rich-text"
import { SearchBlock } from "./search-block"
import { SocialMediaBlock } from "./social-media"

const blockComponents = {
  content: ContentBlock,
  hero: HeroBlock,
  media: MediaBlock,
  richTextBlock: RichTextBlock,
  socials: SocialMediaBlock,
  alertCarousel: AlertsCarousel,
  search: SearchBlock,
}

export const Blocks: React.FC<{
  blocks: Page["layout"][0][]
  disableTopPadding?: boolean
}> = (props) => {
  const { disableTopPadding, blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            const useDarkerBackground = "darkerBackground" in block ? block.darkerBackground : false
            if (Block) {
              return <Block key={index} id={toKebabCase(blockName)} {...block} />
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
