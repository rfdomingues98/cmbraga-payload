import { type Locale } from "@/config/base"
import { type Alert as AlertProps } from "@/lib/validations/pages"
import { ArrowUpRight } from "lucide-react"
import { useLocale } from "next-intl"

import { ConditionalLink } from "./conditional-link"
import { AlertDescription, Alert as AlertUi } from "./ui/alert"

export function Alert({
  title,
  description,
  category,
  alertType,
  link,
  link_aria_label,
}: AlertProps) {
  const locale = useLocale() as Locale
  const type = alertType.data.attributes

  return (
    <AlertUi className="group h-full w-full border-none bg-card p-3 lg:p-5 lg:pb-6">
      <ConditionalLink
        condition={Boolean(link)}
        href={link ?? "#"}
        aria-label={link_aria_label ?? ""}
        locale={locale}
      >
        <div className="flex h-full w-full flex-col">
          <div className="flex w-full justify-between lg:pb-10">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ background: type.color }} />
              <div className="text-base font-medium">{type.type}</div>
            </div>
            {link && (
              <ArrowUpRight className="text-primary/60 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-foreground group-hover:duration-500" />
            )}
          </div>
          <div className="flex max-w-[320px] flex-col pl-3">
            <span className="text-base font-medium text-link">
              {category?.data.attributes.name}
            </span>
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
