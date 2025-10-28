import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WeddingPricingModal from './WeddingPricingModal';
import RealEstatePricingModal from './RealEstatePricingModal';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('realestate');
  const [showWeddingPricing, setShowWeddingPricing] = useState(false);
  const [showRealEstatePricing, setShowRealEstatePricing] = useState(false);

  const categories = [
    { id: 'weddings', label: 'Weddings' },
    { id: 'realestate', label: 'Real Estate' }
  ];

  const galleryItems = [
    // Wedding Videos
    {
      id: 1,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/UiuTtVdX3E0',
      category: 'weddings',
      title: 'Wedding Film 1',
      description: 'Cinematic wedding celebration captured with artistic vision'
    },
    {
      id: 2,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/RmxWvtwZ10c',
      category: 'weddings',
      title: 'Wedding Film 2',
      description: 'Beautiful moments from a special wedding day'
    },
    {
      id: 3,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/FZxZW3ELkY4',
      category: 'weddings',
      title: 'Wedding Story',
      description: 'Emotional journey of love and commitment'
    },
    {
      id: 4,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/cPtMXzGYod8',
      category: 'weddings',
      title: 'Wedding Ceremony',
      description: 'Sacred moments beautifully documented'
    },
    {
      id: 5,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/AUHBIrbpwmU',
      category: 'weddings',
      title: 'Wedding Celebration',
      description: 'Joyful celebration of union and love'
    },
    {
      id: 9,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/0JfWCamUSts',
      category: 'weddings',
      title: 'Wedding Moments',
      description: 'Cherished memories beautifully captured'
    },
    // Real Estate Videos
    {
      id: 6,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/1skGbQtAs8g',
      category: 'realestate',
      title: 'Property Showcase 1',
      description: 'Stunning real estate presentation',
      isVertical: true
    },
    {
      id: 7,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/t3sZIaL45lA',
      category: 'realestate',
      title: 'Property Tour',
      description: 'Professional property walkthrough',
      isVertical: true
    },
    {
      id: 8,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/eZXZwGRuW7g',
      category: 'realestate',
      title: 'Real Estate Film',
      description: 'Cinematic property showcase',
      isVertical: true
    },
    {
      id: 10,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/k0-Tp6LTsRY',
      category: 'realestate',
      title: 'Property Showcase',
      description: 'Modern property presentation',
      isVertical: true
    },
    {
      id: 11,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/8Bip0EG7htA',
      category: 'realestate',
      title: 'Estate Feature',
      description: 'Luxury property highlight',
      isVertical: true
    },
    {
      id: 12,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/yn85tlT0Xl8',
      category: 'realestate',
      title: 'Property Video',
      description: 'Professional estate showcase',
      isVertical: true
    },
    {
      id: 13,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/ay82TL5DPXE',
      category: 'realestate',
      title: 'Real Estate Tour',
      description: 'Detailed property walkthrough',
      isVertical: true
    }
  ];

  const filteredItems = galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our collection of wedding films, real estate showcases, and event coverage that showcase our commitment to visual excellence.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-smooth"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full mb-12"
        >
          <CarouselContent className="-ml-4">
            {filteredItems.map((item) => {
              const isVertical = item.isVertical;
              return (
                <CarouselItem key={item.id} className={`pl-4 ${isVertical ? 'basis-1/2 md:basis-1/3 lg:basis-1/4' : 'basis-full md:basis-1/2 lg:basis-1/2'}`}>
                  <Card className="overflow-hidden shadow-brand border-0">
                    <div className={`overflow-hidden ${isVertical ? 'aspect-[9/16] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]' : 'aspect-video h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]'}`}>
                      <iframe
                        src={item.src}
                        title={item.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>

        {/* View Pricing Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => {
              if (selectedCategory === 'weddings') {
                setShowWeddingPricing(true);
              } else {
                setShowRealEstatePricing(true);
              }
            }}
          >
            View Pricing
          </Button>
        </div>
      </div>

      {/* Pricing Modals */}
      <WeddingPricingModal 
        isOpen={showWeddingPricing} 
        onClose={() => setShowWeddingPricing(false)} 
      />
      <RealEstatePricingModal 
        isOpen={showRealEstatePricing} 
        onClose={() => setShowRealEstatePricing(false)} 
      />
    </section>
  );
};

export default GallerySection;