"use client"

import Image from "next/image"
import { MapPin, Mail, Globe } from "lucide-react"
import { useLocale } from "@/components/language-provider"
import { COPY } from "@/lib/copy"

const CONTACT_EMAIL = "info@algelyx.com"
const WEBSITE_URL = "https://www.algelyx.com"
const WEBSITE_DISPLAY = "www.algelyx.com"

export function FooterSection() {
  const { locale } = useLocale()
  const copy = COPY[locale].footer

  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="border-t border-border/50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/algelyx-logo.png"
            alt="Algelyx"
            width={160}
            height={40}
            className="h-auto w-[120px] opacity-60 md:w-[160px]"
          />
        </div>

        {/* Contact info */}
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row md:justify-center md:gap-8">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0" />
            <span>{copy.address}</span>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="size-4 shrink-0" />
            <span>{CONTACT_EMAIL}</span>
          </a>
          <a
            href={WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Globe className="size-4 shrink-0" />
            <span>{WEBSITE_DISPLAY}</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-center text-xs text-muted-foreground/60">
          © {currentYear} Algelyx. {copy.rights}
        </p>
      </div>
    </footer>
  )
}
