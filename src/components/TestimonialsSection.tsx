import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? 'fill-secondary text-secondary' : 'text-muted-foreground'}`}
      />
    ));
  };

  const testimonials = [
    {
      videoId: '1202075506',
      quote: 'We needed somebody who could edit our content and work with an international team, and Dhiraj has been a perfect fit — saving us time, saving us money, all while producing top-notch content. I couldn\'t recommend him more highly.',
      name: 'Caleb Speer',
      title: 'Founder, Portal Bikes',
      location: 'United States',
    },
    {
      videoId: '1202075547',
      quote: 'Not only is he a very great editor, he actually just cares a lot about each individual project — asking questions, always trying to see how we can improve the edit. He\'s very easy to communicate with, very clear with turnaround times, and it always turns around quickly and well done. I would 100% recommend CineNest Media for editing support.',
      name: 'Enzo',
      title: 'Videographer',
      location: 'British Columbia, Canada',
    },
    {
      videoId: '1202075560',
      quote: 'Dhiraj and his team work on 90% of our clients — a huge variety of businesses — and they\'re able to address each brand individually with enough creativity to deliver exactly what we need. Their communication and professionalism is honestly quite amazing. We think he\'s a complete professional and we\'re really happy to have him on our side.',
      name: 'Tom',
      title: 'Media Company',
      location: 'Los Angeles, USA',
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            What Our Clients Say
          </h2>
        </div>

        <p className="text-center text-sm text-muted-foreground mb-14 max-w-2xl mx-auto">
          Hear directly from the videographers and agencies we work with — no scripts, no actors.
        </p>

        {/* Testimonial Cards — single horizontal row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-brand border-0 overflow-hidden transition-smooth hover:shadow-glow group flex flex-col md:flex-row"
            >
              {/* Portrait Video */}
              <div className="relative w-full md:w-1/2 aspect-[9/16] self-center bg-primary/90">
                <iframe
                  src={`https://player.vimeo.com/video/${testimonial.videoId}`}
                  title={`${testimonial.name} Testimonial`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Quote Card */}
              <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
                <div className="mb-3">
                  <Quote className="h-6 w-6 text-primary/30 group-hover:text-primary/50 transition-smooth" />
                </div>
                <div className="flex items-center space-x-1 mb-3">
                  {renderStars(5)}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-3 mt-auto">
                  <h4 className="font-semibold text-primary mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {testimonial.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white mt-16">
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
