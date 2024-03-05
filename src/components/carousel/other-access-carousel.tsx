"use client"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react"
import { Navigation, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react"

import { OtherAccessCard } from "../other-access-card"
import { Button, type ButtonProps } from "../ui/button"

interface Props {
  slidesPerView: number
  slides: Array<any>
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

export function OtherAccessCarousel({
  slidesPerView,
  slidesLength,
  slides,
  nextAriaLabel,
  prevAriaLabel,
}: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null)

  const addLeadingZero = (number: number) => {
    return ("0" + (number + 1)).slice(-2)
  }

  return (
    <div className="relative">
      <div className="relative mb-10 rounded-md bg-white px-12 dark:bg-card">
        <Button
          {...buttonConfig}
          className={cn("swiper-button-prev", buttonConfig.className)}
          aria-label={prevAriaLabel}
        >
          <ChevronLeftCircle className="h-6 w-6" strokeWidth={1.5} />
        </Button>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          watchSlidesProgress
          modules={[Navigation, Thumbs]}
          className="text-center"
          preventInteractionOnTransition
          allowTouchMove={false}
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent.id}>
              <Button
                variant="ghost"
                className={cn("tracking-wide hover:bg-transparent", {
                  "font-medium text-primary": activeIndex === index,
                  "font-normal text-muted hover:font-medium hover:text-primary":
                    activeIndex !== index,
                })}
              >
                {addLeadingZero(index)} {slideContent.title}
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          {...buttonConfig}
          className={cn("swiper-button-next", buttonConfig.className)}
          aria-label={nextAriaLabel}
        >
          <ChevronRightCircle className="h-6 w-6" strokeWidth={1.5} />
        </Button>
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Thumbs]}
        onRealIndexChange={(e) => setActiveIndex(e.activeIndex)}
        preventInteractionOnTransition
        allowTouchMove={false}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent.id} virtualIndex={index} className="mb-8">
            <OtherAccessCard otherAccess={slideContent} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center">
        <Button
          {...buttonConfig}
          disabled={activeIndex === 0}
          onClick={() => swiperRef?.slidePrev()}
          aria-label={prevAriaLabel}
        >
          <ChevronLeftCircle className="h-8 w-8" strokeWidth={1.5} />
        </Button>
        <Button
          {...buttonConfig}
          disabled={activeIndex === slidesLength - 1}
          onClick={() => swiperRef?.slideNext()}
          aria-label={nextAriaLabel}
        >
          <ChevronRightCircle className="h-8 w-8" strokeWidth={1.5} />
        </Button>
      </div>
    </div>
  )
}
