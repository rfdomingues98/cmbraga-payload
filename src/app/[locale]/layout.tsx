import React from "react"
import { Metadata } from "next"
import { Poppins } from "next/font/google"
import localFont from "next/font/local"
import { mergeOpenGraph } from "@/app/_utilities/mergeOpenGraph"
import { Globals } from "@/components/globals"
import { Providers } from "@/components/providers"
import { cn } from "@/lib/utils"

import "@/styles/globals.css"

const fontSans = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icona" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background font-sans text-foreground antialiased dark:bg-background dark:text-foreground",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <Providers>
          <Globals>{children}</Globals>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || "https://payloadcms.com"),
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
  openGraph: mergeOpenGraph(),
}
