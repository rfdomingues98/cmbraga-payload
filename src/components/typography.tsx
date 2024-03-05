import { type PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

type Props = PropsWithChildren<{
  className?: string
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote"
}>

export function Text({ children, className, variant = "p" }: Props) {
  const Component = variant
  const defaultStyles = {
    h1: "text-5xl font-semibold text-primary lg:text-[64px]",
    h2: "text-4xl font-semibold text-primary",
    h3: "text-base font-medium",
    h4: "font-regular text-sm",
    blockquote: "text-sm",
    p: "text-sm",
  }

  return <Component className={cn(defaultStyles[variant], className)}>{children}</Component>
}
