import { Alerts } from "@/components/alerts"
import { Alert, Page } from "@/payload/payload-types"

type Props = Extract<Page["layout"][0], { blockType: "alertCarousel" }>

export const AlertsCarousel: React.FC<Props> = (props) => {
  return <Alerts alerts={props.alerts as Alert[]} />
}
