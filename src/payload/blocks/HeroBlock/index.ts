import type { Block } from "payload/types"

import link from "../../fields/link"
import richText from "../../fields/richText"

const linkField = link()
/* console.dir(linkField, { depth: null }) */

export const HeroBlock: Block = {
  slug: "hero",
  labels: {
    singular: "Hero",
    plural: "Heroes",
  },
  fields: [
    {
      type: "select",
      name: "type",
      label: "Type",
      required: true,
      defaultValue: "lowImpact",
      options: [
        {
          label: "None",
          value: "none",
        },
        {
          label: "High Impact",
          value: "highImpact",
        },
        {
          label: "Medium Impact",
          value: "mediumImpact",
        },
        {
          label: "Low Impact",
          value: "lowImpact",
        },
      ],
    },
    richText({
      admin: {
        elements: ["h1", "link"],
        leaves: [],
      },
    }),
    link({ overrides: { name: "link" } }),
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        condition: (_, { type } = {}) => ["highImpact", "mediumImpact"].includes(type),
      },
    },
  ],
}
