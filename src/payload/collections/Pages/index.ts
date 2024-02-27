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
import { SearchBlock } from "../../blocks/Search"
import { SocialsBlock } from "../../blocks/Socials"
import { slugField } from "../../fields/slug"
import { populatePublishedAt } from "../../hooks/populatePublishedAt"
import { formatAppURL, revalidatePage } from "./hooks/revalidatePage"

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    preview: (doc) => {
      return `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/preview?url=${encodeURIComponent(
        formatAppURL({
          doc,
        }),
      )}&collection=pages&slug=${doc.slug}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
    livePreview: {
      url: ({ data }) =>
        `${process.env.PAYLOAD_PUBLIC_SITE_URL}${data.slug !== "home" ? `/${data.slug}` : ""}`,
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
                SearchBlock,
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
