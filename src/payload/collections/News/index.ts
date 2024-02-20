import type { CollectionConfig } from "payload/types"

import { admins } from "../../access/admins"
import { adminsOrPublished } from "../../access/adminsOrPublished"
import { Archive } from "../../blocks/ArchiveBlock"
import { CallToAction } from "../../blocks/CallToAction"
import { Content } from "../../blocks/Content"
import { MediaBlock } from "../../blocks/MediaBlock"
import { hero } from "../../fields/hero"
import { slugField } from "../../fields/slug"
import { populateArchiveBlock } from "../../hooks/populateArchiveBlock"
import { populatePublishedAt } from "../../hooks/populatePublishedAt"
import { revalidateNews } from "./hooks/revalidateNews"

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    preview: (doc) => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/news/${doc?.slug}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidateNews],
    afterRead: [populateArchiveBlock],
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
      type: "text",
      required: true,
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
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [hero],
        },
        {
          label: "Content",
          fields: [
            {
              name: "layout",
              type: "blocks",
              required: true,
              blocks: [CallToAction, Content, MediaBlock, Archive],
            },
          ],
        },
      ],
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
  ],
}
