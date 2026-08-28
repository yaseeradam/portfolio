"use client";

import React from "react";
import { Mail, Heart, ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 sm:px-8 border-t border-orange-500/10 relative z-10 bg-[#080503]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand */}
        <div className="flex flex-col gap-1 items-center md:items-start">
          <a href="#home" className="text-xl font-extrabold text-white tracking-tight">
            yaseer<span className="text-orange-500">.</span>
          </a>
          <p className="text-xs text-zinc-500">
            Crafted with Next.js, Tailwind CSS & Framer Motion for Yaseer K Adam.
          </p>
        </div>

        {/* Quick Links & Socials */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/yaseeradam"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-pill text-zinc-400 hover:text-orange-400 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:yaseeradam@gmail.com"
            className="p-2.5 rounded-full glass-pill text-zinc-400 hover:text-orange-400 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full glass-pill text-zinc-400 hover:text-orange-400 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-zinc-600 flex items-center justify-center gap-1">
        <span>&copy; {new Date().getFullYear()} Yaseer K Adam. All rights reserved.</span>
      </div>
    </footer>
  );
}
