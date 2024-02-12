"use client"

import { type Locale } from "@/config/base"
import { type LinkType } from "@/lib/validations/shared"
import { Link } from "@/navigation"
import { useLocale } from "next-intl"

import { Icons } from "./icons"
import { Button } from "./ui/button"

interface Props {
  socials: string
  link: LinkType
}

const socialMediaIcon = (social: string) => {
  switch (social) {
    case "facebook":
      return <Icons.facebook className="h-3.5 w-3.5 " />
    case "instagram":
      return <Icons.instagram className="h-3.5 w-3.5" />
    case "twitter":
      return <Icons.twitter className="h-2.5 w-2.5" />
    case "youtube":
      return <Icons.youtube className="h-3.5 w-3.5" />
    default:
      return null
  }
}

export function SocialMediaButton({ socials, link }: Props) {
  const locale = useLocale() as Locale

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      id={`social_media_${socials}`}
      aria-label={link.aria_label}
      className="h-8 w-8 rounded-full border-primary-foreground transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white dark:border-white dark:hover:text-background"
    >
      <Link href={link.url} locale={locale} target="_blank">
        {socialMediaIcon(socials)}
      </Link>
    </Button>
  )
}
