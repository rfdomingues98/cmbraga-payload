import path from "path"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { payloadCloud } from "@payloadcms/plugin-cloud"
import formBuilder from "@payloadcms/plugin-form-builder"
import nestedDocs from "@payloadcms/plugin-nested-docs"
import redirects from "@payloadcms/plugin-redirects"
import seo from "@payloadcms/plugin-seo"
import type { GenerateTitle } from "@payloadcms/plugin-seo/types"
import { slateEditor } from "@payloadcms/richtext-slate"
import dotenv from "dotenv"
import { buildConfig } from "payload/config"

import { Alerts } from "./collections/Alerts"
import { AlertTypes } from "./collections/AlertTypes"
import Categories from "./collections/Categories"
import { Media } from "./collections/Media"
import { Menus } from "./collections/Menus"
import { News } from "./collections/News"
import { Pages } from "./collections/Pages"
import Users from "./collections/Users"
import { Footer } from "./globals/Footer"
import { Header } from "./globals/Header"
import { Icon } from "./graphics/Icon"
import { Logo } from "./graphics/Logo"

const generateTitle: GenerateTitle = () => {
  return "My Website"
}

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
})

export default buildConfig({
  admin: {
    /* livePreview: {
      url: process.env.NEXT_PUBLIC_ADMIN_LIVE_PREVIEW_URL,
      collections: ["pages", "news"],
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 375,
          height: 667,
        },
      ],
    }, */
    bundler: webpackBundler(),
    components: {
      graphics: {
        Icon,
        Logo,
      },
    },
    css: path.resolve(__dirname, "graphics/styles.scss"),
    user: Users.slug,
    webpack: (config) => {
      const newConfig = {
        ...config,
        resolve: {
          ...config.resolve,
          alias: {
            ...config.resolve.alias,
            dotenv: path.resolve(__dirname, "./dotenv.js"),
            [path.resolve(__dirname, "./endpoints/seed")]: path.resolve(
              __dirname,
              "./emptyModuleMock.js",
            ),
          },
        },
      }
      /* console.log({ newConfig: JSON.stringify(newConfig, null, 2) }) */

      return newConfig
    },
  },
  collections: [Pages, Media, Categories, Users, Menus, News, AlertTypes, Alerts],
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ""].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ""].filter(Boolean),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  editor: slateEditor({}),
  endpoints: [],
  globals: [Header, Footer],
  localization: {
    defaultLocale: "pt",
    fallback: true,
    locales: [
      { code: "pt", label: "Português" },
      { code: "en", label: "English" },
      { code: "es", label: "Español" },
    ],
  },
  plugins: [
    redirects({
      collections: ["pages"],
    }),
    nestedDocs({
      collections: ["pages"],
      generateLabel: (_, doc) => doc.title as string,
      generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ""),
    }),
    seo({
      collections: ["pages", "news"],
      generateTitle,
      uploadsCollection: "media",
    }),
    formBuilder({}),
    payloadCloud(),
  ],
  rateLimit: {
    max: 4000,
    trustProxy: true,
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
})
