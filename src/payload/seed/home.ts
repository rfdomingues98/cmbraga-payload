import type { Page } from "../payload-types"

export const home: Omit<Page, "id" | "createdAt" | "updatedAt"> = {
  title: "Home",
  slug: "home",
  _status: "published",
  layout: [
    {
      darkerBackground: null,
      blockName: "Header",
      columns: [
        {
          size: "half",
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
              ],
              blockType: "socials",
            },
          ],
        },
        {
          size: "half",
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
    {
      type: "highImpact",
      richText: [
        {
          type: "h2",
          children: [
            {
              text: "Braga autêntica",
            },
          ],
        },
        {
          children: [
            {
              text: "A Câmara Municipal de Braga orgulha-se da sua contribuição para",
            },
          ],
        },
      ],
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
  ],
}
