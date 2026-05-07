import { PUBLICATIONS } from "@/lib/research"

const BASE_URL = "https://www.algelyx.com"

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Algelyx",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  description:
    "Bioengineered plant-based alginate hydrogels for 2D and 3D cell culture — xeno-free, animal-free extracellular matrices.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Sommarive 9",
    postalCode: "38123",
    addressLocality: "Trento",
    addressRegion: "TN",
    addressCountry: "IT",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@algelyx.com",
      availableLanguage: ["it", "en"],
    },
  ],
} as const

const products = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${BASE_URL}/#product-algistem-xf-kit`,
    name: "AlgiSTEM XF Kit",
    description:
      "Xeno-free, animal-free extracellular matrix kit based on bioengineered alginates for 2D and 3D cell culture. Tunable mechanical properties, batch-to-batch reproducibility, and validated on 20+ cell lines.",
    brand: { "@type": "Brand", name: "Algelyx" },
    category: "Cell culture extracellular matrix",
    manufacturer: { "@id": `${BASE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${BASE_URL}/#product-algistem-xf-relex`,
    name: "AlgiSTEM XF ReleX",
    description:
      "Non-destructive recovery system for cells, organoids, and tissues from alginate-based ECM, preserving biological integrity.",
    brand: { "@type": "Brand", name: "Algelyx" },
    category: "Cell recovery reagent",
    manufacturer: { "@id": `${BASE_URL}/#organization` },
  },
] as const

const scholarlyArticles = PUBLICATIONS.map((p) => ({
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: p.title,
  isPartOf: { "@type": "Periodical", name: p.journal },
  datePublished: String(p.year),
  identifier: { "@type": "PropertyValue", propertyID: "DOI", value: p.doi },
  url: `https://doi.org/${p.doi}`,
}))

const graph = [organization, ...products, ...scholarlyArticles]

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- safe: no user input is interpolated
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
