import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Home, DollarSign, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const RealEstatePricing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    {
      name: "Pro Monthly Plan",
      subtitle: "Best Value",
      price: "From $50",
      priceDetail: "per video",
      minimum: "Minimum: 2 videos per week",
      icon: Users,
      description: "For filmmakers or agencies producing multiple listings per month.",
      features: [
        "Full cinematic edit (up to 2 minutes)",
        "Advanced color grading + sound design",
        "Transitions, logo animation & lower thirds",
        "Priority 48-hour delivery",
        "Up to 2 revisions per video",
        "Dedicated editor & project folder"
      ],
      ideal: "Perfect for teams managing several listings each week who want consistent quality and faster turnaround.",
      variant: "default" as const
    },
    {
      name: "Standard Plan",
      subtitle: "Pay as You Go",
      price: "From $70",
      priceDetail: "per video",
      minimum: "Minimum: 1 video per week",
      icon: Home,
      description: "For independent videographers with up to 4 real estate videos per month.",
      features: [
        "Full cinematic edit (up to 2 minutes)",
        "Professional color & audio mix",
        "Smooth transitions + basic motion graphics",
        "48–72 hour delivery",
        "1 revision included"
      ],
      ideal: "Ideal for solo creators shooting 1–2 listings per week.",
      variant: "outline" as const
    }
  ];

  const howItWorks = [
    {
      icon: Clock,
      title: "Upload Your Footage",
      description: "Share via Google Drive or Frame.io"
    },
    {
      icon: DollarSign,
      title: "We Edit & Deliver",
      description: "Within 48–72 hours"
    },
    {
      icon: Check,
      title: "Review & Publish",
      description: "Request tweaks and publish"
    }
  ];

  const whyChooseUs = [
    "U.S.-standard storytelling & cinematic tone",
    "Fast, reliable, and consistent edits",
    "Clear pricing with no hidden fees",
    "Dedicated creative partner — not just an editor"
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative" 
         style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <Button
              variant="ghost"
              onClick={() => navigate('/real-estate-portfolio')}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>

            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                🏡 Real Estate Video Editing Packages
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Fast, consistent & cinematic edits for real estate filmmakers
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {packages.map((pkg) => {
                const Icon = pkg.icon;
                return (
                  <Card key={pkg.name} className="relative overflow-hidden shadow-brand">
                    {pkg.subtitle === "Best Value" && (
                      <div className="absolute top-0 right-0 bg-secondary text-primary px-4 py-1 text-sm font-semibold rounded-bl-lg">
                        {pkg.subtitle}
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="h-12 w-12 text-primary" />
                      </div>
                      <CardTitle className="text-3xl mb-2">{pkg.name}</CardTitle>
                      <CardDescription className="text-base">{pkg.description}</CardDescription>
                      <div className="mt-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                          <span className="text-muted-foreground">{pkg.priceDetail}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{pkg.minimum}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-3">What's Included:</h4>
                          <ul className="space-y-2">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t">
                          <p className="text-sm text-muted-foreground">
                            🔥 {pkg.ideal}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* How It Works */}
            <div className="mb-16 bg-muted/50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                🕒 How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {howItWorks.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  );
                })}
              </div>
              <p className="text-center mt-8 text-muted-foreground">
                Pay only for the plan that fits your monthly volume
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                🚀 Why Real Estate Filmmakers Choose CineNest
              </h2>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {whyChooseUs.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-12">
              <h2 className="text-3xl font-bold mb-4">
                📩 Ready to Scale Your Listings?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Let's make your next property video unforgettable.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-lg px-8 py-6"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default RealEstatePricing;
