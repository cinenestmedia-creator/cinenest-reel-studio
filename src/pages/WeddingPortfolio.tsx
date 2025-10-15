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

const WeddingPortfolio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const weddingVideos = [
    {
      id: 1,
      src: 'https://www.youtube.com/embed/UiuTtVdX3E0',
      title: 'Wedding Film 1',
      description: 'Cinematic wedding celebration captured with artistic vision'
    },
    {
      id: 2,
      src: 'https://www.youtube.com/embed/RmxWvtwZ10c',
      title: 'Wedding Film 2',
      description: 'Beautiful moments from a special wedding day'
    },
    {
      id: 3,
      src: 'https://www.youtube.com/embed/FZxZW3ELkY4',
      title: 'Wedding Story',
      description: 'Emotional journey of love and commitment'
    },
    {
      id: 4,
      src: 'https://www.youtube.com/embed/cPtMXzGYod8',
      title: 'Wedding Ceremony',
      description: 'Sacred moments beautifully documented'
    },
    {
      id: 5,
      src: 'https://www.youtube.com/embed/AUHBIrbpwmU',
      title: 'Wedding Celebration',
      description: 'Joyful celebration of union and love'
    },
    {
      id: 6,
      src: 'https://www.youtube.com/embed/0JfWCamUSts',
      title: 'Wedding Moments',
      description: 'Cherished memories beautifully captured'
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
                Wedding Portfolio
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Cinematic wedding films that capture the magic, emotion, and beauty of your special day.
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full mb-12"
            >
              <CarouselContent className="-ml-4">
                {weddingVideos.map((video) => (
                  <CarouselItem key={video.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                    <Card className="overflow-hidden shadow-brand border-0">
                      <div className="overflow-hidden aspect-video h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
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

export default WeddingPortfolio;
