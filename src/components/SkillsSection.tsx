"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  CheckCircle2,
  Code2,
  Monitor,
  Database,
  Wrench,
  ChevronRight,
  ArrowRight,
  Laptop,
  FolderGit2,
  Smile,
} from "lucide-react";
import {
  ReactIcon,
  NextIcon,
  TypeScriptIcon,
  NodeIcon,
  TailwindIcon,
  JavaScriptIcon,
  PythonIcon,
  PhpIcon,
  MongoDbIcon,
  MySqlIcon,
  DockerIcon,
  VsCodeIcon,
  FigmaIcon,
  FirebaseIcon,
  ExpressIcon,
  GitIcon,
  PostgreSqlIcon,
} from "@/components/icons/TechIcons";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-8 relative z-10 bg-[#07080b] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(251,146,60,0.1),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Main 3-Column Layout: Left Intro, Center Portrait, Right Bento Skill Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Title, Subtitle, Checkmarks, and Cursive Accent */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151412] border border-[#2d2719] text-xs font-semibold text-[#FBA919] shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-[#FBA919]" />
              <span>My Skills</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.08]">
              Turning Ideas <br />
              <span className="text-[#FBA919]">into Powerful</span> <br />
              Solutions<span className="text-[#FBA919]">.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              I specialize in modern web technologies, building fast, responsive and scalable applications. Here are the tools and technologies I work with.
            </p>

            {/* Value Checkpoints */}
            <div className="space-y-3 pt-2">
              {[
                "Clean & maintainable code",
                "Problem solving mindset",
                "Always learning, always improving",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FBA919] shrink-0" />
                  <span className="text-sm font-medium text-zinc-200">{point}</span>
                </div>
              ))}
            </div>

            {/* Handwritten Accent */}
            <div className="pt-4 select-none">
              <div className="font-[family-name:var(--font-caveat)] font-bold text-[#FBA919] text-2xl sm:text-3xl tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(251,169,25,0.4)] rotate-[-6deg]">
                <div>Skills build</div>
                <div className="pl-3">better opportunities</div>
              </div>
            </div>
          </div>

          {/* Center Column: Portrait in Black Suit with Floating Badge */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center relative">
            {/* Warm Backlight Glow */}
            <div className="absolute w-[320px] h-[380px] rounded-full bg-gradient-to-b from-orange-500/25 via-amber-500/15 to-transparent blur-2xl pointer-events-none" />

            {/* Portrait Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-[280px] h-[360px] sm:w-[310px] sm:h-[400px] flex items-center justify-center"
            >
              <Image
                src="/images/skills_portrait.png"
                alt="Yaseer K Adam - Skills"
                fill
                priority
                className="object-cover object-center [-webkit-mask-image:radial-gradient(ellipse_75%_80%_at_50%_45%,black_60%,transparent_100%)] [mask-image:radial-gradient(ellipse_75%_80%_at_50%_45%,black_60%,transparent_100%)] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              />

              {/* Center Floating Role Badge */}
              <div className="absolute -bottom-2 z-20 px-4 py-2.5 rounded-2xl bg-[#0e0f14]/90 backdrop-blur-xl border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.7)] flex items-center gap-3 cursor-default">
                <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-[#ff7a00] shrink-0">
                  <Code2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Full-Stack Engineer</p>
                  <p className="text-[10px] text-zinc-400 font-medium">Building the future with code</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 2x2 Bento Skill Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Programming Languages */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#0d0e13]/80 border border-white/10 hover:border-amber-500/30 transition-all backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#FBA919]">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-white">Programming Languages</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 hover:text-white transition-colors cursor-pointer flex items-center gap-0.5">
                    View all <ChevronRight className="w-2.5 h-2.5" />
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { name: "JavaScript", level: 95, icon: <JavaScriptIcon className="w-3.5 h-3.5 rounded" /> },
                    { name: "TypeScript", level: 90, icon: <TypeScriptIcon className="w-3.5 h-3.5 rounded" /> },
                    { name: "Python", level: 80, icon: <PythonIcon className="w-3.5 h-3.5" /> },
                    { name: "PHP", level: 75, icon: <PhpIcon className="w-3.5 h-3.5" /> },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                          {skill.icon}
                          <span>{skill.name}</span>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-800/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-amber-500 to-[#FBA919] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 2: Frontend Development */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#0d0e13]/80 border border-white/10 hover:border-cyan-500/30 transition-all backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Monitor className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-white">Frontend Development</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 hover:text-white transition-colors cursor-pointer flex items-center gap-0.5">
                    View all <ChevronRight className="w-2.5 h-2.5" />
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { name: "React", level: 95, icon: <ReactIcon className="w-3.5 h-3.5" /> },
                    { name: "Next.js", level: 90, icon: <NextIcon className="w-3.5 h-3.5 text-white" /> },
                    { name: "Tailwind CSS", level: 90, icon: <TailwindIcon className="w-3.5 h-3.5" /> },
                    { name: "HTML & CSS", level: 85, icon: <div className="w-3.5 h-3.5 rounded bg-orange-500 text-[8px] font-bold text-white flex items-center justify-center">5</div> },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                          {skill.icon}
                          <span>{skill.name}</span>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-800/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-amber-500 to-[#FBA919] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 3: Backend Development */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#0d0e13]/80 border border-white/10 hover:border-emerald-500/30 transition-all backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Database className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-white">Backend Development</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 hover:text-white transition-colors cursor-pointer flex items-center gap-0.5">
                    View all <ChevronRight className="w-2.5 h-2.5" />
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { name: "Node.js", level: 85, icon: <NodeIcon className="w-3.5 h-3.5" /> },
                    { name: "Express.js", level: 80, icon: <ExpressIcon className="w-3.5 h-3.5" /> },
                    { name: "MongoDB", level: 75, icon: <MongoDbIcon className="w-3.5 h-3.5" /> },
                    { name: "MySQL", level: 70, icon: <MySqlIcon className="w-3.5 h-3.5" /> },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                          {skill.icon}
                          <span>{skill.name}</span>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-800/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-amber-500 to-[#FBA919] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 4: Tools & Others */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#0d0e13]/80 border border-white/10 hover:border-orange-500/30 transition-all backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                      <Wrench className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-white">Tools &amp; Others</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 hover:text-white transition-colors cursor-pointer flex items-center gap-0.5">
                    View all <ChevronRight className="w-2.5 h-2.5" />
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[
                    { name: "Git & GitHub", icon: <GitIcon className="w-4 h-4" /> },
                    { name: "PostgreSQL", icon: <PostgreSqlIcon className="w-4 h-4" /> },
                    { name: "Docker", icon: <DockerIcon className="w-4 h-4" /> },
                    { name: "VS Code", icon: <VsCodeIcon className="w-4 h-4" /> },
                    { name: "Figma", icon: <FigmaIcon className="w-4 h-4" /> },
                    { name: "Firebase", icon: <FirebaseIcon className="w-4 h-4" /> },
                  ].map((tool) => (
                    <div
                      key={tool.name}
                      className="p-2 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-all flex flex-col items-center justify-center gap-1.5 text-center group cursor-default"
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {tool.icon}
                      </div>
                      <span className="text-[9px] font-medium text-zinc-300 group-hover:text-white transition-colors leading-tight">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar: Value Statement, Stats Counters, and CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-7 rounded-3xl bg-[#0c0d12]/90 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          {/* Left statement */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff7a00] shrink-0">
              <Code2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <p className="text-xs text-zinc-400 font-medium">More than just skills —</p>
              <p className="text-base sm:text-lg font-bold text-white">
                I build <span className="text-[#FBA919]">real solutions</span>.
              </p>
            </div>
          </div>

          {/* Center Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <Laptop className="w-5 h-5 text-[#FBA919]" />
              <div>
                <p className="text-lg sm:text-xl font-black text-white leading-tight">5+</p>
                <p className="text-[11px] text-zinc-400 font-medium">Years Experience</p>
              </div>
            </div>

            <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-3">
              <FolderGit2 className="w-5 h-5 text-[#FBA919]" />
              <div>
                <p className="text-lg sm:text-xl font-black text-white leading-tight">20+</p>
                <p className="text-[11px] text-zinc-400 font-medium">Projects Completed</p>
              </div>
            </div>

            <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-3">
              <Smile className="w-5 h-5 text-[#FBA919]" />
              <div>
                <p className="text-lg sm:text-xl font-black text-white leading-tight">100%</p>
                <p className="text-[11px] text-zinc-400 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-full border border-[#FBA919]/50 hover:border-[#FBA919] bg-[#FBA919]/5 hover:bg-[#FBA919]/15 text-white font-semibold text-xs transition-all flex items-center gap-2 group shadow-[0_0_15px_rgba(251,169,25,0.15)]"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FBA919] group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
