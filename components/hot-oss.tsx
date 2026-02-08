"use client";

import {
  Star,
  GitFork,
  ShieldCheck,
  Zap,
  Terminal,
  Code2,
  Globe,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const hotProjects = [
  {
    id: "bgce-archive",
    title: "BGCE Archive",
    subtitle: "Best GoLang Community Ever 🐹",
    description:
      "A living digital archive to preserve the best from the Go community — notes, templates, projects, and stories. The Golang Community Vault is more than a repository — it's a shared learning platform.",
    stats: {
      stars: "1.2k",
      commits: "840+",
      version: "v2.4.0",
      status: "Active",
    },
    tech: ["Go", "Next.js", "PostgreSQL"],
    tags: ["Knowledge Vault", "Community Driven"],
    links: {
      repo: "https://github.com/NesoHQ/bgce-archive",
      live: "https://bgceac.nesohq.org/",
    },
    reportCards: ["Cortex", "Ecommerce", "Skeleton"],
  },
  {
    id: "amar-pathagar",
    title: "Amar Pathagar",
    subtitle: "Community Library Platform 📚",
    description:
      "A classic, old-school styled Next.js frontend for the Amar Pathagar community library platform. Built to facilitate open access to knowledge and community resource sharing.",
    stats: {
      stars: "450",
      commits: "320+",
      version: "v1.0.5",
      status: "Stable",
    },
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    tags: ["EdTech", "Classic UI"],
    links: {
      repo: "https://github.com/NesoHQ/amar-pathagar-frontend",
      repo2: "https://github.com/NesoHQ/amar-pathagar-backend",
      live: "https://amarpathagar.nesohq.org/",
    },
    reportCards: ["Frontend", "API-Safe"],
  },
  {
    id: "ruckhalt",
    title: "Rückhalt",
    subtitle: "Enterprise Backup Backbone 🗄️",
    description:
      "A comprehensive backup management platform for object storage, PostgreSQL, and VPS servers. Rückhalt (German for 'backup/support') - Your data's backbone.",
    stats: {
      stars: "2.8k",
      commits: "1.5k+",
      version: "v3.2.1",
      status: "Operational",
    },
    tech: ["Go", "React", "PostgreSQL", "Docker"],
    tags: ["Infra", "Security", "backup"],
    links: {
      repo: "https://github.com/NesoHQ/storage-manager",
      live: "https://storage-manager.zendevz.com/",
    },
    reportCards: ["Core-S3", "DB-Dump", "VPS-Relay"],
  },
];

export function HotOSS() {
  return (
    <section className="py-32 relative bg-background">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-24 space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
            <span className="h-1 w-4 bg-primary animate-pulse" />
            Active Repositories
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
            Hot OSS <span className="text-primary italic">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The backbone of our open-source ecosystem. Scroll to explore the
            deck of innovations.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative flex flex-col gap-32 pb-40">
          {hotProjects.map((project, idx) => (
            <div
              key={project.id}
              className="sticky group w-full"
              style={{
                top: `calc(100px + ${idx * 40}px)`,
                zIndex: idx + 1,
              }}
            >
              <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-card/60 border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:-translate-y-2">
                {/* Visual Accent for Stacking */}
                <div className="absolute -top-[1px] -left-[1px] -right-[1px] h-[1px] bg-linear-to-r from-transparent via-primary/50 to-transparent" />

                <div className="grid lg:grid-cols-12 gap-12">
                  {/* Left Column: Project Info */}
                  <div className="lg:col-span-5 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-bold text-xl">
                          0{idx + 1}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-primary font-medium tracking-wide uppercase text-xs tracking-[0.2em]">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-mono text-primary uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        asChild
                        className="h-12 px-8 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-all font-bold uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                      >
                        <Link
                          href={project.links.repo}
                          target="_blank"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View Repo
                        </Link>
                      </Button>
                      {project.links.repo2 && (
                        <Button
                          asChild
                          className="h-12 px-8 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-all font-bold uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                        >
                          <Link
                            href={project.links.repo2}
                            target="_blank"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            View Repo 2
                          </Link>
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        asChild
                        className="h-12 px-8 rounded-full border-white/10 hover:bg-white/5 font-bold uppercase tracking-widest text-xs"
                      >
                        <Link href={project.links.live} target="_blank">
                          Launch App
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Diagnostics */}
                  <div className="lg:col-span-7 flex flex-col gap-8">
                    {/* Diagnostic Grid - Keep 4 columns on all but very small screens */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 rounded-2xl bg-gray-300 dark:bg-black/40  border border-white/5 flex flex-col items-center text-center">
                        <Star className="h-5 w-5 text-primary mb-2" />
                        <span className="text-xl font-bold font-mono">
                          {project.stats.stars}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase opacity-50">
                          Stars
                        </span>
                      </div>
                      <div className="p-4 rounded-2xl bg-gray-300 dark:bg-black/40 border border-white/5 flex flex-col items-center text-center">
                        <ShieldCheck className="h-5 w-5 text-emerald-500 mb-2" />
                        <span className="text-xl font-bold font-mono">
                          {project.stats.status}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase opacity-50">
                          State
                        </span>
                      </div>
                      <div className="p-4 rounded-2xl bg-gray-300 dark:bg-black/40 border border-white/5 flex flex-col items-center text-center">
                        <GitFork className="h-5 w-5 text-primary mb-2" />
                        <span className="text-xl font-bold font-mono">
                          {project.stats.commits}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase opacity-50">
                          Commits
                        </span>
                      </div>
                      <div className="p-4 rounded-2xl bg-gray-300 dark:bg-black/40 border border-white/5 flex flex-col items-center text-center">
                        <Terminal className="h-5 w-5 text-primary mb-2" />
                        <span className="text-lg font-bold font-mono">
                          {project.stats.version}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase opacity-50">
                          Build
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 p-8 rounded-3xl bg-linear-to-br from-primary/10 via-transparent to-transparent border border-white/5 relative group/card">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl pointer-events-none" />

                      <div className="relative space-y-8">
                        <div className="flex justify-between items-center">
                          <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-foreground/40">
                            Technical Report Cards
                          </h4>
                          <Code2 className="h-4 w-4 text-primary opacity-40" />
                        </div>

                        <div className="grid gap-6">
                          {project.reportCards.map((card) => (
                            <div key={card} className="space-y-3">
                              <div className="flex justify-between items-center text-[10px] font-mono">
                                <span className="text-muted-foreground uppercase tracking-widest">
                                  Module: {card}
                                </span>
                                <span className="text-primary font-bold">
                                  READY / A+
                                </span>
                              </div>
                              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-primary/60 w-[95%] shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-6 pt-4 border-t border-white/5 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                          <div className="flex items-center gap-2">
                            <Globe className="h-3 w-3 text-primary" /> Global
                            Protocol
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="h-3 w-3 text-primary" /> Active
                            Relay
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
