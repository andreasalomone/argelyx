"use client"

import { motion } from "motion/react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import { Check } from "lucide-react"

export function PricingSection() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-black relative z-10" id="pricing">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16" key={`pricing-context-${locale}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-full px-3.5 py-1 mb-6 inline-flex"
          >
            <span className="text-white text-xs font-medium font-body uppercase tracking-wider">{copy.pricing.title}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
          >
            {copy.pricing.subtitle}
          </motion.h2>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {copy.pricing.tiers.map((tier, idx) => (
            <motion.div
              key={`tier-${idx}-${locale}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              className={`rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden transition-transform transform hover:-translate-y-2 ${
                tier.isPopular ? "liquid-glass-strong border border-white/20" : "liquid-glass"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              )}
              
              {tier.isPopular && (
                <div className="bg-white text-black text-[10px] font-bold font-body uppercase tracking-widest px-3 py-1 rounded-full w-max mb-6">
                  {locale === "it" ? "Più Richiesto" : "Most Popular"}
                </div>
              )}

              <h3 className={`text-xl text-white font-heading italic ${!tier.isPopular && "mb-2"}`}>
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl lg:text-5xl font-heading text-white">{tier.price}</span>
              </div>
              
              <p className="text-white/80 font-body font-normal text-base md:text-lg mb-8 leading-relaxed h-16">
                {tier.description}
              </p>

              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-white/90 font-body font-normal text-base leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`mailto:info@algelyx.com?subject=Inquiry:%20${encodeURIComponent(tier.name)}`}
                className={`w-full block text-center font-body font-medium rounded-full py-3.5 transition-colors ${
                  tier.isPopular ? "bg-white text-black hover:bg-white/90" : "bg-white/10 text-white hover:bg-white/20"
                }`}
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
