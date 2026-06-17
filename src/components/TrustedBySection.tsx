const logos = [
  { src: "/client-logos/color-logo.png", alt: "Color Logo" },
  { src: "/client-logos/corridor18.png", alt: "Corridor 18" },
  { src: "/client-logos/matan-logo.webp", alt: "Matan" },
  { src: "/client-logos/popular-stories.png", alt: "Popular Stories" },
  { src: "/client-logos/soom-soom.png", alt: "Soom Soom" },
  { src: "/client-logos/Operation_Namaste_DT.jpg", alt: "Operation Namaste" },
  { src: "/client-logos/Tenzi_Homes_DT.jpg", alt: "Tenzi Homes" },
  { src: "/client-logos/evan_hsu_DT.jpg", alt: "Evan Hsu" },
  { src: "/client-logos/shohat_group_DT.jpg", alt: "Shohat Group" },
  { src: "/client-logos/images.png", alt: "Client" },
];

const TrustedBySection = () => {
  const loop = [...logos, ...logos];

  return (
    <section className="py-16 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-10">
          Trusted by videographers & agencies worldwide
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="logo-scroll-track flex items-center gap-10 md:gap-12">
          {loop.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0"
              style={{ height: 56 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
