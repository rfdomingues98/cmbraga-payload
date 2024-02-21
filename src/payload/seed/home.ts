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
  ],
}
