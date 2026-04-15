"use client"

import { motion } from "motion/react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import { BrandCrosses } from "@/components/ui/brand-crosses"

export function StatsSection() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section id="market" className="relative py-12 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <BrandCrosses section="general" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="white-card rounded-[2.5rem] px-8 md:px-20 py-12 md:py-20 text-center"
        >
          {/* Header */}
          <div className="mb-20" key={`stats-header-${locale}`}>
            <h2 className="type-h2 text-[#1e1145] mb-4">
              Performance
            </h2>
            <p className="type-label text-[#1e1145]/60">
              {locale === "it" ? "Dati alla mano" : "The data"}
            </p>
          </div>

          {/* Stats 3-col - large numbers from mockup */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {copy.market.stats.map((stat, idx) => (
              <motion.div
                key={`${idx}-${locale}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-center gap-1"
              >
                <span
                  className="type-h2 text-[#1e1145] leading-none"
                >
                  {stat.value}
                </span>
                <span className="type-h3 text-[#1e1145] mt-4">
                  {stat.label}
                </span>
                <p className="type-body text-[#1e1145]/50 max-w-[200px] mt-2">
                  {stat.sublabel}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
