"use client"

import { AlertsCarousel } from "@/components/alerts-carousel"
import { type Alerts } from "@/lib/validations/pages"
import { useMediaQuery } from "@mantine/hooks"
import Marquee from "react-fast-marquee"

type Props = {
  alertsData: Alerts
}

export function Alerts({ alertsData }: Props) {
  const isMobile = useMediaQuery("(max-width: 1024px)")
  const { alerts, next_alert_aria_label, prev_alert_aria_label } = alertsData

  return (
    <>
      {isMobile ? (
        <div className="group h-full w-full overflow-x-hidden rounded-lg border-none bg-card p-3">
          <Marquee
            className="flex flex-nowrap whitespace-nowrap "
            pauseOnHover
            pauseOnClick
          >
            {alerts.data.map(
              ({ attributes: { alertType, description }, id }) => (
                <li
                  key={`alert_${id}`}
                  className="ml-4 flex justify-between lg:pb-10"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{
                        background: alertType.data.attributes.color,
                      }}
                    />
                    <div className="text-base font-medium">
                      {alertType.data.attributes.type}
                    </div>

                    <div className="gap-x-2 text-base text-muted">
                      {description}
                    </div>
                  </div>
                </li>
              )
            )}
          </Marquee>
        </div>
      ) : (
        <div className="min-w-0 lg:basis-2/5">
          <AlertsCarousel
            alerts={alerts}
            slidesLength={alerts.data.length}
            nextAriaLabel={next_alert_aria_label}
            prevAriaLabel={prev_alert_aria_label}
          />
        </div>
      )}
    </>
  )
}
