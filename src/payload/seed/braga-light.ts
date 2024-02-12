import type { Media } from "../payload-types"

export const bragaLight: Omit<Media, "id" | "createdAt" | "updatedAt"> = {
  alt: "Logo CMBraga",
}
