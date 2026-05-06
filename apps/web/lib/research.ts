export interface Publication {
  doi: string
  journal: string
  year: number
  /** Italian title of the paper (or English original — keep as-is) */
  title: string
}

/**
 * Peer-reviewed publications from Algelyx team members.
 * Source: GDD 03052026 (LA NOSTRA RICERCA section).
 * DOI links resolve to https://doi.org/{doi}.
 */
export const PUBLICATIONS: readonly Publication[] = [
  {
    doi: "10.1002/jbm.a.34914",
    journal: "Journal of Biomedical Materials Research Part A",
    year: 2013,
    title: "Strain rate viscoelastic analysis of soft and highly hydrated biomaterials",
  },
  {
    doi: "10.1016/j.jbiomech.2014.05.017",
    journal: "Journal of Biomechanics",
    year: 2014,
    title: "Viscoelastic characterisation of pig liver in unconfined compression",
  },
  {
    doi: "10.3791/59597",
    journal: "Journal of Visualized Experiments",
    year: 2019,
    title: "Fabrication of Amyloid-β-Secreting Alginate Microbeads for Use in Modelling Alzheimer's Disease",
  },
  {
    doi: "10.1016/j.reactfunctpolym.2022.105292",
    journal: "Reactive and Functional Polymers",
    year: 2022,
    title: "Characterization of molecular weight distribution and aggregation by asymmetrical flow field-flow fractionation of unmodified and oxidized alginate",
  },
  {
    doi: "10.1016/j.actbio.2022.08.074",
    journal: "Acta Biomaterialia",
    year: 2022,
    title: "Role of stiffness and physico-chemical properties of tumour microenvironment on breast cancer cell stemness",
  },
  {
    doi: "10.1002/adhm.202201898",
    journal: "Advanced Healthcare Materials",
    year: 2023,
    title: "Invasion and Secondary Site Colonization as a Function of In Vitro Primary Tumor Matrix Stiffness: Breast to Bone Metastasis",
  },
  {
    doi: "10.1002/mame.202400296",
    journal: "Macromolecular Materials and Engineering",
    year: 2025,
    title: "Exploiting Response Surface Methodology to Engineer the Mechanical Properties of Alginate-based Hydrogels",
  },
] as const
