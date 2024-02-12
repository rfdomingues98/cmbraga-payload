import { cn } from "@/lib/utils"
import { ArrowUpRight, type LucideProps } from "lucide-react"

export function AnimatedArrow({ className, ...props }: LucideProps) {
  return (
    <ArrowUpRight
      className={cn(
        "transition-all ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:duration-500",
        className,
      )}
      strokeWidth={1.5}
      {...props}
    />
  )
}
