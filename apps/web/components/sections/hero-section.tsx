"use client"

import { BlurText } from "@/components/ui/blur-text"
import { VideoBackground } from "@/components/ui/video-background"
import { motion } from "motion/react"
import { ArrowUpRight, Play } from "lucide-react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import { useMemo } from "react"

export function HeroSection() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  // Key the component uniquely by locale so BlurText re-triggers its animation boundary on language switch, ensuring a bug-free visual render.
  const blurKey = useMemo(() => `blur-${locale}`, [locale])

  return (
    <section className="relative overflow-visible w-full min-h-screen flex flex-col" id="home">
      <VideoBackground 
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        poster="/images/hero_bg.jpeg"
        fadeTop={0}
        fadeBottom={300}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/40 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 px-6 pt-20 pb-10">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center pr-4 gap-3 mb-8"
        >
          <div className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
            New
          </div>
          <span className="text-white text-xs font-medium font-body truncate max-w-[250px] md:max-w-none">
            {copy.hero.cta}
          </span>
        </motion.div>

        {/* Heading */}
        <div key={blurKey}>
          <BlurText 
            text={copy.hero.tagline}
            delay={0.1}
            className="text-5xl md:text-6xl lg:text-[5rem] font-heading italic text-white leading-[0.9] max-w-4xl tracking-tight justify-center text-center mx-auto"
          />
        </div>

        {/* Subtext */}
        <motion.p
          key={`pitch-${locale}`}
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 text-base md:text-xl text-white/90 font-body font-normal leading-relaxed max-w-2xl text-center"
        >
          {copy.hero.pitch}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="liquid-glass-strong text-white font-body rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            {copy.hero.cta} <ArrowUpRight className="w-4 h-4 text-white/70" />
          </button>
          <a href="mailto:info@algelyx.com" className="text-white font-body group flex items-center gap-2 px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors">
            {locale === "it" ? "Contattaci" : "Contact Us"} <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Partners Bar Placeholder */}
        <div className="mt-auto pb-12 pt-16 flex flex-col items-center w-full">
          <div className="liquid-glass rounded-full px-4 py-1.5 mb-8">
            <span className="text-white/70 text-xs font-body uppercase tracking-wider">
              {locale === "it" ? "Scelto dai team di ricerca di" : "Trusted by leading research teams at"}
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <span className="text-2xl md:text-3xl font-heading italic text-white">Novartis</span>
            <span className="text-2xl md:text-3xl font-heading italic text-white">Pfizer</span>
            <span className="text-2xl md:text-3xl font-heading italic text-white">Sanofi</span>
            <span className="text-2xl md:text-3xl font-heading italic text-white">Moderna</span>
            <span className="text-2xl md:text-3xl font-heading italic text-white">Roche</span>
          </div>
        </div>
      </div>
    </section>
  )
}
