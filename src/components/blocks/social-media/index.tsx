import { SocialMediaButton } from "@/components/social-media-button"
import { Page } from "@/payload/payload-types"

type Props = Extract<Page["layout"][0], { blockType: "socials" }>

export const SocialMediaBlock: React.FC<
  Props & {
    id?: string
  }
> = (props) => {
  const { label, socials } = props
  return (
    <div className="flex items-center gap-4">
      <p className="text-primary">{label}</p>
      <div className="flex gap-6">
        {socials.map((social) => (
          <SocialMediaButton key={`social_media_${social.id}`} social={social} />
        ))}
      </div>
    </div>
  )
}
