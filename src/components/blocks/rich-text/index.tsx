import RichText from "@/components/rich-text"
import { Page } from "@/payload/payload-types"

type Props = Extract<Page["layout"][0], { blockType: "richTextBlock" }>

export const RichTextBlock: React.FC<Props> = (props) => {
  return <RichText content={props.richText} />
}
