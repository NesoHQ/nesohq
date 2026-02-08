"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Youtube, Facebook, MessageSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/count-up";

const communityPlatforms = [
  {
    id: "9f3c2c6e-7b9d-4c2a-9c7e-1f6b8a4d2e31",
    name: "Best Golang Community Ever",
    description:
      "The heart of our technical discussions. Join 3k+ developers to discuss protocols, contribute to OSS, and get real-time support.",
    icon: <MessageSquare className="h-8 w-8 text-[#5865F2]" />,
    link: "https://discord.gg/xvArbFbh34",
    cta: "Join the Server",
    stats: "3,000 Members",
    color: "group-hover:border-[#5865F2]/50",
    bg: "bg-[#5865F2]/5",
    btnHover: "hover:bg-[#5865F2] hover:border-[#5865F2] hover:text-white",
  },
  {
    id: "4a1d8b72-6e5f-4d93-b2a7-8c0f3e9d5b44",
    name: "Go With Habib",
    description:
      "Deep-dives into the Neso architecture, technical tutorials, and live-streams of our engineering sprints.",
    icon: <Youtube className="h-8 w-8 text-[#FF0000]" />,
    link: "https://www.youtube.com/@gowithhabib",
    cta: "Subscribe Now",
    stats: "7.92K Subscribers",
    color: "group-hover:border-[#FF0000]/50",
    bg: "bg-[#FF0000]/5",
    btnHover: "hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white",
  },
  {
    id: "c7e92a10-3f6b-4a5e-8d21-6b0c9f2a7e58",
    name: "Neso Community",
    description:
      "Stay updated with our mission, community highlights, and general announcements for the wider ecosystem.",
    icon: <Facebook className="h-8 w-8 text-[#1877F2]" />,
    link: "https://www.facebook.com/share/g/1HP24y1kfg/",
    cta: "Follow Page",
    stats: "7.0K Followers",
    color: "group-hover:border-[#1877F2]/50",
    bg: "bg-[#1877F2]/5",
    btnHover: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white",
  },
];

export default function CommunityPage() {
  return (
    <main className=" flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container px-6 mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary border border-primary/20 px-4 py-1.5 rounded-full bg-primary/5"
          >
            Network Status: Active / Nodes: 1,024
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
          >
            United in the <br />
            <span className="text-primary italic">Deep Field</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            NesoHQ is more than code. It&apos;s a global collective of
            engineers, designers, and visionaries building the infrastructure of
            the future.
          </motion.p>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-20 container px-6 mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {communityPlatforms.map((platform) => (
            <div
              key={platform.id}
              className={` group relative p-8 rounded-2xl border border-gray-200 shadow-md dark:border dark:border-white/9  bg-card/30 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 ${platform.color}`}
            >
              <div
                className={`w-16 h-16 rounded-xl ${platform.bg} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}
              >
                {platform.icon}
              </div>

              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">{platform.name}</h3>
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              </div>

              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                {platform.stats}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {platform.description}
              </p>

              <Button
                variant="outline"
                className={`w-full rounded-none border-primary/20 group/btn h-12 ${platform.btnHover}`}
                asChild
              >
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-bold uppercase tracking-[0.2em] text-[10px]"
                >
                  {platform.cta}
                  <Zap className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="py-24 border-t border-white/5 bg-primary/[0.02]">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary font-mono tracking-tighter">
                <CountUp to={120} suffix="+" className="count-up-text" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Controlling Nodes
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary font-mono tracking-tighter">
                <CountUp
                  to={2.4}
                  suffix="M"
                  decimals={1}
                  duration={2.5}
                  className="count-up-text"
                />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Lines of OSS
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary font-mono tracking-tighter">
                <CountUp to={150} suffix="k" className="count-up-text" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Total Community
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary font-mono tracking-tighter">
                <CountUp to={24} suffix="/7" className="count-up-text" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Uptime Protocol
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-32 container px-6 mx-auto">
        <div className="relative rounded-[40px] bg-linear-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-12 md:p-20 overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ready to initialize your{" "}
              <span className="text-primary italic">contribution</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We&apos;re currently scaling our core engineering team and
              community moderators. If you have the vision to build the future
              of decentralized learning, we&apos;re waiting for you.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                className="rounded-full px-10 bg-primary cursor-pointer dark:text-black hover:bg-primary/90 hover:scale-105 transition-all text-sm font-bold uppercase tracking-widest h-14"
              >
                Launch Protocol
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10 border-gray-300 cursor-pointer dark:border-white/20 hover:bg-white/5 text-sm font-bold uppercase tracking-widest h-14"
              >
                View Handbook
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
