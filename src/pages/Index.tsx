import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TrustedBySection from '@/components/TrustedBySection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FinalCTASection from '@/components/FinalCTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import heroBg from '@/assets/hero-bg.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative" 
         style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="min-h-screen bg-white/80 backdrop-blur-sm">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <TrustedBySection />
          <ServicesSection />
          <GallerySection />
          <HowItWorksSection />
          <TestimonialsSection />
          <FinalCTASection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default Index;
