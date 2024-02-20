"use client"

import { AlertsCarousel } from "@/components/alerts-carousel"
import { AlertType, type Alert } from "@/payload/payload-types"
import { useMediaQuery } from "@mantine/hooks"
import Marquee from "react-fast-marquee"

type Props = {
  alerts: Alert[]
}

export function Alerts({ alerts }: Props) {
  const isMobile = useMediaQuery("(max-width: 1024px)")
  return (
    <>
      {isMobile ? (
        <div className="group h-full w-full overflow-x-hidden rounded-lg border-none bg-card p-3">
          <Marquee className="flex flex-nowrap whitespace-nowrap " pauseOnHover pauseOnClick>
            {alerts.map(({ id, type, description }) => (
              <li key={`alert_${id}`} className="ml-4 flex justify-between lg:pb-10">
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      background: (type.value as AlertType).color,
                    }}
                  />
                  <div className="text-base font-medium">{(type.value as AlertType).title}</div>

                  <div className="gap-x-2 text-base text-muted">{description}</div>
                </div>
              </li>
            ))}
          </Marquee>
        </div>
      ) : (
        <div className="min-w-0 max-w-[600px]">
          <AlertsCarousel
            alerts={alerts}
            slidesLength={alerts.length}
            nextAriaLabel={"Next"}
            prevAriaLabel={"Previous"}
          />
        </div>
      )}
    </>
  )
}
