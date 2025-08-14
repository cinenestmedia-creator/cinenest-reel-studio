import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      role: "Wedding Clients",
      content: "CineNest Media captured our wedding day perfectly! The team was professional, creative, and made us feel comfortable throughout the entire process. Our wedding film is absolutely stunning and brings tears to our eyes every time we watch it.",
      rating: 5,
      location: "Kathmandu, Nepal"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Real Estate Agent",
      content: "The real estate videos CineNest created for my luxury properties have been game-changers. The quality is exceptional, and the editing perfectly showcases each home's unique features. My sales have increased significantly since working with them.",
      rating: 5,
      location: "California, USA"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Event Organizer",
      content: "Working with CineNest Media for our corporate events has been fantastic. They understand our vision and deliver beyond expectations. The team is reliable, creative, and produces content that truly represents our brand.",
      rating: 5,
      location: "Pokhara, Nepal"
    },
    {
      id: 4,
      name: "Robert & Emma Wilson",
      role: "Wedding Clients",
      content: "From the initial consultation to the final delivery, CineNest Media exceeded all our expectations. They captured not just the events, but the emotions and atmosphere of our special day. Highly recommend!",
      rating: 5,
      location: "London, UK"
    },
    {
      id: 5,
      name: "Amanda Rodriguez",
      role: "Property Developer",
      content: "The marketing videos CineNest produced for our development project were instrumental in our pre-sales success. Their attention to detail and understanding of what buyers want to see is remarkable.",
      rating: 5,
      location: "Miami, USA"
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

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with CineNest Media.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="shadow-brand border-0 transition-smooth hover:shadow-glow group">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-smooth" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
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
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">500+</div>
              <div className="text-white/90">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">1000+</div>
              <div className="text-white/90">Videos Created</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">25+</div>
              <div className="text-white/90">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">5★</div>
              <div className="text-white/90">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;