"use client"

import { VideoBackground } from "@/components/ui/video-background"
import { motion } from "motion/react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"

export function StatsSection() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section className="relative w-full flex items-center justify-center py-32 px-6" id="market">
      <VideoBackground 
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        saturate={0}
        fadeTop={200}
        fadeBottom={200}
      />
      
      <motion.div
        key={`stats-card-${locale}`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-5xl liquid-glass rounded-3xl p-12 md:p-16 flex flex-col items-center"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading italic text-white">{copy.market.title}</h2>
          <p className="text-white/60 font-body text-sm mt-2">{copy.market.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center w-full">
          {copy.market.stats.map((stat, idx) => (
            <div className="flex flex-col gap-2" key={`${idx}-${locale}`}>
              <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white leading-none">{stat.value}</span>
              <span className="text-white/80 text-base md:text-lg font-body font-normal">{stat.label}</span>
              <span className="text-white/50 text-sm font-body mt-1 uppercase tracking-wider">{stat.sublabel}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
