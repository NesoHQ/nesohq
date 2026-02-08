"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

export function DecentralizationStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(1) + "%");

  // Create a separate transform for the width string to ensure it follows the count exactly
  const widthTransform = useTransform(count, (latest) => `${latest}%`);

  useEffect(() => {
    if (isInView) {
      // Animate from 0 directly to 98.2 over 2 seconds
      const controls = animate(count, 98.2, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count]);

  return (
    <div ref={ref} className="space-y-4">
      <div className="flex justify-between items-end">
        <span className="text-sm font-mono opacity-50">
          Decentralization Index
        </span>
        <motion.span className="text-2xl font-bold">{rounded}</motion.span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          style={{ width: widthTransform }}
          className="h-full bg-primary shadow-[0_0_12px_rgba(var(--primary),0.6)]"
        />
      </div>
    </div>
  );
}
