"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import Image from "next/image"
import { cn } from "@workspace/ui/lib/utils"
import { BrandCrosses } from "@/components/ui/brand-crosses"

interface MemberCardProps {
  member: {
    name: string
    headline: string
    description: string
    image: string
    linkedin: string
  }
  delay: number
  locale: string
}

function MemberCard({ member, delay, locale }: MemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const bioId = `member-bio-${member.name.toLowerCase().replace(/\s+/g, "-")}`

  const headline = member.headline
  const remainder = member.description
  const hasMore = remainder.length > 0

  const toggle = () => {
    if (hasMore) setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={cn(
        "white-card rounded-3xl p-8 flex flex-col items-center text-center group transition-all duration-300",
        hasMore && "cursor-pointer",
        isExpanded ? "h-full" : "h-fit self-start"
      )}
      onClick={toggle}
    >
      {/* Avatar circle - more opinionated style */}
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center mb-8 shrink-0 transition-all duration-500 ring-1 ring-brand-purple/10 group-hover:ring-4 group-hover:ring-brand-violet/30 group-hover:scale-105 overflow-hidden bg-muted"
      >
        <Image
          src={member.image}
          alt={member.name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col items-center">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="hover:underline decoration-brand-violet/40 underline-offset-4"
        >
          <h3 className="type-h3 text-brand-purple leading-[1.0] mb-2 px-2">
            {member.name.split(' ')[0]}<br />
            {member.name.split(' ').slice(1).join(' ')}
          </h3>
        </a>
        <p className="text-sm font-body text-brand-purple/60 mb-6 px-2 leading-snug">
          {headline}
        </p>

        <AnimatePresence initial={false}>
          {isExpanded && hasMore && (
            <motion.div
              id={bioId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden w-full mb-6"
            >
              <p className="text-sm font-body font-medium leading-relaxed text-brand-purple/70 text-left border-t border-brand-purple/10 pt-6 mt-2">
                {remainder}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            toggle()
          }}
          aria-expanded={isExpanded}
          aria-controls={bioId}
          className="mt-auto flex items-center gap-2 text-brand-violet group-hover:text-brand-purple transition-all duration-300 type-label group-hover:translate-y-[-4px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral rounded"
        >
          {locale === "en"
            ? isExpanded ? "Less" : "Bio"
            : isExpanded ? "Meno" : "Bio"}
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.div>
        </button>
      )}
    </motion.div>
  )
}

export function TeamSection() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section id="team" className="relative py-16 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <BrandCrosses section="general" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-24" key={`team-header-${locale}`}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-white/60 mb-4"
          >
            {copy.team.title}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="type-h2 text-white max-w-4xl"
          >
            {copy.team.subtitle}
          </motion.h2>
        </div>

        {/* 4 cards - Centered grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.team.members.map((member, idx) => (
            <MemberCard
              key={`${idx}-${locale}`}
              member={member}
              delay={idx * 0.1}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
