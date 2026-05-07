import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { FeaturesGrid } from "@/components/sections/features-grid"
import { StatsSection } from "@/components/sections/stats-section"
import { TeamSection } from "@/components/sections/team-section"
import { ResearchSection } from "@/components/sections/research-section"
import { CtaFooter } from "@/components/sections/cta-footer"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <StatsSection />
      <TeamSection />
      <ResearchSection />
      <CtaFooter />
    </div>
  )
}
