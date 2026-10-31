import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Folder,
  ArrowRight,
  ExternalLink,
  Code2,
  Star,
  Clock,
} from "lucide-react";
import { projectsList } from "@/data/projects";
import { TechIconBadge } from "@/components/ProjectTechIcon";
import ProjectNavbar from "@/components/ProjectNavbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Yaseer K Adam",
  description:
    "Explore the complete portfolio of web applications, mobile platforms, and AI bots built by Yaseer K Adam.",
};

export default function ProjectsDirectoryPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e6ded8] relative overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-300">
      {/* Background Linear Grid & Ambient Glows */}
      <div className="fixed inset-0 linear-grid pointer-events-none opacity-40 z-0" />
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-[#f97316]/10 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* Navigation */}
      <ProjectNavbar />

      {/* Main Container */}
      <main className="relative z-10 pt-28 sm:pt-36 pb-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header Banner */}
        <div className="flex flex-col items-start gap-5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16171d] border border-white/10 text-xs font-semibold text-zinc-300 shadow-sm">
            <Folder className="w-3.5 h-3.5 text-[#FBA919]" />
            <span>Case Studies & Archive</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.06]">
            Featured <span className="text-[#FBA919]">Projects.</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            A comprehensive showcase of production web applications, mobile platforms, and AI systems engineered for reliability, security, and exceptional user experience.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#ff7a00]" />
              <span className="text-sm font-bold text-white">{projectsList.length}</span>
              <span className="text-xs text-zinc-400">Featured Projects</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#FBA919]" />
              <span className="text-sm font-bold text-white">100%</span>
              <span className="text-xs text-zinc-400">Client Satisfaction</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#2dd4bf]" />
              <span className="text-sm font-bold text-white">2+ Years</span>
              <span className="text-xs text-zinc-400">Experience</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#0c0d12] border border-white/10 hover:border-white/25 overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Image & Badge */}
                <Link
                  href={`/projects/${project.id}`}
                  className="block relative w-full h-[200px] bg-[#050608] overflow-hidden border-b border-white/5 cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md flex items-center gap-1.5 ${project.badge.color}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {project.badge.label}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <Link href={`/projects/${project.id}`}>
                    <h2 className="text-lg font-bold text-white group-hover:text-[#FBA919] transition-colors leading-tight">
                      {project.title}
                    </h2>
                  </Link>

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
                        <TechIconBadge iconKey={tag.iconKey} className="w-3.5 h-3.5" />
                        <span>{tag.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FBA919] hover:text-amber-300 transition-colors group/link"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>

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
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
