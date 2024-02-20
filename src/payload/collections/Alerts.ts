import { CollectionConfig } from "payload/types"

import link from "../fields/link"

export const Alerts: CollectionConfig = {
  slug: "alerts",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          admin: {
            width: "50%",
          },
        },
        {
          name: "type",
          type: "relationship",
          relationTo: ["alert-types"],
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      name: "description",
      type: "text",
    },
    link({ disableLabel: true }),
  ],
}
