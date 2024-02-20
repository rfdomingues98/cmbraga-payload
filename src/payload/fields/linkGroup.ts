import type { ArrayField } from "payload/dist/fields/config/types"
import type { Field } from "payload/types"

import deepMerge from "../utilities/deepMerge"
import link from "./link"

type LinkGroupType = (options?: { overrides?: Partial<ArrayField> }) => Field

const linkGroup: LinkGroupType = ({ overrides = {} } = {}) => {
  const generatedLinkGroup: Field = {
    name: "links",
    type: "array",
    fields: [link()],
  }

  return deepMerge(generatedLinkGroup, overrides)
}

export default linkGroup
