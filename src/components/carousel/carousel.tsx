"use client"

import { Swiper, type SwiperClass } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import { useState } from "react"
import { useViewportSize } from "@mantine/hooks"
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react"
import { Navigation } from "swiper/modules"

import { Button, type ButtonProps } from "../ui/button"

interface Props {
  children: React.ReactNode
  slidesPerView: number
  slidesLength: number
}

const buttonConfig: ButtonProps = {
  variant: "ghost",
  size: "icon",
  className: "hover:bg-transparent",
}

export function Carousel({ children, slidesPerView, slidesLength }: Props) {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null)
  const { width } = useViewportSize()
  const slideOffset = width * 0.1
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Navigation]}
        spaceBetween={54}
        slidesPerView={slidesPerView}
        centeredSlides
        centeredSlidesBounds
        slidesOffsetBefore={slideOffset}
        slidesOffsetAfter={slideOffset}
        onRealIndexChange={(e) => setActiveIndex(e.activeIndex)}
      >
        {children}
      </Swiper>
      {slidesLength >= slidesPerView && (
        <div className="inline-flex gap-1 pl-[10vw] pt-8">
          <Button
            {...buttonConfig}
            disabled={activeIndex === 1}
            onClick={() => swiperRef?.slidePrev()}
          >
            <ChevronLeftCircle className="h-7 w-7" />
          </Button>
          <Button
            {...buttonConfig}
            disabled={activeIndex === slidesLength}
            onClick={() => swiperRef?.slideNext()}
          >
            <ChevronRightCircle className="h-7 w-7" />
          </Button>
        </div>
      )}
    </>
  )
}
