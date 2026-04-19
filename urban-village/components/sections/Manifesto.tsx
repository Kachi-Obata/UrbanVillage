import FadeInView from "@/components/ui/FadeInView";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="bg-forest py-[72px] lg:py-[120px] px-5 lg:px-20"
    >
      <div className="max-w-[640px] mx-auto text-center">
        <FadeInView>
          <SectionLabel className="mb-6">About</SectionLabel>
        </FadeInView>

        <FadeInView delay={0.08}>
          <h2 className="font-display font-bold text-cream text-[34px] lg:text-[52px] leading-tight mb-8">
            One place. Everything you need.
          </h2>
        </FadeInView>

        <FadeInView delay={0.16}>
          <div className="max-w-[540px] mx-auto">
            <p className="font-sans text-cream/80 text-[15px] lg:text-[17px] leading-[1.8]">
              Abuja moves fast. We built something that doesn&apos;t.
              <br />
              A few acres of green, good food on the table,
              <br />
              and time that belongs to you.
              <br />
              Come for one thing. Stay until you&apos;ve had everything.
            </p>
          </div>
        </FadeInView>

        <FadeInView delay={0.24}>
          <p className="font-display italic text-[22px] text-cream/60 mt-10">
            &ldquo;Six experiences. One address. Maitama.&rdquo;
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
