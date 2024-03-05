import type { Block } from "payload/types"

import { blockFields } from "../../fields/blockFields"
import link from "../../fields/link"

export const CardGrid: Block = {
  slug: "cardGrid",
  fields: [
    blockFields({
      name: "cardGridFields",
      fields: [
        {
          name: "populateFrom",
          type: "select",
          defaultValue: "none",
          options: [
            {
              label: "None",
              value: "none",
            },
            {
              label: "News",
              value: "news",
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "useWithContainer",
              type: "checkbox",
              admin: {
                width: "50%",
              },
            },
            {
              name: "showIcon",
              type: "checkbox",
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          name: "cards",
          type: "array",
          admin: {
            condition: (_, siblingData) => siblingData.populateFrom === "none",
          },
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
            },
            {
              name: "enableLink",
              type: "checkbox",
            },
            link({
              disableLabel: true,
              overrides: {
                admin: {
                  condition: (_, { enableLink }) => enableLink,
                },
              },
            }),
          ],
        },
        {
          name: "newsCards",
          type: "array",
          admin: {
            condition: (_, siblingData) => siblingData.populateFrom === "news",
          },
          fields: [
            {
              name: "card",
              type: "relationship",
              relationTo: "news",
            },
          ],
        },
      ],
    }),
  ],
}
