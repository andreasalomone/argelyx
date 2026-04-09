import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { StartSection } from "@/components/sections/start-section"
import { FeaturesChess } from "@/components/sections/features-chess"
import { FeaturesGrid } from "@/components/sections/features-grid"
import { StatsSection } from "@/components/sections/stats-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CtaFooter } from "@/components/sections/cta-footer"

export default function Page() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="relative z-10 w-full overflow-hidden">
        <Navbar />
        <HeroSection />
        <div className="bg-black">
          <StartSection />
          <FeaturesChess />
          <FeaturesGrid />
          <StatsSection />
          <PricingSection />
          <TestimonialsSection />
          <CtaFooter />
        </div>
      </div>
    </div>
  )
}
