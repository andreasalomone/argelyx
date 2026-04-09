"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"
import { cn } from "@workspace/ui/lib/utils"
import { useLocale } from "@/components/language-provider"
import type { Locale } from "@/lib/copy"

const SCROLL_THRESHOLD = 32
const LOCALES: Locale[] = ["it", "en"]

export function Navbar() {
  const { locale, setLocale } = useLocale()
  const { resolvedTheme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Defer the setMounted to avoid synchronous setState warning
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/algelyx-icon.png"
            alt="Algelyx"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="font-heading text-lg font-semibold tracking-tight">
            algelyx
          </span>
        </a>

        {/* Controls */}
        <div className="flex items-center gap-1">
          {/* Language toggle */}
          <div className="flex items-center rounded-lg bg-muted/50 p-0.5">
            {LOCALES.map((loc) => (
              <button
                key={loc}
                onClick={() => setLocale(loc)}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs font-medium tracking-wider uppercase transition-all",
                  locale === loc
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {loc}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="ml-1 rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
