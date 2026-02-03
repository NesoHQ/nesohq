import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Globe,
  ArrowUp,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f1115] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-20 rounded-t-[60px]">
      <div className="max-w-7xl mx-auto">
        {/* Top Actions Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <Button
            className="rounded-full bg-white text-black hover:bg-gray-200 font-medium px-6 h-10"
            asChild
          >
            <Link href="/signup">Create a NesoHQ account</Link>
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-gray-600 text-white hover:bg-white/10 hover:text-white gap-2 h-10 px-6 bg-transparent"
          >
            <Globe className="h-4 w-4" />
            English
          </Button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Learn</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  What Is NesoHQ?
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our Protocol
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Agentic AI Hub
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  System Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  What&apos;s New
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Neso Trust Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Solutions Library
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  partners
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Developers</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Builder Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  SDKs & Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Python on Neso
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Rust on Neso
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Go on Neso
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  File a Support Ticket
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Knowledge Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  System Status
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-6 text-xs text-gray-400">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Site Terms
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Cookie Preferences
                </Link>
                <span>
                  © 2026, NesoHQ, Inc. or its affiliates. All rights reserved.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
