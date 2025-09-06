import { CosmicSection, CosmicCard } from "./CosmicSection";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Deep Psychological Clarity",
    description: "Experience profound mental clarity through our carefully designed therapeutic approaches that address the root of personal transformation.",
    icon: "🧠"
  },
  {
    title: "Spiritual Healing",
    description: "Connect with your authentic self through sacred practices that awaken your inner wisdom and spiritual essence.",
    icon: "✨"
  },
  {
    title: "Physical Nutrient Activation",
    description: "Revitalize your body with specialized nutrition programs that support your transformation at the cellular level.",
    icon: "🌿"
  },
  {
    title: "Exclusive Retreats",
    description: "Intimate, luxury retreat experiences designed for profound personal breakthrough in breathtaking natural settings.",
    icon: "🏔️"
  },
  {
    title: "Personal Coaching",
    description: "One-on-one guidance from expert coaches who understand the journey of radical self-renewal and authentic living.",
    icon: "🎯"
  },
  {
    title: "Holistic Integration",
    description: "Comprehensive approach that seamlessly weaves together mind, body, and spirit for lasting transformation.",
    icon: "🔮"
  }
];

export const FeaturesSection = () => {
  return (
    <CosmicSection 
      title="Our Transformative Services"
      subtitle="Discover the comprehensive approach that makes Evonour's transformation programs exclusive, profound, and unforgettable"
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