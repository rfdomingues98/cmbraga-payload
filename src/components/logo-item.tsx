import { Fragment, type PropsWithChildren, type ReactNode } from "react"
import Image from "next/image"
import { Header, Media } from "@/payload/payload-types"

import { CMSLink } from "./cms-link"

type LogoType = Header["logo"]

type ConditionalLinkProps = PropsWithChildren<{
  condition: boolean
  wrapper: (children: ReactNode) => ReactNode
}>

const ConditionalLink = ({ condition, wrapper, children }: ConditionalLinkProps) => {
  return condition ? wrapper(children) : children
}

const LogoItem = ({ logo, width, height }: { logo: LogoType; width?: number; height?: number }) => {
  const lightLogo = logo.logoLight as Media
  const darkLogo = (logo.logoDark ?? logo.logoLight) as Media

  return (
    <ConditionalLink
      condition={Boolean(logo.isLink)}
      wrapper={(children) => <CMSLink {...logo.logoLink}>{children}</CMSLink>}
    >
      <Fragment>
        <Image
          src={darkLogo.url}
          alt={darkLogo.alt}
          width={width ?? darkLogo.width}
          height={height ?? darkLogo.height}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: height,
          }}
          className="hidden dark:block"
        />

        <Image
          src={lightLogo.url}
          alt={lightLogo.alt}
          width={width ?? lightLogo.width}
          height={height ?? lightLogo.height}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: height,
          }}
          className="block dark:hidden"
        />
      </Fragment>
    </ConditionalLink>
  )
}

export default LogoItem
