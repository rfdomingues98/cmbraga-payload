import type { Block } from "payload/types"

import linkGroup from "../../fields/linkGroup"

export const LinkGrid: Block = {
  slug: "linkGrid",
  fields: [
    {
      name: "iconPosition",
      type: "select",
      options: [
        { value: "left", label: "Left" },
        { value: "right", label: "Right" },
      ],
      defaultValue: "right",
    },
    linkGroup(),
  ],
}
