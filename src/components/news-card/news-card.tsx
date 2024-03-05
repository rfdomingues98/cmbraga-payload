import Image from "next/image"
import { Category, Media, Page } from "@/payload/payload-types"
import { ArrowUpRight } from "lucide-react"

import RichText from "../rich-text"
import { CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

interface Props {
  newsItem: Extract<
    Page["layout"][0],
    { blockType: "cardGrid" }
  >["cardGridFields"]["newsCards"][number]["card"]
}

export function NewsCard({ newsItem }: Props) {
  let card = newsItem
  if (!card || typeof card === "number") {
    throw new Error("NewsCard: not enough data to render card")
  }
  const category = (card.categories as Category[])[0].title
  const image = card.image as Media
  return (
    <div className="group max-w-[482px]">
      {image && (
        <CardHeader className="md relative h-[318px] max-h-[318px] overflow-hidden rounded-lg">
          <Image
            src={image.url}
            alt={image.alt ?? "news-img"}
            fill
            className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
          />
        </CardHeader>
      )}
      <CardContent className="flex-col px-0 py-3 tracking-[0.2px]">
        <p className="font-bold text-secondary">{category}</p>
        <div className="mb-2 mt-1 flex justify-between">
          <CardTitle className="text-xl tracking-[0.2px] text-primary">{card.title}</CardTitle>
          <ArrowUpRight className="text-primary transition-all ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1  group-hover:duration-500" />
        </div>
        <CardDescription as="div" className="text-xl font-normal text-primary">
          <RichText content={card.excerpt} />
        </CardDescription>
      </CardContent>
    </div>
  )
}
