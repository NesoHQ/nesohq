"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="relative flex-1 flex items-center justify-center overflow-hidden py-32">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]" />

        {/* Neptunian Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px]" />

        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-mono uppercase tracking-[0.3em] text-primary mx-auto animate-pulse">
              <Construction className="h-4 w-4" />
              Upgrade in Progress
            </div>

            {/* Main Title */}
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-4">
                Coming <span className="text-primary italic">Soon</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
                We are actively forging the next generation of open-source
                protocols. Data compilation is currently underway.
              </p>
            </div>

            {/* Diagnostic/Loading Visual */}
            <DynamicLoader />

            {/* Action */}
            <div className="pt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-widest text-xs group py-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                Return to Base
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function DynamicLoader() {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    // Animate progress bar (simulated download that gets stuck)
    const timer = setInterval(() => {
      setProgress((prev) => {
        // Stick around 82% to simulate a heavy process
        if (prev >= 50) return 50;
        // Random increment between 1 and 5
        const diff = Math.random() * 5;
        return Math.min(prev + diff, 82);
      });
    }, 200);

    // Animate dots
    const dotsTimer = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(dotsTimer);
    };
  }, []);

  return (
    <div className="max-w-md mx-auto bg-card/40 border border-white/5 backdrop-blur-md rounded-2xl p-6 relative overflow-hidden group">
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent h-[200%] w-full -translate-y-full group-hover:animate-[scan_3s_linear_infinite]" />

      <div className="space-y-4">
        <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <span>System Status</span>
          <span className="text-primary w-24 text-left">Compiling{dots}</span>
        </div>
        {/* Progress Bar */}
        <div className="h-2 w-full bg-secondary/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-muted-foreground/60">
          <span>Module: OSS_Registry</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
      </div>
    </div>
  );
}
