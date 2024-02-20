import { Field } from "payload/types"
import * as LucideIcons from "react-icons/lu"

import iconPicker from "./iconPicker"
import link from "./link"

const availableIcons = {
  LuYoutube: LucideIcons.LuYoutube,
  LuTwitter: LucideIcons.LuTwitter,
  LuFacebook: LucideIcons.LuFacebook,
  LuLinkedin: LucideIcons.LuLinkedin,
}

export const socialMedia: Field = {
  name: "socialMedia",
  label: false,
  type: "group",
  fields: [
    link({ overrides: { name: "socialLink", label: "Link" }, disableLabel: true }),
    iconPicker({
      name: "socialIcon",
      label: "Icons",
      reactIconPack: availableIcons,
    }),
  ],
}
