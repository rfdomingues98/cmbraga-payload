import { Menu } from "../payload-types"

const links = {
  cidade: [
    { label: "História", icon: "LuLibrary" },
    { label: "Mapa da Cidade", icon: "LuMapPinned" },
    { label: "Ação Social", icon: "LuUsers" },
    { label: "Ambiente", icon: "LuTrees" },
    { label: "Bem-estar Animal", icon: "LuDog" },
    { label: "Cultura & Património", icon: "" },
    { label: "Desporto e Bem-estar", icon: "" },
    { label: "Educação", icon: "" },
    { label: "Desporto", icon: "" },
    { label: "Juventude", icon: "" },
    { label: "Mobilidade", icon: "" },
    { label: "Participação", icon: "" },
    { label: "Proteção Civil", icon: "" },
    { label: "Saúde", icon: "" },
    { label: "Sustentabilidade", icon: "" },
    { label: "Urbanismo", icon: "" },
  ],
  municipio: [
    { label: "Câmara Municipial", icon: "LuLibrary" },
    { label: "Assembleia Municipal", icon: "LuMapPinned" },
    { label: "Atos Eleitorais", icon: "LuUsers" },
    { label: "Empresas Municipais", icon: "LuTrees" },
    { label: "Freguesias", icon: "LuDog" },
    { label: "Provedor do Munícipe", icon: "" },
    { label: "Relações Internacionais", icon: "" },
  ],
  atualidade: [
    { label: "Cultura", icon: "LuLibrary" },
    { label: "Ambiente", icon: "LuMapPinned" },
    { label: "Bem-estar Animal", icon: "LuUsers" },
    { label: "Empresas Municipais", icon: "LuTrees" },
    { label: "Freguesias", icon: "LuDog" },
    { label: "Provedor do Munícipe", icon: "" },
    { label: "Relações Internacionais", icon: "" },
  ],
  agenda: [
    { label: "Cultura", icon: "LuLibrary" },
    { label: "Ambiente", icon: "LuMapPinned" },
    { label: "Bem-estar Animal", icon: "LuUsers" },
    { label: "Empresas Municipais", icon: "LuTrees" },
    { label: "Freguesias", icon: "LuDog" },
    { label: "Provedor do Munícipe", icon: "" },
    { label: "Relações Internacionais", icon: "" },
  ],
  apoioAoCidadao: [
    { label: "Cultura", icon: "LuLibrary" },
    { label: "Ambiente", icon: "LuMapPinned" },
    { label: "Bem-estar Animal", icon: "LuUsers" },
    { label: "Empresas Municipais", icon: "LuTrees" },
    { label: "Freguesias", icon: "LuDog" },
    { label: "Provedor do Munícipe", icon: "" },
    { label: "Relações Internacionais", icon: "" },
  ],
}

export const cidade: Omit<Menu, "id" | "createdAt" | "updatedAt"> = {
  title: "Cidade",
  _status: "published",
  isLink: false,
  description: null,
  links: links.cidade.map((link) => {
    return {
      linkGroup: {
        link: {
          type: "reference",
          newTab: false,
          label: link.label,
          reference: {
            relationTo: "pages",
            value: -100,
          },
          url: null,
        },
        lucideIcons: link.icon?.length > 0 ? link.icon : "LuCheckCircle",
      },
    }
  }),
}

export const municipio: Omit<Menu, "id" | "createdAt" | "updatedAt"> = {
  title: "Municipio",
  _status: "published",
  isLink: false,
  description: null,
  links: links.municipio.map((link) => {
    return {
      linkGroup: {
        link: {
          type: "reference",
          newTab: false,
          label: link.label,
          reference: {
            relationTo: "pages",
            value: -100,
          },
          url: null,
        },
        lucideIcons: link.icon?.length > 0 ? link.icon : "LuCheckCircle",
      },
    }
  }),
}
export const atualidade: Omit<Menu, "id" | "createdAt" | "updatedAt"> = {
  title: "Atualidade",
  _status: "published",
  isLink: false,
  description: null,
  links: links.atualidade.map((link) => {
    return {
      linkGroup: {
        link: {
          type: "reference",
          newTab: false,
          label: link.label,
          reference: {
            relationTo: "pages",
            value: -100,
          },
          url: null,
        },
        lucideIcons: link.icon?.length > 0 ? link.icon : "LuCheckCircle",
      },
    }
  }),
}
export const agenda: Omit<Menu, "id" | "createdAt" | "updatedAt"> = {
  title: "Agenda",
  _status: "published",
  isLink: false,
  description: null,
  links: links.agenda.map((link) => {
    return {
      linkGroup: {
        link: {
          type: "reference",
          newTab: false,
          label: link.label,
          reference: {
            relationTo: "pages",
            value: -100,
          },
          url: null,
        },
        lucideIcons: link.icon?.length > 0 ? link.icon : "LuCheckCircle",
      },
    }
  }),
}
export const apoioAoCidadao: Omit<Menu, "id" | "createdAt" | "updatedAt"> = {
  title: "Apoio ao Cidadão",
  _status: "published",
  isLink: false,
  description: null,
  links: links.apoioAoCidadao.map((link) => {
    return {
      linkGroup: {
        link: {
          type: "reference",
          newTab: false,
          label: link.label,
          reference: {
            relationTo: "pages",
            value: -100,
          },
          url: null,
        },
        lucideIcons: link.icon?.length > 0 ? link.icon : "LuCheckCircle",
      },
    }
  }),
}
