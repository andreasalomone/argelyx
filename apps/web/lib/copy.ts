export type Locale = "it" | "en"

interface HeroCopy {
  tagline: string
  pitch: string
  cta: string
}

interface ProblemPoint {
  title: string
  description: string
  bullets?: readonly string[]
}

interface ProblemCopy {
  title: string
  subtitle: string
  bulletsLabel: string
  points: readonly [ProblemPoint, ProblemPoint, ProblemPoint]
}

interface USP {
  title: string
  description: string
}

interface BulletList {
  title: string
  items: readonly string[]
}

interface SolutionCopy {
  title: string
  productLabel: string
  productName: string
  productDescription: string
  kitDescription: string
  uspLabel: string
  usps: readonly [USP, USP, USP]
  relex: USP
  properties: BulletList
  applications: BulletList
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

interface PricingTier {
  name: string
  price: string
  description: string
  features: readonly string[]
  isPopular?: boolean
}

interface PricingCopy {
  title: string
  subtitle: string
  tiers: readonly [PricingTier, PricingTier, PricingTier]
  cta: string
}

interface RoadmapCopy {
  title: string
  milestones: readonly [Milestone, Milestone, Milestone]
}

interface TeamMember {
  name: string
  role: string
  description: string
  image: string
  linkedin: string
}

interface TeamCopy {
  title: string
  subtitle: string
  members: readonly [TeamMember, TeamMember, TeamMember, TeamMember]
}

interface ResearchCopy {
  title: string
  subtitle: string
  expandLabel: string
  collapseLabel: string
}

interface FooterCopy {
  address: string
  vat: string
  rights: string
}

export interface SiteCopy {
  hero: HeroCopy
  problem: ProblemCopy
  solution: SolutionCopy
  market: MarketCopy
  roadmap: RoadmapCopy
  pricing: PricingCopy
  team: TeamCopy
  research: ResearchCopy
  footer: FooterCopy
}

export const COPY: Record<Locale, SiteCopy> = {
  it: {
    hero: {
      tagline:
        "Matrici extracellulari biocompatibili per colture cellulari",
      pitch:
        "Idrogel bioingegnerizzati di origine vegetale, riproducono in modo accurato le proprietà strutturali e funzionali dei tessuti umani e offrono un'alternativa scalabile ed eticamente sostenibile alle colture cellulari tradizionali e alla sperimentazione animale.",
      cta: "Scopri di più",
    },
    problem: {
      title: "Il Problema",
      subtitle: "Perché ora?",
      bulletsLabel: "I principali limiti",
      points: [
        {
          title: "Le colture 2D non riproducono i tessuti umani",
          description:
            "Le colture cellulari bidimensionali su substrati rigidi non riproducono fedelmente l'organizzazione spaziale, le interazioni cellula-cellula e cellula-matrice, né la complessità fisiopatologica dei tessuti umani.",
          bullets: [
            "ambiente non fisiologico → rigidità e planarità alterano il comportamento cellulare (meccanotrasduzione)",
            "perdita di funzioni e fenotipo originali",
            "assenza di struttura tridimensionale e interazioni realistiche",
            "distribuzione non realistica di nutrienti e farmaci",
            "scarsa predittività nei test farmacologici",
            "polarità cellulare alterata",
            "interazioni semplificate con la matrice extracellulare",
          ],
        },
        {
          title: "I modelli animali mostrano limiti strutturali",
          description:
            "Gli studi in vivo sono soggetti a stringenti restrizioni normative a livello internazionale, presentano criticità etiche, implicano costi elevati e offrono una traslazionalità limitata.",
        },
        {
          title: "I limiti dello standard attuale di origine animale",
          description:
            "Gli idrogel più diffusamente impiegati, di origine animale, potrebbero presentare elevata variabilità inter-lotto, limitata traslabilità clinica e non consentono il recupero non distruttivo delle cellule coltivate.",
          bullets: [
            "variabilità biologica → composizione non sempre uniforme tra lotti",
            "rischio immunogenico → possono attivare risposte del sistema immunitario",
            "possibile trasmissione di patogeni → se non purificati adeguatamente",
            "scarsa controllabilità delle proprietà meccaniche e di degradazione",
            "limitata stabilità → degradazione rapida in condizioni fisiologiche",
            "criticità etiche legate all'origine animale",
            "dipendenza da fonti non sostenibili",
          ],
        },
      ],
    },
    solution: {
      title: "La Soluzione",
      productLabel: "AlgiSTEM XF matrix",
      productName: "AlgiSTEM XF Kit",
      productDescription:
        "Una matrice extracellulare xeno-free, priva di componenti di derivazione animale e basata su alginati ingegnerizzati.",
      kitDescription:
        "Kit pronto all'uso composto da matrice di alginati bioingegnerizzati e soluzione di recovery cellulare.",
      uspLabel: "Vantaggi competitivi",
      usps: [
        {
          title: "Modulabilità",
          description:
            "Proprietà biomeccaniche modulabili per adattarsi ai range fisiopatologici dei principali tessuti umani.",
        },
        {
          title: "Riproducibilità",
          description:
            "Affidabilità e coerenza batch-to-batch garantita e pieno rispetto dei criteri ESG.",
        },
        {
          title: "Sostenibilità",
          description:
            "Ricetta bioingegnerizzata e interamente a base vegetale.",
        },
      ],
      relex: {
        title: "AlgiSTEM XF ReleX",
        description:
          "Sistema per il recupero non distruttivo di cellule, organoidi e tessuti dalla matrice, garantendo elevata preservazione dell'integrità biologica. Una caratteristica propria degli alginati rispetto alle soluzioni attualmente presenti sul mercato.",
      },
      properties: {
        title: "Gli alginati bioingegnerizzati hanno alcune proprietà molto interessanti",
        items: [
          "elevata capacità di ritenzione idrica",
          "mimetismo dei tessuti biologici",
          "possibilità di incorporare molecole attive",
          "sostenibilità (derivano da biomassa rinnovabile)",
        ],
      },
      applications: {
        title: "Le principali applicazioni in Biomedicina",
        items: [
          "ingegneria tissutale (scaffold per cellule)",
          "medicazioni avanzate per ferite",
          "rilascio controllato di farmaci",
        ],
      },
    },
    market: {
      title: "Performance",
      subtitle: "Dati alla mano",
      stats: [
        {
          value: "100%",
          label: "di origine Vegetale",
          sublabel: "Privo di componenti animali",
        },
        {
          value: "100%",
          label: "Xeno-free",
          sublabel: "Riproducibilità batch-to-batch garantita",
        },
        {
          value: "20+",
          label: "Linee testate",
          sublabel: "Validato su linee cellulari e modelli tridimensionali (3D) derivati",
        },
      ],
      businessModelTitle: "Accelera la tua ricerca",
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
    pricing: {
      title: "Prezzi",
      subtitle: "Scegli la configurazione ideale per il tuo laboratorio",
      cta: "Richiedi un Preventivo",
      tiers: [
        {
          name: "AlgiSTEM XF ReleX",
          price: "€120",
          description: "La nostra esclusiva soluzione di recupero cellulare non meccanico.",
          features: [
            "Recupero non distruttivo",
            "Mantiene l'integrità cellulare",
            "Nessun danno enzimatico"
          ]
        },
        {
          name: "AlgiSTEM XF Kit",
          price: "€480",
          description: "La matrice extracellulare xeno-free per la coltura cellulare.",
          features: [
            "Polvere di alginati funzionalizzati",
            "Buffer di reidratazione",
            "Agente reticolante",
            "Completamente vegetale"
          ]
        },
        {
          name: "Bundle Completo",
          price: "€600",
          description: "Tutto ciò di cui hai bisogno per scalare le tue colture 3D in modo riproducibile.",
          isPopular: true,
          features: [
            "AlgiSTEM XF Kit completo",
            "Soluzione di recovery ReleX",
            "Supporto tecnico dedicato",
            "Risparmio del 10%"
          ]
        }
      ]
    },
    team: {
      title: "Il Team",
      subtitle: "Il mix perfetto tra accademia e impresa",
      members: [
        {
          name: "Annalisa Tirella",
          role: "Scientific Advisor",
          description:
            "Prof.ssa di bioingegneria industriale con competenze in ambito farmaceutico.",
          image: "/team/annalisa_tirella.jpeg",
          linkedin: "https://www.linkedin.com/in/annalisa-tirella-1602177/",
        },
        {
          name: "Francesca Pischedda",
          role: "Technology Officer",
          description:
            "Senior Researcher con competenze biologiche nel campo delle Neuroscienze.",
          image: "/team/francesca_pischedda.jpg",
          linkedin: "https://www.linkedin.com/in/francesca-pischedda-3723181a8/",
        },
        {
          name: "Stefano Ceci",
          role: "Growth Manager",
          description:
            "Innovation manager e investor con competenze in crescita e go-to-market.",
          image: "/team/stefano_ceci.jpeg",
          linkedin: "https://www.linkedin.com/in/cecistefano/",
        },
        {
          name: "Gianluca De Danieli",
          role: "Clinical Development & Business Manager",
          description:
            "Medico specialista in sviluppo clinico e pre-clinico con expertise nel settore biotech.",
          image: "/team/gianluca_de_danieli.jpeg",
          linkedin: "https://www.linkedin.com/in/gianluca-de-danieli-md-phd-msc-53b1397/?skipRedirect=true",
        },
      ],
    },
    research: {
      title: "La Nostra Ricerca",
      subtitle: "Pubblicazioni peer-reviewed che fondano la nostra tecnologia",
      expandLabel: "Mostra le pubblicazioni",
      collapseLabel: "Nascondi le pubblicazioni",
    },
    footer: {
      address: "Sede legale — Via alla Cascata 23, 38123 Trento (TN)",
      vat: "P. IVA 02838690226 — REA TN 253541",
      rights: "Tutti i diritti riservati.",
    },
  },

  en: {
    hero: {
      tagline:
        "Biocompatible extracellular matrices for cell cultures",
      pitch:
        "Bioengineered plant-based hydrogels that accurately reproduce the structural and functional properties of human tissues and offer a scalable, ethically sustainable alternative to traditional cell cultures and animal testing.",
      cta: "Learn more",
    },
    problem: {
      title: "The Problem",
      subtitle: "Why now?",
      bulletsLabel: "Key limitations",
      points: [
        {
          title: "2D cultures fail to reproduce human tissues",
          description:
            "Two-dimensional cell cultures on rigid substrates fail to faithfully reproduce the spatial organization, cell-cell and cell-matrix interactions, or the physiopathological complexity of human tissues.",
          bullets: [
            "non-physiological environment → stiffness and planarity alter cellular behavior (mechanotransduction)",
            "loss of original functions and phenotype",
            "absence of three-dimensional structure and realistic interactions",
            "unrealistic distribution of nutrients and drugs",
            "poor predictive value in pharmacological testing",
            "altered cell polarity",
            "simplified interactions with the extracellular matrix",
          ],
        },
        {
          title: "Animal models have structural limits",
          description:
            "In-vivo studies face stringent international regulatory restrictions, raise ethical concerns, carry high costs and offer limited translational value.",
        },
        {
          title: "Limits of the current animal-derived standard",
          description:
            "The most widely used hydrogels, animal-derived, can show high inter-batch variability, limited clinical translatability, and do not allow non-destructive recovery of cultured cells.",
          bullets: [
            "biological variability → composition not always uniform across batches",
            "immunogenic risk → can trigger immune system responses",
            "potential pathogen transmission → if not adequately purified",
            "poor control over mechanical and degradation properties",
            "limited stability → rapid degradation under physiological conditions",
            "ethical concerns tied to animal origin",
            "dependence on non-sustainable sources",
          ],
        },
      ],
    },
    solution: {
      title: "The Solution",
      productLabel: "AlgiSTEM XF matrix",
      productName: "AlgiSTEM XF Kit",
      productDescription:
        "A xeno-free extracellular matrix, free of animal-derived components and based on engineered alginates.",
      kitDescription:
        "Ready-to-use kit comprising a bioengineered alginate matrix and a cell-recovery solution.",
      uspLabel: "Competitive advantages",
      usps: [
        {
          title: "Modulability",
          description:
            "Tunable biomechanical properties that adapt to the physiopathological ranges of major human tissues.",
        },
        {
          title: "Reproducibility",
          description:
            "Reliability and guaranteed batch-to-batch consistency, in full ESG compliance.",
        },
        {
          title: "Sustainability",
          description:
            "Bioengineered, fully plant-based recipe.",
        },
      ],
      relex: {
        title: "AlgiSTEM XF ReleX",
        description:
          "Non-destructive recovery system for cells, organoids and tissues from the matrix, ensuring high preservation of biological integrity. A property unique to alginates compared with current market solutions.",
      },
      properties: {
        title: "Bioengineered alginates carry several valuable properties",
        items: [
          "high water-retention capacity",
          "mimicry of biological tissues",
          "ability to incorporate active molecules",
          "sustainability (derived from renewable biomass)",
        ],
      },
      applications: {
        title: "Primary biomedical applications",
        items: [
          "tissue engineering (scaffolds for cells)",
          "advanced wound dressings",
          "controlled drug release",
        ],
      },
    },
    market: {
      title: "Performance",
      subtitle: "By the numbers",
      stats: [
        {
          value: "100%",
          label: "Plant-derived",
          sublabel: "No animal components",
        },
        {
          value: "100%",
          label: "Xeno-free",
          sublabel: "Guaranteed batch-to-batch reproducibility",
        },
        {
          value: "20+",
          label: "Cell lines",
          sublabel: "Validated on cell lines and three-dimensional (3D) derived models",
        },
      ],
      businessModelTitle: "Accelerate your research",
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
    pricing: {
      title: "Pricing",
      subtitle: "Choose the optimal configuration for your lab",
      cta: "Request a Quote",
      tiers: [
        {
          name: "AlgiSTEM XF ReleX",
          price: "€120",
          description: "Our exclusive non-mechanical cell recovery solution.",
          features: [
            "Non-destructive recovery",
            "Maintains cell integrity",
            "No enzymatic damage"
          ]
        },
        {
          name: "AlgiSTEM XF Kit",
          price: "€480",
          description: "The xeno-free extracellular matrix for cell culture.",
          features: [
            "Functionalized alginate powder",
            "Rehydration buffer",
            "Crosslinker agent",
            "Fully plant-derived"
          ]
        },
        {
          name: "Complete Bundle",
          price: "€600",
          description: "Everything you need to successfully scale your reproducible 3D cultures.",
          isPopular: true,
          features: [
            "Full AlgiSTEM XF Kit",
            "ReleX recovery solution",
            "Dedicated technical support",
            "10% package discount"
          ]
        }
      ]
    },
    team: {
      title: "The Team",
      subtitle: "The perfect blend of academia and enterprise",
      members: [
        {
          name: "Annalisa Tirella",
          role: "Scientific Advisor",
          description:
            "Professor of Industrial Bioengineering with pharmaceutical expertise.",
          image: "/team/annalisa_tirella.jpeg",
          linkedin: "https://www.linkedin.com/in/annalisa-tirella-1602177/",
        },
        {
          name: "Francesca Pischedda",
          role: "Technology Officer",
          description:
            "Senior Researcher with biological expertise in Neuroscience.",
          image: "/team/francesca_pischedda.jpg",
          linkedin: "https://www.linkedin.com/in/francesca-pischedda-3723181a8/",
        },
        {
          name: "Stefano Ceci",
          role: "Growth Manager",
          description:
            "Innovation manager and investor with expertise in growth and go-to-market.",
          image: "/team/stefano_ceci.jpeg",
          linkedin: "https://www.linkedin.com/in/cecistefano/",
        },
        {
          name: "Gianluca De Danieli",
          role: "Clinical Development & Business Manager",
          description:
            "Medical specialist in clinical and pre-clinical development with expertise in the biotech sector.",
          image: "/team/gianluca_de_danieli.jpeg",
          linkedin: "https://www.linkedin.com/in/gianluca-de-danieli-md-phd-msc-53b1397/?skipRedirect=true",
        },
      ],
    },
    research: {
      title: "Our Research",
      subtitle: "Peer-reviewed publications underpinning our technology",
      expandLabel: "Show publications",
      collapseLabel: "Hide publications",
    },
    footer: {
      address: "Registered office — Via alla Cascata 23, 38123 Trento (TN)",
      vat: "VAT 02838690226 — REA TN 253541",
      rights: "All rights reserved.",
    },
  },
} as const
