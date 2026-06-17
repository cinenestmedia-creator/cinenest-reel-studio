import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What formats do you accept?',
    a: 'We accept all major formats — MP4, MOV, ProRes, and drone footage from DJI, GoPro, or any other camera. Send us your raw files via Google Drive, Dropbox, or WeTransfer.',
  },
  {
    q: 'Do you handle LOG footage?',
    a: 'Yes. We work with all major LOG profiles including S-Log2, S-Log3, C-Log, V-Log, and D-Log. We handle the full color grade from LOG to a finished, broadcast-ready look.',
  },
  {
    q: 'How does the revision process work?',
    a: 'Each video includes 2 rounds of revisions. After delivery, you review and send all your notes in one batch. We implement them and deliver the final version within 24 hours. Additional rounds beyond 2 are billed at your overage rate.',
  },
  {
    q: 'Do you work with videographers or directly with agents?',
    a: 'Both. We partner with real estate videographers who want a reliable editing team, and directly with agents or media companies who shoot their own content.',
  },
  {
    q: 'Where are you based and what countries do you serve?',
    a: 'Our editing team is based in Nepal. We serve clients worldwide — including the US, Canada, UK, Australia, and beyond. All communication is in English via WhatsApp or email, and our timezone means your footage sent at night is often ready by morning.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
