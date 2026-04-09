"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { cn } from "@workspace/ui/lib/utils"

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  animateBy?: "words" | "letters"
}

export function BlurText({ text, className, delay = 0.2, animateBy = "words" }: BlurTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const elements = animateBy === "words" ? text.split(" ") : text.split("")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delay },
    },
  }

  const defaultAnimations = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: 50,
    },
    visible: {
      filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
      opacity: [0, 0.5, 1],
      y: [50, -5, 0],
      transition: {
        duration: 0.7, // roughly 0.35s per step
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      className={cn("flex flex-wrap", className)}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={defaultAnimations}
          className={cn("inline-block", animateBy === "words" && "mr-3 md:mr-[0.4em]")}
        >
          {element === " " ? "\u00A0" : element}
        </motion.span>
      ))}
    </motion.div>
  )
}
