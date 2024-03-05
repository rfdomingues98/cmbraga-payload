import type { Block } from "payload/types"

import richText from "../../fields/richText"

export const NewsContent: Block = {
  slug: "newsContent",
  fields: [richText()],
}
