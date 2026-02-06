"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { FaDiscord, FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Mission", href: "/mission" },
  { name: "OSS Projects", href: "/oss-projects" },
  { name: "Community", href: "/community" },
];

const socialLinks = [
  { name: "Discord", icon: FaDiscord, href: "https://discord.gg/nesohq" },
  { name: "GitHub", icon: FaGithub, href: "https://github.com/nesohq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Full-width backdrop when scrolled to block content */}
      {isScrolled && (
        <div className="fixed top-0 left-0 right-0 h-20 bg-background/95 backdrop-blur-sm z-40" />
      )}

      {/* Fixed Container for Navbar */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500",
          isScrolled ? "pt-4" : "pt-0",
        )}
      >
        <nav
          className={cn(
            "transition-all duration-500 ease-out",
            "w-full max-w-7xl",
            isScrolled
              ? "w-[90%] md:w-[80%] lg:w-[70%] max-w-5xl bg-black/20 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl shadow-black/20"
              : "w-full border-b border-transparent bg-transparent",
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              isScrolled ? "px-6 py-2" : "px-6 py-5 md:px-12",
            )}
          >
            {/* Logo */}
            <div className="shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative text-base font-medium transition-all duration-300 px-3 py-2",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Side - Social Icons & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Social Icons Pill Container */}
              <div
                className={cn(
                  "flex items-center gap-4 rounded-full px-5 py-2 backdrop-blur-sm transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] bg-primary/5 border border-primary/10 hover:bg-primary/10",
                )}
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative h-5 w-5 overflow-hidden"
                      aria-label={social.name}
                    >
                      <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-[28px]">
                        <Icon
                          className={cn(
                            "h-5 w-5 mb-2 transition-colors text-muted-foreground",
                          )}
                        />
                        <Icon className={cn("h-5 w-5 text-primary")} />
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Theme Toggle */}
              <div className="pl-2">
                <ModeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <ModeToggle />
              <button
                className="p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-20" />

      {/* Full Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 lg:hidden">
          <div className="flex flex-col gap-6 text-2xl font-light">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block border-b border-white/10 pb-4 transition-colors",
                    isActive
                      ? "text-primary font-bold"
                      : "text-gray-300 hover:text-white",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Social Links */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
