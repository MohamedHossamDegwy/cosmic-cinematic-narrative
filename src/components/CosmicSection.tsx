import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface CosmicSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const CosmicSection = ({ title, subtitle, children, className = "" }: CosmicSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-20 px-6 relative ${className}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 section-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-cosmic">{title}</span>
          </h2>
          {subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Content */}
        <div className={`section-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          {children}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-cosmic-float opacity-30" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/20 rounded-full animate-cosmic-float opacity-20" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export const CosmicCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <Card className={`bg-card/50 backdrop-blur-sm border-border/50 cosmic-glow hover:border-primary/30 transition-all duration-500 ${className}`}>
      {children}
    </Card>
  );
};