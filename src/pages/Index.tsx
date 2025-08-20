import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative" 
         style={{ backgroundImage: 'url(/assets/hero-bg.jpg)' }}>
      <div className="min-h-screen bg-white/80 backdrop-blur-sm">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <GallerySection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default Index;
