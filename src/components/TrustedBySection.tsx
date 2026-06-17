const TrustedBySection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-8">
          Trusted by videographers & agencies worldwide
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/40"
              style={{ width: 140, height: 56 }}
            >
              <span className="text-xs text-muted-foreground/70">[Client Logo]</span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs md:text-sm italic text-muted-foreground mt-6 max-w-2xl mx-auto">
          Client logos being added — we've worked with videographers and real estate teams across the US, Canada, UK, and Australia.
        </p>
      </div>
    </section>
  );
};

export default TrustedBySection;
