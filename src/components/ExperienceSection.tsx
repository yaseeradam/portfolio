"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Code2, Cpu, Rocket, Star } from "lucide-react";

const stats = [
  { label: "Public GitHub Repositories", value: "34+", icon: <Code2 className="w-5 h-5 text-orange-400" /> },
  { label: "Live Production Applications", value: "5+", icon: <Rocket className="w-5 h-5 text-amber-400" /> },
  { label: "Core Technical Frameworks", value: "12+", icon: <Cpu className="w-5 h-5 text-sky-400" /> },
  { label: "Commitment to Clean Architecture", value: "100%", icon: <Star className="w-5 h-5 text-emerald-400" /> },
];

const timeline = [
  {
    period: "2024 - Present",
    role: "Full-Stack & Mobile Software Engineer",
    company: "Freelance & Independent Software Development",
    description: "Architecting high-performance Next.js 15 AI platforms (AI Academy, AI Market), cross-platform Flutter applications (CheckPay), and scalable full-stack web applications.",
    achievements: [
      "Engineered AI Academy platform featuring automated coding challenges",
      "Designed & deployed AI Market web platform live on Vercel",
      "Built CheckPay fee management platform in Flutter for iOS & Android",
    ],
  },
  {
    period: "2023 - 2024",
    role: "Frontend & Cross-Platform Developer",
    company: "Open Source & Client Platforms",
    description: "Focused on modern TypeScript ecosystems, responsive glassmorphism UI design systems, and cross-platform mobile implementations.",
    achievements: [
      "Created FaceMark facial recognition attendance system",
      "Authored institutional portal AcademyHub in Laravel/Blade templates",
      "Maintained 34+ open-source GitHub software repositories",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-4 sm:px-8 relative z-10 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-orange-400 font-mono text-xs uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Milestones</span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
            Proven history of delivering production software solutions across web platforms, mobile ecosystems, and AI integrations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 text-center flex flex-col items-center justify-center gap-2 shadow-2xl hover:border-orange-500/40 transition-all"
            >
              <div className="p-3 rounded-2xl bg-zinc-900 border border-white/10 mb-1">
                {stat.icon}
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-400 font-medium max-w-[160px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl relative overflow-hidden group hover:border-orange-500/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-orange-400 mt-0.5">{item.company}</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 font-mono text-xs shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-orange-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                {item.achievements.map((ach) => (
                  <div key={ach} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-300">{ach}</span>
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
