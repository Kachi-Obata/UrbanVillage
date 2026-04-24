import FadeInView from "@/components/ui/FadeInView";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function VisitUs() {
  return (
    <section
      id="visit"
      className="section-pattern ambient-surface overflow-hidden bg-forest pt-[72px] lg:pt-[120px] pb-[72px] lg:pb-[100px] px-5 lg:px-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <FadeInView>
            <SectionLabel className="mb-6">Find Us</SectionLabel>
          </FadeInView>
          <FadeInView delay={0.08}>
            <h2 className="font-display font-bold text-cream text-[38px] lg:text-[64px] leading-tight mb-5">
              We&apos;re here.
            </h2>
          </FadeInView>
          <FadeInView delay={0.16}>
            <p className="font-sans text-cream/80 text-[15px] lg:text-[17px] leading-[1.7]">
              Come any day of the week. Stay as long as you like.
            </p>
          </FadeInView>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 max-w-[860px] mx-auto mb-16">
          <FadeInView delay={0.08}>
            <p className="font-sans text-[11px] text-terracotta uppercase tracking-[0.2em] mb-5">
              Opening Hours
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-[16px] text-cream">Monday – Saturday</span>
                <span className="font-sans text-[16px] text-cream ml-4">10:00am – 11:00pm</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-[16px] text-cream">Sunday</span>
                <span className="font-sans text-[16px] text-cream ml-4">2:00pm – Late</span>
              </div>
            </div>
            <p className="font-sans text-[13px] text-cream/55 mt-6">
              Entry fee applies. Walk-ins welcome.
            </p>
          </FadeInView>

          <FadeInView delay={0.16}>
            <p className="font-sans text-[11px] text-terracotta uppercase tracking-[0.2em] mb-5">
              Location
            </p>
            <address className="not-italic font-sans text-[16px] text-cream leading-[1.7]">
              Terivik Park
              <br />
              Alvan Ikoku, Nile Street Junction
              <br />
              Maitama, Abuja, Nigeria
            </address>
            <a
              href="https://maps.google.com/?q=Terivik+Park,+Alvan+Ikoku,+Maitama,+Abuja"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="inline-block mt-6 font-sans text-[14px] text-cream hover:text-cream/70 transition-colors"
            >
              Open in Maps →
            </a>
          </FadeInView>
        </div>

        <FadeInView delay={0.2}>
          <div className="text-center mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0 font-sans text-[15px] text-cream/70">
              <a
                href="tel:+2348033337998"
                data-cursor="hover"
                className="whitespace-nowrap hover:text-cream transition-colors"
              >
                +234 803 333 7998
              </a>
              <span className="hidden sm:inline mx-3 text-cream/30">|</span>
              <a
                href="mailto:terivikparkurbanvillage@gmail.com"
                data-cursor="hover"
                className="hover:text-cream transition-colors text-[13px] sm:text-[15px]"
              >
                terivikparkurbanvillage@gmail.com
              </a>
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.28}>
          <div className="text-center">
            <h3 className="font-display text-cream text-[26px] lg:text-[36px] mb-6">
              Ready when you are.
            </h3>
            <Button variant="solid" as="a" href="tel:+2348033337998">
              Call to Reserve
            </Button>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
