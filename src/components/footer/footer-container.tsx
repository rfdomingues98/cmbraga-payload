import { type Footer as TFooter } from "@/payload/payload-types"

import { Footer } from "./footer"

type FooterContainerProps = {
  data: TFooter
}

export function FooterContainer({ data }: FooterContainerProps) {
  return (
    <footer
      id="footer"
      className="bleed-bg bleed-darker-background bg-darker-background p-16 pb-9 text-primary"
    >
      <Footer data={data} />
    </footer>
  )
}
