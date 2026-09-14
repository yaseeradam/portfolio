"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  Code2,
  Star,
  Clock,
  ArrowRight,
  ExternalLink,
  BarChart3,
  Layers,
  Rocket,
  ChevronRight,
} from "lucide-react";
import {
  ReactIcon,
  NextIcon,
  TypeScriptIcon,
  NodeIcon,
  TailwindIcon,
  JavaScriptIcon,
  PythonIcon,
  MongoDbIcon,
  DockerIcon,
  FirebaseIcon,
  GitIcon,
  PostgreSqlIcon,
  StripeIcon,
} from "@/components/icons/TechIcons";

interface Project {
  id: string;
  title: string;
  categories: ("web" | "mobile" | "desktop" | "opensource")[];
  badge: { label: string; color: string };
  image: string;
  description: string;
  tags: { name: string; icon?: React.ReactNode }[];
  liveUrl?: string;
  githubUrl: string;
}

const projectsList: Project[] = [
  {
    id: "police-record-system",
    title: "Police Record System",
    categories: ["web", "desktop", "opensource"],
    badge: { label: "Web App", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
    image: "/images/projects/police.png",
    description:
      "A modern digital records system for managing police cases, arrests, patrol logs and reports with an admin dashboard.",
    tags: [
      { name: "Next.js", icon: <NextIcon className="w-3.5 h-3.5 text-white" /> },
      { name: "React", icon: <ReactIcon className="w-3.5 h-3.5" /> },
      { name: "Tailwind", icon: <TailwindIcon className="w-3.5 h-3.5" /> },
      { name: "PostgreSQL", icon: <PostgreSqlIcon className="w-3.5 h-3.5" /> },
    ],
    githubUrl: "https://github.com/yaseeradam/FrontalMindsDRS",
  },
  {
    id: "academyhub-dashboard",
    title: "AcademyHub Dashboard",
    categories: ["web", "opensource"],
    badge: { label: "Web App", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
    image: "/images/projects/academyhub.png",
    description:
      "A complete school management system with student records, fees, results and analytics.",
    tags: [
      { name: "Next.js", icon: <NextIcon className="w-3.5 h-3.5 text-white" /> },
      { name: "React", icon: <ReactIcon className="w-3.5 h-3.5" /> },
      { name: "Tailwind", icon: <TailwindIcon className="w-3.5 h-3.5" /> },
      { name: "MongoDB", icon: <MongoDbIcon className="w-3.5 h-3.5" /> },
    ],
    liveUrl: "https://myacademy-pi.vercel.app",
    githubUrl: "https://github.com/yaseeradam/AcademyHub",
  },
  {
    id: "whatsapp-bot",
    title: "AcademyHub WhatsApp Bot",
    categories: ["web", "opensource"],
    badge: { label: "AI / Bot", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    image: "/images/projects/whatsapp_bot.png",
    description:
      "An AI-powered WhatsApp chatbot that brings the entire school portal into WhatsApp. Parents can check reports, fees and more — in plain English.",
    tags: [
      { name: "Node.js", icon: <NodeIcon className="w-3.5 h-3.5" /> },
      { name: "WhatsApp API", icon: <span className="text-[10px] font-bold text-emerald-400">WA</span> },
      { name: "OpenAI", icon: <span className="text-[10px] font-bold text-teal-400">AI</span> },
    ],
    liveUrl: "https://aiacademy-sandy.vercel.app",
    githubUrl: "https://github.com/yaseeradam/aiacademy",
  },
  {
    id: "ai-marketing",
    title: "AI Marketing Landing Page",
    categories: ["web", "opensource"],
    badge: { label: "Web App", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
    image: "/images/projects/ai_marketing.png",
    description:
      "A high-converting landing page for an AI marketing consultancy with modern design and animations.",
    tags: [
      { name: "Next.js", icon: <NextIcon className="w-3.5 h-3.5 text-white" /> },
      { name: "Tailwind", icon: <TailwindIcon className="w-3.5 h-3.5" /> },
      { name: "Framer", icon: <span className="text-[10px] font-bold text-purple-400">F</span> },
    ],
    liveUrl: "https://aimarket-mauve.vercel.app",
    githubUrl: "https://github.com/yaseeradam/AIMARKET",
  },
  {
    id: "taskmaster",
    title: "TaskMaster (To-Do App)",
    categories: ["mobile", "opensource"],
    badge: { label: "Mobile App", color: "text-pink-400 bg-pink-500/10 border-pink-500/20" },
    image: "/images/projects/taskmaster.png",
    description:
      "A simple and effective task management app with reminders, categories and local storage.",
    tags: [
      { name: "React Native", icon: <ReactIcon className="w-3.5 h-3.5" /> },
      { name: "Expo", icon: <span className="text-[10px] font-bold text-white">E</span> },
      { name: "SQLite", icon: <span className="text-[10px] font-bold text-sky-400">SQL</span> },
    ],
    githubUrl: "https://github.com/yaseeradam/checkpay",
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Store",
    categories: ["web", "opensource"],
    badge: { label: "Web App", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
    image: "/images/projects/ecommerce.png",
    description:
      "A modern e-commerce website for a perfume brand with smooth animations and secure checkout.",
    tags: [
      { name: "Next.js", icon: <NextIcon className="w-3.5 h-3.5 text-white" /> },
      { name: "React", icon: <ReactIcon className="w-3.5 h-3.5" /> },
      { name: "Stripe", icon: <StripeIcon className="w-3.5 h-3.5" /> },
    ],
    liveUrl: "https://globalpeak-delta.vercel.app",
    githubUrl: "https://github.com/yaseeradam/globalpeak",
  },
];

const filterTabs = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "desktop", label: "Desktop Apps" },
  { id: "opensource", label: "Open Source" },
];

const sidebarTechList = [
  { name: "Next.js", icon: <NextIcon className="w-3.5 h-3.5 text-white" /> },
  { name: "React", icon: <ReactIcon className="w-3.5 h-3.5" /> },
  { name: "Tailwind CSS", icon: <TailwindIcon className="w-3.5 h-3.5" /> },
  { name: "Node.js", icon: <NodeIcon className="w-3.5 h-3.5" /> },
  { name: "MongoDB", icon: <MongoDbIcon className="w-3.5 h-3.5" /> },
  { name: "PostgreSQL", icon: <PostgreSqlIcon className="w-3.5 h-3.5" /> },
  { name: "TypeScript", icon: <TypeScriptIcon className="w-3.5 h-3.5 rounded" /> },
  { name: "JavaScript", icon: <JavaScriptIcon className="w-3.5 h-3.5 rounded" /> },
  { name: "Python", icon: <PythonIcon className="w-3.5 h-3.5" /> },
  { name: "React Native", icon: <ReactIcon className="w-3.5 h-3.5" /> },
  { name: "Expo", icon: <span className="text-[10px] font-bold text-white">E</span> },
  { name: "Docker", icon: <DockerIcon className="w-3.5 h-3.5" /> },
  { name: "Git & GitHub", icon: <GitIcon className="w-3.5 h-3.5" /> },
  { name: "Firebase", icon: <FirebaseIcon className="w-3.5 h-3.5" /> },
  { name: "Framer", icon: <span className="text-[10px] font-bold text-purple-400">F</span> },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects =
    activeTab === "all"
      ? projectsList
      : projectsList.filter((p) => p.categories.includes(activeTab as any));

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-8 relative z-10 bg-black border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Full-Width Header Banner matching the reference image */}
        <div className="relative w-full min-h-[340px] lg:min-h-[380px] flex flex-col lg:flex-row items-center justify-between pb-10 border-b border-white/10 overflow-hidden">
          {/* Left Text & Stats */}
          <div className="flex flex-col items-start gap-5 max-w-xl z-10 lg:pr-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16171d] border border-white/10 text-xs font-semibold text-zinc-300 shadow-sm">
              <Folder className="w-3.5 h-3.5 text-[#FBA919]" />
              <span>My Work</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.06]">
              Featured <span className="text-[#FBA919]">Projects.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              A collection of real-world projects that showcase my skills in building modern, scalable and user-friendly web applications using modern technologies.
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4">
              <div className="flex items-center gap-2.5">
                <Code2 className="w-4 h-4 text-[#ff7a00]" />
                <span className="text-sm font-bold text-white">6+</span>
                <span className="text-xs text-zinc-400">Projects Completed</span>
              </div>

              <div className="h-6 w-[1px] bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-2.5">
                <Star className="w-4 h-4 text-[#FBA919] fill-[#FBA919]/20" />
                <span className="text-sm font-bold text-white">100%</span>
                <span className="text-xs text-zinc-400">Client Satisfaction</span>
              </div>

              <div className="h-6 w-[1px] bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#2dd4bf]" />
                <span className="text-sm font-bold text-white">2+</span>
                <span className="text-xs text-zinc-400">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Center Handwritten Flourish Accent */}
          <div className="hidden xl:block absolute left-[45%] top-[30%] z-20 pointer-events-none select-none">
            <div className="font-[family-name:var(--font-caveat)] font-bold text-[#FBA919] text-2xl tracking-wide rotate-[-10deg] drop-shadow-[0_2px_10px_rgba(251,169,25,0.4)]">
              <div>Turning ideas</div>
              <div className="pl-4 pt-1">into reality</div>
              <div className="h-[2px] w-24 bg-[#FBA919]/60 rounded-full mt-1 ml-2" />
            </div>
          </div>

          {/* Right Seamless Laptop Photo - NOT IN A BOX */}
          <div className="relative w-full lg:w-[56%] h-[280px] sm:h-[340px] lg:h-[380px] pointer-events-none select-none flex items-center justify-end mt-8 lg:mt-0">
            <Image
              src="/images/projects_laptop.png"
              alt="Developer workspace"
              fill
              priority
              className="object-cover object-[70%_center] lg:object-[60%_center] [-webkit-mask-image:linear-gradient(to_left,black_75%,transparent_100%)] [mask-image:linear-gradient(to_left,black_75%,transparent_100%)] drop-shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
            />
            {/* Top and bottom soft vignettes */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#ff6200] text-white shadow-[0_0_18px_rgba(255,98,0,0.45)]"
                    : "bg-[#111216] text-zinc-400 border border-white/10 hover:border-white/25 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main Section: 6 Projects Grid (Left) + Sidebar Widgets (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Grid: 8 Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl bg-[#0c0d12] border border-white/10 hover:border-white/25 overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 group"
                >
                  {/* Card Body */}
                  <div>
                    {/* Project Preview Image & Badge */}
                    <div className="relative w-full h-[185px] sm:h-[195px] bg-[#050608] overflow-hidden border-b border-white/5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md flex items-center gap-1.5 ${project.badge.color}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {project.badge.label}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-[#FBA919] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed font-normal line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag.name}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300 flex items-center gap-1.5"
                          >
                            {tag.icon}
                            <span>{tag.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: View Project Links with Real GitHub & Live URLs */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FBA919] hover:text-amber-300 transition-colors group/link"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Sidebar: 4 Columns */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Widget 1: Total Projects */}
            <a
              href="https://github.com/yaseeradam?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl bg-[#0c0d12] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between shadow-xl group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#FBA919] group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">Total Projects</p>
                  <p className="text-2xl font-black text-white leading-tight">6+</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Widget 2: Technologies I Use */}
            <div className="p-6 rounded-3xl bg-[#0c0d12] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/5">
                <Layers className="w-4 h-4 text-[#FBA919]" />
                <h4 className="text-sm font-bold text-white">Technologies I Use</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {sidebarTechList.map((t) => (
                  <span
                    key={t.name}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 flex items-center gap-2 hover:border-white/20 transition-colors cursor-default"
                  >
                    {t.icon}
                    <span>{t.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Widget 3: Have a Project in Mind? */}
            <div className="p-6 rounded-3xl bg-[#0c0d12] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff6200] shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Have a Project in Mind?</h4>
                  <p className="text-xs text-zinc-400">Let&apos;s build something amazing together.</p>
                </div>
              </div>

              <a
                href="mailto:yaseeradam@gmail.com"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#ff6200] to-[#ff7e00] hover:from-[#e55800] hover:to-[#f07400] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,98,0,0.35)] transition-all group"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
