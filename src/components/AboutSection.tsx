import { CosmicSection, CosmicCard } from "./CosmicSection";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <CosmicSection 
      title="Journey Through Space"
      subtitle="Where imagination meets innovation in the cosmic realm of digital design"
      className="bg-gradient-to-b from-background/90 via-secondary/20 to-background/90"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cosmic">
              Crafting Digital Universes
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that great design should tell a story, evoke emotion, and create 
              memorable experiences. Our cosmic-inspired approach transforms ordinary 
              digital interfaces into extraordinary journeys through space and time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every element is carefully crafted to create a cohesive narrative, 
              from the gentle animations that guide user attention to the deep 
              color palettes that establish mood and hierarchy.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-cosmic cosmic-glow">
              Start Your Journey
            </Button>
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-6">
          <CosmicCard className="p-6 text-center">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-cosmic mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Launched</div>
            </CardContent>
          </CosmicCard>
          
          <CosmicCard className="p-6 text-center">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-cosmic mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </CardContent>
          </CosmicCard>
          
          <CosmicCard className="p-6 text-center">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-cosmic mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Stellar Support</div>
            </CardContent>
          </CosmicCard>
          
          <CosmicCard className="p-6 text-center">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-cosmic mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </CardContent>
          </CosmicCard>
        </div>
      </div>
    </CosmicSection>
  );
};