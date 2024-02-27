import { Block } from "payload/types"

export const SearchBlock: Block = {
  slug: "search",
  labels: {
    singular: "Search",
    plural: "Searches",
  },
  fields: [
    {
      name: "placeholder",
      type: "text",
      required: true,
    },
  ],
}
