import type { Media } from "../payload-types"

export const homeHero: Omit<Media, "id" | "createdAt" | "updatedAt"> = {
  alt: "Presidente a interagir com cidadã",
}
