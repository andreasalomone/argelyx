"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"

export function Navbar() {
  const { locale, setLocale } = useLocale()
  const copy = COPY[locale]

  const navLinks = [
    { name: locale === "it" ? "Il Problema" : "The Problem", href: "#problem" },
    { name: locale === "it" ? "La Soluzione" : "The Solution", href: "#solution" },
    { name: locale === "it" ? "La Performance" : "Performance", href: "#market" },
    { name: locale === "it" ? "Il Team" : "The Team", href: "#team" },
  ]

  return (
    <>
      {/* Logo - Top Left */}
      <div className="fixed top-4 left-6 md:top-6 md:left-8 z-50">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Algelyx"
            width={120}
            height={32}
            className="brightness-0 invert h-6 md:h-8 w-auto px-1 md:px-0"
          />
        </Link>
      </div>

      {/* Floating Pill Nav - Top Right/Center */}
      <div className="fixed top-4 right-6 md:top-6 md:right-8 z-50">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="floating-nav px-4 py-1.5 md:px-6 md:py-2"
        >
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-body font-bold text-[#1e1145] hover:text-purple-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-4 w-px bg-[#1e1145]/15 hidden md:block" />

          {/* Language Toggle */}
          <button
            onClick={() => setLocale(locale === "en" ? "it" : "en")}
            className="text-[12px] md:text-[13px] font-body font-black text-[#1e1145] hover:text-purple-600 uppercase transition-colors"
          >
            {locale === "en" ? "IT" : "EN"}
          </button>

          <div className="h-4 w-px bg-[#1e1145]/15" />

          {/* Contact Icon */}
          <Link
            href="mailto:info@algelyx.com"
            className="text-[#1e1145] hover:text-purple-600 transition-colors"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 " strokeWidth={2.5} />
          </Link>
        </motion.nav>
      </div>
    </>
  )
}
