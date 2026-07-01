import { Card, CardContent } from '@/components/ui/card';
import { Clock, Sparkles, Cloud, CalendarCheck, TrendingUp, Video } from 'lucide-react';

const ValuePropositionSection = () => {
  const values = [
    {
      icon: Clock,
      title: "Saving your editing time",
      description: "Reclaim hours every week by handing off the full edit to a dedicated post-production team."
    },
    {
      icon: Sparkles,
      title: "Make your video professional and consistent",
      description: "Every video follows your brand style, so your content looks polished and recognizable across every channel."
    },
    {
      icon: Cloud,
      title: "Save your cloud storage",
      description: "We host and share files for you, so you don't have to burn storage space on massive raw clips."
    },
    {
      icon: CalendarCheck,
      title: "Save you from missed deadlines",
      description: "Fast, reliable turnaround keeps your delivery schedule on track — even when things get busy."
    },
    {
      icon: TrendingUp,
      title: "Save you from guessing",
      description: "We make sure your videos actually perform with edits built for engagement, retention, and conversion."
    },
    {
      icon: Video,
      title: "Delivered 1000+ videos and counting",
      description: "Trusted by videographers, agents, and marketing teams worldwide for consistent, high-quality edits."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            What You Get With CineNest
          </h2>
          <p className="text-lg text-muted-foreground">
            Post-production support designed to save time, cut costs, and make your videos work harder.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="shadow-brand border-0 transition-smooth hover:shadow-glow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
