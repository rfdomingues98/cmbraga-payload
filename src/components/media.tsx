import { type PropsWithChildren } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type Props = PropsWithChildren<{
  alt: string
  src: string
  className?: string
  width?: number
  height?: number
}>

export function Media({ className, alt, src, width, height }: Props) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        width: width ? `clamp(100px, ${width}px, 100%)` : "auto",
        height,
      }}
    >
      <Image alt={alt} src={src} fill />
    </div>
  )
}
