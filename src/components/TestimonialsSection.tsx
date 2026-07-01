import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
        <div className="text-center mb-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            What Our Clients Say
          </h2>
        </div>

        <p className="text-center text-sm text-muted-foreground mb-14 max-w-2xl mx-auto">
          Hear directly from the videographers and agencies we work with — no scripts, no actors.
        </p>

        {/* Testimonials Carousel — one slide at a time */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto mb-4"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
              <Card className="shadow-brand border-0 overflow-hidden transition-smooth hover:shadow-glow group flex flex-col md:flex-row max-w-4xl mx-auto">
                  {/* Portrait Video */}
                  <div className="relative w-full md:w-auto h-[320px] sm:h-[380px] md:h-[420px] aspect-[9/16] self-center bg-primary/90">
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
                  <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <div className="mb-3">
                      <Quote className="h-6 w-6 text-primary/30 group-hover:text-primary/50 transition-smooth" />
                    </div>
                    <div className="flex items-center space-x-1 mb-3">
                      {renderStars(5)}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12" />
          <CarouselNext className="right-2 md:-right-12" />
        </Carousel>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-12">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? 'bg-primary w-6'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
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