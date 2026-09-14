"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Code2, Coffee, Award, ChevronRight } from "lucide-react";
import {
  ReactIcon,
  NextIcon,
  TypeScriptIcon,
  NodeIcon,
  TailwindIcon,
  PostgreSqlIcon,
  GitIcon,
} from "@/components/icons/TechIcons";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-28 pb-16 px-4 sm:px-8 flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Ambient Studio Image with smooth mask to black */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Person & Office Image placed on right side */}
        <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full">
          <Image
            src="/images/port.png"
            alt="Yaseer K Adam - Studio"
            fill
            priority
            className="object-cover object-[70%_center] lg:object-[60%_center] opacity-90"
          />

          {/* Left-to-right fade overlay so text on left is crystal clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:via-black/50" />

          {/* Top and bottom subtle vignettes */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        {/* Subtle warm orange ambient spotlight behind character */}
        <div className="absolute right-[10%] top-[25%] w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(251,146,60,0.15),transparent_70%)] blur-3xl" />

        {/* Luminous curved orange neon swoop across bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[220px] pointer-events-none z-10 opacity-85"
          viewBox="0 0 1440 220"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M -50 180 C 180 210, 320 120, 680 180 C 980 230, 1250 160, 1500 200"
            stroke="url(#orange-neon-glow)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M -50 180 C 180 210, 320 120, 680 180 C 980 230, 1250 160, 1500 200"
            stroke="#ff7700"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#neon-blur)"
            className="opacity-40"
          />
          <defs>
            <linearGradient id="orange-neon-glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4500" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#ff9900" stopOpacity="1" />
              <stop offset="70%" stopColor="#ffb700" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ff7700" stopOpacity="0.4" />
            </linearGradient>
            <filter id="neon-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center relative z-20">
        {/* Left Column: Typography, Status, CTAs, and Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-start gap-6 lg:pr-4"
        >
          {/* Status Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2315] border border-[#1d4d2d] text-xs font-semibold text-[#22c55e] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e] animate-pulse" />
              <span>Available for Hire</span>
            </div>
            <span className="text-xs text-zinc-400 font-medium">
              Open to exciting opportunities
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tight text-white leading-[1.04]">
            Full-Stack <br />
            <span className="text-[#FBA919]">Software</span> <br />
            Engineer<span className="text-[#FBA919]">.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-zinc-400 max-w-lg leading-relaxed font-normal">
            Specializing in high-performance web applications, cross-platform mobile apps, and intelligent AI integrations. I build scalable solutions that solve real problems.
          </p>

          {/* Action Pill Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-[#ff6200] hover:bg-[#e65800] text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(255,98,0,0.45)] transition-all duration-200 flex items-center gap-2 group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span>Get in Touch</span>
            </a>

            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-[#111215]/90 hover:bg-[#1b1c22] border border-white/15 hover:border-white/30 text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-zinc-300" />
              <span>View My Work</span>
            </a>
          </div>

          {/* Key Metrics / Stats Row */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-8">
            {/* Stat 1: Projects Completed */}
            <div className="flex items-center gap-3">
              <div className="text-[#ff7a00]">
                <Code2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white leading-tight">4+</p>
                <p className="text-[11px] text-zinc-400 font-medium">Projects Completed</p>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-[1px] bg-white/10" />

            {/* Stat 2: Years Experience */}
            <div className="flex items-center gap-3">
              <div className="text-[#2dd4bf]">
                <Coffee className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white leading-tight">2+</p>
                <p className="text-[11px] text-zinc-400 font-medium">Years Experience</p>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-[1px] bg-white/10" />

            {/* Stat 3: Client Satisfaction */}
            <div className="flex items-center gap-3">
              <div className="text-[#a78bfa]">
                <Award className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white leading-tight">100%</p>
                <p className="text-[11px] text-zinc-400 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Stage with Floating Tech Cards */}
        <div className="lg:col-span-6 relative w-full h-[520px] sm:h-[580px] lg:h-[620px] flex items-center justify-center">
          {/* Top-Right Handwritten "Code Build Create" Accent */}
          <div className="absolute top-2 right-4 sm:right-10 z-30 pointer-events-none select-none">
            <div className="font-[family-name:var(--font-caveat)] font-bold text-[#FBA919] text-2xl sm:text-3xl tracking-wider leading-none drop-shadow-[0_2px_10px_rgba(251,169,25,0.45)] transform rotate-[-8deg]">
              <div>Code</div>
              <div className="pl-4 pt-1">Build</div>
              <div className="pl-8 pt-1">Create</div>
            </div>
          </div>

          {/* Floating Tech Stack Cards */}
          {/* 1. React Card (Upper Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.1 },
              scale: { duration: 0.5, delay: 0.1 },
              y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-8 left-2 sm:left-12 z-30 px-3.5 py-2.5 rounded-2xl bg-[#0c0d12]/85 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center gap-3 hover:border-cyan-500/50 transition-colors group cursor-default"
          >
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <ReactIcon className="w-5 h-5 group-hover:rotate-90 transition-transform duration-700" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">React</p>
              <p className="text-[10px] text-zinc-400 font-medium">Build interactive UIs</p>
            </div>
          </motion.div>

          {/* 2. Next.js Card (Mid Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, 6, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.2 },
              scale: { duration: 0.5, delay: 0.2 },
              y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-[35%] left-0 sm:left-4 z-30 px-3.5 py-2.5 rounded-2xl bg-[#0c0d12]/85 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center gap-3 hover:border-white/40 transition-colors group cursor-default"
          >
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
              <NextIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Next.js</p>
              <p className="text-[10px] text-zinc-400 font-medium">Modern Web Apps</p>
            </div>
          </motion.div>

          {/* 3. Node.js Card (Lower Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.3 },
              scale: { duration: 0.5, delay: 0.3 },
              y: { duration: 4.6, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-[62%] left-2 sm:left-10 z-30 px-3.5 py-2.5 rounded-2xl bg-[#0c0d12]/85 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center gap-3 hover:border-emerald-500/50 transition-colors group cursor-default"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <NodeIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Node.js</p>
              <p className="text-[10px] text-zinc-400 font-medium">Powerful Backend</p>
            </div>
          </motion.div>

          {/* 4. Tailwind CSS Card (Upper Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.25 },
              scale: { duration: 0.5, delay: 0.25 },
              y: { duration: 4.0, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-14 right-2 sm:right-6 z-30 px-3.5 py-2.5 rounded-2xl bg-[#0c0d12]/85 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center gap-3 hover:border-cyan-400/50 transition-colors group cursor-default"
          >
            <div className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
              <TailwindIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Tailwind CSS</p>
              <p className="text-[10px] text-zinc-400 font-medium">Beautiful Styling</p>
            </div>
          </motion.div>

          {/* 5. TypeScript Card (Mid Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, 5, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.35 },
              scale: { duration: 0.5, delay: 0.35 },
              y: { duration: 4.4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-[38%] right-0 sm:right-2 z-30 px-3.5 py-2.5 rounded-2xl bg-[#0c0d12]/85 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center gap-3 hover:border-blue-500/50 transition-colors group cursor-default"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <TypeScriptIcon className="w-5 h-5 rounded" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">TypeScript</p>
              <p className="text-[10px] text-zinc-400 font-medium">Better Code</p>
            </div>
          </motion.div>

          {/* 6. PostgreSQL Card (Lower Mid Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.45 },
              scale: { duration: 0.5, delay: 0.45 },
              y: { duration: 3.9, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-[58%] right-2 sm:right-8 z-30 px-3.5 py-2.5 rounded-2xl bg-[#0c0d12]/85 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center gap-3 hover:border-sky-500/50 transition-colors group cursor-default"
          >
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
              <PostgreSqlIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">PostgreSQL</p>
              <p className="text-[10px] text-zinc-400 font-medium">Reliable Database</p>
            </div>
          </motion.div>

          {/* 7. Git & GitHub Card (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, 6, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.55 },
              scale: { duration: 0.5, delay: 0.55 },
              y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-[76%] right-0 sm:right-4 z-30 px-3.5 py-2.5 rounded-2xl bg-[#0c0d12]/85 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center gap-3 hover:border-orange-500/50 transition-colors group cursor-default"
          >
            <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
              <GitIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Git &amp; GitHub</p>
              <p className="text-[10px] text-zinc-400 font-medium">Version Control</p>
            </div>
          </motion.div>

          {/* Bottom Right Project Status Pill */}
          <div className="absolute -bottom-4 sm:bottom-2 right-2 sm:right-6 z-30">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0a0b0e]/90 border border-white/15 hover:border-white/30 text-xs font-medium text-zinc-200 backdrop-blur-md shadow-lg transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span>Currently working on new projects</span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
