"use client"

import { motion } from "motion/react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import Image from "next/image"
import { BrandCrosses } from "@/components/ui/brand-crosses"

interface MemberCardProps {
  member: {
    name: string
    description: string
    image: string
    linkedin: string
  }
  delay: number
}

function MemberCard({ member, delay }: MemberCardProps) {
  const [first, ...rest] = member.name.split(" ")
  const last = rest.join(" ")

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="white-card rounded-3xl p-8 flex flex-col items-center text-center group transition-all duration-300"
    >
      <div className="w-24 h-24 rounded-full flex items-center justify-center mb-8 shrink-0 transition-all duration-500 ring-1 ring-brand-purple/10 group-hover:ring-4 group-hover:ring-brand-violet/30 group-hover:scale-105 overflow-hidden bg-muted">
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
          className="hover:underline decoration-brand-violet/40 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral rounded"
        >
          <h3 className="type-h3 text-brand-purple leading-[1.0] mb-5 px-2">
            {first}
            {last && (
              <>
                <br />
                {last}
              </>
            )}
          </h3>
        </a>
        <p className="text-sm font-body font-medium leading-relaxed text-brand-purple/75 px-2">
          {member.description}
        </p>
      </div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {copy.team.members.map((member, idx) => (
            <MemberCard
              key={`${idx}-${locale}`}
              member={member}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
