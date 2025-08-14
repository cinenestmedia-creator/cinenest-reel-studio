import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Eye, ExternalLink } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'realestate', label: 'Real Estate' },
    { id: 'events', label: 'Events' }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: gallery1,
      category: 'realestate',
      title: 'Luxury Villa Tour',
      description: 'Professional real estate video showcasing modern architecture'
    },
    {
      id: 2,
      type: 'image',
      src: gallery2,
      category: 'wedding',
      title: 'Mountain Wedding',
      description: 'Cinematic wedding film in Nepal\'s beautiful landscapes'
    },
    {
      id: 3,
      type: 'image',
      src: gallery3,
      category: 'events',
      title: 'Corporate Event',
      description: 'Professional event coverage and highlights'
    },
    {
      id: 4,
      type: 'video',
      src: 'https://sample-videos.com/zip/10/mp4/480/SampleVideo_1280x720_1mb.mp4',
      poster: gallery1,
      category: 'realestate',
      title: 'Property Showcase',
      description: 'Dynamic real estate presentation video'
    },
    {
      id: 5,
      type: 'video',
      src: 'https://sample-videos.com/zip/10/mp4/480/SampleVideo_1280x720_2mb.mp4',
      poster: gallery2,
      category: 'wedding',
      title: 'Wedding Highlights',
      description: 'Emotional wedding day story'
    },
    {
      id: 6,
      type: 'image',
      src: gallery3,
      category: 'events',
      title: 'Event Photography',
      description: 'Capturing special moments and celebrations'
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
            <Card key={item.id} className="group overflow-hidden shadow-brand border-0 transition-smooth hover:shadow-glow">
              <div className="relative aspect-video overflow-hidden">
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img 
                      src={item.poster} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <video 
                      src={item.src}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      muted
                      loop
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    />
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      {item.type === 'video' ? (
                        <Button size="sm" variant="secondary" className="rounded-full">
                          <Play className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button size="sm" variant="secondary" className="rounded-full">
                          <Eye className="h-4 w-4" />
                        </Button>
                      )}
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="text-lg px-8 py-3">
            View Complete Portfolio
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;