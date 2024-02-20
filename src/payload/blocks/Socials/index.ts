import { Block } from "payload/types"

import { socialMedia } from "../../fields/socialMedia"

export const SocialsBlock: Block = {
  slug: "socials",
  labels: {
    singular: "Social",
    plural: "Socials",
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
    },
    {
      name: "socials",
      type: "array",
      required: true,
      fields: [socialMedia],
    },
  ],
}
