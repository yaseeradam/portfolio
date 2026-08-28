"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu } from "lucide-react";
import {
  ReactIcon,
  NextIcon,
  TypeScriptIcon,
  NodeIcon,
  FlutterIcon,
  LaravelIcon,
  TailwindIcon,
} from "@/components/icons/TechIcons";

const orbitBadges = [
  { label: "React", icon: <ReactIcon className="w-4 h-4" />, angle: 0 },
  { label: "TypeScript", icon: <TypeScriptIcon className="w-4 h-4" />, angle: 45 },
  { label: "Node.js", icon: <NodeIcon className="w-4 h-4" />, angle: 90 },
  { label: "Flutter", icon: <FlutterIcon className="w-4 h-4" />, angle: 135 },
  { label: "Laravel", icon: <LaravelIcon className="w-4 h-4" />, angle: 180 },
  { label: "AI Systems", icon: <Cpu className="w-4 h-4 text-amber-400" />, angle: 225 },
  { label: "Next.js 15", icon: <NextIcon className="w-4 h-4" />, angle: 270 },
  { label: "Tailwind", icon: <TailwindIcon className="w-4 h-4" />, angle: 315 },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-20 px-4 sm:px-8 flex items-center justify-center overflow-hidden bg-black linear-grid"
    >
      {/* Radial Spotlight Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,115,22,0.15),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Linear Style Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-start gap-6"
        >
          {/* Linear Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-zinc-400">STATUS:</span>
            <span className="text-white font-bold">AVAILABLE FOR HIRE</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Full-Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-orange-400">
              Software Engineer.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal">
            Specializing in high-performance web applications, cross-platform Flutter mobile platforms, and intelligent AI integrations.
          </p>

          {/* Linear Style CTA Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="mailto:yaseeradam@gmail.com"
              className="px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-200 flex items-center gap-2 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/20 text-zinc-200 font-bold text-sm transition-all duration-200"
            >
              View Work
            </a>
          </div>

          {/* Code Quality Badge */}
          <div className="mt-6 flex items-center gap-4 p-3 rounded-2xl bg-zinc-950/80 border border-white/10 text-xs text-zinc-400 font-mono">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-white font-bold">34+ Repositories & Clean Architecture</p>
              <p className="text-zinc-500 text-[11px]">TypeScript • Next.js 15 • Flutter • Laravel</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Character Avatar & 360° Revolving Orbit Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-6 relative flex items-center justify-center min-h-[500px]"
        >
          {/* Subtle Glow Ring */}
          <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-orange-500/20 bg-orange-500/5 blur-md" />

          {/* Central 3D Avatar Image */}
          <div className="relative z-10 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full p-2 bg-gradient-to-b from-orange-500/30 via-white/5 to-transparent shadow-[0_0_80px_rgba(249,115,22,0.2)]">
            <div className="w-full h-full rounded-full overflow-hidden relative border border-white/20 bg-black">
              <Image
                src="/images/hero_avatar.jpg"
                alt="Yaseer K Adam"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Continuous 360° Revolving "O" Orbit Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute w-[360px] h-[360px] sm:w-[450px] sm:h-[450px] rounded-full border border-dashed border-white/15 flex items-center justify-center"
          >
            {orbitBadges.map((badge) => {
              const radius = 225;
              const angleRad = (badge.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <div
                  key={badge.label}
                  style={{
                    position: "absolute",
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  className="pointer-events-auto"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="px-3 py-1.5 rounded-full bg-zinc-950/90 backdrop-blur-md border border-white/15 shadow-2xl flex items-center gap-2 text-[11px] font-bold text-white whitespace-nowrap hover:border-orange-500 transition-colors"
                  >
                    <div className="p-1 rounded-full bg-white/10 flex items-center justify-center">
                      {badge.icon}
                    </div>
                    <span>{badge.label}</span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
