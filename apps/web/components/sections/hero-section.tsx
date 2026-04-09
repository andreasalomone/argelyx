"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"

export function HeroSection() {
  const { locale } = useLocale()
  const copy = COPY[locale].hero

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-16"
    >
      {/* Background gradient orb */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 h-[700px] w-[700px] animate-float rounded-full will-change-transform"
          style={{
            background:
              "radial-gradient(circle, var(--primary) 0%, var(--accent-pink) 40%, transparent 70%)",
            opacity: 0.12,
          }}
        />
      </div>

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <div className="mb-10 animate-fade-in-up">
          <Image
            src="/algelyx-logo.png"
            alt="Algelyx"
            width={280}
            height={70}
            priority
            className="h-auto w-[200px] md:w-[280px]"
          />
        </div>

        <h1
          className="animate-fade-in-up font-heading text-3xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl"
          style={{ animationDelay: "150ms" }}
        >
          {copy.tagline}
        </h1>

        <p
          className="mt-6 max-w-xl animate-fade-in-up text-lg leading-relaxed text-muted-foreground md:text-xl"
          style={{ animationDelay: "300ms" }}
        >
          {copy.pitch}
        </p>

        <div
          className="mt-10 animate-fade-in-up"
          style={{ animationDelay: "450ms" }}
        >
          <Button asChild size="lg" className="h-11 rounded-full px-8 text-sm">
            <a href="#problem">
              {copy.cta}
              <ArrowDown className="ml-2 size-4" data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
