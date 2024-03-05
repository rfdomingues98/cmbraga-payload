import type { Media } from "../payload-types"

export const news3: Omit<Media, "id" | "createdAt" | "updatedAt"> = {
  alt: "Cover Image News 3",
}
