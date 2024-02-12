import { Link } from "@/navigation"
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer"
import { ArrowUpRight } from "lucide-react"

export const RichText = ({ content }: { content: BlocksContent }) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="text-3xl font-semibold">{children}</h1>
            case 2:
              return <h2 className="text-2xl font-semibold">{children}</h2>
            default:
              return <h1 className="text-3xl font-semibold">{children}</h1>
          }
        },
        link: ({ children, url }) => (
          <Link href={url} className="group">
            <div className="flex items-center gap-3">
              {children}
              <ArrowUpRight
                className="transition-all ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1"
                size="26px"
              />
            </div>
          </Link>
        ),
        paragraph: ({ children }) => <p className="text-sm">{children}</p>,
        code: ({ children }) => {
          //@ts-expect-error It would not allow access to children.props.children
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          let temp = children[0]?.props.text
          if (typeof temp === "string")
            temp = temp.replace(/(\d{4}-\d{3})/, "\n$1")
          return (
            <p className="mt-3 whitespace-pre-line text-sm text-primary/60">
              {temp}
            </p>
          )
        },
      }}
    />
  )
}
