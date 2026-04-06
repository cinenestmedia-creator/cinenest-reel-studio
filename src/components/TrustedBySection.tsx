const TrustedBySection = () => {
  const logos = [
    "Keller Williams", "RE/MAX", "Coldwell Banker", "Century 21", 
    "Sotheby's", "Compass", "eXp Realty", "Berkshire Hathaway",
    "Douglas Elliman", "Engel & Völkers"
  ];

  return (
    <section className="py-16 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
          Trusted by Growing Brands & Agencies
        </h2>
        <p className="text-muted-foreground text-lg">
          Partnered with real estate professionals, media teams, and creators worldwide.
        </p>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative">
        <div className="logo-scroll-track flex">
          {[...logos, ...logos].map((name, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-16 px-8 bg-background rounded-lg shadow-sm border border-border/50"
            >
              <span className="text-muted-foreground font-semibold text-sm whitespace-nowrap tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
