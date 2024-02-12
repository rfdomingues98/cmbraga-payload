"use client"

import { type FC, type ReactNode } from "react"

import { TailwindIndicator } from "./tailwind-indicator"
import { ThemeProvider } from "./theme-provider"

interface LayoutProps {
  children: ReactNode
}

export const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <TailwindIndicator />
    </ThemeProvider>
  )
}
