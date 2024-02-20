import type { CollectionConfig } from "payload/types"

import { admins } from "../../access/admins"
import { adminsOrPublished } from "../../access/adminsOrPublished"
import { AlertCarouselBlock } from "../../blocks/AlertCarousel"
import { Archive } from "../../blocks/ArchiveBlock"
import { CallToAction } from "../../blocks/CallToAction"
import { Content } from "../../blocks/Content"
import { HeroBlock } from "../../blocks/HeroBlock"
import { MediaBlock } from "../../blocks/MediaBlock"
import { RichTextBlock } from "../../blocks/RichTextBlock"
import { SocialsBlock } from "../../blocks/Socials"
import { slugField } from "../../fields/slug"
import { populatePublishedAt } from "../../hooks/populatePublishedAt"
import { revalidatePage } from "./hooks/revalidatePage"

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    preview: (doc) => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${doc.slug !== "home" ? doc.slug : ""}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidatePage],
    afterRead: [],
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
      localized: true,
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
          label: "Content",
          fields: [
            {
              name: "layout",
              type: "blocks",
              required: true,
              blocks: [
                AlertCarouselBlock,
                Archive,
                CallToAction,
                Content,
                HeroBlock,
                MediaBlock,
                RichTextBlock,
                SocialsBlock,
              ],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
