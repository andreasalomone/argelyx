"use client"

import { VideoBackground } from "@/components/ui/video-background"
import { motion } from "motion/react"
import Link from "next/link"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"

export function CtaFooter() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-[600px] pt-32 pb-8 px-6" id="pricing">
      <VideoBackground 
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        fadeTop={200}
        fadeBottom={0}
      />
      
      <div className="relative z-10 w-full flex flex-col items-center text-center mt-auto" key={`cta-${locale}`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] tracking-tight max-w-3xl"
        >
          {copy.market.businessModelTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-white/80 font-body font-normal text-lg md:text-xl max-w-xl leading-relaxed"
        >
          {locale === "it" 
            ? "Unisciti ai laboratori più avanzati in Europa e standardizza la tua coltura 3D oggi stesso." 
            : "Join the most advanced labs in Europe and standardize your 3D culture today."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="mailto:info@algelyx.com?subject=Pre-Order%20Inquiry" className="liquid-glass-strong text-white font-body font-medium rounded-full px-6 py-3 hover:bg-white/10 transition-colors">
            {copy.hero.cta}
          </a>
          <a href="mailto:info@algelyx.com" className="bg-white text-black font-body font-medium rounded-full px-6 py-3 hover:bg-white/90 transition-colors">
            Contact Us
          </a>
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 font-body text-xs text-center md:text-left">
          © {new Date().getFullYear()} Algelyx. {copy.footer.rights}
          <br/>
          {copy.footer.address}
        </p>
        <div className="flex items-center gap-6 text-white/40 font-body text-xs">
          <a href="mailto:info@algelyx.com?subject=Privacy%20Policy%20Request" className="hover:text-white transition-colors">Privacy</a>
          <a href="mailto:info@algelyx.com?subject=Terms%20of%20Service%20Request" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </section>
  )
}
