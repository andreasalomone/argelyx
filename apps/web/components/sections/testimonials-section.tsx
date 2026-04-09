"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import { ChevronDown } from "lucide-react"

// Extracted into a subcomponent to cleanly manage individual expand/collapse states
function MemberCard({ member, delay, locale }: { member: any; delay: number; locale: string }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="liquid-glass rounded-3xl p-8 flex flex-col items-center text-center group cursor-pointer transition-colors hover:bg-white/5"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="w-20 h-20 rounded-full bg-white/5 mb-6 flex items-center justify-center liquid-glass-strong border border-white/10 group-hover:bg-white/10 transition-colors">
        <span className="text-2xl font-heading text-white">{member.name.charAt(0)}</span>
      </div>
      
      <div className="mb-4">
        <p className="text-white font-body font-medium text-xl leading-tight">{member.name}</p>
        <p className="text-white/50 font-body font-semibold text-xs mt-1.5 uppercase tracking-wider">{member.role}</p>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden w-full"
          >
            <p className="text-white/90 font-body font-normal text-base md:text-lg leading-relaxed mt-2 pb-4 text-left border-t border-white/10 pt-4">
              {member.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button className="mt-auto pt-2 flex items-center gap-1.5 text-white/40 hover:text-white/80 transition-colors text-xs font-body uppercase tracking-widest font-semibold">
        {locale === "en" ? (isExpanded ? "Less" : "Bio") : (isExpanded ? "Meno" : "Bio")}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </button>
    </motion.div>
  )
}

export function TestimonialsSection() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-black relative z-10" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16" key={`teamHeader-${locale}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-full px-3.5 py-1 mb-6 inline-flex"
          >
            <span className="text-white text-xs font-medium font-body uppercase tracking-wider">{copy.team.title}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]"
          >
            {copy.team.subtitle}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.team.members.map((member, index) => (
            <MemberCard 
              key={`${index}-${locale}`} 
              member={member} 
              delay={index * 0.1 + 0.2} 
              locale={locale} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
