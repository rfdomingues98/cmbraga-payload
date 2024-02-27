"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const MouseGradient = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  const style = {
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    filter: "blur(20px)",
    background: "radial-gradient(circle at 50% 50%, #00A8E378 0%, #7EC9FF00 70%)",
    opacity: 0.6,
    zIndex: 2,
  }

  const variants = {
    default: {
      x: mousePosition.x - 200,
      y: mousePosition.y - 200,
    },
  }

  return (
    <motion.div
      className={cn(`fixed left-0 top-0`)}
      style={style}
      variants={variants}
      animate="default"
      transition={{
        x: {
          duration: 0.05,
          ease: "linear",
          repeat: 0,
          type: "spring",
          stiffness: 80,
        },
        y: {
          duration: 0.05,
          ease: "linear",
          repeat: 0,
          type: "spring",
          stiffness: 80,
        },
        default: {
          duration: 0.5,
          repeat: Infinity,
        },
      }}
    ></motion.div>
  )
}
