import { useTransition } from "react"
import { usePathname, useRouter } from "next/navigation"
import * as ToggleGroup from "@radix-ui/react-toggle-group"
import { useLocale } from "next-intl"

const toggleGroupItemClasses =
  "hover:border-white border-[#A9B3BD99] border-[3px] rounded data-[state=on]:border-white flex h-[60px] w-[60px] items-center justify-center bg-transparent text-white leading-4 focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none font-bold"

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
    <ToggleGroup.Root
      className="inline-flex space-x-4"
      type="single"
      defaultValue="pt"
      value={locale}
      disabled={isPending}
      onValueChange={onSelectChange}
      aria-label="Language Selector"
    >
      <ToggleGroup.Item className={toggleGroupItemClasses} value="pt" aria-label="Português">
        {"PT"}
      </ToggleGroup.Item>
      <ToggleGroup.Item className={toggleGroupItemClasses} value="en" aria-label="English">
        {"EN"}
      </ToggleGroup.Item>
      <ToggleGroup.Item className={toggleGroupItemClasses} value="es" aria-label="Español">
        {"ES"}
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}

export default LanguageSelector
