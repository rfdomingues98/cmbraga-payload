"use client"

import { type Alerts as AlertsProps } from "@/lib/validations/pages"
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react"

import { Alert } from "./alert-item"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"

import { useState } from "react"
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react"
import { EffectFade, Navigation } from "swiper/modules"

import { Button, type ButtonProps } from "./ui/button"

interface Props {
  alerts: AlertsProps["alerts"]
  slidesLength: number
  prevAriaLabel: string
  nextAriaLabel: string
}

const buttonConfig: ButtonProps = {
  variant: "ghost",
  size: "icon",
  className:
    "hover:bg-transparent !text-accent-foreground/60 after:!content-none disabled:hover:cursor-not-allowed",
}

const SLIDES_PER_VIEW = 1

export function AlertsCarousel({
  alerts,
  slidesLength,
  prevAriaLabel,
  nextAriaLabel,
}: Props) {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Swiper
      onSwiper={setSwiperRef}
      modules={[Navigation, EffectFade]}
      effect="fade"
      style={{ height: "100%", position: "relative" }}
      onRealIndexChange={(e) => setActiveIndex(e.activeIndex)}
      allowTouchMove={false}
    >
      {alerts.data.map(({ attributes, id }) => (
        <SwiperSlide key={id}>
          <Alert {...attributes} />
        </SwiperSlide>
      ))}
      {slidesLength > SLIDES_PER_VIEW && (
        <div className="absolute bottom-2 right-4 z-10 gap-1 lg:inline-flex">
          <Button
            {...buttonConfig}
            disabled={activeIndex === 0}
            onClick={() => swiperRef?.slidePrev()}
            aria-label={prevAriaLabel}
          >
            <ChevronLeftCircle className="h-7 w-7" strokeWidth={1.5} />
          </Button>
          <Button
            {...buttonConfig}
            disabled={activeIndex === slidesLength - 1}
            onClick={() => swiperRef?.slideNext()}
            aria-label={nextAriaLabel}
          >
            <ChevronRightCircle className="h-7 w-7" strokeWidth={1.5} />
          </Button>
        </div>
      )}
    </Swiper>
  )
}
