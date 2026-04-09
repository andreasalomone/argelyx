"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"

function getInitials(name: string): string {
  const parts = name.split(" ")
  const first = parts[0]?.[0] ?? ""
  const last = parts[parts.length - 1]?.[0] ?? ""
  return `${first}${last}`.toUpperCase()
}

export function TeamSection() {
  const { locale } = useLocale()
  const copy = COPY[locale].team

  return (
    <SectionWrapper id="team" className="bg-surface">
      <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
        {copy.title}
      </h2>
      <p className="mb-14 text-lg text-muted-foreground">{copy.subtitle}</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {copy.members.map((member) => (
          <article
            key={member.name}
            className="group rounded-2xl border border-border bg-surface-elevated p-6 text-center"
          >
            {/* Initials avatar */}
            <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent-pink)]">
              <span className="text-xl font-bold text-white">
                {getInitials(member.name)}
              </span>
            </div>

            <h3 className="font-heading font-semibold">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-primary">
              {member.role}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              {member.description}
            </p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
