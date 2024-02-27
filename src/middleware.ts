import { NextRequest, NextResponse } from "next/server"
import createIntlMiddleware from "next-intl/middleware"

import { i18n } from "./config"

const intlMiddleware = createIntlMiddleware({
  locales: i18n.locales,
  localePrefix: i18n.localePrefix,
  defaultLocale: i18n.defaultLocale,
})

export default async function (req: NextRequest) {
  let hostname = req.headers
    .get("host")!
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000"}`)

  const searchParams = req.nextUrl.searchParams.toString()

  let [, locale, ...segments] = req.nextUrl.pathname.split("/")

  const path = `${segments.join("/")}${searchParams.length > 0 ? `?${searchParams}` : ""}`

  if (hostname == `agenda.${process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000"}`) {
    const newUrl = `${locale}/agenda/${path === "/" ? "" : path}`
    req.nextUrl.pathname = newUrl
  } else {
    if (path.startsWith("agenda")) {
      const url = new URL(
        `/${locale}${path.replace("agenda", "")}`,
        `${process.env.NEXT_PUBLIC_ROOT_DOMAIN ? "https" : "http"}://agenda.${process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000"}`,
      )
      return NextResponse.redirect(url)
    }
    const newUrl = `/${locale}/${path === "/" ? "" : path}`
    req.nextUrl.pathname = newUrl
  }
  const response = intlMiddleware(req)

  return response
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt|en|es)/:path*", "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
}
