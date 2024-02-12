import Link from "next/link"
import { cn } from "@/lib/utils"

export type LinkProps = React.ComponentProps<typeof Link>

type ConditionalLinkProps = {
  condition: boolean | null
  children: React.ReactNode
} & LinkProps

export function ConditionalLink({
  children,
  condition,
  className,
  ...props
}: ConditionalLinkProps) {
  return condition ? (
    <Link {...props} className={cn("flex h-full w-full", className)}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  )
}
