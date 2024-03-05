import type { Block } from "payload/types"

import { BlogMarkdownField } from "./Field"

export const BlogMarkdown: Block = {
  slug: "blogMarkdown",
  labels: {
    singular: "Markdown",
    plural: "Markdown Blocks",
  },
  fields: [
    {
      name: "markdown",
      type: "text",
      required: true,
      admin: {
        components: {
          Field: BlogMarkdownField,
        },
      },
    },
  ],
}
