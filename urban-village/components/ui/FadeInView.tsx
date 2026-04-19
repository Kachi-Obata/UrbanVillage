"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export default function FadeInView({
  children,
  delay = 0,
  threshold = 0.15,
  once = true,
  className,
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
