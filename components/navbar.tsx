"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Mission", href: "/mission" },
  { name: "Encyclopedia", href: "/encyclopedia" },
  { name: "Protocol", href: "/protocol" },
  { name: "Community", href: "/community" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-border"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="w-10/12 mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation - Tech/Mono Style */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors uppercase"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA - Solid & Minimal */}
            <div className="hidden md:flex items-center gap-4">
              <ModeToggle />
              <Link
                href="/login"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Log In
              </Link>
              <Button className="rounded-full px-6 bg-foreground text-background hover:bg-primary hover:text-foreground transition-all duration-300 font-medium">
                <Link href="/join">Initialize</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
            <div className="md:hidden">
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-2xl font-light">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block border-b border-border pb-4 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <Button
                size="lg"
                className="w-full bg-foreground text-background"
              >
                Initialize Sequence
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-border"
              >
                Log In
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
