import { CosmicHero } from "@/components/CosmicHero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <CosmicHero />
      <FeaturesSection />
      <AboutSection />
    </main>
  );
};

export default Index;
