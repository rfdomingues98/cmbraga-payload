import { SearchInput } from "@/components/search-input"
import { Page } from "@/payload/payload-types"

type Props = Extract<Page["layout"][0], { blockType: "search" }>

export const SearchBlock: React.FC<Props> = (props: Props) => {
  return (
    <div className="w-3/4">
      <SearchInput placeholder={props.placeholder} />
    </div>
  )
}
