"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { Mail, Menu, X } from "lucide-react"
import { useLocale } from "@/components/language-provider"
import { BrandLogo } from "@/components/ui/brand-logo"

export function Navbar() {
  const { locale, setLocale } = useLocale()

  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)

  const navLinks = [
    { name: locale === "it" ? "Il Problema" : "The Problem", href: "#problem" },
    { name: locale === "it" ? "La Soluzione" : "The Solution", href: "#solution" },
    { name: locale === "it" ? "La Performance" : "Performance", href: "#market" },
    { name: locale === "it" ? "Il Team" : "The Team", href: "#team" },
  ]

  // Body scroll lock + Esc key handling while drawer is open
  useEffect(() => {
    if (!isOpen) return

    // Capture refs so the cleanup uses the same nodes the effect saw.
    const triggerNode = triggerRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)

    // Move focus into the drawer
    const focusTimer = window.setTimeout(() => {
      const firstFocusable = panelRef.current?.querySelector<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      )
      firstFocusable?.focus()
    }, 60)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
      window.clearTimeout(focusTimer)
      // Return focus to the trigger that opened the drawer
      triggerNode?.focus()
    }
  }, [isOpen])

  const closeDrawer = () => setIsOpen(false)

  return (
    <>
      {/* Logo - Top Left */}
      <div className="fixed top-4 left-6 md:top-6 md:left-8 z-50">
        <Link href="/">
          <BrandLogo
            variant="color"
            kind="horizontal"
            priority
            className="h-6 w-auto md:h-8"
          />
        </Link>
      </div>

      {/* Floating Pill Nav - md and up only */}
      <div className="fixed top-4 right-6 md:top-6 md:right-8 z-50 hidden md:block">
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
                className="text-[13px] font-body font-bold text-brand-purple hover:text-brand-violet transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-4 w-px bg-brand-purple/15 hidden md:block" />

          {/* Language Toggle */}
          <button
            onClick={() => setLocale(locale === "en" ? "it" : "en")}
            className="text-[12px] md:text-[13px] font-body font-black text-brand-purple hover:text-brand-violet uppercase transition-colors"
          >
            {locale === "en" ? "IT" : "EN"}
          </button>

          <div className="h-4 w-px bg-brand-purple/15" />

          {/* Contact Icon */}
          <Link
            href="mailto:info@algelyx.com"
            className="text-brand-purple hover:text-brand-violet transition-colors"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
          </Link>
        </motion.nav>
      </div>

      {/* Mobile Drawer Trigger - mobile only */}
      <div className="fixed top-4 right-6 md:hidden z-50">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={
            isOpen
              ? locale === "it"
                ? "Chiudi menu"
                : "Close menu"
              : locale === "it"
                ? "Apri menu"
                : "Open menu"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
          className="floating-nav inline-flex items-center justify-center w-11 h-11 text-brand-purple hover:text-brand-violet transition-colors"
        >
          {isOpen ? (
            <X className="w-5 h-5" strokeWidth={2.5} />
          ) : (
            <Menu className="w-5 h-5" strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-drawer-root"
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Overlay */}
            <button
              type="button"
              aria-label={locale === "it" ? "Chiudi menu" : "Close menu"}
              tabIndex={-1}
              onClick={closeDrawer}
              className="absolute inset-0 w-full h-full bg-brand-purple/40 backdrop-blur-sm cursor-default"
            />

            {/* Sliding panel */}
            <motion.div
              id="mobile-nav-drawer"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label={locale === "it" ? "Navigazione" : "Navigation"}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="absolute top-0 right-0 h-full w-[80vw] max-w-[320px] bg-brand-purple text-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-end px-6 py-5 border-b border-white/10">
                <button
                  type="button"
                  onClick={closeDrawer}
                  aria-label={locale === "it" ? "Chiudi menu" : "Close menu"}
                  className="inline-flex items-center justify-center w-11 h-11 text-white/90 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </div>

              <nav
                aria-label={locale === "it" ? "Navigazione principale" : "Primary"}
                className="flex flex-col px-6 py-6 gap-1"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeDrawer}
                    className="py-3 text-base font-body font-bold text-white/90 hover:text-white border-b border-white/5 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto px-6 py-6 border-t border-white/10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setLocale(locale === "en" ? "it" : "en")}
                  className="text-sm font-body font-black uppercase text-white/90 hover:text-white tracking-wider transition-colors"
                >
                  {locale === "en" ? "IT" : "EN"}
                </button>

                <Link
                  href="mailto:info@algelyx.com"
                  onClick={closeDrawer}
                  className="inline-flex items-center gap-2 text-sm font-body font-bold text-white/90 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" strokeWidth={2.5} />
                  info@algelyx.com
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
