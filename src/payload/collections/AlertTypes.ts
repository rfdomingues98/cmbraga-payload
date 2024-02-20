import { CollectionConfig } from "payload/types"

import { colorPickerField } from "../fields/colorPicker"

export const AlertTypes: CollectionConfig = {
  slug: "alert-types",
  labels: {
    singular: "Alert Type",
    plural: "Alert Types",
  },
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
          localized: true,
          admin: {
            width: "50%",
          },
        },
        colorPickerField({
          name: "color",
          required: true,
          defaultValue: "#ffffff",
          colors: ["#ef4444", "#ff9a3d", "#3c75cc"],
          admin: {
            width: "50%",
          },
        }),
      ],
    },
  ],
}
