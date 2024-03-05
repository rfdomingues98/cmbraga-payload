import type { Media } from "../payload-types"

export const news2: Omit<Media, "id" | "createdAt" | "updatedAt"> = {
  alt: "Cover Image News 2",
}
