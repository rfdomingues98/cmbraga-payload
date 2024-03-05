import { Category } from "../payload-types"

export const categories: Omit<Category, "id" | "createdAt" | "updatedAt">[] = [
  {
    title: "Cultura",
  },
  {
    title: "Câmara",
  },
  {
    title: "Ambiente",
  },
]
