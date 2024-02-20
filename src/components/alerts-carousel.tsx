"use client"

import { Alert as TAlert } from "@/payload/payload-types"
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react"

import { Alert } from "./alert-item"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"

import { useState } from "react"
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react"
import { Autoplay, EffectFade, Navigation } from "swiper/modules"

import { Button, type ButtonProps } from "./ui/button"

interface Props {
  alerts: TAlert[]
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
const AUTOPLAY_DELAY = 8000

export function AlertsCarousel({ alerts, slidesLength, prevAriaLabel, nextAriaLabel }: Props) {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null)
  const [timerLeft, setTimeLeft] = useState(0)
  return (
    <Swiper
      onSwiper={setSwiperRef}
      modules={[Navigation, EffectFade, Autoplay]}
      effect="fade"
      style={{ height: "100%", position: "relative" }}
      allowTouchMove={false}
      autoplay={{
        delay: AUTOPLAY_DELAY,
        disableOnInteraction: false,
      }}
      onAutoplayTimeLeft={(s, time) => {
        setTimeLeft(time)
      }}
      loop
    >
      {alerts.map(({ id, ...rest }) => (
        <SwiperSlide key={id}>
          <Alert
            alertsLength={alerts.length}
            timeLeft={timerLeft}
            duration={AUTOPLAY_DELAY}
            {...rest}
          />
        </SwiperSlide>
      ))}
      {slidesLength > SLIDES_PER_VIEW && (
        <div className="absolute bottom-2 right-4 z-10 gap-1 lg:inline-flex">
          <Button
            {...buttonConfig}
            onClick={() => swiperRef?.slidePrev()}
            aria-label={prevAriaLabel}
          >
            <ChevronLeftCircle className="h-7 w-7" strokeWidth={1.5} />
          </Button>
          <Button
            {...buttonConfig}
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
