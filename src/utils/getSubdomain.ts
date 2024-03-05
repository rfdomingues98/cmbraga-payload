import { headers } from "next/headers"

export const getSubdomain = () => {
  const header = headers()
  const host = header
    .get("host")
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000"}`)
  const subdomain = host.split(".").slice(-2).join(".").replace(".localhost:3000", "")
  return subdomain
}
