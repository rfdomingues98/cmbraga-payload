import { Page } from "@/payload/payload-types"

import { HighImpactHero } from "./high-impact"

export type HeroBlockProps = Extract<Page["layout"][0], { blockType: "hero" }>

export const HeroBlock: React.FC<HeroBlockProps> = (props) => {
  const { type } = props
  switch (type) {
    case "highImpact":
      return <HighImpactHero {...props} />
    default:
      return null
  }
}
