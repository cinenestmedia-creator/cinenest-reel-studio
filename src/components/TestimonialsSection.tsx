import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "David Chen",
      role: "Real Estate Agent",
      content: "The real estate videos CineNest created for my luxury properties have been game-changers. The quality is exceptional, and the editing perfectly showcases each home's unique features. My sales have increased significantly since working with them.",
      rating: 5,
      location: "California, USA"
    },
    {
      id: 2,
      name: "Amanda Rodriguez",
      role: "Property Developer",
      content: "The marketing videos CineNest produced for our development project were instrumental in our pre-sales success. Their attention to detail and understanding of what buyers want to see is remarkable.",
      rating: 5,
      location: "Miami, USA"
    },
    {
      id: 3,
      name: "James Mitchell",
      role: "Real Estate Media Team Lead",
      content: "CineNest has become our go-to post-production partner. They handle everything from cinematic property tours to short-form social content — fast, consistent, and always on-brand. It's like having an in-house editing team.",
      rating: 5,
      location: "Toronto, Canada"
    },
    {
      id: 4,
      name: "Sarah Thompson",
      role: "Luxury Real Estate Agent",
      content: "Working with CineNest Media has transformed how I market my listings. Every video they produce helps me stand out in a competitive market. My clients are always impressed with the quality.",
      rating: 5,
      location: "New York, USA"
    },
    {
      id: 5,
      name: "Marcus Lee",
      role: "Real Estate Videographer",
      content: "As a filmmaker, finding reliable editors is everything. CineNest delivers consistent, high-quality edits with fast turnaround. They understand the real estate market and what agents need to sell.",
      rating: 5,
      location: "Vancouver, Canada"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'fill-secondary text-secondary' : 'text-muted-foreground'}`} 
      />
    ));
  };

  // Count-up animation
  const statsRef = useRef<HTMLDivElement>(null);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counts, setCounts] = useState({ videos: 0, clients: 0, countries: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [countersStarted]);

  useEffect(() => {
    if (!countersStarted) return;
    const targets = { videos: 1000, clients: 500, countries: 25 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        videos: Math.round(targets.videos * progress),
        clients: Math.round(targets.clients * progress),
        countries: Math.round(targets.countries * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [countersStarted]);

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it — hear from professionals who trust CineNest Media.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-brand border-0 transition-smooth hover:shadow-glow group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-smooth" />
                </div>
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-primary mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="bg-primary rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">{counts.videos}+</div>
              <div className="text-white/90">Videos Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">{counts.clients}+</div>
              <div className="text-white/90">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">{counts.countries}+</div>
              <div className="text-white/90">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">5★</div>
              <div className="text-white/90">Average Rating</div>
            </div>
          </div>
          <p className="text-center text-white/60 text-sm mt-6">
            Helping clients create content that performs — not just looks good.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
