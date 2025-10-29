import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Check, Heart, Music, Sparkles, Palette } from 'lucide-react';

interface WeddingPricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WeddingPricingModal = ({ isOpen, onClose }: WeddingPricingModalProps) => {
  const features = [
    "Professional pacing & rhythm",
    "Carefully curated music selection",
    "Emotional storytelling & narrative flow",
    "Advanced color grading",
    "Sound design & audio mixing",
    "Smooth transitions & motion graphics",
    "Highlight reel creation",
    "Up to 2 revisions included",
    "5-7 business day delivery"
  ];

  const howItWorks = [
    {
      icon: Heart,
      title: "Share Your Vision",
      description: "Tell us your story & upload footage"
    },
    {
      icon: Sparkles,
      title: "We Create Magic",
      description: "Professional editing with cinematic storytelling"
    },
    {
      icon: Music,
      title: "Perfect & Deliver",
      description: "Revisions & final delivery ready to share"
    }
  ];

  const whyChooseUs = [
    "Cinematic quality that captures every emotion",
    "Fast turnaround without compromising quality",
    "Personalized attention to your unique story",
    "Professional-grade color grading & audio"
  ];

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold text-primary text-center">
            💍 Wedding Video Editing
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8 py-4">
          {/* Pricing Card */}
          <Card className="shadow-brand border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <Heart className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-3xl mb-2">Wedding Package</CardTitle>
              <CardDescription className="text-base">
                Transform your special day into a timeless cinematic masterpiece
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">What's Included:</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              💫 How It Works
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
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">
              ✨ Why Choose CineNest for Your Wedding
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
              💝 Ready to Preserve Your Beautiful Memories?
            </h3>
            <p className="text-base mb-5 opacity-90">
              Let's create a wedding video you'll treasure forever.
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

export default WeddingPricingModal;
