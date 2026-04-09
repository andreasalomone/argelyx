"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"

export function Navbar() {
  const { locale, setLocale } = useLocale()
  const copy = COPY[locale]

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between pointer-events-none">
      <div className="flex items-center pointer-events-auto">
        <img src="/algelyx-logo.png" alt="Argelyx Logo" className="h-10 object-contain invert brightness-0" />
      </div>
      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 pointer-events-auto">
        <Link href="#problem" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">{copy.problem.title}</Link>
        <Link href="#solution" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">{copy.solution.title}</Link>
        <Link href="#market" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">{copy.market.title}</Link>
        <Link href="#team" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">{copy.team.title}</Link>
        
        <div className="mx-2 h-4 w-px bg-white/20" />
        
        <button 
          onClick={() => setLocale(locale === "en" ? "it" : "en")}
          className="px-2 py-2 text-xs font-semibold text-white/60 hover:text-white transition-colors font-body uppercase tracking-wider"
          aria-label="Toggle language"
        >
          {locale === "en" ? "IT" : "EN"}
        </button>

        <a href="mailto:info@algelyx.com?subject=Inquiry" className="ml-2 flex items-center gap-1 bg-white text-black hover:bg-white/90 rounded-full px-3.5 py-1.5 text-sm transition-colors font-body font-medium">
          {copy.hero.cta} <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  )
}
