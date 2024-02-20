import type { RichTextCustomElement } from "@payloadcms/richtext-slate/dist/types"

import Button from "./Button"
import Element from "./Element"
import withSmallBody from "./plugin"

const richTextSmallBody: RichTextCustomElement = {
  name: "small-body",
  Button,
  Element,
  plugins: [withSmallBody],
}

export default richTextSmallBody
