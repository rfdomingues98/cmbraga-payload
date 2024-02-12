"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { SearchIcon } from "lucide-react"

import { type InputProps } from "./ui/input"

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>

const SearchInput = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "focus-within:ring-/50 flex h-10 items-center rounded-md border-none bg-input/10 pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-offset-2",
        className,
      )}
    >
      <SearchIcon className="h-[16px] w-[16px] text-arrow" />
      <input
        {...props}
        type="search"
        ref={ref}
        className=" w-full bg-transparent p-2 placeholder:text-arrow focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  )
})

SearchInput.displayName = "Search"

export { SearchInput }
