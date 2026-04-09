"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@workspace/ui/lib/utils"

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.08,
  rootMargin: "-40px",
}

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  /** Skip the max-width container (for full-bleed sections like hero) */
  fullBleed?: boolean
}

export function SectionWrapper({
  id,
  children,
  className,
  fullBleed = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(element)
      }
    }, OBSERVER_OPTIONS)

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "scroll-mt-20 px-6 py-24 transition-all duration-700 ease-out md:py-32",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className
      )}
    >
      {fullBleed ? (
        children
      ) : (
        <div className="mx-auto max-w-6xl">{children}</div>
      )}
    </section>
  )
}
