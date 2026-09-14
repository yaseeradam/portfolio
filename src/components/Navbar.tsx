"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, Sun } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-black/85 backdrop-blur-xl border-b border-white/10" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-[#111216] border border-white/10 flex items-center justify-center text-white font-extrabold text-sm shadow-md group-hover:border-amber-500/50 group-hover:text-amber-400 transition-all">
            YA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              Yaseer K Adam
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">FULL-STACK ENGINEER</span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#FBA919] font-semibold"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FBA919] rounded-full shadow-[0_0_8px_rgba(251,169,25,0.6)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-[#111216] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/25 transition-all shadow-sm"
            title="Theme"
          >
            <Sun className="w-4 h-4" />
          </button>

          <a
            href="/resume.pdf"
            download="Yaseer_Adam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff6200] to-[#ff7e00] hover:from-[#e55800] hover:to-[#f07400] text-white font-semibold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(255,100,0,0.35)] transition-all group"
          >
            <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0a0a0a] px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-zinc-300 hover:text-orange-400 py-1"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Yaseer_Adam_Resume.pdf"
              className="w-full py-2.5 rounded-xl bg-orange-500 text-white text-center text-xs font-bold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
