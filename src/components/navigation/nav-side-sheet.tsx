"use client"

import React, { useEffect } from "react"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet"
import { type Locale } from "@/config/base"
import { cn, type GetNavType, type NavigationMenu, type NavigationMenus } from "@/lib/utils"
import { Link } from "@/navigation"
import { MenuIcon } from "lucide-react"
import { useLocale } from "next-intl"

import LanguageSelector from "../language-selector/language-toggle"
import { Separator } from "../ui/separator"

type NavSideSheetProps = {
  data: NavigationMenus
}

type NavSideSheetMenuProps = {
  data: GetNavType<NavigationMenu, "shared.navigation-menu">["navigation_menu"]
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>
  "data-state"?: "active" | "inactive"
}
type NavSideSheetLinkProps = {
  data: GetNavType<NavigationMenu, "shared.link">
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>
  "data-state"?: "active" | "inactive"
}

type NavSideSheetMenuLinks = NavSideSheetMenuProps["data"]["data"]["attributes"]["links"]

function NavSideSheetMenu({ data, onMouseEnter, "data-state": dataState }: NavSideSheetMenuProps) {
  const locale = useLocale() as Locale
  return (
    <Link
      locale={locale}
      href={"#"}
      onMouseEnter={onMouseEnter}
      data-state={dataState}
      className={cn(
        "text-4xl font-semibold text-primary-foreground/30 hover:text-primary-foreground data-[state='active']:text-primary-foreground",
      )}
    >
      {data.data.attributes.name}
    </Link>
  )
}
function NavSideSheetLink({ data, onMouseEnter, "data-state": dataState }: NavSideSheetLinkProps) {
  const locale = useLocale() as Locale
  return (
    <Link
      locale={locale}
      href={data.url}
      onMouseEnter={onMouseEnter}
      data-state={dataState}
      className={cn(
        "text-4xl font-semibold text-primary-foreground/30 hover:text-primary-foreground",
      )}
    >
      {data.text}
    </Link>
  )
}

function NavSideSheetMenuLink({ data }: { data: NavSideSheetMenuLinks }) {
  const locale = useLocale() as Locale
  return data?.map((link) => (
    <Link
      key={link.id}
      locale={locale}
      href={link.url}
      className={cn(
        "w-max text-xl font-normal text-primary-foreground/90 hover:text-primary-foreground",
      )}
    >
      {link.text}
    </Link>
  ))
}

export function NavSideSheet({ data }: NavSideSheetProps) {
  const [open, setOpen] = React.useState(false)
  const [hoveredIndex, setHoveredIndex] = React.useState<number>(0)

  const [hoveredData, setHoveredData] = React.useState<NavSideSheetMenuLinks>([])
  useEffect(() => {
    const menu =
      data[hoveredIndex]?.__component === "shared.navigation-menu"
        ? (data[hoveredIndex] as GetNavType<NavigationMenu, "shared.navigation-menu">)
            .navigation_menu.data.attributes.links
        : ([] as NavSideSheetMenuLinks)

    setHoveredData(menu)
  }, [data, hoveredIndex])

  const onOpenChange = (open: boolean) => {
    if (!open) {
      setHoveredIndex(0)
    }
    setOpen(open)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent
        disableBackdrop
        className="h-full w-full bg-primary p-0 sm:w-full sm:max-w-[720px]"
        closeIconClassName="text-primary-foreground hover:text-primary-foreground h-8 w-8"
      >
        <div className={cn("flex h-full flex-col")}>
          <div className="my-4 flex h-full flex-1 py-6">
            <section className="group flex w-2/5 flex-col justify-between px-10">
              {data.map((menu, index) =>
                menu.__component === "shared.navigation-menu" ? (
                  <NavSideSheetMenu
                    key={menu.id}
                    data={menu.navigation_menu}
                    data-state={index === hoveredIndex ? "active" : "inactive"}
                    onMouseEnter={() => {
                      setHoveredIndex(index)
                    }}
                  />
                ) : (
                  <NavSideSheetLink
                    key={menu.id}
                    data={menu}
                    data-state={index === hoveredIndex ? "active" : "inactive"}
                    onMouseEnter={() => {
                      setHoveredIndex(index)
                    }}
                  />
                ),
              )}
            </section>
            <section className="flex w-3/5 flex-col justify-start gap-6">
              <NavSideSheetMenuLink data={hoveredData} />
            </section>
          </div>
          <SheetFooter className="sm:flex-col-reverse sm:space-x-0">
            <div className="flex justify-end space-x-2 p-6">
              <LanguageSelector />
            </div>
            <Separator className="my-2" />
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}
