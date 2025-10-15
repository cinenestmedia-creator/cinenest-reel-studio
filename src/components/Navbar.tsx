import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Portfolio', hasDropdown: true },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-blur shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/3ee3368b-e614-4eef-8313-585a3711793a.png" 
              alt="CineNest Media Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold">
              <span className="text-primary">Cine</span>
              <span className="text-white">Nest Media</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.hasDropdown && item.id === 'gallery') {
                return (
                  <DropdownMenu key={item.id}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`text-sm font-medium transition-smooth hover:text-primary flex items-center gap-1 ${
                          activeSection === item.id 
                            ? 'text-primary border-b-2 border-primary' 
                            : 'text-foreground/80'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background z-50 border shadow-lg">
                      <DropdownMenuItem 
                        onClick={() => navigate('/wedding-portfolio')}
                        className="cursor-pointer hover:bg-muted"
                      >
                        Wedding Portfolio
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => navigate('/real-estate-portfolio')}
                        className="cursor-pointer hover:bg-muted"
                      >
                        Real Estate Portfolio
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-smooth hover:text-primary ${
                    activeSection === item.id 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-foreground/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <Button 
            variant="default"
            onClick={() => scrollToSection('contact')}
            className="hidden md:block"
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden"
            onClick={() => scrollToSection('contact')}
          >
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;