import type { Page } from "../payload-types";

export const home: Omit<Page, "id" | "createdAt" | "updatedAt"> = {
  title: "Home",
  slug: "home",
  _status: "published",
  layout: [
    {
      blockType: "cta",
      blockName: "CTA",
      richText: [
        {
          children: [
            {
              text: "This is a call to action",
            },
          ],
          type: "h4",
        },
        {
          children: [
            {
              text: "This is a custom layout building block ",
            },
            {
              type: "link",
              linkType: "custom",
              url: "/admin",
              children: [
                {
                  text: "configured in the admin dashboard",
                },
              ],
            },
            {
              text: ".",
            },
          ],
        },
      ],
      links: null,
    },
  ],
};
