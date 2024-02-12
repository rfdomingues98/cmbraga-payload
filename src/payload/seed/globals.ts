import { Footer, Header } from "../payload-types"

export const header: Omit<Header, "id" | "createdAt" | "updatedAt"> = {
  logo: {
    logoLight: 1,
    logoDark: 2,
  },
  menus: [
    {
      menu: {
        relationTo: "menus",
        value: 1,
      },
    },
    {
      menu: {
        relationTo: "menus",
        value: 2,
      },
    },
    {
      menu: {
        relationTo: "menus",
        value: 3,
      },
    },
    {
      menu: {
        relationTo: "menus",
        value: 4,
      },
    },
    {
      menu: {
        relationTo: "menus",
        value: 5,
      },
    },
  ],
}

export const footer: Omit<Footer, "id" | "createdAt" | "updatedAt"> = {
  block1: [
    {
      type: "h2",
      children: [
        {
          text: "Horários de Atendimento",
        },
      ],
    },
    {
      children: [
        {
          text: "Dias úteis, entre as 09h00 e as 17h30",
        },
      ],
    },
    {
      children: [
        {
          text: "(+351) 253 61 60 60",
        },
      ],
    },
    {
      children: [
        {
          text: "Praça do Município, 4704-514 Braga",
        },
      ],
    },
  ],
  block2: [
    {
      type: "h2",
      children: [
        {
          text: "",
        },
        {
          url: "https://cm-braga.pt/",
          type: "link",
          newTab: true,
          children: [
            {
              text: "Balcão Único",
            },
          ],
          linkType: "custom",
        },
        {
          text: "",
        },
      ],
    },
    {
      children: [
        {
          text: "Para agendamento",
        },
      ],
    },
    {
      children: [
        {
          text: "São João do Souto, 4700-312 Braga",
        },
      ],
    },
  ],
  emailGroup: {
    email: "municipe@cm-braga.pt",
    isLink: true,
  },
  legal: {
    type: "reference",
    newTab: null,
    reference: {
      relationTo: "pages",
      value: 1,
    },
    url: null,
    label: "Avisos Legais",
  },
  logos: null,
  newsletter: {
    title: "Newsletter",
    description:
      "Receba todas as informações, notícias e convites que a Câmara de Braga tem para si.",
    authorizationLabel: "Autorizo receber convites no âmbito cultural",
    inputPlaceholder: "Inserir email",
  },
}
