import type { Page } from "../payload-types"

export const home: Omit<Page, "id" | "createdAt" | "updatedAt"> = {
  title: "Home",
  slug: "home",
  _status: "published",
  layout: [
    {
      hasTitle: false,
      darkerBackground: null,
      spacing: "none",
      blockName: "Secção Inicial",
      blockType: "section",
      blocks: [
        {
          blockName: "Header",
          columns: [
            {
              size: "half",
              horizontalAlign: "left",
              verticalAlign: "top",
              blocks: [
                {
                  richText: [
                    {
                      type: "h1",
                      children: [
                        {
                          text: "Câmara Municipal de Braga",
                        },
                      ],
                    },
                  ],
                  blockName: "Title",
                  blockType: "richTextBlock",
                },
                {
                  label: "Siga-nos",
                  blockName: "Social Media Links",
                  socials: [
                    {
                      socialMedia: {
                        socialLink: {
                          link_type: "custom",
                          newTab: true,
                          url: "https://linkedin.com",
                        },
                        socialIcon: "LuLinkedin",
                      },
                    },
                    {
                      socialMedia: {
                        socialLink: {
                          link_type: "custom",
                          newTab: true,
                          url: "https://youtube.com",
                        },
                        socialIcon: "LuYoutube",
                      },
                    },
                    {
                      socialMedia: {
                        socialLink: {
                          link_type: "custom",
                          newTab: true,
                          url: "https://facebook.com",
                        },
                        socialIcon: "LuFacebook",
                      },
                    },
                    {
                      socialMedia: {
                        socialLink: {
                          link_type: "custom",
                          newTab: true,
                          url: "https://twitter.com",
                        },
                        socialIcon: "LuTwitter",
                      },
                    },
                  ],
                  blockType: "socials",
                },
                {
                  placeholder: "Pesquise Aqui",
                  blockName: "Global Search",
                  blockType: "search",
                },
              ],
            },
            {
              size: "half",
              horizontalAlign: "right",
              verticalAlign: "top",
              blocks: [
                {
                  blockName: "Alertas",
                  blockType: "alertCarousel",
                  alerts: [1, 2],
                },
              ],
            },
          ],
          blockType: "content",
        },
      ],
    },
    {
      type: "highImpact",
      title: "Braga Autêntica",
      description:
        "A Câmara Municipal de Braga orgulha-se da sua contribuição para teste teste teste teste",
      blockName: "Hero",
      blockType: "hero",
      link: {
        link_type: "custom",
        newTab: null,
        url: "#",
        label: "Ver mais...",
      },
      media: 3,
    },
    {
      hasTitle: true,
      title: "Acessos Úteis",
      darkerBackground: null,
      spacing: "large",
      blockName: "Secção Acessos Úteis",
      blockType: "section",
      blocks: [
        {
          iconPosition: "right",
          blockName: "Links",
          links: [
            {
              link: {
                link_type: "reference",
                newTab: null,
                reference: {
                  relationTo: "pages",
                  value: 1,
                },
                url: null,
                label: "Operações de Reabilitação Urbana",
              },
            },
            {
              link: {
                link_type: "reference",
                newTab: null,

                reference: {
                  relationTo: "pages",
                  value: 1,
                },
                url: null,
                label: "Operações de Reabilitação Urbana",
              },
            },
            {
              link: {
                link_type: "reference",
                newTab: null,
                reference: {
                  relationTo: "pages",
                  value: 1,
                },
                url: null,
                label: "Centro de Recolha de Bens Alimentares",
              },
            },
            {
              link: {
                link_type: "reference",
                newTab: null,
                reference: {
                  relationTo: "pages",
                  value: 1,
                },
                url: null,
                label: "Centro de Recolha de Bens Alimentares",
              },
            },
            {
              link: {
                link_type: "reference",
                newTab: null,
                reference: {
                  relationTo: "pages",
                  value: 1,
                },
                url: null,
                label: "Animais para adopção",
              },
            },
            {
              link: {
                link_type: "reference",
                newTab: null,
                reference: {
                  relationTo: "pages",
                  value: 1,
                },
                url: null,
                label: "Animais para adopção",
              },
            },
          ],
          blockType: "linkGrid",
        },
      ],
    },
    {
      hasTitle: true,
      title: "Notícias",
      darkerBackground: null,
      spacing: "normal",
      blockName: "Noticias",
      blockType: "section",
      blocks: [
        {
          blockName: "Cards",
          blockType: "cardGrid",
          cardGridFields: {
            populateFrom: "news",
            useWithContainer: null,
            showIcon: true,
            cards: [],
            newsCards: [
              {
                card: 2,
              },
              {
                card: 1,
              },
              {
                card: 3,
              },
            ],
          },
        },
      ],
    },
    {
      hasTitle: true,
      title: "Serviços Municipais",
      darkerBackground: null,
      spacing: "large",
      blockName: "Secção Serviços Municipais",
      blockType: "section",
      blocks: [
        {
          iconPosition: "left",
          blockName: "Links",
          links: [
            {
              link: {
                link_type: "reference",
                newTab: null,
                reference: {
                  relationTo: "pages",
                  value: 1,
                },
                url: null,
                label: "Regulamentos",
              },
            },
            {
              link: {
                link_type: "reference",
                newTab: null,

                reference: {
                  relationTo: "pages",
                  value: 1,
                },
                url: null,
                label: "Regulamentos",
              },
            },
            {
              link: {
                link_type: "reference",
                newTab: null,
                reference: {
                  relationTo: "pages",
                  value: 1,
                },
                url: null,
                label: "Taxas Municipais",
              },
            },
            {
              link: {
                link_type: "reference",
                newTab: null,
                reference: {
                  relationTo: "pages",
                  value: 1,
                },
                url: null,
                label: "Taxas Municipais",
              },
            },
            {
              link: {
                link_type: "reference",
                newTab: null,
                reference: {
                  relationTo: "pages",
                  value: 1,
                },
                url: null,
                label: "Taxas Municipais",
              },
            },
            {
              link: {
                link_type: "reference",
                newTab: null,
                reference: {
                  relationTo: "pages",
                  value: 1,
                },
                url: null,
                label: "Taxas Municipais",
              },
            },
          ],
          blockType: "linkGrid",
        },
      ],
    },
  ],
}
