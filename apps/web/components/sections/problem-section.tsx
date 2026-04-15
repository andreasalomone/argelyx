"use client"

import { motion } from "motion/react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import { BrandCrosses } from "@/components/ui/brand-crosses"

export function ProblemSection() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section id="problem" className="relative py-16 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <BrandCrosses section="general" />
      <div className="max-w-6xl mx-auto text-center">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="type-label text-white/60 mb-4"
        >
          {copy.problem.title}
        </motion.p>
        
        {/* Main large heading matching mockup */}
        <motion.h2
          key={`problem-h2-${locale}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="type-h2 text-white mb-12 md:mb-24"
        >
          {copy.problem.subtitle}
        </motion.h2>

        {/* 3-col points directly on the background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-left">
          {copy.problem.points.map((point, idx) => (
            <motion.div
              key={`${idx}-${locale}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <h3 className="type-h3 text-white opacity-95">
                {point.title}
              </h3>
              <p className="type-body text-white/80">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
