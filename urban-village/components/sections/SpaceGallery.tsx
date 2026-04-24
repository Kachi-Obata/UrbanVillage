import FadeInView from "@/components/ui/FadeInView";
import SectionLabel from "@/components/ui/SectionLabel";

const photos = [
  {
    src: "/images/thespace.jpeg",
    alt: "Wide view of The Space at Urban Village with greenery and seating",
  },
  {
    src: "/images/dining-image.jpeg",
    alt: "Dining section setup with tableware and food at Urban Village",
  },
  {
    src: "/images/bar-drinks.jpg",
    alt: "Bar and drinks section featuring cocktails at Urban Village",
  },
  {
    src: "/images/thecafe.jpeg",
    alt: "The Café section with coffee and pastries at Urban Village",
  },
  {
    src: "/images/wellness.jpg",
    alt: "Wellness section ambiance at Urban Village",
  },
  {
    src: "/images/outdoor-games.jpeg",
    alt: "Outdoor games section with activity space at Urban Village",
  },
];

export default function SpaceGallery() {
  return (
    <section
      id="space"
      className="section-pattern ambient-surface overflow-hidden bg-forest pt-[72px] lg:pt-[120px] pb-16 lg:pb-20 px-5 lg:px-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <FadeInView>
            <SectionLabel className="mb-6">The Space</SectionLabel>
          </FadeInView>
          <FadeInView delay={0.08}>
            <h2 className="font-display font-bold text-cream text-[36px] lg:text-[56px] leading-tight mb-5">
              The space finds you.
            </h2>
          </FadeInView>
          <FadeInView delay={0.16}>
            <p className="font-sans text-cream/70 text-[15px] lg:text-[16px] leading-[1.7] max-w-[500px] mx-auto">
              Somewhere between the first course and the last drink, you&apos;ll
              forget what you were rushing towards.
            </p>
          </FadeInView>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-3 h-[640px]">
          {/* Col 1: two portrait images */}
          <div className="flex flex-col gap-3">
            {[0, 1].map((i) => (
              <FadeInView key={i} delay={i * 0.08} className="flex-1 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-[450ms] ease-out hover:scale-[1.03]"
                  style={{ backgroundImage: `url('${photos[i].src}')` }}
                  role="img"
                  aria-label={photos[i].alt}
                />
              </FadeInView>
            ))}
          </div>
          {/* Col 2: tall landscape */}
          <FadeInView delay={0.08} className="overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-[450ms] ease-out hover:scale-[1.03]"
              style={{ backgroundImage: `url('${photos[2].src}')` }}
              role="img"
              aria-label={photos[2].alt}
            />
          </FadeInView>
          {/* Col 3: two portrait images */}
          <div className="flex flex-col gap-3">
            {[3, 4].map((i) => (
              <FadeInView key={i} delay={(i - 2) * 0.08} className="flex-1 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-[450ms] ease-out hover:scale-[1.03]"
                  style={{ backgroundImage: `url('${photos[i].src}')` }}
                  role="img"
                  aria-label={photos[i].alt}
                />
              </FadeInView>
            ))}
          </div>
        </div>

        {/* Mobile grid */}
        <div className="grid lg:hidden grid-cols-2 gap-2">
          {photos.slice(0, 6).map((photo, i) => (
            <FadeInView key={i} delay={i * 0.08} className="overflow-hidden">
              <div
                className="w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${photo.src}')`,
                  aspectRatio: "1 / 1",
                }}
                role="img"
                aria-label={photo.alt}
              />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
