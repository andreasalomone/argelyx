import type { Metadata } from "next"
import { Barlow, Geist_Mono } from "next/font/google"
import { cn } from "@workspace/ui/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

import "@workspace/ui/globals.css"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Algelyx — Matrici extracellulari biocompatibili",
  description:
    "Idrogel avanzati di origine vegetale per colture cellulari 2D e 3D. Matrici xeno-free e animal-free basate su alginati ingegnerizzati.",
  openGraph: {
    title: "Algelyx — Biocompatible extracellular matrices",
    description:
      "Advanced plant-based hydrogels that faithfully replicate human tissues, overcoming the ethical and technical limitations of cell cultures and animal testing.",
    type: "website",
    url: "https://www.algelyx.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        barlow.variable,
        geistMono.variable,
      )}
    >
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark" forcedTheme="dark">
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
