"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, ArrowUpRight, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8 ${
        scrolled ? "bg-[#0c0805]/80 backdrop-blur-md border-b border-orange-500/10 py-3" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group text-2xl font-extrabold tracking-tight text-white"
        >
          <span className="text-orange-500 group-hover:scale-110 transition-transform">
            yaseer.
          </span>
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        </a>

        {/* Center Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full shadow-lg border border-white/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-orange-500/20 text-orange-400 border border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Download Resume / GitHub */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/yaseeradam"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-pill text-zinc-300 hover:text-white hover:border-orange-500/40 transition-all"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="/resume.pdf"
            download="Yaseer_Adam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-2 border border-orange-500/40 hover:border-orange-500 hover:bg-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all group"
          >
            <Download className="w-3.5 h-3.5 text-orange-400 group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg glass-pill text-zinc-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-2 p-5 glass-panel rounded-2xl border border-orange-500/20 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-zinc-300 hover:text-white hover:bg-orange-500/10 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <a
              href="https://github.com/yaseeradam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-orange-400"
            >
              <GithubIcon className="w-4 h-4" />
              <span>@yaseeradam</span>
            </a>

            <a
              href="#connect"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
