import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Play } from 'lucide-react';

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? 'fill-secondary text-secondary' : 'text-muted-foreground'}`}
      />
    ));
  };


  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            What Our Clients Say
          </h2>
        </div>

        {/* Featured Video Testimonial */}
        <div className="max-w-[720px] mx-auto mb-6">
          <div className="relative aspect-video bg-primary/90 rounded-2xl overflow-hidden flex items-center justify-center group">
            {/* Play Button */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-smooth">
                <Play className="h-7 w-7 text-white fill-white ml-1" />
              </div>
              <span className="text-white/80 text-sm font-medium tracking-wide">
                Client Testimonial Video
              </span>
            </div>

            {/* Optional: iframe embed placeholder — uncomment and replace src when ready */}
            {/*
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Client Testimonial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mb-14">
          Real results from a real client — no scripts, no actors.
        </p>

        {/* Muted note above cards */}
        <p className="text-center text-xs text-muted-foreground mb-6">
          More written reviews coming soon — reach out to us directly for references.
        </p>

        {/* Placeholder Quote Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="shadow-brand border-0 transition-smooth hover:shadow-glow group">
            <CardContent className="p-8">
              <div className="mb-6">
                <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-smooth" />
              </div>
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(5)}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "[Your client quote will go here]"
              </p>
              <div className="border-t pt-6">
                <h4 className="font-semibold text-primary mb-1">
                  [Client Name]
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  Real Estate Videographer
                </p>
                <p className="text-xs text-muted-foreground">
                  United States
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-brand border-0 transition-smooth hover:shadow-glow group">
            <CardContent className="p-8">
              <div className="mb-6">
                <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-smooth" />
              </div>
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(5)}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "[Your second client quote will go here]"
              </p>
              <div className="border-t pt-6">
                <h4 className="font-semibold text-primary mb-1">
                  [Client Name]
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  Marketing Agency
                </p>
                <p className="text-xs text-muted-foreground">
                  Canada
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">48–72 hrs</div>
              <div className="text-white/90">Average delivery time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">2 rounds</div>
              <div className="text-white/90">Revisions included per video</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">Worldwide</div>
              <div className="text-white/90">Clients across US, CA, UK & beyond</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">LOG ready</div>
              <div className="text-white/90">S-Log, C-Log, V-Log & more</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
