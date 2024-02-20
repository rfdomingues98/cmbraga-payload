import { Block } from "payload/types"

import richText from "../../fields/richText"

export const RichTextBlock: Block = {
  slug: "richTextBlock",
  fields: [richText()],
}
