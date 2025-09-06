import { CosmicSection, CosmicCard } from "./CosmicSection";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <CosmicSection 
      title="Journey of Radical Self-Renewal"
      subtitle="Where transformation begins where others stop - for those who seek more than just change"
      className="bg-gradient-to-b from-background/90 via-secondary/20 to-background/90"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cosmic">
              Exclusive. Profound. Unforgettable.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're ready to release old patterns, realign with your authentic self, 
              or remember who you truly are – this is where your next chapter begins. Our approach 
              goes beyond traditional coaching to create lasting transformation at every level.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that true transformation requires more than surface-level changes. 
              Our carefully crafted programs integrate cutting-edge psychological techniques, 
              time-honored spiritual practices, and revolutionary physical wellness approaches 
              to create breakthrough experiences that last a lifetime.
            </p>
            <p className="text-lg text-accent font-semibold">
              For those who seek more than just change.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-cosmic cosmic-glow">
              Start Your Transformation
            </Button>
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
              Explore Retreats
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-6">
          <CosmicCard className="p-6 text-center">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-cosmic mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </CardContent>
          </CosmicCard>
          
          <CosmicCard className="p-6 text-center">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-cosmic mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </CardContent>
          </CosmicCard>
          
          <CosmicCard className="p-6 text-center">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-cosmic mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </CardContent>
          </CosmicCard>
          
          <CosmicCard className="p-6 text-center">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-cosmic mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Transformation</div>
            </CardContent>
          </CosmicCard>
        </div>
      </div>
    </CosmicSection>
  );
};