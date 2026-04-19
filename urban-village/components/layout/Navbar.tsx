"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Dine", href: "#menu" },
  { label: "Wellness", href: "#experience" },
  { label: "Events", href: "#experience" },
  { label: "Visit Us", href: "#visit" },
];

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
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-5 lg:px-10 transition-all duration-400 ease-out"
        animate={{
          height: scrolled ? 62 : 80,
          backgroundColor: scrolled ? "rgba(15,26,14,0.88)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <a
          href="#hero"
          data-cursor="hover"
          className="font-display text-[15px] text-cream tracking-[0.18em] uppercase z-10"
        >
          Urban Village
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {scrolled &&
            navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                data-cursor="hover"
                className="font-sans text-[13px] text-cream opacity-60 hover:opacity-100 transition-opacity duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: i * 0.04 }}
              >
                {link.label}
              </motion.a>
            ))}
          {scrolled && (
            <span className="text-cream/30 text-[13px] select-none">|</span>
          )}
          <Button
            variant="outline"
            as="a"
            href="tel:+2348033337998"
            className="text-[12px] px-5 py-2.5"
          >
            Reserve a Table
          </Button>
        </nav>

        <button
          className="lg:hidden w-12 h-12 flex flex-col justify-center items-center gap-[6px] z-10"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
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
