import { toPascalCase } from "@/utils/toPascalCase"
import { icons, type LucideProps } from "lucide-react"

export interface IconProps extends LucideProps {
  name: keyof typeof icons
}

const Icon = ({ name, ...props }: IconProps) => {
  const convertedName = toPascalCase(name) as IconProps["name"]
  const LucideIcon = icons[convertedName]

  return <LucideIcon {...props} />
}

export default Icon
