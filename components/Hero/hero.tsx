"use client";

import { Terminal } from "@/components/Hero/terminal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Cpu, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 mt-5">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Subtle Fog */}
      <div className="absolute top-0 inset-x-0 h-96 bg-linear-to-b from-background via-background/90 to-transparent z-0 pointer-events-none" />

      <div className="container px-6 mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Tech Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              System Online / Region: Neso
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Constructing <br />
              The <span className="text-primary italic">Unknown</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg border-l-2 border-primary/20 pl-6"
            >
              NesoHQ is an open-source foundry for the next generation of
              builders. We engineere universal platforms that transcend the
              boundaries of current learning ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                className="h-12 px-8 rounded-none border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest font-bold text-xs"
                asChild
              >
                <Link href="/start">Start Building</Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-12 px-8 rounded-none hover:bg-muted font-mono text-xs"
                asChild
              >
                <Link href="/protocol">
                  Running Protocol v1.0 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: Abstract Visual / Dashboard UI */}
          <div className="relative">
            {/* Abstract Floating Cards / UI Elements */}
            <div className="relative z-10 p-px bg-linear-to-b from-white/10 to-transparent rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
              <div className="bg-card/50 rounded-xl p-6 md:p-8 border border-white/5 space-y-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">
                    terminal.neso.local
                  </div>
                </div>

                <Terminal />

                {/* Stats Grid */}
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="p-4 bg-background/50 rounded-lg border border-white/5 text-center">
                    <div className="text-muted-foreground text-xs uppercase tracking-widest font-mono mb-2">
                      Members
                    </div>
                    <div className="text-xl md:text-2xl font-bold">12k+</div>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg border border-white/5 text-center">
                    <div className="text-muted-foreground text-xs uppercase tracking-widest font-mono mb-2">
                      Projects
                    </div>
                    <div className="text-xl md:text-2xl font-bold">840</div>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg border border-white/5 text-center">
                    <div className="text-muted-foreground text-xs uppercase tracking-widest font-mono mb-2">
                      Est. Year
                    </div>
                    <div className="text-xl md:text-2xl font-bold">2026</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements behind */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>

        {/* Bottom Feature Grid */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-white/5 pt-12">
          <div className="space-y-3">
            <Globe className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold tracking-tight">
              Universal Access
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Knowledge should be free. We are breaking down silos in education
              through open-source architecture.
            </p>
          </div>
          <div className="space-y-3">
            <Cpu className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold tracking-tight">
              Future-Proof Tech
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Built on cutting-edge stacks to prepare you for the industrial
              evolution of tomorrow.
            </p>
          </div>
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <Zap className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold tracking-tight">
              Rapid Innovation
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Move fast, build precisely. The future foundry waits for no one in
              the digital frontier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
