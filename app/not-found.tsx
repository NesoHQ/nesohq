"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Terminal, AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="relative flex-1 flex items-center justify-center overflow-hidden py-32">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]" />

        {/* Neptunian Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px]" />

        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            {/* Error Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/20 bg-destructive/5 text-[10px] font-mono uppercase tracking-[0.3em] text-destructive mx-auto">
              <AlertTriangle className="h-4 w-4 animate-pulse" />
              System Alert
            </div>

            {/* Error Code Display */}
            <div className="relative border border-gray-200 rounded-md dark:border-0">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl" />
              <div className="relative p-12 rounded-3xl bg-card/40 border border-white/10 backdrop-blur-2xl space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <Terminal className="h-8 w-8 text-primary" />
                  <h1 className="text-8xl md:text-9xl font-bold font-mono tracking-tighter text-primary">
                    404
                  </h1>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Void Space Detected
                  </h2>
                  <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                    The protocol you&apos;re searching for has drifted beyond
                    the known universe. This sector is unmapped.
                  </p>
                </div>

                {/* Terminal-style error log */}
                <div className="p-6 rounded-xl dark:bg-black/40 bg-white/100 border border-white/5 font-mono text-left max-w-lg mx-auto">
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="text-primary">$</span>
                      <span className="text-muted-foreground">
                        neso locate --path=
                        <span className="text-destructive">unknown</span>
                      </span>
                    </div>
                    <div className="text-destructive/70 text-xs pl-4">
                      ERROR: Route not found in foundry index
                    </div>
                    <div className="text-muted-foreground/50 text-xs pl-4">
                      Suggestion: Return to base protocol
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center">
              <Link
                href="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-widest text-xs group py-2"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                Return to Base
              </Link>
            </div>

            {/* Technical Diagnostics */}
            <div className="pt-4 border-t border-white/5">
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">
                    Status Code
                  </div>
                  <div className="text-lg font-bold text-destructive">404</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">
                    Error Type
                  </div>
                  <div className="text-lg font-bold">Not Found</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">
                    Protocol
                  </div>
                  <div className="text-lg font-bold text-primary">NESO-1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}