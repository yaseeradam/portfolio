"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Send, Check, Copy, MessageSquare } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "yaseeradam@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="connect" className="py-28 px-4 sm:px-8 relative z-10 overflow-hidden">
      {/* Low-opacity ambient left and right glowing 3D orange background graphics */}
      <div className="absolute top-1/2 -left-28 -translate-y-1/2 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] opacity-15 pointer-events-none z-0">
        <Image
          src="/images/bg_orange_left.jpg"
          alt="Orange Left Graphic"
          fill
          className="object-contain mix-blend-screen"
        />
      </div>

      <div className="absolute top-1/2 -right-28 -translate-y-1/2 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] opacity-15 pointer-events-none z-0">
        <Image
          src="/images/bg_orange_right.jpg"
          alt="Orange Right Graphic"
          fill
          className="object-contain mix-blend-screen"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Together</span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
            Have a project idea, contract inquiry, or full-time opportunity? Reach out directly or drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Feel free to email me directly or check out my recent code repositories and live project updates on GitHub.
              </p>

              {/* Email Card with Copy */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-orange-500/20 text-orange-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-zinc-400 block">Direct Email</span>
                    <span className="text-sm font-bold text-white truncate block">
                      {emailAddress}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-orange-500/20 text-zinc-300 hover:text-orange-400 transition-all shrink-0 border border-white/5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href="https://github.com/yaseeradam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3 hover:border-orange-500/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0 group-hover:bg-orange-500/20 group-hover:text-orange-400 transition-all">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block">GitHub Profile</span>
                    <span className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                      @yaseeradam
                    </span>
                  </div>
                </div>
                <span className="text-xs text-orange-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Visit &rarr;
                </span>
              </a>

              {/* Response Time Indicator */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs text-zinc-400 font-medium">
                  Typically responds within 24 hours
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/60 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/60 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Project Details / Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project, goals, or timeline..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/60 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-base shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_45px_rgba(249,115,22,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2 text-emerald-100">
                      <Check className="w-5 h-5 text-emerald-300" />
                      Message Sent Successfully!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
