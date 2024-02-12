"use client"

import Image from "next/image"
import Link from "next/link"
import { type OtherAccess } from "@/lib/validations/pages"
import { useLocale } from "next-intl"

import { AnimatedArrow } from "./animated-arrow"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"

interface Props {
  otherAccess: OtherAccess
}

export function OtherAccessCard({ otherAccess }: Props) {
  const locale = useLocale()
  const {
    title,
    subtitle,
    small_description,
    button_text,
    cover_img,
    external_link,
    link_aria_label,
  } = otherAccess

  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardContent className="flex flex-col gap-14">
        <div className="relative h-full min-h-[183px] w-full">
          <Image
            src={cover_img.data.attributes.url}
            alt={
              cover_img.data.attributes.alternativeText ?? "other-access-img"
            }
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className=" flex justify-between">
          <div className="mt-1 flex basis-1/2 flex-col justify-between">
            <CardTitle className="max-w-[580px] text-5xl text-primary">
              {title}
            </CardTitle>
            {subtitle ? <p className="mt-4">{subtitle}</p> : <div> </div>}
            <Button
              asChild
              variant="secondary"
              className="group mt-6 flex w-fit flex-row gap-2 rounded-xl bg-secondary/5 text-base tracking-wide text-link hover:bg-secondary/10 dark:bg-foreground/5 dark:text-foreground dark:hover:bg-foreground/10"
              aria-label={link_aria_label}
            >
              <Link href={external_link} locale={locale} target="_blank">
                <AnimatedArrow /> {button_text}
              </Link>
            </Button>
          </div>
          <div className="flex basis-1/2 justify-end pr-8">
            <CardDescription className="max-w-[550px] text-base font-normal text-primary">
              {small_description}
            </CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
