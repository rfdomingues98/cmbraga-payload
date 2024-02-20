import {
  BoldTextFeature,
  HeadingFeature,
  HTMLConverterFeature,
  ItalicTextFeature,
  lexicalEditor,
  lexicalHTML,
  LinkFeature,
  ParagraphFeature,
  UnderlineTextFeature,
} from "@payloadcms/richtext-lexical"
import { slateEditor } from "@payloadcms/richtext-slate"
import { GlobalConfig } from "payload/types"

import link from "../fields/link"
import richText from "../fields/richText"
import richTextSmallBody from "../fields/richText/smallBody"

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "test",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          BoldTextFeature(),
          ItalicTextFeature(),
          UnderlineTextFeature(),
          ParagraphFeature(),
          HeadingFeature({}),
          LinkFeature({}),
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("test", { name: "test_html" }),
    {
      type: "row",
      fields: [
        richText({
          name: "block1",
          label: "Bloco dos horários de atendimento",
          localized: true,
          required: false,
          admin: {
            width: "50%",
          },
          editor: slateEditor({
            admin: {
              elements: ["h2", "h3", "link", richTextSmallBody],
              leaves: ["bold", "italic", "underline"],
            },
          }),
        }),
        richText({
          name: "block2",
          label: "Bloco do balcão único",
          localized: true,
          required: false,
          admin: {
            width: "50%",
          },
          editor: slateEditor({
            admin: {
              elements: ["h2", "h3", "link", richTextSmallBody],
              leaves: ["bold", "italic", "underline"],
            },
          }),
        }),
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
