import type { Metadata } from "next"
import { LanguageProvider } from "@/components/language-provider"
import { MotionRoot } from "@/components/motion-root"
import { JsonLd } from "@/components/seo/json-ld"

import "@workspace/ui/globals.css"

export const metadata: Metadata = {
  title: "Algelyx — Matrici extracellulari biocompatibili",
  description:
    "Idrogel avanzati di origine vegetale per colture cellulari 2D e 3D. Matrici xeno-free e animal-free basate su alginati ingegnerizzati.",
  metadataBase: new URL("https://www.algelyx.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/monogram.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    title: "Algelyx — Matrici extracellulari biocompatibili",
    description:
      "Idrogel avanzati di origine vegetale per colture cellulari 2D e 3D. Matrici xeno-free e animal-free basate su alginati ingegnerizzati.",
    type: "website",
    url: "https://www.algelyx.com",
    locale: "it_IT",
    siteName: "Algelyx",
  },
  twitter: {
    card: "summary_large_image",
    title: "Algelyx — Matrici extracellulari biocompatibili",
    description:
      "Idrogel avanzati di origine vegetale per colture cellulari 2D e 3D. Matrici xeno-free e animal-free basate su alginati ingegnerizzati.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <body>
        <JsonLd />
        <div aria-hidden className="fixed-brand-bg" />
        <MotionRoot>
          <LanguageProvider>{children}</LanguageProvider>
        </MotionRoot>
      </body>
    </html>
  )
}
