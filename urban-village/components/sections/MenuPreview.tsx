import FadeInView from "@/components/ui/FadeInView";
import SectionLabel from "@/components/ui/SectionLabel";

const kitchen = [
  { name: "Chicken Pepper Soup", price: "₦4,000" },
  { name: "Seafood Okro", price: "₦12,500" },
  { name: "Nkwobi", price: "₦6,500" },
  { name: "Grilled Catfish", price: "₦13,000" },
  { name: "Urban Village Special Rice", price: "₦9,500" },
  { name: "Abacha", price: "₦8,500" },
  { name: "Bole & Titus Fish", price: "₦7,500" },
];

const drinks = [
  { name: "Palmwine", price: "₦1,500" },
  { name: "Arabian Tea", price: "₦4,500" },
  { name: "Frozen Mojito", price: "₦6,500" },
  { name: "Frozen Pineapple Daiquiri", price: "₦8,000" },
  { name: "Terivik Vibes", price: "₦8,500" },
  { name: "Frozen Strawberry Daiquiri", price: "₦8,000" },
];

interface MenuColumnProps {
  title: string;
  items: { name: string; price: string }[];
  startDelay?: number;
}

function MenuColumn({ title, items, startDelay = 0 }: MenuColumnProps) {
  return (
    <div>
      <FadeInView delay={startDelay}>
        <p className="font-sans text-[11px] text-cream/50 uppercase tracking-[0.2em] mb-6">
          {title}
        </p>
      </FadeInView>
      {items.map((item, i) => (
        <FadeInView key={item.name} delay={startDelay + (i + 1) * 0.08}>
          <div className="flex items-baseline justify-between mb-7">
            <span className="font-display italic text-[17px] lg:text-[18px] text-cream">
              {item.name}
            </span>
            <span className="font-sans text-[13px] lg:text-[14px] text-cream/60 ml-4 shrink-0">
              {item.price}
            </span>
          </div>
        </FadeInView>
      ))}
    </div>
  );
}

export default function MenuPreview() {
  return (
    <section
      id="menu"
      className="section-pattern ambient-surface overflow-hidden bg-earth py-[72px] lg:py-[120px] px-5 lg:px-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <FadeInView>
            <SectionLabel className="mb-6">Eyitomi Restaurant</SectionLabel>
          </FadeInView>
          <FadeInView delay={0.08}>
            <h2 className="font-display font-bold text-cream text-[34px] lg:text-[48px] leading-tight mb-5">
              A table is just the beginning.
            </h2>
          </FadeInView>
          <FadeInView delay={0.16}>
            <p className="font-sans text-cream/80 text-[15px] lg:text-[17px] leading-[1.7]">
              Nigerian cooking done properly.
              <br />
              International flavours done honestly.
            </p>
          </FadeInView>
        </div>

        {/* Desktop: two columns */}
        <div className="hidden lg:grid grid-cols-2 gap-16 relative">
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-cream/20"
            aria-hidden="true"
          />
          <MenuColumn title="Kitchen" items={kitchen} startDelay={0.08} />
          <MenuColumn title="Drinks" items={drinks} startDelay={0.16} />
        </div>

        {/* Mobile: single column */}
        <div className="lg:hidden space-y-12">
          <MenuColumn title="Kitchen" items={kitchen} />
          <MenuColumn title="Drinks" items={drinks} startDelay={0.08} />
        </div>

        <FadeInView>
          <div className="mt-12 pt-8 border-t border-cream/20 text-center">
            <a
              href="#visit"
              data-cursor="hover"
              className="font-sans text-[14px] text-cream hover:text-cream/70 transition-colors"
            >
              View Full Menu →
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
