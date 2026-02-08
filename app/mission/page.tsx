"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Shield, Target, Compass, Zap, Cpu, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { DecentralizationStats } from "@/components/mission/decentralization-stats";
import { HorizonProtocol } from "@/components/mission/horizon-protocol";

const coreValues = [
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Universal Access",
    description:
      "Breaking down the walls of proprietary education. We believe high-level engineering knowledge should be a universal right, not a localized privilege.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-primary" />,
    title: "Open Foundry",
    description:
      "Everything we build is open-source. We don't just ship products; we ship blueprints, inviting the world to fork, improve, and evolve our core protocols.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Neutrality",
    description:
      "NesoHQ operates as a decentralized entity. Our algorithms and learning paths are designed for objective technical excellence, free from corporate bias.",
  },
];

export default function MissionPage() {
  return (
    <main className="min-h-screen flex flex-col ">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Technical Decor */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />

        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-mono uppercase tracking-[0.3em] text-primary mx-auto"
            >
              <Compass className="h-3 w-3 animate-spin-slow" />
              Strategic Directive
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-foreground"
            >
              Engineering the <br />
              <span className="text-primary italic">Universal</span> Mind.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium"
            >
              NesoHQ is a decentralized foundry. We are building the
              architectures that will power the next millennium of human and
              machine intelligence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-24 container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Manifesto
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed border-l-2 border-primary/20 pl-8 italic">
              <p>
                &quot;The current educational systems are centralized relics of
                a pre-distributed world. They are slow, expensive, and
                exclusionary.&quot;
              </p>
              <p>
                &quot;At NesoHQ, we recognize that the future belongs to
                builders who can navigate the unknown. We are constructing
                universal protocols that turn every terminal into a gateway to
                high-level mastery.&quot;
              </p>
              <p>
                &quot;No gatekeepers. No borders. Just the code, the blueprint,
                and the mission.&quot;
              </p>
            </div>
          </div>

          {/* Visual Data Representation */}
          <div className="relative p-1 rounded-3xl bg-linear-to-br from-primary/20 via-transparent to-white/5 border border-white/10 overflow-hidden group">
            <div className="bg-card/40 backdrop-blur-3xl p-8 rounded-2xl relative space-y-8">
              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
                <span>Foundry Objective</span>
                <Target className="h-4 w-4" />
              </div>

              <div className="space-y-4">
                <DecentralizationStats />
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">
                    Target Region
                  </div>
                  <div className="text-sm font-bold">Deep Field</div>
                </div>
                <div className="space-y-1 text-right">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">
                    Status
                  </div>
                  <div className="text-sm font-bold text-primary animate-pulse">
                    ACTIVE
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Zap className="h-64 w-64 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-primary/2">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {coreValues.map((value, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <HorizonProtocol />

      {/* CTA */}
      <section className="py-32 container px-6 mx-auto">
        <div className="relative p-12 md:p-24 rounded-[3rem] bg-linear-to-b from-primary/10 to-transparent border border-primary/20 text-center space-y-8 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter relative z-10">
            Enlist in the <br className="hidden sm:block" />
            <span className="text-primary italic">Foundry</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto relative z-10 leading-relaxed">
            The mission is vast, and the protocols are deep. We require
            engineers who aren&apos;t afraid of building the impossible.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              className="rounded-full px-10 bg-primary cursor-pointer text-primary-foreground dark:text-black hover:bg-primary/90 hover:scale-105 transition-all text-sm font-bold uppercase tracking-widest h-14 shadow-lg shadow-primary/20"
            >
              Initialize Connection
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-10 border-primary/20 cursor-pointer hover:bg-primary/10 text-primary hover:text-primary text-sm font-bold uppercase tracking-widest h-14"
            >
              Read Governance
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
