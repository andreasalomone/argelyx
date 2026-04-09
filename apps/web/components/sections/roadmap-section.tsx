"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"

export function RoadmapSection() {
  const { locale } = useLocale()
  const copy = COPY[locale].roadmap

  return (
    <SectionWrapper id="roadmap">
      <h2 className="mb-16 font-heading text-3xl font-bold tracking-tight md:text-4xl">
        {copy.title}
      </h2>

      {/* Timeline */}
      <div className="relative">
        {/* Gradient connector line — desktop horizontal, mobile vertical */}
        <div
          className="absolute hidden from-primary to-accent-pink md:block"
          style={{
            top: "20px",
            left: "0",
            right: "0",
            height: "2px",
            background:
              "linear-gradient(90deg, var(--primary), var(--accent-pink))",
          }}
        />
        <div
          className="absolute top-0 bottom-0 left-5 w-[2px] from-primary to-accent-pink md:hidden"
          style={{
            background:
              "linear-gradient(180deg, var(--primary), var(--accent-pink))",
          }}
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-0">
          {copy.milestones.map((milestone, index) => (
            <div
              key={milestone.date}
              className="relative pl-14 md:pr-8 md:pl-0"
            >
              {/* Dot */}
              <div
                className={`absolute z-10 size-4 rounded-full border-[3px] md:top-[13px] md:left-auto ${index === 0 ? "md:left-0" : ""} top-1 left-[13px] border-primary bg-background md:relative md:mb-6`}
              />

              <p className="mb-1 text-sm font-semibold text-primary">
                {milestone.date}
              </p>
              <h3 className="mb-1 font-heading text-lg font-semibold">
                {milestone.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
