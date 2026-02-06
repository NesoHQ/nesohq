"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Star,
  GitFork,
  ExternalLink,
  Github,
  Code2,
  Activity,
  Users,
  Calendar,
  Menu,
  X,
} from "lucide-react";

const projects = [
  {
    id: 1,
    name: "BGCE Archive",
    tagline: "Community-Driven Knowledge Vault",
    description:
      "A comprehensive archive system for the Best Golang Community Ever. Features advanced search, categorization, and community contributions for preserving technical knowledge and resources.",
    stats: {
      stars: "103",
      forks: "66",
      commits: "392+",
      contributors: "31",
    },
    tech: ["Go", "Next.js", "PostgreSQL", "Docker"],
    tags: ["Knowledge Vault", "Community Driven", "Archive"],
    links: {
      repo: "https://github.com/NesoHQ/bgce-archive",
      live: "https://nesohq.github.io/bgce-archive/",
    },
    version: "v2.1.0",
    status: "Active",
  },
  {
    id: 2,
    name: "Amar Pathagar",
    tagline: "Classic EdTech Platform",
    description:
      "A modern educational platform built with Next.js and TypeScript. Provides an intuitive interface for learning management, course delivery, and student engagement with a focus on accessibility.",
    stats: {
      stars: "1",
      forks: "0",
      commits: "44+",
      contributors: "2",
    },
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
    tags: ["EdTech", "Classic UI", "Learning"],
    links: {
      repo: "https://github.com/NesoHQ/amar-pathagar-frontend",
      live: "http://91.98.134.15:3000/",
    },
    version: "v1.8.2",
    status: "Active",
  },
  {
    id: 3,
    name: "Storage Manager (Rückhalt)",
    tagline: "Enterprise Backup & Security",
    description:
      "A robust storage management system with S3 integration, database dump automation, and VPS relay capabilities. Built for reliability and security in production environments.",
    stats: {
      stars: "16",
      forks: "4",
      commits: "2+",
      contributors: "0",
    },
    tech: ["Go", "React", "PostgreSQL", "Docker", "S3"],
    tags: ["Infrastructure", "Security", "Backup"],
    links: {
      repo: "https://github.com/NesoHQ/storage-manager",
      live: "https://storage-manager.zendevz.com/",
    },
    version: "v3.2.1",
    status: "Active",
  },
];

export default function OSSProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 overflow-hidden border-b border-white/5">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Technical Decor */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />

        <div className="container px-6 mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
            <Code2 className="h-4 w-4" />
            Open Source Registry
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Our <span className="text-primary italic">Protocols</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Production-grade open-source projects built by the NesoHQ foundry.
            Battle-tested, community-driven, and engineered for scale.
          </p>
        </div>
      </section>

      {/* Projects Layout */}
      <section className="flex-1 py-12">
        <div className="container px-6 mx-auto">
          <div className="space-y-6 mt-4">
            {/* Mobile - Drawer Toggle Button */}
            <div className=" lg:hidden sticky top-16 z-30 bg-background/95 backdrop-blur-md py-4 -mx-6 px-6 border-b border-white/5">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-all"
              >
                <Menu className="h-4 w-4" />
                <span className="text-xs font-mono uppercase tracking-widest">
                  Projects
                </span>
              </button>
            </div>

            {/* Mobile - Side Drawer Overlay */}
            {isDrawerOpen && (
              <div
                className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                onClick={() => setIsDrawerOpen(false)}
              />
            )}

            {/* Mobile - Side Drawer */}
            <div
              className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-background border-r border-white/10 z-50 transform transition-transform duration-300 overflow-y-auto ${
                isDrawerOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h3 className="text-sm font-mono uppercase tracking-widest text-primary">
                  Projects ({projects.length})
                </h3>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-4 space-y-3">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setSelectedProject(project);
                      setIsDrawerOpen(false);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                      selectedProject.id === project.id
                        ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-gray-200 dark:border-white/5 bg-card/30 hover:border-primary/20"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-sm">{project.name}</h3>
                      {selectedProject.id === project.id && (
                        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {project.tagline}
                    </p>
                    <div className="flex items-center gap-3 mt-3 text-[10px] text-muted-foreground font-mono">
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {project.stats.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {project.stats.forks}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              {/* Desktop - Sidebar Project List */}
              <aside className="hidden lg:block lg:col-span-3 space-y-3 sticky top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 px-4 mt-10">
                  Projects ({projects.length})
                </div>

                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                      selectedProject.id === project.id
                        ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-gray-200 dark:border-white/5 bg-card/30 hover:border-primary/20 hover:bg-card/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-sm">{project.name}</h3>
                      {selectedProject.id === project.id && (
                        <div className="h-2 w-2 rounded-full  animate-pulse bg-blue-500" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {project.tagline}
                    </p>
                    <div className="flex items-center gap-3 mt-3 text-[10px] text-muted-foreground font-mono">
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {project.stats.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {project.stats.forks}
                      </span>
                    </div>
                  </button>
                ))}
              </aside>

              {/* Main Content - Project Details */}
              <div className="lg:col-span-9">
                <div className="border border-gray-200 dark:border-white/5 rounded-2xl bg-card/30 backdrop-blur-md">
                  {/* Header */}
                  <div className="sticky top-16 z-20 p-8 border-b border-gray-200 dark:border-white/5 bg-background rounded-t-2xl">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                          {selectedProject.name}
                        </h2>
                        <p className="text-primary font-mono text-sm">
                          {selectedProject.tagline}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full border-primary/20 hover:bg-primary/10 font-bold uppercase tracking-widest text-[10px]"
                          asChild
                        >
                          <a
                            href={selectedProject.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            Repo
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          className="rounded-full bg-primary text-primary-foreground dark:text-black hover:bg-primary/90 font-bold uppercase tracking-widest text-[10px]"
                          asChild
                        >
                          <a
                            href={selectedProject.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-background/50 border border-gray-300 dark:border-white/10 text-[10px] font-mono uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-background/30">
                    <div className="p-4 rounded-xl bg-gray-300 dark:bg-black/40 border border-white/5 text-center">
                      <Star className="h-5 w-5 text-primary mb-2 mx-auto" />
                      <div className="text-xl font-bold font-mono">
                        {selectedProject.stats.stars}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Stars
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-300 dark:bg-black/40 border border-white/5 text-center">
                      <GitFork className="h-5 w-5 text-primary mb-2 mx-auto" />
                      <div className="text-xl font-bold font-mono">
                        {selectedProject.stats.forks}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Forks
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-300 dark:bg-black/40 border border-white/5 text-center">
                      <Activity className="h-5 w-5 text-primary mb-2 mx-auto" />
                      <div className="text-xl font-bold font-mono">
                        {selectedProject.stats.commits}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Commits
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-300 dark:bg-black/40 border border-white/5 text-center">
                      <Users className="h-5 w-5 text-primary mb-2 mx-auto" />
                      <div className="text-xl font-bold font-mono">
                        {selectedProject.stats.contributors}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Contributors
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                        Overview
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Version & Status */}
                    <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground font-mono">
                          Version:
                        </span>
                        <span className="font-bold text-primary">
                          {selectedProject.version}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-muted-foreground font-mono">
                          Status:
                        </span>
                        <span className="font-bold text-emerald-500">
                          {selectedProject.status}
                        </span>
                      </div>
                    </div>
                  </div>
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
