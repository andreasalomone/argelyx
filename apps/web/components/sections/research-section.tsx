"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ChevronDown, ExternalLink } from "lucide-react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import { PUBLICATIONS } from "@/lib/research"
import { BrandCrosses } from "@/components/ui/brand-crosses"

export function ResearchSection() {
  const { locale } = useLocale()
  const copy = COPY[locale]
  const [isOpen, setIsOpen] = useState(false)
  const listId = "research-publications-list"

  return (
    <section
      id="research"
      className="relative py-16 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <BrandCrosses section="general" />
      <div className="max-w-5xl mx-auto">
        <div
          className="flex flex-col items-center text-center mb-10 md:mb-14"
          key={`research-header-${locale}`}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-white/60 mb-4"
          >
            {copy.research.title}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="type-h2 text-white max-w-3xl"
          >
            {copy.research.subtitle}
          </motion.h2>
        </div>

        <div className="flex justify-center mb-6">
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls={listId}
            className="btn-outline"
          >
            {isOpen ? copy.research.collapseLabel : copy.research.expandLabel}
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex"
            >
              <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
            </motion.span>
          </button>
        </div>

        {/* Always render the list so DOIs land in server HTML for crawlers + AI. */}
        {/* Visibility is purely visual; semantics stay accurate via inert. */}
        <motion.div
          id={listId}
          inert={!isOpen ? true : undefined}
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="overflow-hidden"
        >
          <ol className="white-card rounded-3xl px-6 md:px-10 py-8 md:py-10 space-y-5 list-decimal list-inside marker:text-brand-violet marker:font-bold">
            {PUBLICATIONS.map((pub) => (
              <li
                key={pub.doi}
                className="text-brand-purple/80 leading-snug pl-1"
              >
                <span className="font-body font-bold text-brand-purple">
                  {pub.journal}
                </span>{" "}
                <span className="text-brand-purple/60">({pub.year})</span>
                <span className="block mt-1 italic text-brand-purple/70">
                  {pub.title}
                </span>
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm font-body font-bold text-brand-violet hover:text-brand-coral transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral rounded"
                >
                  doi.org/{pub.doi}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
