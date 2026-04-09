import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { MarketSection } from "@/components/sections/market-section"
import { RoadmapSection } from "@/components/sections/roadmap-section"
import { TeamSection } from "@/components/sections/team-section"
import { FooterSection } from "@/components/sections/footer-section"
import { Navbar } from "@/components/navbar"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <MarketSection />
        <RoadmapSection />
        <TeamSection />
      </main>
      <FooterSection />
    </>
  )
}
