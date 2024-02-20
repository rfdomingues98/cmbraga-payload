import type { Field } from "payload/types"

import deepMerge from "../utilities/deepMerge"
import link from "./link"

type Logo = (overrides?: Partial<Field>) => Field

export const logoField: Logo = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "logo",
      type: "group",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "logoLight",
              label: "Logo Claro",
              type: "upload",
              relationTo: "media",
              admin: {
                width: "50%",
              },
            },
            {
              name: "logoDark",
              label: "Logo Escuro",
              type: "upload",
              relationTo: "media",
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "isLink",
              type: "checkbox",
              defaultValue: false,
              label: "Definir link",
              admin: {
                width: "20%",
              },
            },
            link({
              overrides: {
                name: "logoLink",
                admin: {
                  width: "80%",
                  condition: (_, data) => Boolean(data?.isLink),
                },
              },
            }),
          ],
        },
      ],
    },
    overrides,
  )
