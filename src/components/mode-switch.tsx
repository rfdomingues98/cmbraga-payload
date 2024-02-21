"use client"

import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export const ModeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [checked, setChecked] = useState(false)

  // Shouldn't need to use this hook, but if we don't, the component will give hydration errors due to it being rendered once on the server even though it is marked as a client component
  useEffect(() => {
    setChecked(resolvedTheme === "dark")
  }, [resolvedTheme])

  return (
    <Switch
      id="theme-switcher"
      checked={checked}
      onCheckedChange={(checked) => (checked ? setTheme("dark") : setTheme("light"))}
      IconOff={
        <Sun size={14} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      }
      IconOn={
        <Moon
          size={14}
          className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      }
    />
  )
}

export const ModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [value, setValue] = useState("light")
  useEffect(() => {
    setValue(resolvedTheme)
  }, [resolvedTheme])

  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(value) => {
        if (value) setTheme(value)
      }}
    >
      <ToggleGroupItem
        value="light"
        size="sm"
        className="hover:bg-darker-background data-[state=on]:bg-darker-background data-[state=off]:text-primary/50"
        aria-label="Toggle light theme"
      >
        <Sun size={16} strokeWidth={2} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        size="sm"
        className="hover:bg-darker-background data-[state=on]:bg-darker-background data-[state=off]:text-primary/50"
        aria-label="Toggle dark theme"
      >
        <Moon size={16} strokeWidth={2} />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
