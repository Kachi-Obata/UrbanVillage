"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 lg:px-12 transition-all duration-400 ease-out"
        animate={{
          height: scrolled ? 68 : 88,
          backgroundColor: scrolled ? "rgba(15,26,14,0.88)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <a
          href="#hero"
          data-cursor="hover"
          className="font-display text-[16px] text-cream tracking-[0.22em] uppercase z-10"
        >
          Urban Village
        </a>

        <button
          type="button"
          className="w-12 h-12 flex flex-col justify-center items-center gap-[7px] z-10"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen ? "true" : "false"}
          data-cursor="hover"
        >
          <span className="block w-[18px] h-[1.5px] bg-cream" />
          <span className="block w-[18px] h-[1.5px] bg-cream" />
          <span className="block w-[18px] h-[1.5px] bg-cream" />
        </button>
      </motion.header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
