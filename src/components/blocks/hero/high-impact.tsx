import Image from "next/image"
import { CMSLink } from "@/components/cms-link"
import RichText from "@/components/rich-text"
import { Button } from "@/components/ui/button"
import { Locale } from "@/config"
import { Media } from "@/payload/payload-types"
import { useLocale } from "next-intl"

import { HeroBlockProps } from "."

export const HighImpactHero: React.FC<HeroBlockProps> = (props) => {
  const locale = useLocale() as Locale
  const media = props.media as Media
  return (
    <div className="relative mt-6 w-full lg:mt-10">
      <div className="relative h-[300px]  w-full lg:h-[550px]">
        <Image
          src={media.url}
          alt={media.alt}
          className="rounded-3xl"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "75%",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 rounded-3xl bg-gradient-to-r from-black/60 to-transparent" />
      </div>
      <div className="absolute bottom-6 left-6 z-20 flex flex-col lg:bottom-16 lg:left-16">
        <div className="flex flex-col gap-3 pb-6">
          <RichText content={props.richText} />
          {/* <h2 className="line-clamp-3 max-w-[400px] text-ellipsis text-3xl font-semibold leading-tight text-white lg:text-[56px]">
            {firstSection.highlight.title}
          </h2>
          <p className="line-clamp-2 max-w-[300px] text-ellipsis text-white">
            {firstSection.highlight.description}
          </p> */}
        </div>

        <Button
          asChild
          className="group flex w-fit gap-4 bg-white/10 text-base text-white hover:bg-white/20"
          /* aria-label={firstSection.highlight.button.aria_label} */
        >
          <CMSLink {...props.link} />
        </Button>
      </div>
    </div>
  )
}
