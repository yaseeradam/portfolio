"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Smartphone,
  Cpu,
  Database,
  Globe,
  Layers,
  Sparkles,
  Zap,
  Terminal,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";
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

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: { name: string; level: string; icon: React.ReactNode }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    subtitle: "Modern responsive web applications & design systems",
    icon: <Layout className="w-5 h-5 text-orange-400" />,
    skills: [
      { name: "Next.js 14/15", level: "Expert", icon: <NextIcon className="w-4 h-4" /> },
      { name: "React.js", level: "Expert", icon: <ReactIcon className="w-4 h-4" /> },
      { name: "TypeScript", level: "Advanced", icon: <TypeScriptIcon className="w-4 h-4" /> },
      { name: "Tailwind CSS", level: "Expert", icon: <TailwindIcon className="w-4 h-4" /> },
      { name: "Framer Motion", level: "Advanced", icon: <Sparkles className="w-4 h-4 text-purple-400" /> },
      { name: "JavaScript (ES6+)", level: "Expert", icon: <JavaScriptIcon className="w-4 h-4" /> },
    ],
  },
  {
    title: "Backend & Systems",
    subtitle: "Scalable microservices, REST APIs & databases",
    icon: <Server className="w-5 h-5 text-amber-400" />,
    skills: [
      { name: "Node.js", level: "Advanced", icon: <NodeIcon className="w-4 h-4" /> },
      { name: "Laravel / PHP", level: "Advanced", icon: <LaravelIcon className="w-4 h-4" /> },
      { name: "REST APIs", level: "Expert", icon: <Globe className="w-4 h-4 text-orange-400" /> },
      { name: "PostgreSQL & MySQL", level: "Advanced", icon: <Database className="w-4 h-4 text-blue-400" /> },
      { name: "MongoDB", level: "Intermediate", icon: <Database className="w-4 h-4 text-emerald-400" /> },
      { name: "Firebase", level: "Advanced", icon: <ShieldCheck className="w-4 h-4 text-amber-400" /> },
    ],
  },
  {
    title: "Mobile Development",
    subtitle: "Cross-platform iOS & Android mobile solutions",
    icon: <Smartphone className="w-5 h-5 text-sky-400" />,
    skills: [
      { name: "Flutter", level: "Expert", icon: <FlutterIcon className="w-4 h-4" /> },
      { name: "Dart", level: "Expert", icon: <Code className="w-4 h-4 text-blue-400" /> },
      { name: "Mobile UI Architecture", level: "Expert", icon: <Layout className="w-4 h-4 text-purple-400" /> },
      { name: "Cross-Platform State", level: "Advanced", icon: <Layers className="w-4 h-4 text-teal-400" /> },
    ],
  },
  {
    title: "AI Integration & Tools",
    subtitle: "AI platforms, facial recognition & cloud deployments",
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
    skills: [
      { name: "AI API Integration", level: "Advanced", icon: <Cpu className="w-4 h-4 text-purple-400" /> },
      { name: "Facial Recognition", level: "Advanced", icon: <ShieldCheck className="w-4 h-4 text-rose-400" /> },
      { name: "Git & GitHub", level: "Expert", icon: <Wrench className="w-4 h-4 text-orange-400" /> },
      { name: "Vercel & Cloud", level: "Expert", icon: <Globe className="w-4 h-4 text-zinc-300" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-4 sm:px-8 relative z-10 overflow-hidden">
      {/* Background Ambient Glowing 3D Orange Images on Left and Right */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] opacity-15 pointer-events-none z-0">
        <Image
          src="/images/bg_orange_left.jpg"
          alt="Orange 3D Left Background"
          fill
          className="object-contain mix-blend-screen"
        />
      </div>

      <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] opacity-15 pointer-events-none z-0">
        <Image
          src="/images/bg_orange_right.jpg"
          alt="Orange 3D Right Background"
          fill
          className="object-contain mix-blend-screen"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Stack</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Technologies</span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
            Engineered with modern tools and frameworks to deliver fast, reliable, and delightful user experiences.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300 group shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 group-hover:scale-105 transition-transform">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-400">{cat.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-white/5">{skill.icon}</div>
                      <span className="text-sm font-semibold text-zinc-200">{skill.name}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
