import { slateEditor } from "@payloadcms/richtext-slate"
import { GlobalConfig } from "payload/types"

import link from "../fields/link"

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "block1",
          type: "richText",
          label: "Bloco dos horários de atendimento",
          localized: true,
          editor: slateEditor({
            admin: {
              elements: ["h2", "h3", "link"],
              leaves: ["bold", "italic", "underline"],
            },
          }),
          admin: {
            width: "50%",
          },
        },
        {
          name: "block2",
          type: "richText",
          label: "Bloco do balcão único",
          localized: true,
          editor: slateEditor({
            admin: {
              elements: ["h2", "h3", "link"],
              leaves: ["bold", "italic", "underline"],
            },
          }),
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      name: "emailGroup",
      label: "Email",
      type: "group",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "email",
              type: "email",
              required: true,
            },
            {
              name: "isLink",
              type: "checkbox",
              defaultValue: false,
              label: "Marcar como link",
              admin: {
                style: {
                  alignSelf: "flex-end",
                },
              },
            },
          ],
        },
      ],
    },
    link({
      appearances: false,
      overrides: {
        name: "legal",
        required: true,
      },
    }),
    {
      name: "logos",
      type: "array",
      fields: [
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "newsletter",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "description",
          type: "text",
          localized: true,
        },
        {
          name: "authorizationLabel",
          type: "text",
          label: "Texto de confirmação de autorização",
          required: true,
          localized: true,
        },
        {
          name: "inputPlaceholder",
          type: "text",
          label: "Placeholder do campo de e-mail",
          required: true,
          localized: true,
        },
      ],
    },
  ],
}
