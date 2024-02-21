"use client"

import { Header } from "@/payload/payload-types"

import { LanguageSelect } from "../language-selector"
import LogoItem from "../logo-item"
import { ModeToggle } from "../mode-switch"
import { NavMainMenus } from "./nav-main-menus"

type NavbarProps = {
  data: Header
}

export function MainNav({ data }: NavbarProps) {
  return (
    <div className="container mx-auto flex h-20 justify-between py-4">
      <div className="hidden items-center md:flex md:gap-16">
        <LogoItem logo={data.logo} width={96} height={53} />
        <NavMainMenus menus={data.menus} />
      </div>
      <div id="right" className="flex items-center md:gap-16">
        <div className="flex items-center md:gap-10">
          <LanguageSelect />
          {/* <ModeSwitch /> */}
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
