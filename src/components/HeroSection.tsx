"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Quote, Cpu } from "lucide-react";
import {
  ReactIcon,
  NextIcon,
  TypeScriptIcon,
  NodeIcon,
  FlutterIcon,
  LaravelIcon,
  TailwindIcon,
  JavaScriptIcon,
} from "@/components/icons/TechIcons";

// 8 Official SVG Brand Tech Icons distributed in a 360° "O" shape revolving orbit
const orbitBadges = [
  { label: "React", icon: <ReactIcon className="w-4 h-4" />, border: "border-sky-500/50", angle: 0 },
  { label: "TypeScript", icon: <TypeScriptIcon className="w-4 h-4" />, border: "border-blue-500/50", angle: 45 },
  { label: "Node.js", icon: <NodeIcon className="w-4 h-4" />, border: "border-emerald-500/50", angle: 90 },
  { label: "Flutter", icon: <FlutterIcon className="w-4 h-4" />, border: "border-cyan-500/50", angle: 135 },
  { label: "Laravel", icon: <LaravelIcon className="w-4 h-4" />, border: "border-rose-500/50", angle: 180 },
  { label: "AI Systems", icon: <Cpu className="w-4 h-4 text-amber-400" />, border: "border-amber-500/50", angle: 225 },
  { label: "Next.js", icon: <NextIcon className="w-4 h-4" />, border: "border-orange-500/50", angle: 270 },
  { label: "Tailwind", icon: <TailwindIcon className="w-4 h-4" />, border: "border-teal-500/50", angle: 315 },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 px-4 sm:px-8 flex items-center justify-center overflow-hidden bg-[#0a0705]"
    >
      {/* Background Ambient Glowing 3D Orange Images on Left and Right with low opacity */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] opacity-15 pointer-events-none z-0">
        <Image
          src="/images/bg_orange_left.jpg"
          alt="Glowing Orange Abstract Left"
          fill
          className="object-contain mix-blend-screen"
        />
      </div>

      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] opacity-15 pointer-events-none z-0">
        <Image
          src="/images/bg_orange_right.jpg"
          alt="Glowing Orange Torus Right"
          fill
          className="object-contain mix-blend-screen"
        />
      </div>

      {/* Subtle Background Radial Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-start gap-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold tracking-wide backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span>Available for Hire & Key Projects</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Hey, I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Yaseer
            </span>
            <br />
            <span className="text-white">Web & Mobile</span>{" "}
            <span className="text-zinc-400 font-light">Developer</span>
          </h1>

          {/* Bio */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal">
            Full-Stack Software Engineer crafting high-performance web applications, cross-platform Flutter mobile platforms, and intelligent AI ecosystems.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="mailto:yaseeradam@gmail.com"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(249,115,22,0.45)] hover:shadow-[0_0_50px_rgba(249,115,22,0.65)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2.5 group"
            >
              <span>Hire me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:yaseeradam@gmail.com"
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 text-zinc-300 hover:text-white hover:bg-orange-500/10 transition-all duration-300 shadow-lg group"
              title="Send an Email"
            >
              <Mail className="w-5 h-5 group-hover:text-orange-400 transition-colors" />
            </a>
          </div>

          {/* Glassmorphism Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 w-full max-w-lg p-5 sm:p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-orange-500/15 border border-orange-500/30 text-orange-400 shrink-0">
                <Quote className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  &quot;Designing intuitive user experiences and building robust codebases that scale smoothly across platforms.&quot;
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-0.5 shadow-md shrink-0">
                    <div className="w-full h-full rounded-full bg-[#120b07] flex items-center justify-center text-orange-400 font-bold text-xs">
                      YA
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">Yaseer K Adam</h4>
                    <p className="text-[11px] text-orange-400 font-medium">34+ Repositories & Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Character & "O" Shape Revolving Authentic Brand Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-6 relative flex items-center justify-center min-h-[520px]"
        >
          {/* Subtle Glow Ring */}
          <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent blur-md animate-pulse-glow" />

          {/* Central 3D Avatar Image */}
          <div className="relative z-10 w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] rounded-full p-2 bg-gradient-to-b from-orange-500/30 via-amber-500/10 to-transparent shadow-[0_0_90px_rgba(249,115,22,0.25)]">
            <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-orange-500/30 bg-[#120a06]">
              <Image
                src="/images/hero_avatar.jpg"
                alt="Yaseer K Adam"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Continuous "O" Shape Revolving Orbit Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full border border-dashed border-orange-500/25 flex items-center justify-center"
          >
            {orbitBadges.map((badge) => {
              const radius = 230;
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
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className={`px-3 py-1.5 rounded-full bg-[#181009]/95 backdrop-blur-md border ${badge.border} shadow-[0_0_25px_rgba(0,0,0,0.8)] flex items-center gap-2 text-[11px] sm:text-xs font-extrabold text-white whitespace-nowrap hover:scale-110 transition-transform`}
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
