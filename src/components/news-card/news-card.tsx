import Image from "next/image"
import { type NewsItem } from "@/lib/validations/pages"
import { ArrowUpRight } from "lucide-react"

import { CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

interface Props {
  newsItem: NewsItem
}

export function NewsCard({ newsItem }: Props) {
  const { cover_img, category, title, small_description } = newsItem
  return (
    <div className="group max-w-[482px]">
      <CardHeader className="md relative h-[318px]">
        <Image
          src={cover_img.data.attributes.url}
          alt={cover_img.data.attributes.alternativeText ?? "news-img"}
          fill
          className="rounded-lg object-cover"
        />
      </CardHeader>
      <CardContent className="flex-col px-0 py-3 tracking-[0.2px]">
        <p className="font-bold text-secondary">
          {category.data.attributes.name}
        </p>
        <div className="mb-2 mt-1 flex justify-between">
          <CardTitle className="text-xl tracking-[0.2px] text-primary">
            {title}
          </CardTitle>
          <ArrowUpRight className="text-primary transition-all ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1  group-hover:duration-500" />
        </div>
        <CardDescription className="text-xl font-normal text-primary">
          {small_description}
        </CardDescription>
      </CardContent>
    </div>
  )
}
