import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Check, Home, DollarSign, Clock, Users } from 'lucide-react';

interface RealEstatePricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RealEstatePricingModal = ({ isOpen, onClose }: RealEstatePricingModalProps) => {
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

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold text-primary text-center">
            🏡 Real Estate Video Editing Packages
          </DialogTitle>
          <p className="text-center text-muted-foreground text-lg pt-2">
            Fast, consistent & cinematic edits for real estate filmmakers
          </p>
        </DialogHeader>
        
        <div className="space-y-8 py-4">
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6">
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
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <CardDescription className="text-sm">{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                        <span className="text-muted-foreground text-sm">{pkg.priceDetail}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{pkg.minimum}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">What's Included:</h4>
                        <ul className="space-y-1.5">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                              <span className="text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-3 border-t">
                        <p className="text-xs text-muted-foreground">
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
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              🕒 How It Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {howItWorks.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/20 mb-3">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="font-semibold text-base mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-center mt-6 text-sm text-muted-foreground">
              Pay only for the plan that fits your monthly volume
            </p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">
              🚀 Why Real Estate Filmmakers Choose CineNest
            </h3>
            <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
              {whyChooseUs.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-muted/30 p-3 rounded-lg">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-3">
              📩 Ready to Scale Your Listings?
            </h3>
            <p className="text-base mb-5 opacity-90">
              Let's make your next property video unforgettable.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RealEstatePricingModal;
