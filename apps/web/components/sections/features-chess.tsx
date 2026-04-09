"use client"

import { motion } from "motion/react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"

export function FeaturesChess() {
  const { locale } = useLocale()
  const copy = COPY[locale]

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-black relative z-10" id="solution">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20" key={`header-${locale}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-full px-3.5 py-1 mb-6"
          >
            <span className="text-white text-xs font-medium font-body uppercase tracking-wider">{copy.solution.title}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-3xl"
          >
            {copy.solution.productName}
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-white/80 font-body font-normal text-lg md:text-xl max-w-2xl mt-6 leading-relaxed"
          >
            {copy.solution.productDescription}
          </motion.p>
        </div>

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24" key={`row1-${locale}`}>
          <div className="flex-1 space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading italic text-white leading-tight"
            >
              {copy.solution.productLabel}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 font-body font-normal text-base md:text-lg leading-relaxed"
            >
              {copy.solution.kitDescription}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/3] w-full p-2">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop" 
                alt="Cellular imaging preview" 
                className="w-full h-full object-cover rounded-xl opacity-80"
              />
            </div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20" key={`row2-${locale}`}>
          <div className="flex-1 space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading italic text-white leading-tight"
            >
              AlgiSTEM XF ReleX
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 font-body font-normal text-base md:text-lg leading-relaxed"
            >
              {/* As the third USP focuses on AlgiSTEM XF Relex recovery, pulling from there to give it explicit highlight */}
              {copy.solution.usps[2].description}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-[4/3] w-full p-2">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop" 
                alt="Lab flask preview" 
                className="w-full h-full object-cover rounded-xl opacity-80 filter grayscale mix-blend-screen"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
