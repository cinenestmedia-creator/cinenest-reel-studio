import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Home, Calendar, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Premium Real Estate Video Editing",
      description: "Professional real estate video editing services for agents and developers worldwide. Create compelling property tours that drive sales and engagement.",
      features: ["Property Tours", "Drone Footage", "Virtual Staging", "Marketing Videos"]
    },
    {
      icon: Video,
      title: "Wedding Video Editing",
      description: "Transform your raw wedding footage into cinematic masterpieces. Our expert editors create emotional, story-driven films that you'll treasure forever.",
      features: ["Cinematic Editing", "Color Grading", "Audio Enhancement", "Multiple Formats"]
    },
    {
      icon: Calendar,
      title: "Content & Engagement Planning",
      description: "Strategic content planning and social media management to maximize your reach and engagement across all platforms.",
      features: ["Content Strategy", "Social Media Planning", "Brand Development", "Analytics Tracking"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive video production and editing services tailored to capture your most important moments and showcase your properties in the best light.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="shadow-brand border-0 transition-smooth hover:shadow-glow group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => scrollToSection('contact')}
                    className="group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our professional video production and editing services.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection('contact')}
            className="text-lg px-8 py-3"
          >
            Get Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;