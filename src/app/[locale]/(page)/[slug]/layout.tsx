import React from "react"
import { Globals } from "@/components/globals"

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return <Globals>{children}</Globals>
}
