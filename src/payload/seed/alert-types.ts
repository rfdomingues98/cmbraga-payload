import { AlertType } from "../payload-types"

export const alertTypes: Omit<AlertType, "id" | "createdAt" | "updatedAt">[] = [
  {
    title: "Aviso",
    color: "#ef4444",
  },
  {
    title: "Informação",
    color: "#3c75cc",
  },
  {
    title: "Comunicado",
    color: "#ff9a3d",
  },
]
