import React from "react"
import Link from "next/link"
import { Page } from "@/payload/payload-types"

import { Button, Props as ButtonProps } from "../Button"

type CMSLinkType = {
  type?: "custom" | "reference"
  url?: string
  newTab?: boolean
  reference?: {
    value: number | Page
    relationTo: "pages"
  }
  label?: string
  appearance?: ButtonProps["appearance"]
  children?: React.ReactNode
  className?: string
  invert?: ButtonProps["invert"]
}

export const CMSLink: React.FC<CMSLinkType> = ({
  type,
  url,
  newTab,
  reference,
  label,
  appearance,
  children,
  className,
  invert,
}) => {
  let href =
    type === "reference" && typeof reference?.value === "object" && reference.value.slug
      ? `${reference?.relationTo !== "pages" ? `/${reference?.relationTo}` : ""}/${
          reference.value.slug
        }`
      : url

  if (!href) return null
  if (href === "/home") href = "/"
  if (!appearance) {
    const newTabProps = newTab ? { target: "_blank", rel: "noopener noreferrer" } : {}
    if (href || url) {
      return (
        <Link {...newTabProps} href={href || url} className={className}>
          {label && label}
          {children && children}
        </Link>
      )
    }
  }

  return (
    <Button
      className={className}
      newTab={newTab}
      href={href}
      appearance={appearance}
      label={label}
      invert={invert}
    />
  )
}
