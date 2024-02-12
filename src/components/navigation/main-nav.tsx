"use client"

import { Header } from "@/payload/payload-types"

import { LanguageSelect } from "../language-selector"
import LogoItem from "../logo-item"
import { ModeSwitch } from "../mode-switch"
import { NavMainMenus } from "./nav-main-menus"

type NavbarProps = {
  data: Header
}

export function MainNav({ data }: NavbarProps) {
  return (
    <div className="flex w-full justify-between gap-6 md:gap-10">
      <div className="hidden items-center space-x-2 md:flex">
        <LogoItem logo={data.logo} width={96} height={53} />
      </div>
      <div id="right" className="flex items-center md:gap-16">
        <NavMainMenus menus={data.menus} />
        <div className="flex items-center md:gap-10">
          <LanguageSelect />
          <ModeSwitch />
        </div>
      </div>
    </div>
  )
}
