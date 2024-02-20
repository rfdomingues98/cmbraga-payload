import type { Block } from "payload/types"

import { darkerBackground } from "../../fields/darkerBackground"

export const MediaBlock: Block = {
  slug: "mediaBlock",
  fields: [
    darkerBackground,
    {
      name: "position",
      type: "select",
      defaultValue: "default",
      options: [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "Fullscreen",
          value: "fullscreen",
        },
      ],
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
}
