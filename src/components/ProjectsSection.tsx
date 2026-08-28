"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, Layers, Smartphone, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { ReactIcon, NextIcon, TypeScriptIcon, NodeIcon, FlutterIcon, LaravelIcon, TailwindIcon, JavaScriptIcon } from "@/components/icons/TechIcons";

interface Project {
  id: string;
  title: string;
  category: "web" | "mobile" | "ai";
  description: string;
  bgColor: string;
  borderColor: string;
  glowShadow: string;
  tags: { name: string; icon?: React.ReactNode }[];
  githubUrl: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    id: "aiacademy",
    title: "AI Academy Platform",
    category: "ai",
    description: "Interactive AI-powered learning academy featuring automated coding challenges and real-time intelligent tutoring.",
    bgColor: "bg-[#241408]",
    borderColor: "border-orange-500/40 hover:border-orange-400",
    glowShadow: "hover:shadow-[0_20px_50px_rgba(249,115,22,0.35)]",
    tags: [
      { name: "TypeScript", icon: <TypeScriptIcon className="w-3.5 h-3.5" /> },
      { name: "Next.js", icon: <NextIcon className="w-3.5 h-3.5" /> },
      { name: "React", icon: <ReactIcon className="w-3.5 h-3.5" /> },
    ],
    githubUrl: "https://github.com/yaseeradam/aiacademy",
    liveUrl: "https://aiacademy-sandy.vercel.app",
  },
  {
    id: "aimarket",
    title: "AI Market Ecosystem",
    category: "ai",
    description: "Marketplace connecting AI service providers, prompt engineers, and intelligent software tools.",
    bgColor: "bg-[#241c08]",
    borderColor: "border-amber-500/40 hover:border-amber-400",
    glowShadow: "hover:shadow-[0_20px_50px_rgba(245,158,11,0.35)]",
    tags: [
      { name: "JavaScript", icon: <JavaScriptIcon className="w-3.5 h-3.5" /> },
      { name: "Next.js", icon: <NextIcon className="w-3.5 h-3.5" /> },
      { name: "Node.js", icon: <NodeIcon className="w-3.5 h-3.5" /> },
    ],
    githubUrl: "https://github.com/yaseeradam/AIMARKET",
    liveUrl: "https://aimarket-mauve.vercel.app",
  },
  {
    id: "chesn",
    title: "Chesn Dashboard",
    category: "web",
    description: "High-performance web dashboard offering real-time data visualization and modern glassmorphic aesthetics.",
    bgColor: "bg-[#0b1926]",
    borderColor: "border-sky-500/40 hover:border-sky-400",
    glowShadow: "hover:shadow-[0_20px_50px_rgba(56,189,248,0.35)]",
    tags: [
      { name: "TypeScript", icon: <TypeScriptIcon className="w-3.5 h-3.5" /> },
      { name: "React", icon: <ReactIcon className="w-3.5 h-3.5" /> },
      { name: "Tailwind", icon: <TailwindIcon className="w-3.5 h-3.5" /> },
    ],
    githubUrl: "https://github.com/yaseeradam/chesn",
    liveUrl: "https://chesn.vercel.app",
  },
  {
    id: "facemark",
    title: "FaceMark Attendance",
    category: "ai",
    description: "Facial recognition attendance waitlist & verification system designed for enterprise and academic check-ins.",
    bgColor: "bg-[#0a2116]",
    borderColor: "border-emerald-500/40 hover:border-emerald-400",
    glowShadow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.35)]",
    tags: [
      { name: "JavaScript", icon: <JavaScriptIcon className="w-3.5 h-3.5" /> },
      { name: "Flutter", icon: <FlutterIcon className="w-3.5 h-3.5" /> },
    ],
    githubUrl: "https://github.com/yaseeradam/facemark_waitlist",
    liveUrl: "https://facemark-waitlist.vercel.app",
  },
  {
    id: "checkpay",
    title: "CheckPay Mobile App",
    category: "mobile",
    description: "Mobile fee management application crafted with Flutter, featuring payment ledgers and push notifications.",
    bgColor: "bg-[#0a1a24]",
    borderColor: "border-cyan-500/40 hover:border-cyan-400",
    glowShadow: "hover:shadow-[0_20px_50px_rgba(6,182,212,0.35)]",
    tags: [
      { name: "Flutter", icon: <FlutterIcon className="w-3.5 h-3.5" /> },
      { name: "Dart", icon: <Smartphone className="w-3.5 h-3.5 text-cyan-400" /> },
    ],
    githubUrl: "https://github.com/yaseeradam/checkpay",
  },
  {
    id: "academyhub",
    title: "AcademyHub Portal",
    category: "web",
    description: "Institutional management hub engineered with Laravel & Blade templates for courses and faculty records.",
    bgColor: "bg-[#240a12]",
    borderColor: "border-rose-500/40 hover:border-rose-400",
    glowShadow: "hover:shadow-[0_20px_50px_rgba(244,63,94,0.35)]",
    tags: [
      { name: "Laravel", icon: <LaravelIcon className="w-3.5 h-3.5" /> },
      { name: "Blade", icon: <Layers className="w-3.5 h-3.5 text-rose-400" /> },
    ],
    githubUrl: "https://github.com/yaseeradam/AcademyHub",
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "ai">("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 relative z-10 bg-[#070402]">
      <div className="max-w-7xl mx-auto">
        {/* Simple Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="text-orange-500">Projects</span>
          </h2>
        </div>

        {/* Clean Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "ai", label: "AI" },
            { id: "web", label: "Web" },
            { id: "mobile", label: "Mobile" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all border ${
                filter === tab.id
                  ? "bg-orange-500 text-white border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.5)]"
                  : "bg-[#18110a] text-zinc-300 border-white/10 hover:text-white hover:border-orange-500/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Hover Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-2xl ${project.bgColor} border ${project.borderColor} ${project.glowShadow} p-6 flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden`}
              >
                {/* Glowing Top Edge Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-400 bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30 group-hover:scale-105 transition-transform">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-orange-400 transition-colors mb-3 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Tech Pills & Interactive Action Links */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.name}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-200 bg-black/40 px-3 py-1 rounded-xl border border-white/10 group-hover:border-orange-500/30 transition-colors"
                      >
                        {tag.icon}
                        <span>{tag.name}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-white transition-colors group/git"
                    >
                      <GithubIcon className="w-4 h-4 text-orange-400 group-hover/git:scale-125 transition-transform" />
                      <span>Repository</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-500/20 hover:bg-orange-500 border border-orange-500/40 hover:border-orange-500 text-orange-400 hover:text-white text-xs font-bold transition-all duration-300 group/link shadow-md hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]"
                      >
                        <span>Live Preview</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
