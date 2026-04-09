import type { Metadata } from "next"
import { Instrument_Serif, Barlow, Geist_Mono } from "next/font/google"
import { cn } from "@workspace/ui/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

import "@workspace/ui/globals.css"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-heading",
})

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Algelyx — Biocompatible extracellular matrices",
  description:
    "Advanced plant-based hydrogels for 2D and 3D cell cultures. Xeno-free, animal-free extracellular matrices based on engineered alginates.",
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
        instrumentSerif.variable,
        geistMono.variable,
        "font-body"
      )}
    >
      <body>
        <ThemeProvider defaultTheme="dark" forcedTheme="dark">
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
