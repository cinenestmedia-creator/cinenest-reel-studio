import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import TrustedBySection from '@/components/TrustedBySection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ValuePropositionSection />
          <TrustedBySection />
          <ServicesSection />
          <GallerySection />
          <HowItWorksSection />
          <TestimonialsSection />
          <FAQSection />
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
