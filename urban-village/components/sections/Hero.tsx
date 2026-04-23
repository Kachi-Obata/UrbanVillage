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
      className="relative w-full overflow-hidden h-screen"
      style={{ height: "100dvh" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(15,26,14,0.65) 0%, rgba(15,26,14,0.15) 100%)",
        }}
      />

      <div
        className="absolute left-0 right-0 z-10 flex flex-col items-center text-center px-5 lg:px-20"
        style={{ top: "58%", transform: "translateY(-50%)" }}
      >
        <motion.div
          className="max-w-[680px] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-sans text-[12px] text-cream/70 tracking-[0.2em] uppercase">
            Maitama · Abuja
          </p>

          <div className="my-6">
            <h1 className="font-display font-normal text-cream leading-[1.05] text-[46px] lg:text-[88px]">
              Where the city exhales.
            </h1>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-12 h-px bg-cream/30" />
          </div>

          <p className="font-sans text-cream/75 leading-[1.6] text-[14px] lg:text-[17px]">
            A park. A table. A moment that&apos;s yours.
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
