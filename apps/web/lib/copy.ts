export type Locale = "it" | "en"

interface HeroCopy {
  tagline: string
  pitch: string
  cta: string
}

interface ProblemPoint {
  title: string
  description: string
}

interface ProblemCopy {
  title: string
  subtitle: string
  points: readonly [ProblemPoint, ProblemPoint, ProblemPoint]
}

interface USP {
  title: string
  description: string
}

interface SolutionCopy {
  title: string
  productLabel: string
  productName: string
  productDescription: string
  kitDescription: string
  uspLabel: string
  usps: readonly [USP, USP, USP]
}

interface MarketStat {
  value: string
  label: string
  sublabel: string
}

interface Pillar {
  title: string
  description: string
}

interface MarketCopy {
  title: string
  subtitle: string
  stats: readonly [MarketStat, MarketStat, MarketStat]
  businessModelTitle: string
  pillars: readonly [Pillar, Pillar, Pillar]
}

interface Milestone {
  date: string
  title: string
  description: string
}

interface RoadmapCopy {
  title: string
  milestones: readonly [Milestone, Milestone, Milestone]
}

interface TeamMember {
  name: string
  role: string
  description: string
}

interface TeamCopy {
  title: string
  subtitle: string
  members: readonly [TeamMember, TeamMember, TeamMember, TeamMember]
}

interface FooterCopy {
  address: string
  rights: string
}

export interface SiteCopy {
  hero: HeroCopy
  problem: ProblemCopy
  solution: SolutionCopy
  market: MarketCopy
  roadmap: RoadmapCopy
  team: TeamCopy
  footer: FooterCopy
}

export const COPY: Record<Locale, SiteCopy> = {
  it: {
    hero: {
      tagline:
        "Matrici extracellulari biocompatibili per colture cellulari 2D e 3D",
      pitch:
        "Idrogel avanzati di origine vegetale che replicano fedelmente i tessuti umani, superando i limiti etici e tecnici delle attuali colture cellulari e dei test sugli animali.",
      cta: "Scopri di più",
    },
    problem: {
      title: "Il Problema",
      subtitle: "Perché ora?",
      points: [
        {
          title: "La biologia non è piatta",
          description:
            "Le tradizionali colture 2D su substrati rigidi in plastica non simulano correttamente l'architettura tridimensionale dei tessuti umani e delle malattie.",
        },
        {
          title: "I modelli animali sono superati",
          description:
            "I test in vivo subiscono forti limitazioni legislative europee e americane, sollevano problemi etici, sono costosi e spesso poco predittivi per l'uomo.",
        },
        {
          title: "I limiti dello standard attuale",
          description:
            "Gli idrogel dominanti (Matrigel) sono di origine animale: scarsa riproducibilità batch-to-batch, incompatibilità clinica e nessun recupero non distruttivo delle cellule.",
        },
      ],
    },
    solution: {
      title: "La Soluzione",
      productLabel: "Il prodotto core",
      productName: "AlgiSTEM XF Kit",
      productDescription:
        "Una matrice extracellulare xeno-free e animal-free, basata su alginati ingegnerizzati.",
      kitDescription:
        "Kit pronto all'uso a 4 componenti: polvere di alginati funzionalizzati (stabile a temperatura ambiente), buffer di reidratazione, agente reticolante e soluzione di recovery.",
      uspLabel: "Vantaggi competitivi",
      usps: [
        {
          title: "Modulabilità",
          description:
            "Rigidità meccanica calibrabile in base ai valori target di diversi tessuti umani — cervello, polmone, fegato.",
        },
        {
          title: "Riproducibilità e Sostenibilità",
          description:
            "Ricetta interamente vegetale. Coerenza batch-to-batch garantita e pieno rispetto dei criteri ESG.",
        },
        {
          title: "AlgiSTEM XF ReleX",
          description:
            "Recupero non meccanico e non distruttivo di cellule, organoidi e sferoidi dalla matrice. Un vantaggio unico, non offerto dai competitor.",
        },
      ],
    },
    market: {
      title: "Il Mercato",
      subtitle: "Un settore in forte espansione",
      stats: [
        {
          value: "$1.9B",
          label: "Mercato globale 2024",
          sublabel: "Colture cellulari 3D",
        },
        {
          value: "$4.3B",
          label: "Proiezione 2030",
          sublabel: "CAGR 14–15%",
        },
        {
          value: "16.5%",
          label: "Crescita annuale",
          sublabel: "Organoidi e sferoidi",
        },
      ],
      businessModelTitle: "Modello di Business",
      pillars: [
        {
          title: "B2C / E-commerce",
          description:
            "Vendita diretta del kit a laboratori accademici. Bundle completo a €600, altamente competitivo.",
        },
        {
          title: "B2B Custom",
          description:
            "Fornitura di alginati su specifica per aziende pharma, CRO e biotech.",
        },
        {
          title: "Servizi",
          description:
            "Certificazione e caratterizzazione viscoelastica per conto terzi.",
        },
      ],
    },
    roadmap: {
      title: "Roadmap",
      milestones: [
        {
          date: "Mag–Ago 2026",
          title: "Validazione prodotto",
          description: "iPSC / NPC",
        },
        {
          date: "Q1 2027",
          title: "Lancio commerciale",
          description: "Piattaforma e-commerce",
        },
        {
          date: "2028",
          title: "Break-even operativo",
          description: "Sostenibilità economica",
        },
      ],
    },
    team: {
      title: "Il Team",
      subtitle: "Il mix perfetto tra accademia e impresa",
      members: [
        {
          name: "Annalisa Tirella",
          role: "Scientific Advisor & Founder",
          description:
            "Prof.ssa Associata di Bioingegneria (UNITN), inventrice della tecnologia core con forti competenze farmaceutiche.",
        },
        {
          name: "Francesca Pischedda",
          role: "CTO & Founder",
          description:
            "PhD e Senior Researcher, esperta in neuroscienze e validazione biologica R&D.",
        },
        {
          name: "Stefano Ceci",
          role: "CEO & Founder",
          description:
            "Innovation Manager con 25+ anni di esperienza in tech transfer, venture building e open innovation.",
        },
        {
          name: "Gianluca De Danieli",
          role: "Advisor IP & Fundraising",
          description:
            "Oltre 15 anni in sviluppo clinico e medical affairs in multinazionali pharma (Sanofi, Novartis).",
        },
      ],
    },
    footer: {
      address:
        "Dipartimento di Ingegneria Industriale (UNITN), Via Sommarive 9, 38123 Trento (TN)",
      rights: "Tutti i diritti riservati.",
    },
  },

  en: {
    hero: {
      tagline:
        "Biocompatible extracellular matrices for 2D and 3D cell cultures",
      pitch:
        "Advanced plant-based hydrogels that faithfully replicate human tissues, overcoming the ethical and technical limitations of current cell cultures and animal testing.",
      cta: "Learn more",
    },
    problem: {
      title: "The Problem",
      subtitle: "Why now?",
      points: [
        {
          title: "Biology isn't flat",
          description:
            "Traditional 2D cultures on rigid plastic substrates fail to simulate the three-dimensional architecture of human tissues and diseases.",
        },
        {
          title: "Animal models are outdated",
          description:
            "In-vivo testing faces growing EU and US legislative restrictions, raises ethical concerns, is costly and often poorly predictive for humans.",
        },
        {
          title: "The current standard falls short",
          description:
            "Dominant hydrogels (Matrigel) are animal-derived: poor batch-to-batch reproducibility, clinical incompatibility and no non-destructive cell recovery.",
        },
      ],
    },
    solution: {
      title: "The Solution",
      productLabel: "Core product",
      productName: "AlgiSTEM XF Kit",
      productDescription:
        "A xeno-free and animal-free extracellular matrix based on engineered alginates.",
      kitDescription:
        "Ready-to-use 4-component kit: functionalized alginate powder (room-temperature stable), rehydration buffer, crosslinker and recovery solution.",
      uspLabel: "Competitive advantages",
      usps: [
        {
          title: "Modulability",
          description:
            "Tunable mechanical stiffness targeting different human tissues — brain, lung, liver.",
        },
        {
          title: "Reproducibility & Sustainability",
          description:
            "Entirely plant-based recipe. Guaranteed batch-to-batch consistency and full ESG compliance.",
        },
        {
          title: "AlgiSTEM XF ReleX",
          description:
            "Non-mechanical, non-destructive recovery of cells, organoids and spheroids from the matrix. A unique advantage no competitor offers.",
        },
      ],
    },
    market: {
      title: "The Market",
      subtitle: "A rapidly expanding sector",
      stats: [
        {
          value: "$1.9B",
          label: "Global market 2024",
          sublabel: "3D cell cultures",
        },
        {
          value: "$4.3B",
          label: "Projected 2030",
          sublabel: "CAGR 14–15%",
        },
        {
          value: "16.5%",
          label: "Annual growth",
          sublabel: "Organoids & spheroids",
        },
      ],
      businessModelTitle: "Business Model",
      pillars: [
        {
          title: "B2C / E-commerce",
          description:
            "Direct kit sales to academic laboratories. Complete bundle at €600, highly competitive.",
        },
        {
          title: "B2B Custom",
          description:
            "Custom alginate supply for pharma, CRO and biotech companies.",
        },
        {
          title: "Services",
          description:
            "Third-party viscoelastic characterization and certification.",
        },
      ],
    },
    roadmap: {
      title: "Roadmap",
      milestones: [
        {
          date: "May–Aug 2026",
          title: "Product validation",
          description: "iPSC / NPC",
        },
        {
          date: "Q1 2027",
          title: "Commercial launch",
          description: "E-commerce platform",
        },
        {
          date: "2028",
          title: "Operational break-even",
          description: "Economic sustainability",
        },
      ],
    },
    team: {
      title: "The Team",
      subtitle: "The perfect blend of academia and enterprise",
      members: [
        {
          name: "Annalisa Tirella",
          role: "Scientific Advisor & Founder",
          description:
            "Associate Professor of Bioengineering (UNITN), inventor of the core technology with strong pharmaceutical expertise.",
        },
        {
          name: "Francesca Pischedda",
          role: "CTO & Founder",
          description:
            "PhD and Senior Researcher, expert in neuroscience and R&D biological validation.",
        },
        {
          name: "Stefano Ceci",
          role: "CEO & Founder",
          description:
            "Innovation Manager with 25+ years of experience in tech transfer, venture building and open innovation.",
        },
        {
          name: "Gianluca De Danieli",
          role: "Advisor IP & Fundraising",
          description:
            "Over 15 years in clinical development and medical affairs at multinational pharma companies (Sanofi, Novartis).",
        },
      ],
    },
    footer: {
      address:
        "Department of Industrial Engineering (UNITN), Via Sommarive 9, 38123 Trento (TN)",
      rights: "All rights reserved.",
    },
  },
} as const
