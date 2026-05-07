"use client"

import { motion } from "motion/react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import { BrandCrosses } from "@/components/ui/brand-crosses"

export function ProblemSection() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section
      id="problem"
      className="relative py-16 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <BrandCrosses section="general" />
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-white/60 mb-4"
          >
            {copy.problem.title}
          </motion.p>

          <motion.h2
            key={`problem-h2-${locale}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-h2 text-white"
          >
            {copy.problem.subtitle}
          </motion.h2>
        </div>

        {/* Vertically-stacked clusters */}
        <div className="space-y-16 md:space-y-24">
          {copy.problem.points.map((point, idx) => (
            <motion.article
              key={`${idx}-${locale}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
            >
              {/* Left rail: index + title */}
              <div className="md:col-span-4">
                <p
                  aria-hidden
                  className="type-label text-brand-coral mb-3 tracking-[0.3em]"
                >
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="type-h3 text-white leading-tight">
                  {point.title}
                </h3>
              </div>

              {/* Right rail: intro + bullets */}
              <div className="md:col-span-8 space-y-6">
                <p className="type-lead text-white/85">
                  {point.description}
                </p>

                {point.bullets && point.bullets.length > 0 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 border-t border-white/15 pt-6">
                    {point.bullets.map((b) => (
                      <li
                        key={b}
                        className="type-body text-white/75 flex gap-2 leading-snug"
                      >
                        <span
                          aria-hidden
                          className="text-brand-coral mt-1 shrink-0"
                        >
                          •
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
