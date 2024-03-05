import type { Media } from "../payload-types"

export const news1: Omit<Media, "id" | "createdAt" | "updatedAt"> = {
  alt: "Cover Image News 1",
}
