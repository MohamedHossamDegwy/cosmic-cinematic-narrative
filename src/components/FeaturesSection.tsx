import { CosmicSection, CosmicCard } from "./CosmicSection";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Cinematic Design",
    description: "Experience storytelling through design with smooth transitions and atmospheric visuals that captivate your audience.",
    icon: "✨"
  },
  {
    title: "Cosmic Animations",
    description: "Fluid, space-inspired animations that bring your content to life with stellar transitions and effects.",
    icon: "🌌"
  },
  {
    title: "Responsive Universe",
    description: "Perfect experience across all devices, from mobile to desktop, with seamless cosmic aesthetics.",
    icon: "🚀"
  },
  {
    title: "Modular System",
    description: "Build and customize your digital presence with our flexible, component-based architecture.",
    icon: "⚡"
  },
  {
    title: "Deep Space Palette",
    description: "Rich cosmic colors and gradients that create depth and visual hierarchy throughout your interface.",
    icon: "🎨"
  },
  {
    title: "Stellar Performance",
    description: "Optimized for speed and efficiency, delivering smooth experiences that feel truly otherworldly.",
    icon: "⭐"
  }
];

export const FeaturesSection = () => {
  return (
    <CosmicSection 
      title="Stellar Features"
      subtitle="Discover the cosmic capabilities that set your digital presence apart"
      className="bg-gradient-to-b from-background via-card/30 to-background"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <CosmicCard key={index} className="p-6 group hover:scale-105 transition-transform duration-300">
            <CardContent className="p-0">
              <div className="text-4xl mb-4 group-hover:animate-cosmic-float">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </CosmicCard>
        ))}
      </div>
    </CosmicSection>
  );
};