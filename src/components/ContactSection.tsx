import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Instagram, Facebook, MessageCircle, Calendar } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@cinenestmedia.com",
      href: "mailto:contact@cinenestmedia.com"
    },
    {
      icon: Phone,
      label: "Phone/WhatsApp",
      value: "+977-9849668301",
      href: "tel:+9779849668301"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/cinenestmedia/",
      color: "hover:text-pink-500"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/cinenestmedia",
      color: "hover:text-blue-500"
    },
    {
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7.93a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.36z"/>
        </svg>
      ),
      label: "TikTok",
      href: "https://www.tiktok.com/@cinenest.media",
      color: "hover:text-black"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to create content that converts? Reach out and let's discuss how we can help you grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Message Us */}
          <Card className="shadow-brand border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Choose your preferred way to connect — we typically respond within a few hours.
              </p>
              
              <Button asChild size="lg" className="w-full text-lg py-6">
                <a
                  href="https://calendly.com/cinenestmedia/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Calendar className="h-6 w-6" />
                  Book a Call
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="w-full text-lg py-6">
                <a
                  href="https://wa.me/9779849668301?text=Hello%20CineNest%20Media%2C%20I%27d%20like%20to%20inquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  Message on WhatsApp
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="w-full text-lg py-6">
                <a
                  href="https://www.instagram.com/cinenestmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Instagram className="h-6 w-6" />
                  Message on Instagram
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <Card className="shadow-brand border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-primary">{info.label}</p>
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-smooth">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="shadow-brand border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg text-primary transition-smooth hover:bg-primary/20 ${social.color}`}
                        aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Follow us to see our latest work and client results
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
