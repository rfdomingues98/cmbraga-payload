import { useTransition } from "react"
import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { mappedLocales } from "@/config"
import { usePathname } from "@/navigation"
import { useLocale } from "next-intl"

const LanguageSelector = () => {
  const [isPending, startTransition] = useTransition()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function onSelectChange(value: string) {
    startTransition(() => {
      void router.replace(`/${value}${pathname}`)
    })
  }

  return (
    <Select
      defaultValue="pt"
      value={locale}
      disabled={isPending}
      onValueChange={onSelectChange}
      aria-label="Language Selector"
    >
      <SelectTrigger className="w-[80px] justify-end gap-3 border-none bg-transparent text-primary/50 transition-all duration-150 ease-in-out focus-within:text-primary hover:text-primary focus:text-primary active:text-primary">
        <SelectValue placeholder="Language">{locale.toUpperCase()}</SelectValue>
      </SelectTrigger>
      <SelectContent side="bottom" align="end">
        <SelectItem value="pt">{mappedLocales["pt"].name} PT</SelectItem>
        <SelectItem value="en">{mappedLocales["en"].name} EN</SelectItem>
        <SelectItem value="es">{mappedLocales["es"].name} ES</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default LanguageSelector
