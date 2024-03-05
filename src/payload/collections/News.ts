import type { CollectionConfig } from "payload/types"

import { isAdmin } from "../access/isAdmin"
import { publishedOnly } from "../access/publishedOnly"
import { MediaBlock } from "../blocks/Media"
import { NewsContent } from "../blocks/NewsContent"
import richText from "../fields/richText"
import { slugField } from "../fields/slug"
import { populatePublishedAt } from "../hooks/populatePublishedAt"
import { formatPreviewURL } from "../utilities/formatPreviewURL"
import { revalidatePage } from "../utilities/revalidatePage"

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    preview: (doc) => formatPreviewURL("news", doc),
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [
      ({ req: { payload }, doc }) => {
        revalidatePage({
          payload,
          collection: "news",
          doc,
        })
      },
    ],
  },
  versions: {
    drafts: true,
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
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    richText({
      name: "excerpt",
    }),
    {
      name: "content",
      type: "blocks",
      blocks: [NewsContent, MediaBlock],
      required: true,
    },
    {
      name: "relatedNews",
      type: "relationship",
      relationTo: "news",
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
    },
    slugField(),
    {
      name: "publishedOn",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        position: "sidebar",
      },
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
}
