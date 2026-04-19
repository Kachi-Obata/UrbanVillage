"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Dine", href: "#menu" },
  { label: "Wellness", href: "#experience" },
  { label: "Events", href: "#experience" },
  { label: "Visit Us", href: "#visit" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const firstFocusable = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      firstFocusable.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[9000] bg-forest flex flex-col"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="flex justify-end p-5">
            <button
              ref={firstFocusable}
              onClick={onClose}
              data-cursor="hover"
              aria-label="Close menu"
              className="w-12 h-12 flex items-center justify-center text-cream text-2xl"
            >
              ×
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
              >
                <a
                  href={item.href}
                  onClick={onClose}
                  data-cursor="hover"
                  className="block group"
                >
                  <span className="block font-sans text-[11px] text-terracotta tracking-[0.15em] uppercase mb-1">
                    0{i + 1}
                  </span>
                  <span className="block font-display text-[48px] leading-none text-cream hover:text-cream/80 transition-colors">
                    {item.label}
                  </span>
                </a>
              </motion.div>
            ))}
          </nav>

          <div className="px-8 pb-10">
            <p className="font-sans text-[14px] text-cream/60">
              @urbanvillagebyterivik
            </p>
            <p className="font-sans text-[14px] text-cream/60 mt-1">
              +234 803 333 7998
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
