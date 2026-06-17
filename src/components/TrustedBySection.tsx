const logos = [
  { src: "/client-logos/color-logo.png", alt: "Color Logo" },
  { src: "/client-logos/corridor18.png", alt: "Corridor 18" },
  { src: "/client-logos/matan-logo.webp", alt: "Matan" },
  { src: "/client-logos/popular-stories.png", alt: "Popular Stories" },
  { src: "/client-logos/soom-soom.png", alt: "Soom Soom" },
];

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-8">
          Trusted by videographers & agencies worldwide
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-lg bg-muted/40 px-4 py-2"
              style={{ width: 140, height: 56 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
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
