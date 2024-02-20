import React, { Fragment } from "react"
import escapeHTML from "escape-html"
import { ArrowUpRight } from "lucide-react"
import { Text } from "slate"

import { CMSLink } from "../cms-link"

type Children = Leaf[]

type Leaf = {
  type: string
  value?: {
    url: string
    alt: string
  }
  children?: Children
  url?: string
  [key: string]: unknown
}

const serialize = (children?: Children): React.ReactNode[] =>
  children?.map((node, i) => {
    if (Text.isText(node)) {
      let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />

      if (node.bold) {
        text = <strong key={i}>{text}</strong>
      }

      if (node.code) {
        text = <code key={i}>{text}</code>
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>
      }

      if (node.underline) {
        text = (
          <span className={"underline"} key={i}>
            {text}
          </span>
        )
      }

      if (node.strikethrough) {
        text = (
          <span className={"line-through"} key={i}>
            {text}
          </span>
        )
      }

      return <Fragment key={i}>{text}</Fragment>
    }
    if (!node) {
      return <span className="my-8"></span>
    }

    switch (node.type) {
      case "h1":
        return (
          <h1
            className="text-5xl font-bold leading-none tracking-normal text-primary lg:text-[64px]"
            key={i}
          >
            {serialize(node?.children)}
          </h1>
        )
      case "h2":
        return (
          <h2 className="text-2xl font-semibold" key={i}>
            {serialize(node?.children)}
          </h2>
        )
      case "h3":
        return (
          <h3 className="text-3xl font-semibold" key={i}>
            {serialize(node?.children)}
          </h3>
        )
      case "h4":
        return <h4 key={i}>{serialize(node?.children)}</h4>
      case "h5":
        return <h5 key={i}>{serialize(node?.children)}</h5>
      case "h6":
        return <h6 key={i}>{serialize(node?.children)}</h6>
      case "quote":
        return <blockquote key={i}>{serialize(node?.children)}</blockquote>
      case "ul":
        return <ul key={i}>{serialize(node?.children)}</ul>
      case "ol":
        return <ol key={i}>{serialize(node.children)}</ol>
      case "li":
        return <li key={i}>{serialize(node.children)}</li>
      case "link":
        return (
          <CMSLink
            key={i}
            type={node.linkType === "internal" ? "reference" : "custom"}
            url={node.url}
            reference={node.doc as any}
            newTab={Boolean(node?.newTab)}
            className={"group flex gap-3"}
          >
            {serialize(node?.children)}
            <ArrowUpRight className="transition-all ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1" />
          </CMSLink>
        )
      case "small-body":
        return (
          <p key={i} className="mt-3 whitespace-pre-line text-sm text-primary/60">
            {serialize(node.children)}
          </p>
        )
      default:
        return <p key={i}>{serialize(node?.children)}</p>
    }
  }) || []

export default serialize
