import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroBg from '@/assets/hero-bg.jpg';

const RealEstatePortfolio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const realEstateVideos = [
    {
      id: 1,
      src: 'https://www.youtube.com/embed/1skGbQtAs8g',
      title: 'Property Showcase 1',
      description: 'Stunning real estate presentation'
    },
    {
      id: 2,
      src: 'https://www.youtube.com/embed/t3sZIaL45lA',
      title: 'Property Tour',
      description: 'Professional property walkthrough'
    },
    {
      id: 3,
      src: 'https://www.youtube.com/embed/eZXZwGRuW7g',
      title: 'Real Estate Film',
      description: 'Cinematic property showcase'
    },
    {
      id: 4,
      src: 'https://www.youtube.com/embed/k0-Tp6LTsRY',
      title: 'Property Showcase',
      description: 'Modern property presentation'
    },
    {
      id: 5,
      src: 'https://www.youtube.com/embed/8Bip0EG7htA',
      title: 'Estate Feature',
      description: 'Luxury property highlight'
    },
    {
      id: 6,
      src: 'https://www.youtube.com/embed/yn85tlT0Xl8',
      title: 'Property Video',
      description: 'Professional estate showcase'
    },
    {
      id: 7,
      src: 'https://www.youtube.com/embed/ay82TL5DPXE',
      title: 'Real Estate Tour',
      description: 'Detailed property walkthrough'
    }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative" 
         style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="min-h-screen bg-white/80 backdrop-blur-sm">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>

            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
                Real Estate Portfolio
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Professional property showcase videos that drive sales and engagement.
              </p>
              <Button 
                variant="secondary"
                size="lg"
                onClick={() => navigate('/real-estate-pricing')}
                className="mt-4"
              >
                View Pricing Packages
              </Button>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full mb-12"
            >
              <CarouselContent className="-ml-4">
                {realEstateVideos.map((video) => (
                  <CarouselItem key={video.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <Card className="overflow-hidden shadow-brand border-0">
                      <div className="overflow-hidden aspect-[9/16] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                        <iframe
                          src={video.src}
                          title={video.title}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                        <p className="text-sm text-muted-foreground">{video.description}</p>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>

            <div className="text-center">
              <Button 
                size="lg" 
                variant="default"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default RealEstatePortfolio;
