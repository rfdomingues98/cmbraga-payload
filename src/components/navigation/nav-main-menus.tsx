"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Header, Menu, Page } from "@/payload/payload-types"
import { ChevronRight } from "lucide-react"

import Icon, { IconProps } from "../icon"
import RichText from "../rich-text"

type NavigationMenuProps = {
  menus: Header["menus"]
}

export function NavMainMenus({ menus }: NavigationMenuProps) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {menus.map(({ menu }, index) => (
            <NavigationMenuItem key={index} value={(menu.value as Menu).title}>
              <NavigationMenuTrigger
                chevronClassName="h-5 w-5"
                className={
                  "h-12 space-x-2 bg-transparent px-6 py-3 text-base font-normal text-primary hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-link"
                }
              >
                <span>{(menu.value as Menu).title}</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex w-screen py-6 dark:bg-background md:w-screen">
                <div className="container mx-auto flex">
                  <div className="flex basis-1/5">
                    <div className="flex max-w-[225px] basis-2/3 flex-col gap-y-4 py-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-link">{(menu.value as Menu).title}</h3>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                      <RichText content={(menu.value as Menu).description} />
                    </div>
                    <div className="basis-1/3">
                      <Separator orientation="vertical" className="mx-auto dark:bg-card" />
                    </div>
                  </div>
                  <ul className="grid w-full basis-4/5 grid-cols-4 gap-x-[60px] gap-y-4 md:min-w-[250px]">
                    {(menu.value as Menu).links.map(({ id, linkGroup: { link } }) => (
                      <ListItem
                        key={`navbar.other_sites.links.${id}`}
                        link={link}
                        title={link.label}
                        aria-label={link.label}
                        icon={{ name: "Users" } as IconProps}
                      />
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <NavigationMenuViewport className="-top-1.5 rounded-none border-x-0 border-b-0 border-t shadow-lg" />
      </NavigationMenu>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { link: Menu["menuLink"]; icon: IconProps }
>(({ className, link, title, children, icon, ...props }, ref) => {
  let href = link.link_type === "reference" ? `/${(link.reference.value as Page).slug}` : link.url
  if (href === "/home") href = "/"

  return (
    <li>
      <NavigationMenuLink asChild>
        {href && (
          <Link
            ref={ref}
            className={cn(
              "group flex select-none items-center gap-3 space-y-1 rounded-md bg-transparent p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/20 hover:text-accent-foreground focus:bg-muted/10 focus:text-accent-foreground",
              className,
            )}
            href={href}
            {...props}
          >
            {icon && (
              <div className=" min-h-[32px] min-w-[32px] rounded bg-darker-background p-1 dark:bg-card">
                <Icon name={icon.name} className="h-6 w-6 text-link" strokeWidth={1.5} />
              </div>
            )}
            <div className="text-base font-normal leading-none text-primary/80 group-hover:text-primary">
              {title}
            </div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
            )}
          </Link>
        )}
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
