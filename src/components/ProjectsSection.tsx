"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, Layers, Smartphone, Sparkles, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { ReactIcon, NextIcon, TypeScriptIcon, NodeIcon, FlutterIcon, LaravelIcon, TailwindIcon, JavaScriptIcon } from "@/components/icons/TechIcons";

interface Project {
  id: string;
  title: string;
  category: "web" | "mobile" | "ai";
  description: string;
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
    tags: [
      { name: "TypeScript", icon: <TypeScriptIcon className="w-3.5 h-3.5" /> },
      { name: "Next.js 15", icon: <NextIcon className="w-3.5 h-3.5" /> },
      { name: "React 19", icon: <ReactIcon className="w-3.5 h-3.5" /> },
    ],
    githubUrl: "https://github.com/yaseeradam/aiacademy",
    liveUrl: "https://aiacademy-sandy.vercel.app",
  },
  {
    id: "aimarket",
    title: "AI Market Ecosystem",
    category: "ai",
    description: "Marketplace connecting AI service providers, prompt engineers, and intelligent software tools.",
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
    <section id="projects" className="py-28 px-4 sm:px-8 relative z-10 bg-[#000000] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-orange-400 font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Software & Apps</span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
            Live production applications and open-source GitHub repositories engineered by Yaseer.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {[
            { id: "all", label: "All Work" },
            { id: "ai", label: "AI Ecosystems" },
            { id: "web", label: "Web Applications" },
            { id: "mobile", label: "Mobile Apps" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                filter === tab.id
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  : "bg-zinc-900/80 text-zinc-400 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Linear Obsidian Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-orange-500/40 p-7 flex flex-col justify-between transition-all duration-300 shadow-2xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Category Badge & Status */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                      {project.category}
                    </span>

                    {project.liveUrl && (
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Live Vercel
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-orange-400 transition-colors mb-3 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills & Actions */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.name}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 bg-zinc-900 px-3 py-1 rounded-xl border border-white/10"
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
                      className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 text-orange-400" />
                      <span>Repository</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500/10 hover:bg-orange-500 border border-orange-500/30 hover:border-orange-500 text-orange-400 hover:text-white text-xs font-bold transition-all duration-200 shadow-md group/link"
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
