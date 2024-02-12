import { GlobalConfig } from "payload/types"

import { logoField } from "../fields/logo"

export const Header: GlobalConfig = {
  slug: "header",
  access: {
    read: () => true,
  },
  fields: [
    logoField(),
    {
      name: "menus",
      type: "array",
      maxRows: 5,
      fields: [
        {
          name: "menu",
          type: "relationship",
          relationTo: ["menus"],
        },
      ],
    },
  ],
}
