const logos = [
  { src: "/client-logos/abigraphy.jpg", alt: "Abigraphy" },
  { src: "/client-logos/airborne-studio.jpg", alt: "Airborne Studio" },
  { src: "/client-logos/dxtr-vision.jpg", alt: "DXTR Vision" },
  { src: "/client-logos/studio-hsu.jpg", alt: "Studio Hsu" },
  { src: "/client-logos/ever-after.jpg", alt: "Ever After Photo" },
  { src: "/client-logos/homelux.jpg", alt: "Homelux Media" },
  { src: "/client-logos/shohat.jpg", alt: "Shohat Media Group" },
  { src: "/client-logos/tenzi-homes.jpg", alt: "Tenzi Homes" },
  { src: "/client-logos/zynk-media.webp", alt: "Zynk Media" },
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
