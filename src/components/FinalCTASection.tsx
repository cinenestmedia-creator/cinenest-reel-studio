import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Content?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Let's turn your footage into videos that actually perform and help you stand out in your market.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-lg px-10 py-4 shadow-glow"
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
          <p className="text-white/50 text-sm mt-6">
            Limited onboarding slots each month
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
