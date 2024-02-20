import type { Block, Field } from "payload/types"

import { darkerBackground } from "../../fields/darkerBackground"
import { AlertCarouselBlock } from "../AlertCarousel"
import { CallToAction } from "../CallToAction"
import { MediaBlock } from "../MediaBlock"
import { RichTextBlock } from "../RichTextBlock"
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
    blocks: [RichTextBlock, MediaBlock, SocialsBlock, AlertCarouselBlock, CallToAction],
  },
]

export const Content: Block = {
  slug: "content",
  fields: [
    darkerBackground,
    {
      name: "columns",
      type: "array",
      fields: columnFields,
    },
  ],
}
