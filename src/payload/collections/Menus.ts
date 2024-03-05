import { slateEditor } from "@payloadcms/richtext-slate"
import { CollectionConfig } from "payload/types"
import * as LucideIcons from "react-icons/lu"

import { isAdmin } from "../access/isAdmin"
import { publishedOnly } from "../access/publishedOnly"
import iconPicker from "../fields/iconPicker"
import link from "../fields/link"

export const Menus: CollectionConfig = {
  slug: "menus",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "description", "updatedAt"],
  },
  access: {
    read: publishedOnly,
    update: isAdmin,
    create: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "title",
      unique: true,
      type: "text",
      required: true,
      localized: true,
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
          disableLabel: true,
          overrides: {
            name: "menuLink",
            admin: {
              width: "80%",
              condition: (_, data) => Boolean(data?.isLink),
            },
          },
        }),
      ],
    },
    {
      name: "description",
      type: "richText",
      localized: true,
      editor: slateEditor({
        admin: {
          elements: [],
          leaves: ["bold", "italic", "underline"],
        },
      }),
    },
    {
      name: "links",
      type: "array",
      maxRows: 20,
      fields: [
        {
          name: "linkGroup",
          admin: {
            hideGutter: true,
          },
          type: "group",
          fields: [
            link(),
            iconPicker({
              name: "lucideIcons",
              label: "Lucide Icons",
              reactIconPack: LucideIcons,
              admin: {
                width: "50%",
              },
            }),
          ],
        },
      ],
    },
  ],
}
