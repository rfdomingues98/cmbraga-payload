import React from "react"
import { cn } from "@/lib/utils"

import serialize from "./serialize"

const RichText: React.FC<{ className?: string; content: any }> = ({ className, content }) => {
  if (!content) {
    return null
  }

  return <div className={cn("first:mt-0 last:mb-0", className)}>{serialize(content)}</div>
}

export default RichText
