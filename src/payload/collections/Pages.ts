import type { CollectionConfig } from "payload/types"

import { isAdmin } from "../access/isAdmin"
import { publishedOnly } from "../access/publishedOnly"
import { AlertCarouselBlock } from "../blocks/AlertCarousel"
import { Archive } from "../blocks/ArchiveBlock"
import { CallToAction } from "../blocks/CallToAction"
import { CardGrid } from "../blocks/CardGrid"
import { Content } from "../blocks/Content"
import { HeroBlock } from "../blocks/HeroBlock"
import { LinkGrid } from "../blocks/LinkGrid"
import { MediaBlock } from "../blocks/Media"
import { RichTextBlock } from "../blocks/RichTextBlock"
import { SearchBlock } from "../blocks/Search"
import { Section } from "../blocks/Section"
import { SocialsBlock } from "../blocks/Socials"
import { slugField } from "../fields/slug"
import { populatePublishedAt } from "../hooks/populatePublishedAt"
import { formatPreviewURL } from "../utilities/formatPreviewURL"
import { revalidatePage } from "../utilities/revalidatePage"

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    preview: (doc) => formatPreviewURL("pages", doc),
    defaultColumns: ["title", "slug", "createdAt", "updatedAt"],
  },
  versions: {
    drafts: true,
  },
  access: {
    create: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    afterChange: [
      ({ req: { payload }, doc }) => {
        revalidatePage({
          payload,
          collection: "pages",
          doc,
        })
      },
    ],
    beforeChange: [populatePublishedAt],
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
                LinkGrid,
                CardGrid,
                Section,
              ],
            },
          ],
        },
      ],
    },
    slugField(),
    {
      name: "menu",
      type: "relationship",
      relationTo: "menus",
      admin: {
        position: "sidebar",
      },
    },
  ],
}
