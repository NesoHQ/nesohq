"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, Play, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

// Mock Data for "Neso" OSS Projects
const projects = [
  {
    id: 1,
    title: "Neso Protocol",
    description:
      "A decentralized, agent-centric communication layer facilitating autonomous interactions between AI agents and human operators across distributed networks.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=800&q=80", // Server/Abstract
    repoLink: "https://github.com/nesohq/protocol",
    liveLink: "https://protocol.neso.hq",
    stars: "12.4k",
    forks: "840",
    videoPreview: true,
  },
  {
    id: 2,
    title: "Void_UI System",
    description:
      "The design system powering the next generation of interstellar interfaces. Built with React, Tailwind, and physics-based motion primitives.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", // Cyberpunk UI
    repoLink: "https://github.com/nesohq/void-ui",
    liveLink: "https://ui.neso.hq",
    stars: "8.2k",
    forks: "420",
    videoPreview: false,
  },
  {
    id: 3,
    title: "Hyper-Index",
    description:
      "A high-performance semantic search engine optimized for large-scale knowledge graphs and vector embeddings in low-latency environments.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // Chip/Data
    repoLink: "https://github.com/nesohq/hyper-index",
    liveLink: "https://search.neso.hq",
    stars: "5.1k",
    forks: "210",
    videoPreview: true,
  },
  {
    id: 4,
    title: "Agent Forge",
    description:
      "CLI toolchain for rapidly scaffolding, training, and deploying autonomous agents with pre-configured safety rails and capability modules.",
    image:
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&q=80", // Abstract Mesh
    repoLink: "https://github.com/nesohq/agent-forge",
    liveLink: "https://forge.neso.hq",
    stars: "3.9k",
    forks: "150",
    videoPreview: false,
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent opacity-50" />

      <div className="container px-6 mx-auto">
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Open Source <span className="text-primary">Ecosystem</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              We believe code should be open. Explore the core technologies
              powering the Neso network. contribute, fork, and build the future
              with us.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2">
            <Github className="h-4 w-4" />
            View Organization
          </Button>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="py-0 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden group hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  {/* Media Area */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    {/* In a real app, use next/image here. Using a div for demo flexibility if generic images fail */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay Gradient */}
                    <div />

                    {/* Video Indicator */}
                    {project.videoPreview && (
                      <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center border border-white/10">
                        <Play className="h-3 w-3 fill-current text-primary" />
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" /> {project.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="h-3 w-3" /> {project.forks}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    <div className="flex gap-2 mt-auto">
                      <Button
                        size="sm"
                        className="flex-1 gap-2 bg-[#001f3f] hover:bg-[#002d5a] text-white border-none"
                        asChild
                      >
                        <Link href={project.repoLink} target="_blank">
                          <Github className="h-3.5 w-3.5" /> Repo
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 gap-2 border-border/50 hover:bg-primary/10 hover:text-primary transition-colors"
                        asChild
                      >
                        <Link href={project.liveLink} target="_blank">
                          <ExternalLink className="h-3.5 w-3.5" /> Live
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-end gap-2 mt-8 md:hidden">
            <CarouselPrevious className="static translate-y-0 translate-x-0" />
            <CarouselNext className="static translate-y-0 translate-x-0" />
          </div>
          <CarouselPrevious className="hidden md:flex -left-4 bg-background/80 backdrop-blur border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-4 bg-background/80 backdrop-blur border-primary/20 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
