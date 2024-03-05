import { Block } from "payload/types"

import { darkerBackground } from "../../fields/darkerBackground"
import { AlertCarouselBlock } from "../AlertCarousel"
import { CallToAction } from "../CallToAction"
import { CardGrid } from "../CardGrid"
import { Content } from "../Content"
import { LinkGrid } from "../LinkGrid"
import { MediaBlock } from "../Media"
import { RichTextBlock } from "../RichTextBlock"
import { SearchBlock } from "../Search"
import { SocialsBlock } from "../Socials"

export const Section: Block = {
  slug: "section",
  labels: {
    singular: "Section",
    plural: "Sections",
  },
  fields: [
    {
      name: "hasTitle",
      label: "Usar título",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description: "Indica se a secção tem um título ou não.",
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData.hasTitle === true,
      },
    },
    darkerBackground,
    {
      name: "spacing",
      label: "Tipo de espaçamento",
      admin: {
        description: "Selecione o tamanho do espaçamento da secção.",
      },
      type: "select",
      options: [
        { value: "none", label: "None" },
        { value: "small", label: "Small" },
        { value: "normal", label: "Normal" },
        { value: "large", label: "Large" },
      ],
      defaultValue: "normal",
    },
    {
      name: "blocks",
      type: "blocks",
      required: true,
      blocks: [
        Content,
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
  ],
}
