import createMiddleware from "next-intl/middleware"

import { i18n } from "./config"

export default createMiddleware({
  locales: i18n.locales,
  localePrefix: i18n.localePrefix,
  defaultLocale: i18n.defaultLocale,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt|en|es)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
}
