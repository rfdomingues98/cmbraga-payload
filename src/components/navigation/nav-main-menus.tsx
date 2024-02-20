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
import { cn } from "@/lib/utils"
import { Header, Menu, Page } from "@/payload/payload-types"

type NavigationMenuProps = {
  menus: Header["menus"]
}

export function NavMainMenus({ menus }: NavigationMenuProps) {
  const [offset, setOffset] = React.useState(0)
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {menus.map(({ menu }, index) => (
            <NavigationMenuItem key={index} value={(menu.value as Menu).title}>
              <NavigationMenuTrigger
                chevronClassName="h-5 w-5"
                onMouseEnter={(event) => setOffset(event.currentTarget.offsetLeft)}
                className={
                  "h-12 space-x-2 bg-transparent px-6 py-3 text-base font-normal text-primary/50 hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-primary"
                }
              >
                <span>{(menu.value as Menu).title}</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="dark:bg-card">
                <ul className="flex flex-col p-2 md:min-w-[250px]">
                  {(menu.value as Menu).links.map(({ id, linkGroup: { link } }) => (
                    <ListItem
                      key={`navbar.other_sites.links.${id}`}
                      link={link}
                      title={link.label}
                      aria-label={link.label}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <NavigationMenuViewport style={{ transform: `translateX(${offset}px)` }} />
      </NavigationMenu>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { link: Menu["menuLink"] }
>(({ className, link, title, children, ...props }, ref) => {
  let href = link.link_type === "reference" ? `/${(link.reference.value as Page).slug}` : link.url
  if (href === "/home") href = "/"

  return (
    <li>
      <NavigationMenuLink asChild>
        {href && (
          <Link
            ref={ref}
            className={cn(
              "group block select-none space-y-1 rounded-md bg-transparent p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/20 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            href={href}
            {...props}
          >
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
