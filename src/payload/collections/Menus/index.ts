import { slateEditor } from "@payloadcms/richtext-slate"
import { CollectionConfig } from "payload/types"
import * as LucideIcons from "react-icons/lu"

import { admins } from "../../access/admins"
import { adminsOrPublished } from "../../access/adminsOrPublished"
import iconPicker from "../../fields/iconPicker"
import link from "../../fields/link"

export const Menus: CollectionConfig = {
  slug: "menus",
  admin: {
    useAsTitle: "title",
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
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
          appearances: false,
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
            link({ appearances: false }),
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
