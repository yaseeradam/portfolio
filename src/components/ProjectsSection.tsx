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
  category: "all" | "web" | "mobile" | "desktop" | "opensource";
  badge: { label: string; color: string };
  image: string;
  description: string;
  tags: { name: string; icon?: React.ReactNode }[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectsList: Project[] = [
  {
    id: "police-record-system",
    title: "Police Record System",
    category: "web",
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
    liveUrl: "https://police-record-system.vercel.app",
    githubUrl: "https://github.com/yaseeradam",
  },
  {
    id: "academyhub-dashboard",
    title: "AcademyHub Dashboard",
    category: "web",
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
    liveUrl: "https://academyhub-demo.vercel.app",
    githubUrl: "https://github.com/yaseeradam",
  },
  {
    id: "whatsapp-bot",
    title: "AcademyHub WhatsApp Bot",
    category: "web",
    badge: { label: "AI / Bot", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    image: "/images/projects/whatsapp_bot.png",
    description:
      "An AI-powered WhatsApp chatbot that brings the entire school portal into WhatsApp. Parents can check reports, fees and more — in plain English.",
    tags: [
      { name: "Node.js", icon: <NodeIcon className="w-3.5 h-3.5" /> },
      { name: "WhatsApp API", icon: <span className="text-[10px] font-bold text-emerald-400">WA</span> },
      { name: "OpenAI", icon: <span className="text-[10px] font-bold text-teal-400">AI</span> },
    ],
    liveUrl: "https://academyhub-bot.vercel.app",
    githubUrl: "https://github.com/yaseeradam",
  },
  {
    id: "ai-marketing",
    title: "AI Marketing Landing Page",
    category: "web",
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
    category: "mobile",
    badge: { label: "Mobile App", color: "text-pink-400 bg-pink-500/10 border-pink-500/20" },
    image: "/images/projects/taskmaster.png",
    description:
      "A simple and effective task management app with reminders, categories and local storage.",
    tags: [
      { name: "React Native", icon: <ReactIcon className="w-3.5 h-3.5" /> },
      { name: "Expo", icon: <span className="text-[10px] font-bold text-white">E</span> },
      { name: "SQLite", icon: <span className="text-[10px] font-bold text-sky-400">SQL</span> },
    ],
    liveUrl: "https://github.com/yaseeradam",
    githubUrl: "https://github.com/yaseeradam",
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Store",
    category: "web",
    badge: { label: "Web App", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
    image: "/images/projects/ecommerce.png",
    description:
      "A modern e-commerce website for a perfume brand with smooth animations and secure checkout.",
    tags: [
      { name: "Next.js", icon: <NextIcon className="w-3.5 h-3.5 text-white" /> },
      { name: "React", icon: <ReactIcon className="w-3.5 h-3.5" /> },
      { name: "Stripe", icon: <StripeIcon className="w-3.5 h-3.5" /> },
    ],
    liveUrl: "https://ecommerce-perfume.vercel.app",
    githubUrl: "https://github.com/yaseeradam",
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
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projectsList
      : projectsList.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-8 relative z-10 bg-black border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Banner Header: Left Headline + Right Workspace Laptop Image */}
        <div className="relative rounded-3xl bg-[#0b0c10] border border-white/10 p-8 sm:p-12 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          {/* Left Text */}
          <div className="flex flex-col items-start gap-5 max-w-2xl z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16171d] border border-white/10 text-xs font-semibold text-zinc-300">
              <Folder className="w-3.5 h-3.5 text-[#FBA919]" />
              <span>My Work</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Featured <span className="text-[#FBA919]">Projects.</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              A collection of real-world projects that showcase my skills in building modern, scalable and user-friendly web applications using modern technologies.
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2.5">
                <Code2 className="w-4 h-4 text-[#FBA919]" />
                <span className="text-sm font-bold text-white">6+</span>
                <span className="text-xs text-zinc-400">Projects Completed</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Star className="w-4 h-4 text-[#FBA919]" />
                <span className="text-sm font-bold text-white">100%</span>
                <span className="text-xs text-zinc-400">Client Satisfaction</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FBA919]" />
                <span className="text-sm font-bold text-white">2+</span>
                <span className="text-xs text-zinc-400">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Banner Image: Laptop Setup */}
          <div className="relative w-full lg:w-[480px] h-[240px] sm:h-[280px] rounded-2xl overflow-hidden shadow-2xl shrink-0 border border-white/10">
            <Image
              src="/images/projects_laptop.png"
              alt="Developer workspace"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Subtle dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            {/* Handwritten overlay */}
            <div className="absolute top-4 left-6 z-10 pointer-events-none select-none">
              <div className="font-[family-name:var(--font-caveat)] font-bold text-[#FBA919] text-xl sm:text-2xl tracking-wide rotate-[-8deg] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <div>Turning ideas</div>
                <div className="pl-4">into reality</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2.5">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#ff6200] text-white shadow-[0_0_18px_rgba(255,98,0,0.4)]"
                    : "bg-[#111216] text-zinc-400 border border-white/10 hover:border-white/20 hover:text-white"
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
                    <div className="relative w-full h-[180px] sm:h-[190px] bg-[#050608] overflow-hidden border-b border-white/5">
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

                  {/* Card Footer: View Project Link */}
                  <div className="px-6 pb-6 pt-2">
                    <a
                      href={project.liveUrl || project.githubUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FBA919] hover:text-amber-300 transition-colors group/link"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Sidebar: 4 Columns */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Widget 1: Total Projects */}
            <div className="p-5 rounded-3xl bg-[#0c0d12] border border-white/10 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#FBA919]">
                  <BarChart3 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">Total Projects</p>
                  <p className="text-2xl font-black text-white leading-tight">6+</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-500" />
            </div>

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
