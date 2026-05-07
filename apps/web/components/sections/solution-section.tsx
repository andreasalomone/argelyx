"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import { BrandCrosses } from "@/components/ui/brand-crosses"

export function SolutionSection() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section id="solution" className="relative py-16 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <BrandCrosses section="general" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-24" key={`sol-header-${locale}`}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-white/60 mb-4"
          >
            {copy.solution.title}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="type-h2 text-white"
          >
            {copy.solution.productName}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 type-lead text-white/85 max-w-4xl"
          >
            {copy.solution.productDescription}
          </motion.p>
        </div>

        {/* Properties + Applications: two-column bullet rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-20 md:mb-32" key={`sol-bullets-${locale}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="type-h3 text-white/95">
              {copy.solution.properties.title}
            </h3>
            <ul className="space-y-2">
              {copy.solution.properties.items.map((item) => (
                <li key={item} className="type-body text-white/80 flex gap-2 leading-snug">
                  <span aria-hidden className="text-brand-coral mt-0.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="type-h3 text-white/95">
              {copy.solution.applications.title}
            </h3>
            <ul className="space-y-2">
              {copy.solution.applications.items.map((item) => (
                <li key={item} className="type-body text-white/80 flex gap-2 leading-snug">
                  <span aria-hidden className="text-brand-coral mt-0.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Row 1: text left, image right */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32" key={`sol-row1-${locale}`}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-[0.8] space-y-6"
          >
            <h3 className="type-h3 text-white/95">
              {copy.solution.productLabel}
            </h3>
            <p className="type-lead text-white/75">
              {copy.solution.kitDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[1.4]">
              <Image
                src="/solution/cell-culture-imaging.jpg"
                alt={locale === "it" ? "Imaging di coltura cellulare 3D" : "3D cell culture imaging"}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Row 2: image left, text right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16" key={`sol-row2-${locale}`}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-[0.8] space-y-6"
          >
            <h3 className="type-h3 text-white/95">
              {copy.solution.usps[2].title}
            </h3>
            <p className="type-lead text-white/75">
              {copy.solution.usps[2].description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[1.4]">
              <Image
                src="/solution/lab-flask.jpg"
                alt={locale === "it" ? "Recupero cellulare in laboratorio" : "Cell recovery in the lab"}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
