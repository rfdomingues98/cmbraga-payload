import Image from "next/image"
import { AnimatedArrow } from "@/components/animated-arrow"
import { CMSLink } from "@/components/cms-link"
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
      <div className="relative h-[300px] w-full lg:h-[550px]">
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
        <div className="absolute bottom-0 z-20 flex w-full flex-col overflow-hidden p-16">
          <div className="flex w-full flex-col gap-3 pb-6">
            <h2 className="line-clamp-3 max-w-[45%] text-ellipsis text-3xl font-semibold leading-tight text-white lg:text-[56px]">
              {props.title}
            </h2>
            <p className="line-clamp-2 max-w-[40%] text-ellipsis text-white">{props.description}</p>
          </div>

          <Button
            asChild
            className="group flex w-fit flex-row-reverse gap-4 bg-white/10 text-base text-white hover:bg-white/20"
            /* aria-label={firstSection.highlight.button.aria_label} */
          >
            <CMSLink {...props.link}>
              <AnimatedArrow />
            </CMSLink>
          </Button>
        </div>
      </div>
    </div>
  )
}
