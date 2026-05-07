import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Algelyx",
  description:
    "Informativa privacy di Algelyx. Versione preliminare in attesa della revisione legale.",
  alternates: { canonical: "/legal/privacy" },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-white">
      <h1 className="type-h2 mb-8">Privacy Policy</h1>
      <p className="type-body opacity-80 mb-6">
        <strong>Stato:</strong> versione preliminare. La presente pagina è
        un segnaposto in attesa della revisione legale del Titolare del
        Trattamento. Non costituisce ancora l&apos;informativa definitiva ai sensi
        del Regolamento (UE) 2016/679 (GDPR).
      </p>
      <p className="type-body opacity-80 mb-6">
        Per richieste relative al trattamento dei dati personali, scrivere a{" "}
        <a
          className="underline decoration-brand-coral underline-offset-4"
          href="mailto:info@algelyx.com"
        >
          info@algelyx.com
        </a>
        . Algelyx ha sede in Via Sommarive 9, 38123 Trento (TN), Italia,
        presso il Dipartimento di Ingegneria Industriale dell&apos;Università
        degli Studi di Trento.
      </p>
      <p className="type-body opacity-60 text-sm">
        Ultimo aggiornamento: {new Date().toISOString().slice(0, 10)}.
      </p>
    </main>
  )
}
