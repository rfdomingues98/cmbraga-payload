import Link from "next/link"
import { AnimatedArrow } from "@/components/animated-arrow"
import { NewsCard } from "@/components/news-card/news-card"
import { News, Page } from "@/payload/payload-types"

type Props = Extract<Page["layout"][0], { blockType: "cardGrid" }>

export function CardGrid(props: Props) {
  const { newsCards, cards, populateFrom } = props.cardGridFields
  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/*TODO: change link of new*/}
        {newsCards.map(({ id, card }) => {
          return (
            <Link href={(card as News).slug} key={id} aria-label={`Go to ${(card as News).title}`}>
              {populateFrom === "news" && <NewsCard newsItem={card} />}
            </Link>
          )
        })}
      </div>
      <div className="group mx-auto mt-20 w-fit">
        <Link href={"#"} aria-label={"Ver mais"}>
          <div className="flex items-center gap-1 text-link dark:text-white">
            <p className="font-medium">Ver mais</p>
            <AnimatedArrow size="16px" />
          </div>
        </Link>
      </div>
    </>
  )
}
