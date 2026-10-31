import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  User,
  Layers,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Rocket,
  Code2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import {
  getProjectById,
  getAllProjectIds,
  getAdjacentProjects,
} from "@/data/projects";
import { TechIconBadge, FeatureIcon } from "@/components/ProjectTechIcon";
import ProjectNavbar from "@/components/ProjectNavbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found | Yaseer K Adam",
    };
  }

  return {
    title: `${project.title} | Case Study • Yaseer K Adam`,
    description: project.tagline || project.description,
    openGraph: {
      title: `${project.title} - Case Study by Yaseer K Adam`,
      description: project.tagline || project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(id);

  return (
    <div className="min-h-screen bg-[#000000] text-[#e6ded8] relative overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-300">
      {/* Background Linear Grid & Ambient Glows */}
      <div className="fixed inset-0 linear-grid pointer-events-none opacity-40 z-0" />
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#f97316]/10 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* Dedicated Project Navbar */}
      <ProjectNavbar projectTitle={project.title} liveUrl={project.liveUrl} />

      {/* Main Container */}
      <main className="relative z-10 pt-28 sm:pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Top Breadcrumb & Back Link */}
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-2 text-xs font-medium text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-zinc-600">/</span>
            <Link href="/#projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-[#FBA919] font-semibold">{project.title}</span>
          </nav>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>All Projects</span>
          </Link>
        </div>

        {/* Hero Header Section */}
        <section className="flex flex-col items-start gap-6 relative">
          {/* Badge & Handwritten Accent */}
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-md flex items-center gap-2 ${project.badge.color}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {project.badge.label}
            </span>

            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.status}
            </span>

            <div className="hidden sm:block font-[family-name:var(--font-caveat)] text-xl text-[#FBA919] ml-2 rotate-[-4deg]">
              ✦ Engineered with precision
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
            {project.title}
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-base sm:text-xl text-zinc-300 max-w-3xl leading-relaxed font-normal">
            {project.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff6200] to-[#ff7e00] hover:from-[#e55800] hover:to-[#f07400] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_24px_rgba(255,98,0,0.4)] transition-all group"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#111216] border border-white/10 hover:border-white/25 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 hover:bg-white/5 transition-all shadow-md group"
            >
              <GithubIcon className="w-4 h-4 text-zinc-300 group-hover:text-white" />
              <span>View Source Code</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
            </a>
          </div>
        </section>

        {/* High-Resolution Project Showcase Container */}
        <section className="relative rounded-3xl bg-[#0c0d12] border border-white/10 overflow-hidden shadow-2xl">
          {/* Simulated Browser Chrome Topbar */}
          <div className="px-5 py-3.5 bg-[#0a0a0f] border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>

            <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-400 font-mono tracking-wide flex items-center gap-2 max-w-[280px] sm:max-w-md truncate">
              <Globe className="w-3 h-3 text-[#FBA919] shrink-0" />
              <span className="truncate">
                {project.liveUrl || `https://github.com/yaseeradam/${project.id}`}
              </span>
            </div>

            <div className="w-12 hidden sm:block" />
          </div>

          {/* Screenshot Container */}
          <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[580px] bg-[#050608]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-top"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/40 to-transparent pointer-events-none" />
          </div>
        </section>

        {/* Performance & Impact Metrics Bar */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#0c0d12] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-center shadow-lg group"
            >
              <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FBA919] transition-colors tracking-tight">
                {m.value}
              </span>
              <span className="text-xs text-zinc-400 font-medium pt-1 uppercase tracking-wider">
                {m.label}
              </span>
            </div>
          ))}
        </section>

        {/* Main Content Layout: 8-Column Details + 4-Column Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Project Overview */}
            <article className="p-7 sm:p-9 rounded-3xl bg-[#0c0d12] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
                <Code2 className="w-5 h-5 text-[#FBA919]" />
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Project Overview & Objectives
                </h2>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {project.fullOverview}
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </article>

            {/* Key Features Grid */}
            <section className="p-7 sm:p-9 rounded-3xl bg-[#0c0d12] border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-[#ff6200]" />
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    Key Features & Capabilities
                  </h2>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  {project.features.length} Core Modules
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all flex flex-col gap-2.5 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <FeatureIcon name={feature.iconName} />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FBA919] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Challenges & Solutions */}
            <section className="p-7 sm:p-9 rounded-3xl bg-[#0c0d12] border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
                <ShieldCheck className="w-5 h-5 text-[#2dd4bf]" />
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Engineering Challenges & Solutions
                </h2>
              </div>

              <div className="space-y-4">
                {project.challenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3"
                  >
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-red-300/90 font-medium">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Challenge:</strong> {item.challenge}
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-300/90 font-medium pt-2 border-t border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Solution:</strong> {item.solution}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column / Sticky Sidebar (4 Columns) */}
          <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
            {/* Metadata Card */}
            <div className="p-6 rounded-3xl bg-[#0c0d12] border border-white/10 shadow-xl space-y-4">
              <h3 className="text-sm font-bold text-white pb-2 border-b border-white/5 flex items-center gap-2">
                <User className="w-4 h-4 text-[#FBA919]" />
                <span>Project Metadata</span>
              </h3>

              <dl className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <dt className="text-zinc-500 font-medium">Role</dt>
                  <dd className="text-zinc-200 font-semibold text-right">{project.role}</dd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <dt className="text-zinc-500 font-medium">Timeline</dt>
                  <dd className="text-zinc-200 font-semibold">{project.timeline}</dd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <dt className="text-zinc-500 font-medium">Client / Context</dt>
                  <dd className="text-zinc-200 font-semibold text-right">{project.client}</dd>
                </div>
                <div className="flex items-center justify-between py-1">
                  <dt className="text-zinc-500 font-medium">Delivery Status</dt>
                  <dd className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {project.status}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Architecture & Tech Stack Card */}
            <div className="p-6 rounded-3xl bg-[#0c0d12] border border-white/10 shadow-xl space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                <Layers className="w-4 h-4 text-[#FBA919]" />
                <h3 className="text-sm font-bold text-white">Technologies & Tools</h3>
              </div>

              <div className="space-y-4">
                {project.techStack.map((group, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <span
                          key={tech.name}
                          className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 flex items-center gap-2 hover:border-white/20 transition-colors"
                        >
                          <TechIconBadge iconKey={tech.iconKey} className="w-3.5 h-3.5" />
                          <span>{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Have a Project in Mind? CTA */}
            <div className="p-6 rounded-3xl bg-[#0c0d12] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff6200] shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Have a Project in Mind?</h4>
                  <p className="text-xs text-zinc-400">Let&apos;s build something exceptional together.</p>
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
          </aside>
        </div>

        {/* Adjacent Project Navigation Section */}
        <section className="pt-8 border-t border-white/10">
          <div className="flex items-center justify-between pb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500">
              More Case Studies
            </h3>
            <Link
              href="/#projects"
              className="text-xs font-semibold text-[#FBA919] hover:underline"
            >
              View All 6 Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous Project Card */}
            <Link
              href={`/projects/${prev.id}`}
              className="p-6 rounded-3xl bg-[#0c0d12] border border-white/10 hover:border-amber-500/40 transition-all flex items-center justify-between group shadow-xl"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#FBA919] group-hover:bg-amber-500/10 transition-all shrink-0">
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider">
                    Previous Project
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-[#FBA919] transition-colors truncate">
                    {prev.title}
                  </h4>
                </div>
              </div>
            </Link>

            {/* Next Project Card */}
            <Link
              href={`/projects/${next.id}`}
              className="p-6 rounded-3xl bg-[#0c0d12] border border-white/10 hover:border-amber-500/40 transition-all flex items-center justify-between group shadow-xl"
            >
              <div className="min-w-0">
                <span className="text-[11px] text-zinc-500 font-mono uppercase tracking-wider">
                  Next Project
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-[#FBA919] transition-colors truncate">
                  {next.title}
                </h4>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#FBA919] group-hover:bg-amber-500/10 transition-all shrink-0 ml-4">
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* Unified Site Footer */}
      <Footer />
    </div>
  );
}
