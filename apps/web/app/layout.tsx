import type { Metadata } from "next"
import { LanguageProvider } from "@/components/language-provider"
import { MotionRoot } from "@/components/motion-root"

import "@workspace/ui/globals.css"

export const metadata: Metadata = {
  title: "Algelyx — Matrici extracellulari biocompatibili",
  description:
    "Idrogel avanzati di origine vegetale per colture cellulari 2D e 3D. Matrici xeno-free e animal-free basate su alginati ingegnerizzati.",
  metadataBase: new URL("https://www.algelyx.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/monogram.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
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
    <html lang="it" suppressHydrationWarning className="antialiased">
      <body>
        <div aria-hidden className="fixed-brand-bg" />
        <MotionRoot>
          <LanguageProvider>{children}</LanguageProvider>
        </MotionRoot>
      </body>
    </html>
  )
}
