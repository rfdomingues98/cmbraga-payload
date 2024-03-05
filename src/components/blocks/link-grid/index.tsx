import { AnimatedArrow } from "@/components/animated-arrow"
import { CMSLink } from "@/components/cms-link"
import { cn } from "@/lib/utils"
import { Page } from "@/payload/payload-types"

type Props = Extract<Page["layout"][0], { blockType: "linkGrid" }>

export const LinkGridBlock = (props: Props) => {
  const { links, iconPosition } = props
  return (
    <div className="grid w-full grid-cols-2 gap-4">
      {links.map(({ id, link }) => (
        <CMSLink key={id} className="group" aria-label={`Link to ${link.label}`} {...link}>
          <div
            className={cn(
              "flex items-center justify-between gap-6 rounded-xl bg-card p-6 text-2xl font-medium hover:text-link dark:bg-background",
              iconPosition === "left" && "flex-row-reverse justify-end",
            )}
          >
            <span>{link.label}</span>
            <AnimatedArrow className="text-accent-foreground/60 group-hover:text-accent-foreground dark:text-white/60 group-hover:dark:text-white" />
          </div>
        </CMSLink>
      ))}
    </div>
  )
}
