import { News } from "../payload-types"

export const news: Omit<News, "id" | "createdAt" | "updatedAt">[] = [
  {
    title: "Tíbias de Braga",
    slug: "tibias-de-braga-1",
    image: 1,
    categories: [1],
    excerpt: [
      {
        children: [
          {
            text: "Aqui pode encontrar mais informação sobre os temas mais relevantes relativos à cidade de Braga",
          },
        ],
      },
    ],
    content: [
      {
        blockType: "newsContent",
        richText: [
          {
            children: [
              {
                text: "Aqui pode encontrar mais informação sobre os temas mais relevantes relacionados à cidade de Braga",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Tíbias de Braga",
    slug: "tibias-de-braga-2",
    image: 2,
    categories: [1],
    excerpt: [
      {
        children: [
          {
            text: "Aqui pode encontrar mais informação sobre os temas mais relevantes relativos à cidade de Braga",
          },
        ],
      },
    ],
    content: [
      {
        blockType: "newsContent",
        richText: [
          {
            children: [
              {
                text: "Aqui pode encontrar mais informação sobre os temas mais relevantes relacionados à cidade de Braga",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Tíbias de Braga",
    slug: "tibias-de-braga-3",
    image: 3,
    categories: [1],
    excerpt: [
      {
        children: [
          {
            text: "Aqui pode encontrar mais informação sobre os temas mais relevantes relativos à cidade de Braga",
          },
        ],
      },
    ],
    content: [
      {
        blockType: "newsContent",
        richText: [
          {
            children: [
              {
                text: "Aqui pode encontrar mais informação sobre os temas mais relevantes relacionados à cidade de Braga",
              },
            ],
          },
        ],
      },
    ],
  },
]
