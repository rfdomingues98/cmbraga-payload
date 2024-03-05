import type { Block, Field } from "payload/types"

import { AlertCarouselBlock } from "../AlertCarousel"
import { CallToAction } from "../CallToAction"
import { CardGrid } from "../CardGrid"
import { LinkGrid } from "../LinkGrid"
import { MediaBlock } from "../Media"
import { RichTextBlock } from "../RichTextBlock"
import { SearchBlock } from "../Search"
import { SocialsBlock } from "../Socials"

const columnFields: Field[] = [
  {
    name: "size",
    type: "select",
    defaultValue: "oneThird",
    options: [
      {
        value: "oneThird",
        label: "One Third",
      },
      {
        value: "half",
        label: "Half",
      },
      {
        value: "twoThirds",
        label: "Two Thirds",
      },
      {
        value: "full",
        label: "Full",
      },
    ],
  },
  {
    type: "row",
    fields: [
      {
        name: "horizontalAlign",
        type: "select",
        admin: {
          width: "50%",
        },
        defaultValue: "left",
        options: [
          {
            value: "left",
            label: "Left",
          },
          {
            value: "center",
            label: "Center",
          },
          {
            value: "right",
            label: "Right",
          },
        ],
      },
      {
        name: "verticalAlign",
        type: "select",
        admin: {
          width: "50%",
        },
        defaultValue: "top",
        options: [
          {
            value: "top",
            label: "Top",
          },
          {
            value: "middle",
            label: "Middle",
          },
          {
            value: "bottom",
            label: "Bottom",
          },
        ],
      },
    ],
  },
  {
    type: "blocks",
    name: "blocks",
    blocks: [
      RichTextBlock,
      MediaBlock,
      SocialsBlock,
      SearchBlock,
      AlertCarouselBlock,
      CallToAction,
      LinkGrid,
      CardGrid,
    ],
  },
]

export const Content: Block = {
  slug: "content",
  labels: {
    singular: "Content Row",
    plural: "Content Rows",
  },
  fields: [
    {
      name: "columns",
      type: "array",
      fields: columnFields,
    },
  ],
}
