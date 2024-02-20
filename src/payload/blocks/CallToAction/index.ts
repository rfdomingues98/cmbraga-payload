import type { Block } from "payload/types"

import { darkerBackground } from "../../fields/darkerBackground"
import linkGroup from "../../fields/linkGroup"
import richText from "../../fields/richText"

export const CallToAction: Block = {
  slug: "cta",
  labels: {
    singular: "Call to Action",
    plural: "Calls to Action",
  },
  fields: [
    darkerBackground,
    richText(),
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
