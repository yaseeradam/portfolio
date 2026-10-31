"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Sun, ExternalLink, Menu, X } from "lucide-react";

export default function ProjectNavbar({
  projectTitle,
  liveUrl,
}: {
  projectTitle?: string;
  liveUrl?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-black/85 backdrop-blur-xl border-b border-white/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Left: Back Button & Brand Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#111216] border border-white/10 hover:border-amber-500/40 text-xs font-semibold text-zinc-300 hover:text-white transition-all group shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#FBA919] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>

          <div className="h-5 w-[1px] bg-white/10 hidden sm:block" />

          <Link href="/" className="hidden sm:flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-[#111216] border border-white/10 flex items-center justify-center text-white font-extrabold text-xs shadow-md group-hover:border-amber-500/50 group-hover:text-amber-400 transition-all">
              YA
            </div>
            <span className="text-xs font-bold tracking-tight text-zinc-300 group-hover:text-white transition-colors">
              Yaseer K Adam
            </span>
          </Link>
        </div>

        {/* Center / Current Project Breadcrumb (Desktop) */}
        {projectTitle && (
          <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-zinc-400 bg-white/[0.03] border border-white/5 px-4 py-1.5 rounded-full">
            <span className="text-zinc-500">Case Study</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-200 font-semibold truncate max-w-[200px]">
              {projectTitle}
            </span>
          </div>
        )}

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-xs flex items-center gap-1.5 transition-all"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3 text-[#FBA919]" />
            </a>
          )}

          <button
            type="button"
            className="w-9 h-9 rounded-full bg-[#111216] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/25 transition-all shadow-sm"
            title="Theme"
          >
            <Sun className="w-4 h-4" />
          </button>

          <a
            href="/resume.pdf"
            download="Al-hafiz_YASIR_KABIR_ADAMU.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff6200] to-[#ff7e00] hover:from-[#e55800] hover:to-[#f07400] text-white font-semibold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(255,100,0,0.35)] transition-all group"
          >
            <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0a0a0a] px-6 py-6 space-y-4">
          <Link
            href="/#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-zinc-300 hover:text-orange-400 py-1"
          >
            All Projects
          </Link>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-zinc-300 hover:text-orange-400 py-1"
          >
            Portfolio Home
          </Link>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#FBA919] py-1"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <div className="pt-3 border-t border-white/10">
            <a
              href="/resume.pdf"
              download="Al-hafiz_YASIR_KABIR_ADAMU.pdf"
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
