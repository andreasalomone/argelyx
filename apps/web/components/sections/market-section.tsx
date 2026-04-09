"use client"

import { ShoppingCart, Building2, Microscope } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import type { ReactNode } from "react"

const PILLAR_ICONS: ReactNode[] = [
  <ShoppingCart key="cart" className="size-5 text-primary" />,
  <Building2 key="building" className="size-5 text-primary" />,
  <Microscope key="microscope" className="size-5 text-primary" />,
]

export function MarketSection() {
  const { locale } = useLocale()
  const copy = COPY[locale].market

  return (
    <SectionWrapper id="market" className="bg-surface">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-1 w-10 rounded-full bg-gradient-to-r from-primary to-accent-pink" />
        <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          {copy.subtitle}
        </span>
      </div>

      <h2 className="mb-16 font-heading text-3xl font-bold tracking-tight md:text-4xl">
        {copy.title}
      </h2>

      {/* Big stats */}
      <div className="mb-20 grid gap-8 md:grid-cols-3">
        {copy.stats.map((stat) => (
          <div key={stat.value} className="text-center md:text-left">
            <p className="gradient-text font-heading text-5xl font-bold md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-2 font-medium text-foreground">{stat.label}</p>
            <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
          </div>
        ))}
      </div>

      {/* Business model pillars */}
      <h3 className="mb-6 text-xs font-medium tracking-widest text-muted-foreground uppercase">
        {copy.businessModelTitle}
      </h3>

      <div className="grid gap-4 md:grid-cols-3">
        {copy.pillars.map((pillar, index) => (
          <article
            key={pillar.title}
            className="flex items-start gap-4 rounded-2xl border border-border bg-surface-elevated p-6"
          >
            <div className="shrink-0 rounded-lg bg-primary/10 p-2.5">
              {PILLAR_ICONS[index]}
            </div>
            <div>
              <h4 className="mb-1 font-heading font-semibold">
                {pillar.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
