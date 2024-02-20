"use client"

import { Link } from "@/navigation"
import { Page } from "@/payload/payload-types"
import { toPascalCase } from "@/utils/toPascalCase"
import { icons, type LucideProps } from "lucide-react"

import Icon from "./icon"
import { Button } from "./ui/button"

interface IconProps extends LucideProps {
  name: keyof typeof icons
}

interface Props {
  social: Extract<Page["layout"][0], { blockType: "socials" }>["socials"][number]
}

const socialMediaIcon = (social: string) => {
  const name = toPascalCase(social.slice(2)) as IconProps["name"]
  return <Icon name={name} className="h-3.5 w-3.5" />
}

export function SocialMediaButton({ social: { socialMedia, id } }: Props) {
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      id={`social_media_${id}`}
      className="h-8 w-8 rounded-full border-primary-foreground transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white dark:border-white dark:hover:text-background"
    >
      <Link href={socialMedia.socialLink.url} target={socialMedia.socialLink.newTab && "_blank"}>
        {socialMediaIcon(socialMedia.socialIcon)}
      </Link>
    </Button>
  )
}
