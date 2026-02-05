import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20 text-foreground pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-20 rounded-t-[60px] shadow-[0_-20px_60px_rgba(var(--primary),0.15)]">
      <div className="max-w-7xl mx-auto">
        {/* Top Actions Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <Button
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6 h-10"
            asChild
          >
            <Link href="/signup">Create a NesoHQ account</Link>
          </Button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Learn</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  What Is NesoHQ?
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Mission &amp; Vision
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Our Protocol
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Agentic AI Hub
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  System Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  What&apos;s New
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Neso Trust Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Solutions Library
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  partners
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Developers</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Builder Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  SDKs &amp; Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Python on Neso
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Rust on Neso
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Go on Neso
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  File a Support Ticket
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Knowledge Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  System Status
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-6 text-xs text-muted-foreground">
                <span>
                  © 2026, NesoHQ, Inc. or its affiliates. All rights reserved.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <Link
                href="https://github.com/NesoHQ"
                target="blank"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
