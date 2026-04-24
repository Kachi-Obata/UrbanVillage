"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

interface HeroProps {
  onImageLoaded: () => void;
}

export default function Hero({ onImageLoaded }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const notified = useRef(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/hero.webp";
    img.onload = () => {
      if (!notified.current) {
        notified.current = true;
        onImageLoaded();
      }
    };
    img.onerror = () => {
      if (!notified.current) {
        notified.current = true;
        onImageLoaded();
      }
    };
    if (img.complete) {
      if (!notified.current) {
        notified.current = true;
        onImageLoaded();
      }
    }
  }, [onImageLoaded]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showHint = scrollY < 40;

  return (
    <section
      id="hero"
      className="section-grain relative w-full overflow-hidden h-screen"
      style={{ height: "100dvh" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      />
      <div className="absolute inset-0 hero-pattern-overlay" aria-hidden="true" />
      <div className="absolute inset-0 hero-dusk-wash" />

  <div className="adire-motif absolute top-[11%] right-[6%] w-[150px] h-[150px] rounded-full opacity-60" aria-hidden="true" />
  <div className="adire-motif absolute bottom-[18%] left-[8%] w-[92px] h-[92px] rounded-full opacity-45" aria-hidden="true" />
  <div className="sun-ring absolute hidden lg:block w-36 h-36 top-[16%] left-[9%] opacity-45" aria-hidden="true" />
  <div className="palm-shadow-left" aria-hidden="true" />
  <div className="palm-shadow-right" aria-hidden="true" />

      <div
        className="absolute left-0 right-0 z-10 flex flex-col items-center text-center px-5 lg:px-20"
        style={{ top: "58%", transform: "translateY(-50%)" }}
      >
        <motion.div
          className="max-w-[760px] mx-auto px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-sans text-[11px] text-gold/85 tracking-[0.24em] uppercase">
            Maitama · Abuja
          </p>

          <div className="adire-band mx-auto mt-4 mb-6 h-2 w-[120px] lg:w-[160px] rounded-full" aria-hidden="true" />

          <div className="my-6">
            <h1 className="font-display font-normal text-cream leading-[1.05] text-[46px] lg:text-[88px]">
              Where the city exhales.
            </h1>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-12 h-px bg-cream/30" />
          </div>

          <p className="font-sans text-cream/85 leading-[1.65] text-[15px] lg:text-[17px] max-w-[520px] mx-auto">
            A park. A table. A moment that&apos;s yours — rooted in Nigerian warmth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              as="a"
              href="tel:+2348033337998"
            >
              Reserve a Table
            </Button>
            <a
              href="#experience"
              data-cursor="hover"
              className="font-sans text-[13px] text-cream group flex items-center gap-1"
            >
              Explore
              <span className="inline-block transition-transform duration-250 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showHint && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-px h-10 bg-cream/40" />
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-cream/40"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
