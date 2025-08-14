import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="hero-section flex items-center justify-center"
      style={{
        backgroundImage: `var(--hero-overlay), url(${heroBg})`,
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Company Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/3ee3368b-e614-4eef-8313-585a3711793a.png" 
              alt="CineNest Media Logo" 
              className="h-16 w-16 filter brightness-0 invert"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            CineNest Media
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Creating cinematic memories through professional wedding videography and premium real estate video editing worldwide
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection('gallery')}
              className="text-lg px-8 py-3 shadow-glow"
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;