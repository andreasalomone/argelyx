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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-white/60 mb-4"
          >
            {copy.problem.title}
          </motion.p>

          <motion.h2
            key={`problem-h2-${locale}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-h2 text-white mb-12 md:mb-20"
          >
            {copy.problem.subtitle}
          </motion.h2>
        </div>

        {/* 3-column points: each cluster is a self-contained block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-left">
          {copy.problem.points.map((point, idx) => (
            <motion.div
              key={`${idx}-${locale}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <h3 className="type-h3 text-white opacity-95">
                {point.title}
              </h3>
              <p className="type-body text-white/85">
                {point.description}
              </p>
              {point.bullets && point.bullets.length > 0 && (
                <ul className="space-y-2 mt-1 border-t border-white/15 pt-4">
                  {point.bullets.map((b) => (
                    <li
                      key={b}
                      className="type-body text-white/75 flex gap-2 leading-snug"
                    >
                      <span aria-hidden className="text-brand-coral mt-0.5 shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
