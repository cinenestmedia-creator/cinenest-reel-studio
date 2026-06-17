import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, MessageSquare } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Most projects delivered within 48–72 hours. Rush delivery available on request."
    },
    {
      icon: Shield,
      title: "Consistent Quality",
      description: "Every edit follows your brand style guide. Same editor, same look, every time."
    },
    {
      icon: MessageSquare,
      title: "Reliable Communication",
      description: "WhatsApp and email updates throughout every project. You're never left guessing."
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            About CineNest Media
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            CineNest Media is a post-production team editing real estate and marketing videos for agents, videographers, and media companies worldwide.

            We don't shoot footage — we transform it. Send us your raw clips and we handle the full edit: color grading, captions, music, motion graphics, and social-ready cuts. You get a polished video your clients will be proud of.

            We work as a silent extension of your team — fast, consistent, and always on-brand — serving clients across the US, Canada, UK, Australia, and beyond.
          </p>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="shadow-brand border-0 transition-smooth hover:shadow-glow">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Growth Partner Section */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              More Than Editors — We're Your Growth Partner
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just edit footage. We help you build a content system that works — consistent edits, fast delivery, and a team that understands what real estate and marketing audiences actually want to watch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
