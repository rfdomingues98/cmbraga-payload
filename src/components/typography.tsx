import { type PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

type Props = PropsWithChildren<{
  className?: string
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote"
}>

export function Text({ children, className, variant = "p" }: Props) {
  const Component = variant
  const defaultStyles = {
    h1: "text-xl font-semibold",
    h2: "text-lg font-medium",
    h3: "text-base font-medium",
    h4: "font-regular text-sm",
    blockquote: "text-sm",
    p: "text-sm",
  }

  return <Component className={cn(defaultStyles[variant], className)}>{children}</Component>
}
