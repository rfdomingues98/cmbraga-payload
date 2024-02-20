import { type Locale } from "@/config"
import { Link } from "@/navigation"
import { AlertType, type Alert } from "@/payload/payload-types"
import { ArrowUpRight } from "lucide-react"
import { useLocale } from "next-intl"

import CountdownTimer from "./timer"
import { AlertDescription, Alert as AlertUi } from "./ui/alert"

export type LinkProps = React.ComponentProps<typeof Link>

type ConditionalLinkProps = {
  condition: string | null
  children: React.ReactNode
} & LinkProps

function ConditionalLink({ children, condition, ...props }: ConditionalLinkProps) {
  return !!condition ? (
    <Link {...props} className="flex h-full w-full">
      {children}
    </Link>
  ) : (
    <>{children}</>
  )
}

interface Props extends Omit<Alert, "id" | "createdAt" | "updatedAt"> {
  alertsLength: number
  timeLeft: number
  duration: number
}

export function Alert({ title, description, link, alertsLength, timeLeft, duration, type }: Props) {
  const locale = useLocale() as Locale
  const alertType = type.value as AlertType

  return (
    <AlertUi className="group h-full w-full border-none bg-card p-3 lg:p-5 lg:pb-6">
      <ConditionalLink
        condition={""}
        href={"#"}
        /* aria-label={link_aria_label ?? ""} */
        locale={locale}
      >
        <div className="flex h-full w-full flex-col">
          <div className="flex w-full justify-between lg:pb-10">
            <div className="flex items-center gap-2">
              <CountdownTimer
                timeLeft={timeLeft}
                size={14}
                color={alertType.color}
                duration={duration}
                animate={alertsLength > 1}
              />
              <div className="text-base font-medium">{alertType.title}</div>
            </div>
            {link && (
              <ArrowUpRight className="text-primary/60 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-foreground group-hover:duration-500" />
            )}
          </div>
          <div className="flex max-w-[320px] flex-col pl-3">
            {/* <span className="text-base font-medium text-link">
              {category?.data.attributes.name}
            </span> */}
            <h3 className="pb-2 pt-1 text-2xl font-semibold tracking-normal">{title}</h3>
            <AlertDescription className="gap-x-2 text-ellipsis text-base text-muted lg:line-clamp-2 xl:line-clamp-3">
              {description}
            </AlertDescription>
          </div>
        </div>
      </ConditionalLink>
    </AlertUi>
  )
}
