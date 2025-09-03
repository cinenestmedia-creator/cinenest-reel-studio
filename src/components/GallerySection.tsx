import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'realestate', label: 'Real Estate' },
    { id: 'events', label: 'Events & Ads' }
  ];

  const galleryItems = [
    // Wedding Videos
    {
      id: 1,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/0JfWCamUSts',
      category: 'wedding',
      title: 'Wedding Film 1',
      description: 'Cinematic wedding celebration captured with artistic vision'
    },
    {
      id: 2,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/8csGUSr4Wok',
      category: 'wedding',
      title: 'Wedding Highlights',
      description: 'Beautiful moments from a special wedding day'
    },
    {
      id: 3,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/JGtRDFOAM8o',
      category: 'wedding',
      title: 'Wedding Story',
      description: 'Emotional journey of love and commitment'
    },
    {
      id: 4,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/xa0za9ab22I',
      category: 'wedding',
      title: 'Wedding Ceremony',
      description: 'Sacred moments beautifully documented'
    },
    {
      id: 5,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/7yWvNRFFvd8',
      category: 'wedding',
      title: 'Wedding Celebration',
      description: 'Joyful celebration of union and love'
    },
    {
      id: 6,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/KDRY1DaWVEg',
      category: 'wedding',
      title: 'Wedding Film',
      description: 'Complete wedding story told through cinematic lens'
    },
    // Real Estate Videos
    {
      id: 7,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/8Bip0EG7htA',
      category: 'realestate',
      title: 'Property Showcase 1',
      description: 'Stunning real estate presentation'
    },
    {
      id: 8,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/yn85tlT0Xl8',
      category: 'realestate',
      title: 'Property Tour',
      description: 'Professional property walkthrough'
    },
    {
      id: 9,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/ay82TL5DPXE',
      category: 'realestate',
      title: 'Real Estate Film',
      description: 'Cinematic property showcase'
    },
    {
      id: 10,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/k0-Tp6LTsRY',
      category: 'realestate',
      title: 'Property Highlight',
      description: 'Premium real estate presentation'
    },
    {
      id: 11,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/3JXPvJQgijE',
      category: 'realestate',
      title: 'Luxury Property',
      description: 'High-end real estate video production'
    },
    // Events and Ads
    {
      id: 12,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/eLnQfWhCYQo',
      category: 'events',
      title: 'Event Coverage',
      description: 'Professional event documentation'
    },
    {
      id: 13,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/gh6O7iMWe0Q',
      category: 'events',
      title: 'Corporate Event',
      description: 'Business event highlights'
    },
    {
      id: 14,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/mx1lfdarzLU',
      category: 'events',
      title: 'Advertisement Film',
      description: 'Creative commercial production'
    },
    {
      id: 15,
      type: 'youtube',
      src: 'https://www.youtube.com/embed/TSd6csn9Nxg',
      category: 'events',
      title: 'Event Highlight',
      description: 'Memorable moments captured professionally'
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

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <Card key={item.id} className="overflow-hidden shadow-brand border-0">
              <div className="aspect-video overflow-hidden">
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
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-3"
            onClick={() => window.open('https://www.instagram.com/cinenest_media', '_blank')}
          >
            View Complete Portfolio
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;