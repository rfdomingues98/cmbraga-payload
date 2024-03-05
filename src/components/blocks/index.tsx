import React, { Fragment } from "react"
import { Page } from "@/payload/payload-types"
import { toKebabCase } from "@/utils/toKebabCase"

import { AlertsCarousel } from "./alerts-carousel"
import { CardGrid } from "./card-grid"
import { ContentBlock } from "./content"
import { HeroBlock } from "./hero"
import { LinkGridBlock } from "./link-grid"
import { MediaBlock } from "./media"
import { RichTextBlock } from "./rich-text"
import { SearchBlock } from "./search-block"
import { SectionBlock } from "./section"
import { SocialMediaBlock } from "./social-media"

const blockComponents = {
  content: ContentBlock,
  hero: HeroBlock,
  media: MediaBlock,
  richTextBlock: RichTextBlock,
  socials: SocialMediaBlock,
  alertCarousel: AlertsCarousel,
  search: SearchBlock,
  section: SectionBlock,
  linkGrid: LinkGridBlock,
  cardGrid: CardGrid,
}

export const Blocks: React.FC<{
  blocks: Page["layout"][0][]
  disableTopPadding?: boolean
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

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
