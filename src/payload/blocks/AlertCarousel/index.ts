import type { Block } from "payload/types"

export const AlertCarouselBlock: Block = {
  slug: "alertCarousel",
  labels: {
    singular: "Alert Carousel",
    plural: "Alerts Carousel",
  },
  fields: [
    {
      name: "alerts",
      type: "relationship",
      relationTo: "alerts",
      required: true,
      hasMany: true,
    },
  ],
}
