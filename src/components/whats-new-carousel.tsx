"use client"

import { type Locale } from "@/config/base"
import { type LatestNews } from "@/lib/validations/pages"
import { Link } from "@/navigation"
import { useLocale } from "next-intl"
import { SwiperSlide } from "swiper/react"

import { Carousel } from "./carousel/carousel"
import { Card, CardDescription } from "./ui/card"

interface Props {
  lastUpdates: LatestNews
}

export function WhatsNewCarousel({ lastUpdates }: Props) {
  const locale = useLocale() as Locale

  return (
    <Carousel slidesPerView={3} slidesLength={lastUpdates.data.length}>
      {lastUpdates.data.map((update) => (
        <SwiperSlide key={update.attributes.title}>
          <Link href={"#"} locale={locale}>
            <Card className="border-transparent bg-white p-8">
              <p className="font-bold text-link-foreground">
                {update.attributes.category.data.attributes.name}
              </p>
              <CardDescription className="max-w-xs text-xl font-normal text-primary">
                {update.attributes.title}
              </CardDescription>
            </Card>
          </Link>
        </SwiperSlide>
      ))}
    </Carousel>
  )
}
