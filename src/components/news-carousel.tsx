"use client"

import { type Locale } from "@/config/base"
import { type LatestNews } from "@/lib/validations/pages"
import { Link } from "@/navigation"
import { useLocale } from "next-intl"
import { SwiperSlide } from "swiper/react"

import { Carousel } from "./carousel/carousel"
import { NewsCard } from "./news-card/news-card"

interface Props {
  latestNews: LatestNews
}

export function NewsCarousel({ latestNews }: Props) {
  const locale = useLocale() as Locale

  return (
    <Carousel slidesPerView={3} slidesLength={latestNews.data.length}>
      {latestNews.data.map((newsItem) => (
        <SwiperSlide key={newsItem.attributes.title}>
          <Link href={"#"} locale={locale}>
            <NewsCard newsItem={newsItem.attributes} />
          </Link>
        </SwiperSlide>
      ))}
    </Carousel>
  )
}
