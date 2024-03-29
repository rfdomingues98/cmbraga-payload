import type { Block } from "payload/types"

import richText from "../../fields/richText"

export const Archive: Block = {
  slug: "archive",
  imageURL: "https://cdn-icons-png.flaticon.com/512/1784/1784897.png",
  imageAltText: "Archive Block",
  labels: {
    singular: "Archive",
    plural: "Archives",
  },
  fields: [
    richText({
      name: "introContent",
      label: "Intro Content",
    }),
    {
      name: "populateBy",
      type: "select",
      defaultValue: "collection",
      options: [
        {
          label: "Collection",
          value: "collection",
        },
        {
          label: "Individual Selection",
          value: "selection",
        },
      ],
    },
    {
      type: "select",
      name: "relationTo",
      label: "Collections To Show",
      defaultValue: "news",
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
      options: [
        {
          label: "News",
          value: "news",
        },
      ],
    },
    {
      type: "relationship",
      name: "categories",
      label: "Categories To Show",
      relationTo: "categories",
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
    },
    {
      type: "number",
      name: "limit",
      label: "Limit",
      defaultValue: 10,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "collection",
        step: 1,
      },
    },
    {
      type: "relationship",
      name: "selectedDocs",
      label: "Selection",
      relationTo: ["news"],
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "selection",
      },
    },
    {
      type: "relationship",
      name: "populatedDocs",
      label: "Populated Docs",
      relationTo: ["news"],
      hasMany: true,
      admin: {
        disabled: true,
        description: "This field is auto-populated after-read",
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
    },
    {
      type: "number",
      name: "populatedDocsTotal",
      label: "Populated Docs Total",
      admin: {
        step: 1,
        disabled: true,
        description: "This field is auto-populated after-read",
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
    },
  ],
}
