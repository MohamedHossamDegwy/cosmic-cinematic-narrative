import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import cosmicHeroBg from "@/assets/cosmic-hero-bg.jpg";

export const CosmicHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-cosmic min-h-screen flex items-center justify-center relative">
      {/* Cosmic Background with Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-zoom-in"
        style={{ 
          backgroundImage: `url(${cosmicHeroBg})`,
          filter: 'brightness(0.7) contrast(1.1)',
        }}
      />
      
      {/* Geometric Overlays */}
      <div className="geometric-overlay w-96 h-96 top-20 left-10 opacity-30" />
      <div className="geometric-overlay w-64 h-64 bottom-32 right-20 opacity-20" style={{ animationDelay: '2s' }} />
      <div className="geometric-overlay w-48 h-48 top-1/2 right-1/3 opacity-25" style={{ animationDelay: '4s' }} />
      
      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 max-w-6xl transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Cosmic Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-cosmic">Transformation</span>
          <br />
          <span className="text-starlight">begins where others stop</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Welcome to Evonour - a space for radical self-renewal. Our retreats and coaching programs uniquely combine 
          <span className="text-accent font-semibold"> deep psychological clarity, spiritual healing, and physical nutrient activation </span>
          into a transformative journey unlike any other.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-cosmic px-8 py-4 text-lg font-semibold cosmic-glow"
          >
            Discover Your Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 bg-background/10 backdrop-blur-sm hover:bg-primary/10 px-8 py-4 text-lg"
          >
            Our Retreats
          </Button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-20 left-1/4 w-4 h-4 bg-accent rounded-full animate-cosmic-float opacity-60" />
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-primary rounded-full animate-cosmic-float opacity-80" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-10 left-1/3 w-5 h-5 bg-accent/70 rounded-full animate-cosmic-float" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};