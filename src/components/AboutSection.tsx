import { Card, CardContent } from '@/components/ui/card';
import { Camera, MapPin, Award } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Camera,
      title: "Professional Excellence",
      description: "Years of experience in capturing life's most precious moments with cinematic quality."
    },
    {
      icon: MapPin,
      title: "Global & Local",
      description: "Serving clients worldwide with video editing while specializing in Nepal's beautiful landscapes."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Delivering top-tier wedding videos and real estate content that exceeds expectations."
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            About CineNest Media
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            At CineNest Media, we specialize in creating stunning visual narratives that capture the essence of your most important moments. From intimate weddings in the heart of Nepal to dynamic real estate showcases across the globe, we bring your vision to life with unparalleled creativity and technical expertise.
          </p>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="shadow-brand border-0 transition-smooth hover:shadow-glow">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Company Story */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a passion for storytelling through the lens, CineNest Media has grown from a local photography service in Kathmandu to an internationally recognized video production and editing company. We combine traditional craftsmanship with cutting-edge technology to deliver wedding videos that become family heirlooms and real estate content that drives sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;