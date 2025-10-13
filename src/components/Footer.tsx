import { Separator } from '@/components/ui/separator';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/cinenestmedia/",
      label: "Instagram"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/cinenestmedia",
      label: "Facebook"
    },
    {
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7.93a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.36z"/>
        </svg>
      ),
      href: "https://www.tiktok.com/@cinenest.media",
      label: "TikTok"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/3ee3368b-e614-4eef-8313-585a3711793a.png" 
                alt="CineNest Media Logo" 
                className="h-8 w-8 filter brightness-0 invert"
              />
              <span className="text-xl font-bold">CineNest Media</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Creating cinematic memories through professional wedding videography and premium real estate video editing worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", id: "hero" },
                { label: "About", id: "about" },
                { label: "Services", id: "services" },
                { label: "Gallery", id: "gallery" },
                { label: "Contact", id: "contact" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-white transition-smooth text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a 
                  href="mailto:contact@cinenestmedia.com"
                  className="text-white/80 hover:text-white transition-smooth text-sm"
                >
                  contact@cinenestmedia.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a 
                  href="tel:+9779849668301"
                  className="text-white/80 hover:text-white transition-smooth text-sm"
                >
                  +977-9849668301
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} CineNest Media. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white transition-smooth text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-smooth text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;