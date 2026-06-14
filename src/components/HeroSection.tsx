import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

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
        background: 'linear-gradient(135deg, #0A0A0A 0%, #0D1F14 100%)',
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Raw Footage,{' '}
            <span className="text-secondary">Transformed.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            We help real estate agents, videographers, and media teams worldwide turn raw clips into cinematic, high-converting videos — with fast delivery and dedicated editors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8 py-3 shadow-glow"
            >
              <a
                href="https://calendly.com/cinenestmedia/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-5 w-5" />
                Book a Call
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('gallery')}
              className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Line — delivery speed */}
          <p className="mt-6 text-secondary text-sm font-medium">
            ⚡ Most edits delivered within 48–72 hours
          </p>

          {/* Trust Line — features */}
          <div className="mt-4">
            <p className="text-white/50 text-xs tracking-widest uppercase">
              48–72 hr delivery &nbsp;·&nbsp; 2 revision rounds &nbsp;·&nbsp; Real estate & marketing edits
            </p>
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
