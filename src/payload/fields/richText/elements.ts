import type { RichTextElement } from "@payloadcms/richtext-slate/dist/types"

import smallBody from "./smallBody"

const elements: RichTextElement[] = [
  "blockquote",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "link",
  smallBody,
]

export default elements
