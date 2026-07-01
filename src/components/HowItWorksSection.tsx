import { Upload, Sparkles, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import heroBg from '@/assets/hero-bg.png.asset.json';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      step: "01",
      title: "Send Your Footage",
      description: "Upload your raw clips and share your vision. We'll take it from there."
    },
    {
      icon: Sparkles,
      step: "02",
      title: "We Edit & Optimize",
      description: "We craft your video with cinematic quality and performance in mind."
    },
    {
      icon: Rocket,
      step: "03",
      title: "You Review & Scale",
      description: "Request revisions if needed and start using your content to grow your business."
    }
  ];

  return (
    <section 
      id="how-it-works"
      className="section-padding relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroBg.url})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            A simple, streamlined process designed to save you time and deliver results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="shadow-brand border border-white/10 bg-black/40 backdrop-blur-sm transition-smooth hover:shadow-glow relative overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
                    {item.step}
                  </div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
