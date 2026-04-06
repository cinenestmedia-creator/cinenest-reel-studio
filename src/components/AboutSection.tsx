import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, MessageSquare } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality — so you can list faster and stay ahead of the competition."
    },
    {
      icon: Shield,
      title: "Consistent Quality",
      description: "Every video meets the same high standard — building a recognizable, trustworthy brand across all your content."
    },
    {
      icon: MessageSquare,
      title: "Reliable Communication",
      description: "Clear updates, fast responses, and a seamless workflow — we work as an extension of your team."
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
            At CineNest Media, we specialize in performance-driven video editing for real estate professionals and media teams. Our focus isn't just making your videos look good — it's making them work. We help you create content that captures attention, builds credibility, and helps you stand out in competitive markets. From luxury property tours to short-form social media content, every edit is crafted to maximize engagement and impact. We work as an extension of your team — delivering fast turnaround times, consistent quality, and reliable communication so you can focus on closing deals while we handle post-production.
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
              We don't just edit footage. We help you turn listings into high-converting visual assets, build a stronger personal or agency brand, and create consistent, high-quality content at scale. Our goal is simple — help you get more attention, more engagement, and better results from every video you publish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
