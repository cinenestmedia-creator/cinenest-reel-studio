import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroPoster from '@/assets/hero-poster.png.asset.json';

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
      className="hero-section flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div 
        className="hero-video-wrapper z-0"
        style={{ backgroundImage: `url(${heroPoster.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >

        <iframe
          src="https://player.vimeo.com/video/1206184342?background=1&autoplay=1&muted=1&loop=1&playsinline=1&dnt=1"
          title="CineNest Media Background Video"
          className="hero-video-iframe"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="eager"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white relative z-20">
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

        </div>
      </div>
    </section>
  );
};

export default HeroSection;