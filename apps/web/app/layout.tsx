import type { Metadata } from "next"
import { DM_Sans, Space_Grotesk, Geist_Mono } from "next/font/google"
import { cn } from "@workspace/ui/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

import "@workspace/ui/globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
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
        dmSans.variable,
        spaceGrotesk.variable,
        geistMono.variable,
        "font-sans"
      )}
    >
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
