"use client"

import { Layers, ShieldOff, FlaskConical } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"
import type { ReactNode } from "react"

const ICONS: ReactNode[] = [
  <Layers key="layers" className="size-6 text-accent-pink" />,
  <ShieldOff key="shield" className="size-6 text-accent-pink" />,
  <FlaskConical key="flask" className="size-6 text-accent-pink" />,
]

export function ProblemSection() {
  const { locale } = useLocale()
  const copy = COPY[locale].problem

  return (
    <SectionWrapper id="problem" className="bg-surface">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-1 w-10 rounded-full bg-gradient-to-r from-primary to-accent-pink" />
        <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          {copy.subtitle}
        </span>
      </div>

      <h2 className="mb-14 font-heading text-3xl font-bold tracking-tight md:text-4xl">
        {copy.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {copy.points.map((point, index) => (
          <article
            key={point.title}
            className="group rounded-2xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_oklch(0.496_0.265_302/0.08)]"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
              {ICONS[index]}
            </div>
            <h3 className="mb-2 font-heading text-lg font-semibold">
              {point.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {point.description}
            </p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
