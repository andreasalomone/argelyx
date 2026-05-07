import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termini di Utilizzo — Algelyx",
  description:
    "Termini di utilizzo del sito www.algelyx.com. Versione preliminare in attesa della revisione legale.",
  alternates: { canonical: "/legal/terms" },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-white">
      <h1 className="type-h2 mb-8">Termini di Utilizzo</h1>
      <p className="type-body opacity-80 mb-6">
        <strong>Stato:</strong> versione preliminare. La presente pagina è
        un segnaposto in attesa della revisione legale. I contenuti del sito
        www.algelyx.com sono forniti a scopo informativo e non costituiscono
        offerta vincolante né impegno contrattuale.
      </p>
      <p className="type-body opacity-80 mb-6">
        Tutti i marchi citati (Algelyx, AlgiSTEM XF Kit, AlgiSTEM XF ReleX)
        sono di proprietà di Algelyx e dei rispettivi titolari. Per
        chiarimenti scrivere a{" "}
        <a
          className="underline decoration-brand-coral underline-offset-4"
          href="mailto:info@algelyx.com"
        >
          info@algelyx.com
        </a>
        .
      </p>
      <p className="type-body opacity-60 text-sm">
        Ultimo aggiornamento: {new Date().toISOString().slice(0, 10)}.
      </p>
    </main>
  )
}
