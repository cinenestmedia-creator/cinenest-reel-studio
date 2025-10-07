import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      });

      if (error) {
        throw error;
      }

      console.log('Email sent successfully:', data);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kathmandu, Nepal",
      href: "#"
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
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to create something extraordinary? Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-brand border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-2 min-h-[120px]"
                    placeholder="Tell us about your project, event date, or any specific requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full text-lg py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
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
                        {info.href && info.href !== '#' ? (
                          <a 
                            href={info.href} 
                            className="text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Google Map */}
            <Card className="shadow-brand border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4889648439975!2d85.30693831506278!3d27.667487382791617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cd6b5c5555%3A0x123456789!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CineNest Media Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
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
                  Stay connected and see our latest work on social media
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