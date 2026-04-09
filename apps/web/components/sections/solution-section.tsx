"use client"

import { SlidersHorizontal, Leaf, Sparkles } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import type { ReactNode } from "react"

const USP_ICONS: ReactNode[] = [
  <SlidersHorizontal key="sliders" className="size-5 text-primary" />,
  <Leaf key="leaf" className="size-5 text-primary" />,
  <Sparkles key="sparkles" className="size-5 text-primary" />,
]

export function SolutionSection() {
  const { locale } = useLocale()
  const copy = COPY[locale].solution

  return (
    <SectionWrapper id="solution">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-1 w-10 rounded-full bg-gradient-to-r from-primary to-accent-pink" />
        <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          {copy.productLabel}
        </span>
      </div>

      <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight md:text-4xl">
        {copy.title}
      </h2>

      {/* Product headline */}
      <div className="mb-12 max-w-2xl">
        <h3 className="gradient-text mb-3 font-heading text-2xl font-bold md:text-3xl">
          {copy.productName}
        </h3>
        <p className="text-lg leading-relaxed text-foreground">
          {copy.productDescription}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {copy.kitDescription}
        </p>
      </div>

      {/* USP label */}
      <p className="mb-6 text-xs font-medium tracking-widest text-muted-foreground uppercase">
        {copy.uspLabel}
      </p>

      {/* USP cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {copy.usps.map((usp, index) => (
          <article
            key={usp.title}
            className="relative overflow-hidden rounded-2xl border border-border p-6"
          >
            {/* Gradient left accent */}
            <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-primary to-accent-pink" />

            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5">
              {USP_ICONS[index]}
            </div>
            <h4 className="mb-2 font-heading font-semibold">{usp.title}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {usp.description}
            </p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
