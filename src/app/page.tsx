import { BackgroundCells } from "@/components/ui/background-ripple-effect";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { GamePlanSection } from "@/components/landing/GamePlanSection";
import { CTASection } from "@/components/landing/CTASection";

import { SimpleStepsSection } from "@/components/landing/SimpleStepsSection";
import { BuiltForFansSection } from "@/components/landing/BuiltForFansSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black selection:bg-green-500/30">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <BackgroundCells />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 font-sans pointer-events-none">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <GamePlanSection />
        <BuiltForFansSection />
        {/* <SimpleStepsSection /> */}
        <PricingSection />
        <FAQSection />
        <CTASection />
      </div>
    </div>
  );
}
