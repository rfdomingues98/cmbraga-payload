import { type Footer as TFooter } from "@/payload/payload-types"
import { ChevronRightCircleIcon, MailIcon } from "lucide-react"

import { CMSLink } from "../cms-link"
import { ConditionalLink } from "../conditional-link"
import RichText from "../rich-text"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"

type FooterProps = {
  data: TFooter
}

export function Footer({ data }: FooterProps) {
  const newsletter = data.newsletter
  const leftBlock = data.block1
  const rightBlock = data.block2

  return (
    <div className="container mx-auto flex min-h-[350px] flex-col justify-between">
      <div className="flex w-full justify-between">
        <div className="flex gap-14">
          {leftBlock && (
            <div className="flex min-w-[310px] flex-col gap-1">
              <RichText content={leftBlock} />
            </div>
          )}
          {rightBlock && (
            <div className="flex flex-col gap-1">
              <RichText content={rightBlock} />
            </div>
          )}
        </div>
        <div>
          <Card className="w-[470px] bg-background dark:border-darker-background">
            <CardHeader>
              <CardTitle>{newsletter.title}</CardTitle>
              {newsletter.description && (
                <CardDescription>{newsletter.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="items-top flex space-x-2">
                    <Checkbox id="newsletterAuthorization" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="newsletterAuthorization"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {newsletter.authorizationLabel}
                      </label>
                    </div>
                  </div>
                  <div className="relative flex w-full items-center">
                    <Input type="email" placeholder={newsletter.inputPlaceholder} />
                    <Button
                      variant="link"
                      type="submit"
                      className="absolute right-0 rounded-l-none border-l-0 text-primary/60 hover:text-primary"
                      /* aria-label={newsletter.button_aria_label} */
                    >
                      <ChevronRightCircleIcon size="22px" strokeWidth={1.5} />
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-end gap-14">
          <div className="min-w-[310px]">
            <ConditionalLink
              condition={data.emailGroup.isLink}
              href={`mailto:${data.emailGroup.email}`}
              className="font-base flex items-center space-x-2 font-semibold text-primary/80 hover:text-primary"
              /* aria-label={data.attributes.email.aria_label} */
            >
              <MailIcon size={18} />
              <span>{data.emailGroup.email}</span>
            </ConditionalLink>
          </div>
          <div>
            <CMSLink
              {...data.legal}
              className="font-base font-semibold text-primary/80 hover:text-primary"
              aria-label={`Go to ${data.legal.label}`}
            >
              {data.legal.label}
            </CMSLink>
          </div>
        </div>
        {/* <div>
          <div className="flex flex-row-reverse items-center gap-3">
            {data.logos.map((logo) => (
              <LogoItem key={`footer.logo.${logo.id}`} logo={logo} height={45} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  )
}
