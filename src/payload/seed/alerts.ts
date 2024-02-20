import { Alert } from "../payload-types"

export const alerts: Omit<Alert, "id" | "createdAt" | "updatedAt">[] = [
  {
    title: "Teste 1",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor",
    type: {
      relationTo: "alert-types",
      value: 1,
    },
    link: {
      link_type: "custom",
      newTab: null,
      url: "https://google.com",
    },
  },
  {
    title: "Teste 2",
    description: "lorem ipsum dolor sit amet consectetur adipisicing",
    type: {
      relationTo: "alert-types",
      value: 2,
    },
    link: {
      link_type: "custom",
      newTab: null,
      url: "https://google.com",
    },
  },
]
