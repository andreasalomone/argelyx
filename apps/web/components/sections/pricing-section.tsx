"use client"

/**
 * @deprecated Unused as of 2026-05-06 (Algelyx rebrand).
 * Delete by 2026-09-01 if still unrouted.
 */

import { motion } from "motion/react"
import { Check } from "lucide-react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import { BrandCrosses } from "@/components/ui/brand-crosses"

export function PricingSection() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section id="pricing" className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <BrandCrosses section="general" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24" key={`pricing-header-${locale}`}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 font-body font-bold text-xs uppercase tracking-[0.2em] mb-4"
          >
            {copy.pricing.title}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading text-4xl md:text-6xl lg:text-7xl max-w-4xl"
          >
            {copy.pricing.subtitle}
          </motion.h2>
        </div>

        {/* Tiers - Outline style from mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.pricing.tiers.map((tier, idx) => (
            <motion.div
              key={`tier-${idx}-${locale}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="outline-card rounded-2xl p-8 flex flex-col"
            >
              <h3 className="section-heading text-xl md:text-2xl mb-1 text-white/95">
                {tier.name}
              </h3>

              <div className="flex items-baseline gap-1 mt-2 mb-6">
                <span
                  className="text-5xl md:text-6xl font-heading font-black text-white"
                >
                  {tier.price}
                </span>
              </div>

              <p className="text-white/70 font-body font-medium text-sm leading-relaxed mb-8 min-h-[3rem]">
                {tier.description}
              </p>

              {/* Features list */}
              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-white mt-1 shrink-0" strokeWidth={3} />
                    <span className="text-white/90 font-body font-medium text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:info@algelyx.com?subject=Inquiry:%20${encodeURIComponent(tier.name)}`}
                className="btn-primary w-full text-[12px] py-4"
              >
                {copy.pricing.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
