import Image from "next/image"
import { type InnerMediaFile } from "@/lib/validations/shared"

type BannerProps = {
  banner: InnerMediaFile
}

export function ImgBanner({ banner }: BannerProps) {
  return (
    <div className="relative flex h-[55vh] flex-col gap-y-1">
      <Image
        src={banner.url}
        alt={banner?.alternativeText ?? "banner-img"}
        style={{ objectFit: "cover" }}
        priority
        fill
      />
    </div>
  )
}
