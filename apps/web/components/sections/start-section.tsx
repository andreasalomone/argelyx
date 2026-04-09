"use client"

import { VideoBackground } from "@/components/ui/video-background"
import { motion } from "motion/react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"

export function StartSection() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden min-h-[600px] py-32" id="problem">
      <VideoBackground 
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        fadeTop={200}
        fadeBottom={200}
      />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <motion.div
          key={`badge-${locale}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="liquid-glass rounded-full px-3.5 py-1 mb-8"
        >
          <span className="text-white text-xs font-medium font-body uppercase tracking-wider">{copy.problem.title}</span>
        </motion.div>

        <motion.h2
          key={`heading-${locale}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white"
        >
          {copy.problem.subtitle}
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {copy.problem.points.map((point, idx) => (
            <motion.div
              key={`${idx}-${locale}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="flex flex-col gap-3"
            >
              <h3 className="text-white font-heading italic text-2xl border-b border-white/10 pb-3">{point.title}</h3>
              <p className="text-white/80 font-body font-normal text-base md:text-lg leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
