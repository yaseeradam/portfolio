"use client";

import React from "react";
import { Mail, ArrowUp, Download } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 px-4 sm:px-8 border-t border-white/10 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand Logo */}
        <div className="flex flex-col gap-1 items-center md:items-start">
          <a href="#home" className="text-xl font-extrabold text-white tracking-tight">
            yaseer<span className="text-orange-500">.</span>
          </a>
          <p className="text-xs text-zinc-500 font-mono">
            Full-Stack Software Engineer • Next.js 15 & Flutter
          </p>
        </div>

        {/* Action Triggers & Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yaseeradam"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-orange-500/40 transition-all"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:yaseeradam@gmail.com"
            className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-orange-500/40 transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            download="Yaseer_Adam_Resume.pdf"
            className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-orange-500/40 transition-all"
            title="Download Resume"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-orange-500/40 transition-all"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
        <span>&copy; {new Date().getFullYear()} Yaseer K Adam. All rights reserved.</span>
        <span>Built with Next.js 15 & Tailwind CSS</span>
      </div>
    </footer>
  );
}
