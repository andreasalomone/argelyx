"use client"

import { motion } from "motion/react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import { BrandCrosses } from "@/components/ui/brand-crosses"
import { BrandLogo } from "@/components/ui/brand-logo"

export function HeroSection() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-32 pb-12 md:pb-20"
      id="home"
    >
      {/* Decorative Crosses from mockup */}
      <BrandCrosses section="hero" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="liquid-glass rounded-full px-8 py-4 border border-white/20 flex items-center justify-center">
            <BrandLogo
              variant="mono-neg"
              kind="horizontal"
              priority
              className="h-6 w-auto md:h-12"
            />
          </div>
        </motion.div>
        
        {/* Main large heading */}
        <motion.h1
          key={`hero-h1-${locale}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="type-hero text-white max-w-[90vw] md:max-w-5xl"
        >
          {copy.hero.tagline}
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          key={`hero-pitch-${locale}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 type-lead text-white/90 max-w-3xl"
        >
          {copy.hero.pitch}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-5"
        >
          <a
            href="#solution"
            className="btn-primary"
          >
            {copy.hero.cta}
          </a>
          <a
            href="mailto:info@algelyx.com"
            className="btn-outline"
          >
            {locale === "it" ? "Contattaci" : "Contact Us"}
          </a>
        </motion.div>
      </div>

    </section>
  )
}
