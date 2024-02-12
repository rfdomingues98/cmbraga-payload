import fs from "fs"
import path from "path"
import { Payload } from "payload"

import { bragaDark } from "./braga-dark"
import { bragaLight } from "./braga-light"
import { footer, header } from "./globals"
import { home } from "./home"
import { agenda, apoioAoCidadao, atualidade, cidade, municipio } from "./menus"

const collections = ["pages", "menus"]
const globals = ["header", "footer"]

export const seedData = async (payload: Payload): Promise<void> => {
  payload.logger.info("Seeding database...")

  payload.logger.info("- Clearing media...")
  const mediaDir = path.resolve(__dirname, "../../media")
  if (fs.existsSync(mediaDir)) {
    fs.rmdirSync(mediaDir, { recursive: true })
  }

  payload.logger.info("- Clearing collections and globals...")
  await Promise.all([
    ...collections.map(async (collection) =>
      payload.delete({ collection: collection as "media", where: {} }),
    ),
  ])

  payload.logger.info("- Seeding users...")

  await Promise.all(
    ["rdomingues@primeit.pt", "mvalente@primeit.pt"].map(async (email) => {
      await payload.delete({
        collection: "users",
        where: { email: { equals: email } },
      })
    }),
  )
  await Promise.all(
    [
      {
        email: "rdomingues@primeit.pt",
        name: "Ricardo Domingues",
        password: "Password123",
        roles: ["admin"] as ("admin" | "editor")[],
      },
      {
        email: "mvalente@primeit.pt",
        name: "Matilde Valente",
        password: "Password123",
        roles: ["admin"] as ("admin" | "editor")[],
      },
    ].map(async (user) => {
      await payload.create({
        collection: "users",
        data: user,
      })
    }),
  )

  payload.logger.info(`— Seeding media...`)

  const [bragaLightLogoDoc, bragaDarkLogoDoc] = await Promise.all([
    await payload.create({
      collection: "media",
      filePath: path.resolve(__dirname, "braga-light.png"),
      data: bragaLight,
    }),
    await payload.create({
      collection: "media",
      filePath: path.resolve(__dirname, "braga-dark.png"),
      data: bragaDark,
    }),
  ])

  let bragaLightLogoId = bragaLightLogoDoc.id
  let bragaDarkLogoId = bragaDarkLogoDoc.id

  payload.logger.info("- Seeding collections and globals...")

  payload.logger.info("-- Seeding homepage...")
  const homepage = await payload.create({ collection: "pages", data: home })
  payload.logger.info(`--+ Homepage Id: ${homepage.id} +--`)

  payload.logger.info("-- Seeding menus...")
  const cidadeData = JSON.stringify(cidade, null, 2).replace(/-100/g, `${homepage.id}`)
  const municipioData = JSON.stringify(municipio, null, 2).replace(/-100/g, `${homepage.id}`)
  const atualidadeData = JSON.stringify(atualidade, null, 2).replace(/-100/g, `${homepage.id}`)
  const agendaData = JSON.stringify(agenda, null, 2).replace(/-100/g, `${homepage.id}`)
  const apoioAoCidadaoData = JSON.stringify(apoioAoCidadao, null, 2).replace(
    /-100/g,
    `${homepage.id}`,
  )
  await Promise.all([
    await payload.create({
      collection: "menus",
      data: JSON.parse(cidadeData),
    }),
    await payload.create({
      collection: "menus",
      data: JSON.parse(municipioData),
    }),
    await payload.create({
      collection: "menus",
      data: JSON.parse(atualidadeData),
    }),
    await payload.create({
      collection: "menus",
      data: JSON.parse(agendaData),
    }),
    await payload.create({
      collection: "menus",
      data: JSON.parse(apoioAoCidadaoData),
    }),
  ])

  payload.logger.info("-- Seeding header...")
  const headerData = JSON.stringify(header, null, 2)
    .replace(/logoLight: 1/g, `logoLight: ${bragaLightLogoId}`)
    .replace(/logoDark: 2/g, `logoDark: ${bragaDarkLogoId}`)
  await payload.updateGlobal({ slug: "header", data: JSON.parse(headerData) })

  payload.logger.info("-- Seeding footer...")
  await payload.updateGlobal({ slug: "footer", data: footer })
}
