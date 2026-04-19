"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
  heroLoaded: boolean;
}

export default function LoadingScreen({ onComplete, heroLoaded }: LoadingScreenProps) {
  const [exiting, setExiting] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const exitTriggered = useRef(false);

  useEffect(() => {
    const slowTimer = setTimeout(() => setShowProgress(true), 3000);
    return () => clearTimeout(slowTimer);
  }, []);

  useEffect(() => {
    const triggerExit = () => {
      if (exitTriggered.current) return;
      exitTriggered.current = true;
      setExiting(true);
      setTimeout(onComplete, 600);
    };

    if (heroLoaded) {
      const timer = setTimeout(triggerExit, 2400);
      return () => clearTimeout(timer);
    }

    const fallback = setTimeout(triggerExit, 4000);
    return () => clearTimeout(fallback);
  }, [heroLoaded, onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-night overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative text-center">
            <motion.p
              className="font-display text-[42px] text-cream tracking-[0.25em] uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            >
              Urban Village
            </motion.p>

            <motion.p
              className="font-sans text-[11px] text-cream/50 tracking-[0.35em] uppercase mt-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              by Terivik
            </motion.p>
          </div>

          {showProgress && (
            <motion.div
              className="absolute bottom-0 left-0 h-[1px] bg-terracotta"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
