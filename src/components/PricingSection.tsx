import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, X } from 'lucide-react';

type Tier = {
  label: string;
  price: string;
  volume: string;
  description?: string;
  badge?: string;
  features: { text: string; included?: boolean }[];
  note?: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
};

const realEstateTiers: Tier[] = [
  {
    label: 'Core',
    price: 'CAD $75',
    volume: 'Up to 25 videos/month',
    description: 'For individual agents and videographers with regular listings.',
    features: [
      { text: 'Property walkthrough edits' },
      { text: 'Captions + title cards' },
      { text: 'Music + color grade' },
      { text: '3-day turnaround' },
      { text: '2 revision rounds' },
    ],
    cta: 'Get a Quote',
    ctaHref: '#contact',
  },
  {
    label: 'Volume',
    price: 'CAD $65',
    volume: '26–50 videos/month (retainer)',
    description: 'For teams with consistent monthly volume who want locked-in rates.',
    badge: 'Recommended',
    featured: true,
    features: [
      { text: 'Everything in Core' },
      { text: 'Priority turnaround (2–3 days)' },
      { text: 'Dedicated real estate editor' },
      { text: '2 revision rounds' },
      { text: 'Monthly billing, locked rate' },
    ],
    cta: 'Book a Call',
    ctaHref: 'https://calendly.com/cinenestmedia/30min',
  },
];

const shortFormTiers: Tier[] = [
  {
    label: 'Starter',
    price: '$1,200 /mo USD',
    volume: 'Up to 20 videos/mo',
    features: [
      { text: 'Basic edits, captions, music' },
      { text: '3-day turnaround' },
      { text: '2 revision rounds' },
      { text: '1 dedicated editor' },
      { text: 'No motion graphics', included: false },
    ],
    note: '$60/video effective rate',
    cta: 'Get a Quote',
    ctaHref: '#contact',
  },
  {
    label: 'Growth',
    price: '$2,200 /mo USD',
    volume: 'Up to 40 videos/mo',
    badge: 'Most Popular',
    featured: true,
    features: [
      { text: 'Standard + moderate edits' },
      { text: '2–3 day turnaround' },
      { text: '2 revision rounds' },
      { text: '1 dedicated editor' },
      { text: 'Basic motion graphics' },
    ],
    note: '$55/video effective rate',
    cta: 'Get a Quote',
    ctaHref: '#contact',
  },
  {
    label: 'Pro',
    price: '$3,500 /mo USD',
    volume: 'Up to 75 videos/mo',
    features: [
      { text: 'All complexity levels' },
      { text: '2-day turnaround' },
      { text: '2 revision rounds' },
      { text: '2 dedicated editors' },
      { text: 'Full motion graphics' },
    ],
    note: '$47/video effective rate',
    cta: 'Book a Call',
    ctaHref: 'https://calendly.com/cinenestmedia/30min',
  },
  {
    label: 'Scale',
    price: '$4,500 /mo USD',
    volume: 'Up to 100 videos/mo',
    features: [
      { text: 'All complexity levels' },
      { text: '1–2 day turnaround' },
      { text: '2 revision rounds' },
      { text: '2–3 dedicated editors' },
      { text: 'Full motion graphics' },
      { text: 'Priority support' },
    ],
    note: '$45/video effective rate',
    cta: 'Book a Call',
    ctaHref: 'https://calendly.com/cinenestmedia/30min',
  },
];

const PricingCard = ({ tier, perVideo }: { tier: Tier; perVideo?: boolean }) => {
  const isExternal = tier.ctaHref.startsWith('http');
  return (
    <Card
      className={`relative flex flex-col border-0 transition-smooth hover:shadow-glow ${
        tier.featured
          ? 'bg-primary text-white shadow-glow ring-2 ring-secondary'
          : 'bg-card shadow-brand'
      }`}
    >
      {tier.badge && (
        <Badge
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground hover:bg-secondary px-3 py-1 text-xs font-semibold"
        >
          {tier.badge}
        </Badge>
      )}
      <CardHeader className="pb-2">
        <CardTitle
          className={`text-xl ${tier.featured ? 'text-secondary' : 'text-primary'}`}
        >
          {tier.label}
        </CardTitle>
        <div className="mt-3">
          <div className={`text-3xl font-bold ${tier.featured ? 'text-white' : 'text-primary'}`}>
            {tier.price}
            {perVideo && <span className="text-base font-normal opacity-80"> /video</span>}
          </div>
          <div className={`text-sm mt-1 ${tier.featured ? 'text-white/80' : 'text-muted-foreground'}`}>
            {tier.volume}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        {tier.description && (
          <p className={`text-sm mb-5 ${tier.featured ? 'text-white/90' : 'text-muted-foreground'}`}>
            {tier.description}
          </p>
        )}
        <ul className="space-y-3 mb-6 flex-1">
          {tier.features.map((f, i) => (
            <li
              key={i}
              className={`flex items-start text-sm ${
                tier.featured ? 'text-white/90' : 'text-foreground/80'
              } ${f.included === false ? 'opacity-60' : ''}`}
            >
              {f.included === false ? (
                <X className="h-4 w-4 text-destructive mr-3 mt-0.5 flex-shrink-0" />
              ) : (
                <Check className="h-4 w-4 text-secondary mr-3 mt-0.5 flex-shrink-0" />
              )}
              <span>{f.text}</span>
            </li>
          ))}
        </ul>
        {tier.note && (
          <div
            className={`text-xs italic mb-4 ${
              tier.featured ? 'text-white/70' : 'text-muted-foreground'
            }`}
          >
            {tier.note}
          </div>
        )}
        <Button
          asChild
          className={`w-full ${
            tier.featured
              ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
              : ''
          }`}
          variant={tier.featured ? 'default' : 'default'}
        >
          {isExternal ? (
            <a href={tier.ctaHref} target="_blank" rel="noopener noreferrer">
              {tier.cta}
            </a>
          ) : (
            <a href={tier.ctaHref}>{tier.cta}</a>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. Dedicated editors. Real results.
          </p>
        </div>

        <Tabs defaultValue="realestate" className="w-full">
          <TabsList className="mx-auto mb-10 grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="realestate">Real Estate Editing</TabsTrigger>
            <TabsTrigger value="shortform">Marketing Short-Form</TabsTrigger>
          </TabsList>

          <TabsContent value="realestate">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {realEstateTiers.map((tier) => (
                <PricingCard key={tier.label} tier={tier} perVideo />
              ))}
            </div>
            <div className="max-w-3xl mx-auto mt-8 p-4 rounded-lg bg-muted/60 border border-border text-sm text-muted-foreground text-center">
              Additional videos beyond your monthly cap are billed at your tier rate.
              Upgrading your plan is always more cost-effective than going over.
            </div>
          </TabsContent>

          <TabsContent value="shortform">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {shortFormTiers.map((tier) => (
                <PricingCard key={tier.label} tier={tier} />
              ))}
            </div>
            <div className="max-w-3xl mx-auto mt-8 p-4 rounded-lg bg-muted/60 border border-border text-sm text-muted-foreground text-center">
              Any videos beyond the monthly cap are billed at $50–55/video at month end.
              Upgrading your plan is always more cost-effective than going over — by design.
            </div>
          </TabsContent>
        </Tabs>

        {/* Revision Policy */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="rounded-2xl border-2 border-secondary/40 bg-primary/[0.03] p-6 md:p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Revision Policy</h3>
            <div className="space-y-2 text-foreground/80 mb-8">
              <p><strong className="text-primary">2 rounds of revisions</strong> are included per video.</p>
              <p><strong className="text-primary">Round 1:</strong> Client reviews the edit and sends all notes in one consolidated batch.</p>
              <p><strong className="text-primary">Round 2:</strong> We implement changes and deliver the final version.</p>
              <p>After round 2, additional revisions are billed at your overage rate.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-background p-5 border border-border">
                <Badge className="mb-3 bg-secondary text-secondary-foreground hover:bg-secondary">
                  What counts as a revision
                </Badge>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {[
                    'Trim a clip differently',
                    'Fix a caption error',
                    'Adjust music volume',
                    'Change a color grade',
                    'Rearrange existing footage',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <Check className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-background p-5 border border-border">
                <Badge className="mb-3 bg-destructive text-destructive-foreground hover:bg-destructive">
                  What counts as a new request (extra charge)
                </Badge>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {[
                    'Add footage not in original brief',
                    'Completely change the format',
                    'Re-edit after final approval',
                    'New voiceover or script',
                    'Different aspect ratio after delivery',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <X className="h-4 w-4 text-destructive mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
