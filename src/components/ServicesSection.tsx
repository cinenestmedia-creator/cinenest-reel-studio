import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Film, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';
import heroBg from '@/assets/hero-bg.png.asset.json';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Real Estate Video Editing",
      description: "High-end edits designed to showcase properties in their best light and help you attract serious buyers.",
      features: ["Cinematic property tours", "Luxury listing videos", "Drone footage integration", "MLS-ready & social media formats", "Smooth transitions & color grading", "Professional sound design", "2 revision rounds included"]
    },
    {
      icon: Film,
      title: "Short-Form Content (Reels / Ads)",
      description: "Content built for attention, engagement, and growth across social platforms.",
      features: ["Hook-driven edits to stop the scroll", "Fast-paced cuts for higher retention", "Captions & motion graphics", "Optimized for Instagram, TikTok & ads"]
    },
    {
      icon: Lightbulb,
      title: "Content Planning & Strategy",
      description: "Don't know what to shoot? We help you plan it.",
      features: ["Monthly content calendar tailored to your listings", "Shot list and scene breakdown for your videographer", "Platform-specific strategy (Instagram, YouTube, TikTok)", "Hooks and caption suggestions for each video", "Aligned with your brand voice and posting schedule"]
    }
  ];

  return (
    <section 
      id="services" 
      className="section-padding relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroBg.url})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Post-Production Solutions
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Professional video editing and content strategy services designed to help real estate professionals and marketing teams stand out worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="shadow-brand border border-white/10 bg-black/40 backdrop-blur-sm transition-smooth hover:shadow-glow group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg group-hover:bg-secondary/20 transition-smooth">
                      <IconComponent className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-white/70">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Elevate Your Listings?
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can help you create content that converts — so you can focus on closing deals.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            asChild
            className="text-lg px-8 py-3"
          >
            <a
              href="https://calendly.com/cinenestmedia/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
