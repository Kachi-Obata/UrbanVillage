"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const panels = [
  {
    number: "01",
    category: "Dining",
    name: "Eat well.",
    description:
      "Nigerian roots, world-class technique. Eyitomi's kitchen brings both to the table with equal confidence.",
    cta: "See the Menu →",
    href: "#menu",
    image: "/images/panel-01-dining.webp",
    alt: "Outdoor dining space with table set and food, surrounded by lush greenery in warm evening light",
  },
  {
    number: "02",
    category: "Bar & Drinks",
    name: "Drink slowly.",
    description:
      "From palmwine served straight to frozen daiquiris made with care. Every glass here is an occasion.",
    cta: "View Drinks →",
    href: "#menu",
    image: "/images/panel-02-bar.webp",
    alt: "Bar area at night with warm ambient lighting and rich colours",
  },
  {
    number: "03",
    category: "The Café",
    name: "Start gently.",
    description:
      "Artisanal coffees, fresh pastries. The right beginning — or a quiet pause in the middle of the day.",
    cta: "Morning Menu →",
    href: "#menu",
    image: "/images/panel-03-cafe.webp",
    alt: "Coffee cups and pastries in soft morning light at the Urban Village café",
  },
  {
    number: "04",
    category: "Wellness",
    name: "Be looked after.",
    description:
      "A barbershop, salon, spa, and gym. The rare luxury of giving yourself proper attention.",
    cta: "Wellness →",
    href: "#visit",
    image: "/images/panel-04-wellness.webp",
    alt: "Clean and warm spa or salon interior at Urban Village wellness suite",
  },
  {
    number: "05",
    category: "Outdoor Games",
    name: "Play outside.",
    description:
      "Tennis, snooker, table tennis. The park gives you the excuse you needed to stay outside all afternoon.",
    cta: "Activities →",
    href: "#visit",
    image: "/images/panel-05-games.webp",
    alt: "Tennis court and games area with lush park backdrop",
  },
  {
    number: "06",
    category: "Events",
    name: "Make it a moment.",
    description:
      "Birthdays, anniversaries, corporate gatherings. We build the setting. You make the memory.",
    cta: "Plan an Event →",
    href: "#visit",
    image: "/images/panel-06-events.webp",
    alt: "Event setup with dressed tables, warm evening lighting and guests",
  },
];

function DesktopPanels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const idx = Math.min(5, Math.floor(v * 6));
      setActivePanel(idx);
    });
    return unsub;
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} style={{ height: "600vh" }} className="relative">
      <div className="sticky top-0 h-svh overflow-hidden">
        {panels.map((panel, i) => (
          <div
            key={panel.number}
            className="absolute inset-0 transition-opacity duration-[800ms]"
            style={{ opacity: activePanel === i ? 1 : 0 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${panel.image}')` }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(15,26,14,0.7) 0% 50%, rgba(15,26,14,0.2) 70% 100%)",
              }}
            />
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 z-10 px-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePanel}
              className="text-center max-w-[600px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="font-sans text-[11px] text-terracotta tracking-[0.2em] uppercase mb-3">
                {panels[activePanel].category}
              </p>
              <h2 className="font-display text-[72px] text-cream font-normal leading-none mb-5">
                {panels[activePanel].name}
              </h2>
              <p className="font-sans text-[16px] text-cream/75 leading-[1.6] max-w-[480px] mx-auto mb-10">
                {panels[activePanel].description}
              </p>
              <a
                href={panels[activePanel].href}
                data-cursor="hover"
                className="font-sans text-[14px] text-cream hover:text-cream/70 transition-colors"
              >
                {panels[activePanel].cta}
              </a>
            </motion.div>
          </AnimatePresence>

          <p className="absolute top-6 left-6 font-display text-[14px] text-cream/35">
            {panels[activePanel].number}
          </p>
        </div>

        <div className="absolute right-6 top-0 bottom-0 w-[2px] bg-forest z-10">
          <motion.div
            className="w-full bg-terracotta origin-top"
            style={{ height: progressHeight }}
          />
        </div>
      </div>
    </div>
  );
}

function MobilePanels() {
  return (
    <div>
      {panels.map((panel) => (
        <section
          key={panel.number}
          className="relative overflow-hidden"
          style={{ height: "100svh" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${panel.image}')` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(15,26,14,0.7) 0% 50%, rgba(15,26,14,0.2) 70% 100%)",
            }}
          />
          <p className="absolute top-6 left-6 font-display text-[14px] text-cream/35 z-10">
            {panel.number}
          </p>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 px-5 z-10 text-center">
            <p className="font-sans text-[11px] text-terracotta tracking-[0.2em] uppercase mb-3">
              {panel.category}
            </p>
            <h2 className="font-display text-[42px] text-cream font-normal leading-none mb-4">
              {panel.name}
            </h2>
            <p className="font-sans text-[14px] text-cream/75 leading-[1.6] max-w-[480px] mb-8">
              {panel.description}
            </p>
            <a
              href={panel.href}
              data-cursor="hover"
              className="font-sans text-[14px] text-cream"
            >
              {panel.cta}
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}

export default function ExperiencePanels() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!mounted) return <MobilePanels />;

  return (
    <section id="experience">
      {isDesktop ? <DesktopPanels /> : <MobilePanels />}
    </section>
  );
}
