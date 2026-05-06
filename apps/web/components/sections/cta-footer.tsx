"use client"

import { motion } from "motion/react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import { BrandCrosses } from "@/components/ui/brand-crosses"
import { BrandLogo } from "@/components/ui/brand-logo"

const CURRENT_YEAR = new Date().getFullYear()

export function CtaFooter() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section className="relative pt-20 md:pt-40 pb-12 md:pb-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative Crosses from mockup */}
      <BrandCrosses section="footer" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="type-h2 text-white"
        >
          {locale === "it" ? "Accelera la tua ricerca" : "Accelerate your research"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 type-lead text-white/80 max-w-2xl"
        >
          {locale === "it"
            ? "Unisciti ai laboratori più avanzati in Europa e standardizza la tua coltura 3D oggi stesso."
            : "Join the most advanced labs in Europe and standardize your 3D culture today."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-5"
        >
          <button
            onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            {copy.hero.cta}
          </button>
          <a href="mailto:info@algelyx.com" className="btn-outline">
            {locale === "it" ? "Contattaci" : "Contact Us"}
          </a>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 mt-20 md:mt-40 pt-10 border-t border-white/10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <BrandLogo
            variant="mono-neg"
            kind="horizontal"
            className="h-8 w-auto opacity-60"
          />
          <div className="flex flex-col gap-1">
            <p className="text-white/40 font-body text-[11px] font-bold uppercase tracking-widest">
              © {CURRENT_YEAR} Algelyx. {copy.footer.rights}
            </p>
            <p className="text-white/25 font-body text-[10px] uppercase tracking-wider">
              {copy.footer.address}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8 text-white/40 font-body text-[11px] font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="mailto:info@algelyx.com" className="hover:text-white transition-colors lowercase">info@algelyx.com</a>
        </div>
      </div>
    </section>
  )
}


