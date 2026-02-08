"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const roadmap = [
  {
    phase: "Phase 01",
    title: "Foundational Protocols",
    status: "Operational",
    description:
      "Establishing the core Neso-1 communication protocol and the open-source library architecture.",
  },
  {
    phase: "Phase 02",
    title: "Autonomous Agents",
    status: "In Progress",
    description:
      "Deploying educational agents capable of real-time technical troubleshooting and personalized curriculum generation.",
  },
  {
    phase: "Phase 03",
    title: "The Void Network",
    status: "Upcoming",
    description:
      "Launching a fully decentralized peer-to-peer knowledge mesh, removing reliance on centralized servers.",
  },
];

export function HorizonProtocol() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 container px-6 mx-auto" ref={containerRef}>
      <div className="text-center mb-20 space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          The Horizon Protocol
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground"
        >
          Our sequential path toward universal autonomy.
        </motion.p>
      </div>

      <div className="relative space-y-12">
        {/* Animated Vertical Line */}
        <div className="absolute left-[19px] md:left-1/2 top-0 h-full w-px bg-primary/20 -translate-x-1/2">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-primary origin-top"
          />
        </div>

        {roadmap.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row items-center gap-8 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Node */}
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.2,
                }}
                className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center"
              >
                <div
                  className={`w-3 h-3 rounded-full bg-primary ${
                    item.status === "In Progress" ? "animate-pulse" : ""
                  }`}
                />
              </motion.div>
            </div>

            {/* Content Card */}
            <div className="w-full md:w-1/2 pl-12 md:pl-0">
              <div
                className={`p-8 rounded-[2rem] border border-white/5 bg-card/30 backdrop-blur-md space-y-4 hover:border-primary/20 transition-colors duration-500 ${
                  i % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-primary">
                  <span>{item.phase}</span>
                  <span className="px-2 py-0.5 rounded border border-primary/30 uppercase">
                    {item.status}
                  </span>
                </div>
                <h4 className="text-2xl font-bold">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="hidden md:block w-1/2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
