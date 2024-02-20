import type { Field, TextField } from "payload/dist/fields/config/types"

import TextInput from "./components/ColorPicker"

export const colorPickerField = (
  options?: Partial<TextField & { hasMany: false }> & {
    colors?: string[]
  },
): Field => {
  const { colors, ...rest } = options || {}

  return {
    ...rest,
    name: rest?.name || "colorPicker",
    label: rest?.label || "Color Picker",
    type: "text",
    defaultValue: rest.defaultValue || "#ffffff",
    admin: {
      ...rest?.admin,
      components: {
        ...rest?.admin?.components,
        Field: (args) => TextInput({ ...args, colors }),
      },
    },
  }
}
