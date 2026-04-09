"use client"

import { Zap, Leaf, Shield, type LucideIcon } from "lucide-react"
import { motion } from "motion/react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"

export function FeaturesGrid() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  // We assign semantic icons to the 3 USPs existing in our generic COPY strategy.
  const icons: LucideIcon[] = [Zap, Leaf, Shield]

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-black relative z-10" id="science">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16" key={`gridHeader-${locale}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-full px-3.5 py-1 mb-6"
          >
            <span className="text-white text-xs font-medium font-body uppercase tracking-wider">{copy.solution.uspLabel}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          >
            {/* The title comes generic or we can just say "Competitive advantages" in a stylized way */}
            {copy.solution.uspLabel}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.solution.usps.map((feature, index) => {
            const Icon = icons[index % icons.length] as React.ElementType
            return (
              <motion.div
                key={`${index}-${locale}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="liquid-glass rounded-2xl p-6 flex flex-col items-start text-left"
              >
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-heading italic text-2xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 font-body font-normal text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
