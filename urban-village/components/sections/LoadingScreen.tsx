"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
  heroLoaded: boolean;
}

export default function LoadingScreen({ onComplete, heroLoaded }: LoadingScreenProps) {
  const [exiting, setExiting] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const exitTriggered = useRef(false);
  const mountedAt = useRef(Date.now());

  useEffect(() => {
    const slowTimer = setTimeout(() => setShowProgress(true), 3000);
    return () => clearTimeout(slowTimer);
  }, []);

  useEffect(() => {
    const MIN_DURATION_MS = 4000;
    const MAX_WAIT_MS = 6000;

    const triggerExit = () => {
      if (exitTriggered.current) return;
      exitTriggered.current = true;
      setExiting(true);
      setTimeout(onComplete, 600);
    };

    let minTimer: ReturnType<typeof setTimeout> | null = null;
    if (heroLoaded) {
      const elapsed = Date.now() - mountedAt.current;
      const remaining = Math.max(0, MIN_DURATION_MS - elapsed);
      minTimer = setTimeout(triggerExit, remaining);
    }

    const fallback = setTimeout(triggerExit, MAX_WAIT_MS);
    return () => {
      if (minTimer) clearTimeout(minTimer);
      clearTimeout(fallback);
    };
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
            <motion.div
              className="mx-auto mb-5 w-fit"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src="/images/urban-village-logo.png"
                alt="Urban Village logo"
                width={96}
                height={192}
                priority
                className="h-auto w-[74px] lg:w-[200px] object-contain"
              />
            </motion.div>

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
