import { type Locale } from "@/config"
import { Link } from "@/navigation"
import { useLocale } from "next-intl"

type FooterMenuProps = {
  subMenu: any
  maxLinks: number
  className?: string
}

export function NavSubLinks({ subMenu, maxLinks, className }: FooterMenuProps) {
  const locale = useLocale() as Locale
  const subMmenusCount = subMenu.length
  const hasMoreLinks = subMmenusCount > maxLinks
  const subMenuLinks = hasMoreLinks ? subMenu.slice(0, maxLinks) : subMenu

  return (
    <ul className="flex flex-col gap-2 text-xs">
      {subMenuLinks.map((submenu) => (
        <li key={`menu.submenu.${submenu.id}`}>
          <Link
            locale={locale}
            href={submenu.url}
            className={className}
            aria-label={submenu.aria_label}
          >
            {submenu.text}
          </Link>
        </li>
      ))}
      {hasMoreLinks && (
        <li key="menu.submenu.see-more">
          <Link locale={locale} href={"#"} className={className}>
            Ver mais...
          </Link>
        </li>
      )}
    </ul>
  )
}
