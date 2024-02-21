import type { Block } from "payload/types"

import link from "../../fields/link"

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
      defaultValue: "highImpact",
      options: [
        {
          label: "High Impact",
          value: "highImpact",
        },
        {
          label: "Low Impact",
          value: "lowImpact",
        },
      ],
    },
    { name: "title", type: "text" },
    { name: "description", type: "text" },
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
