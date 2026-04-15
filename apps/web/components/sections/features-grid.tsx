"use client"

import { motion } from "motion/react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import { BrandCrosses } from "@/components/ui/brand-crosses"

export function FeaturesGrid() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section id="science" className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <BrandCrosses section="general" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20" key={`fg-header-${locale}`}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-h2 text-white"
          >
            {locale === "it" ? "Vantaggi competitivi" : "Competitive advantages"}
          </motion.h2>
        </div>

        {/* 3 cards - Outline style from mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.solution.usps.map((usp, idx) => (
            <motion.div
              key={`${idx}-${locale}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="outline-card rounded-2xl p-8 flex flex-col gap-6"
            >
              <h3 className="type-h3 text-white underline decoration-white/30 underline-offset-8">
                {usp.title}
              </h3>
              <p className="type-body text-white/80">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
