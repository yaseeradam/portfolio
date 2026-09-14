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

const orbitBadges = [
  {
    label: "React",
    sub: "Build interactive UIs",
    icon: <ReactIcon className="w-5 h-5" />,
    angle: 0,
    accentBorder: "hover:border-cyan-400/60",
  },
  {
    label: "Next.js",
    sub: "Modern Web Apps",
    icon: <NextIcon className="w-4 h-4 text-white" />,
    angle: (360 / 7) * 1,
    accentBorder: "hover:border-white/50",
  },
  {
    label: "TypeScript",
    sub: "Better Code",
    icon: <TypeScriptIcon className="w-5 h-5 rounded" />,
    angle: (360 / 7) * 2,
    accentBorder: "hover:border-blue-400/60",
  },
  {
    label: "Node.js",
    sub: "Powerful Backend",
    icon: <NodeIcon className="w-5 h-5" />,
    angle: (360 / 7) * 3,
    accentBorder: "hover:border-emerald-400/60",
  },
  {
    label: "Tailwind CSS",
    sub: "Beautiful Styling",
    icon: <TailwindIcon className="w-5 h-5" />,
    angle: (360 / 7) * 4,
    accentBorder: "hover:border-cyan-400/60",
  },
  {
    label: "PostgreSQL",
    sub: "Reliable Database",
    icon: <PostgreSqlIcon className="w-5 h-5" />,
    angle: (360 / 7) * 5,
    accentBorder: "hover:border-sky-400/60",
  },
  {
    label: "Git & GitHub",
    sub: "Version Control",
    icon: <GitIcon className="w-5 h-5" />,
    angle: (360 / 7) * 6,
    accentBorder: "hover:border-orange-400/60",
  },
];

export default function HeroSection() {
  const orbitRadius = 265;

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-28 pb-16 px-4 sm:px-8 flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Lighting & Glow Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Warm ambient spotlight behind character area */}
        <div className="absolute right-[8%] top-[20%] w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(251,146,60,0.16),transparent_70%)] blur-3xl" />
        <div className="absolute left-[15%] bottom-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(249,115,22,0.08),transparent_70%)] blur-3xl" />

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

        {/* Right Column: Visual Stage with Seamless Portrait (NO BOX) and Circling Orbit Icons */}
        <div className="lg:col-span-6 relative w-full min-h-[540px] sm:min-h-[600px] lg:min-h-[640px] flex items-center justify-center">
          {/* Top-Right Handwritten "Code Build Create" Accent */}
          <div className="absolute top-2 right-4 sm:right-8 z-30 pointer-events-none select-none">
            <div className="font-[family-name:var(--font-caveat)] font-bold text-[#FBA919] text-2xl sm:text-3xl tracking-wider leading-none drop-shadow-[0_2px_10px_rgba(251,169,25,0.45)] transform rotate-[-8deg]">
              <div>Code</div>
              <div className="pl-4 pt-1">Build</div>
              <div className="pl-8 pt-1">Create</div>
            </div>
          </div>

          {/* Scale wrapper for responsive presentation on all screen sizes */}
          <div className="relative flex items-center justify-center scale-[0.75] sm:scale-[0.88] lg:scale-100 transition-transform origin-center">
            {/* Ambient Backlight Glow Ring behind Yaseer */}
            <div className="absolute w-[440px] h-[480px] rounded-full bg-gradient-to-b from-orange-500/25 via-amber-500/15 to-transparent blur-3xl pointer-events-none" />

            {/* Orbit Dashed Guideline Ring */}
            <div
              style={{
                width: orbitRadius * 2 + 10,
                height: orbitRadius * 2 + 10,
              }}
              className="absolute rounded-full border border-dashed border-white/15 pointer-events-none"
            />

            {/* Seamless Natural Portrait of Yaseer Adam - NO BOX, NO BORDER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10 w-[360px] h-[430px] sm:w-[420px] sm:h-[490px] lg:w-[460px] lg:h-[530px] flex items-center justify-center pointer-events-none select-none"
            >
              <Image
                src="/images/port.png"
                alt="Yaseer K Adam"
                fill
                priority
                className="object-cover object-[50%_35%] [-webkit-mask-image:radial-gradient(ellipse_70%_78%_at_50%_45%,black_52%,transparent_100%)] [mask-image:radial-gradient(ellipse_70%_78%_at_50%_45%,black_52%,transparent_100%)] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              />
            </motion.div>

            {/* Continuous 360° Revolving Orbit Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              className="absolute flex items-center justify-center pointer-events-none z-20"
              style={{
                width: orbitRadius * 2,
                height: orbitRadius * 2,
              }}
            >
              {orbitBadges.map((badge) => {
                const angleRad = (badge.angle * Math.PI) / 180;
                const x = Math.cos(angleRad) * orbitRadius;
                const y = Math.sin(angleRad) * orbitRadius;

                return (
                  <div
                    key={badge.label}
                    style={{
                      position: "absolute",
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className="pointer-events-auto"
                  >
                    {/* Counter-rotation to keep the badge upright */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.15 }}
                      className={`px-3.5 py-2 rounded-2xl bg-[#0b0c10]/90 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.7)] flex items-center gap-2.5 text-xs font-bold text-white transition-all cursor-pointer group select-none ${badge.accentBorder}`}
                    >
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                        {badge.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-bold text-white leading-tight group-hover:text-[#FBA919] transition-colors whitespace-nowrap">
                          {badge.label}
                        </span>
                        <span className="text-[10px] text-zinc-400 font-medium whitespace-nowrap">
                          {badge.sub}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom Right Project Status Pill */}
          <div className="absolute -bottom-2 sm:bottom-2 right-2 sm:right-6 z-30">
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
