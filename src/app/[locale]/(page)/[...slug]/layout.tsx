import React from "react"

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactElement
  params: { locale: string }
}) {
  return children
}
