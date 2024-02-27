import { cn } from "@/lib/utils"

type Props = {
  text: string
}

const gradient1 = "bg-radial-gradient-circle-c from-[#FF00B833] to-[#FF00B800] to-70%"

export function Title({ text }: Props) {
  return (
    <div className="relative h-max max-w-[830px]">
      <div
        className={cn("absolute left-[-394px] top-[-250px] block h-[867px] w-[867px]", gradient1)}
      />
      <h1 className={cn("font-canopee text-[160px] leading-[160px] mix-blend-overlay")}>{text}</h1>
    </div>
  )
}
