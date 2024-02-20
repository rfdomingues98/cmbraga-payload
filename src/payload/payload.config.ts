import path from "path"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { payloadCloud } from "@payloadcms/plugin-cloud"
import nestedDocs from "@payloadcms/plugin-nested-docs"
import redirects from "@payloadcms/plugin-redirects"
import seo from "@payloadcms/plugin-seo"
import type { GenerateTitle } from "@payloadcms/plugin-seo/types"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import dotenv from "dotenv"
import { buildConfig } from "payload/config"

import { Alerts } from "./collections/Alerts"
import { AlertTypes } from "./collections/AlertTypes"
import Categories from "./collections/Categories"
import { Media } from "./collections/Media"
import { Menus } from "./collections/Menus"
import { News } from "./collections/News"
import { Pages } from "./collections/Pages"
import { Posts } from "./collections/Posts"
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
    livePreview: {
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
    },
    css: path.resolve(__dirname, "graphics/styles.scss"),
    user: Users.slug,
    bundler: webpackBundler(),
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
    webpack: (config) => ({
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
    }),
  },
  editor: lexicalEditor({}),
  localization: {
    locales: [
      { label: "Português", code: "pt" },
      { label: "English", code: "en" },
      { label: "Español", code: "es" },
    ],
    defaultLocale: "pt",
    fallback: true,
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Pages, Media, Categories, Users, Menus, Posts, News, AlertTypes, Alerts],
  globals: [Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ""].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ""].filter(Boolean),
  endpoints: [],
  plugins: [
    redirects({
      collections: ["pages"],
    }),
    nestedDocs({
      collections: [],
    }),
    seo({
      collections: ["pages"],
      generateTitle,
      uploadsCollection: "media",
    }),
    payloadCloud(),
  ],
})
