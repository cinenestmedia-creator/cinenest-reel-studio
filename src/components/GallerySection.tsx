import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LazyVideo from '@/components/LazyVideo';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'realestate', label: 'Real Estate' },
    { id: 'social', label: 'Social Content' }
  ];

  const galleryItems = [
    {
      id: 6,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/1skGbQtAs8g',
      category: 'realestate',
      title: 'Luxury Property Tour',
      description: 'Cinematic property showcase that drives buyer interest',
      isVertical: true
    },
    {
      id: 7,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/t3sZIaL45lA',
      category: 'realestate',
      title: 'Modern Home Walkthrough',
      description: 'Professional property walkthrough',
      isVertical: true
    },
    {
      id: 8,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/eZXZwGRuW7g',
      category: 'social',
      title: 'Property Reel',
      description: 'Scroll-stopping social content for listings',
      isVertical: true
    },
    {
      id: 10,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/k0-Tp6LTsRY',
      category: 'realestate',
      title: 'Estate Feature Film',
      description: 'High-end property presentation',
      isVertical: true
    },
    {
      id: 11,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/8Bip0EG7htA',
      category: 'social',
      title: 'Listing Highlight Reel',
      description: 'Engaging short-form content',
      isVertical: true
    },
    {
      id: 12,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/yn85tlT0Xl8',
      category: 'realestate',
      title: 'Premium Property Video',
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

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A selection of real estate and social media videos crafted to engage, convert, and stand out.
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
            {filteredItems.map((item) => (
              <CarouselItem key={item.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="overflow-hidden shadow-brand border-0 group relative">
                  <div className="overflow-hidden aspect-[9/16] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                    <LazyVideo src={item.src} title={item.title} />
                  </div>
                </Card>

              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default GallerySection;
