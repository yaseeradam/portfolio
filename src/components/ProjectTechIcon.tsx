"use client";

import React from "react";
import {
  ReactIcon,
  NextIcon,
  TypeScriptIcon,
  NodeIcon,
  FlutterIcon,
  LaravelIcon,
  TailwindIcon,
  JavaScriptIcon,
  PostgreSqlIcon,
  GitIcon,
  PythonIcon,
  PhpIcon,
  MongoDbIcon,
  MySqlIcon,
  DockerIcon,
  VsCodeIcon,
  FigmaIcon,
  FirebaseIcon,
  ExpressIcon,
  StripeIcon,
} from "@/components/icons/TechIcons";
import {
  Shield,
  Lock,
  FileText,
  Activity,
  GraduationCap,
  CreditCard,
  Calendar,
  BarChart2,
  MessageSquare,
  Key,
  Send,
  Zap,
  Sparkles,
  Sliders,
  Target,
  Flame,
  Database,
  Smartphone,
  Bell,
  Tag,
  ShoppingBag,
  Compass,
  Maximize2,
  Code,
  Layers,
} from "lucide-react";

export function TechIconBadge({ iconKey, className = "w-4 h-4" }: { iconKey: string; className?: string }) {
  switch (iconKey.toLowerCase()) {
    case "react":
      return <ReactIcon className={className} />;
    case "next":
      return <NextIcon className={className} />;
    case "typescript":
      return <TypeScriptIcon className={className} />;
    case "node":
      return <NodeIcon className={className} />;
    case "tailwind":
      return <TailwindIcon className={className} />;
    case "javascript":
      return <JavaScriptIcon className={className} />;
    case "postgres":
    case "postgresql":
      return <PostgreSqlIcon className={className} />;
    case "mongodb":
      return <MongoDbIcon className={className} />;
    case "mysql":
      return <MySqlIcon className={className} />;
    case "docker":
      return <DockerIcon className={className} />;
    case "python":
      return <PythonIcon className={className} />;
    case "php":
      return <PhpIcon className={className} />;
    case "laravel":
      return <LaravelIcon className={className} />;
    case "flutter":
      return <FlutterIcon className={className} />;
    case "firebase":
      return <FirebaseIcon className={className} />;
    case "git":
      return <GitIcon className={className} />;
    case "vscode":
      return <VsCodeIcon className={className} />;
    case "figma":
      return <FigmaIcon className={className} />;
    case "express":
      return <ExpressIcon className={className} />;
    case "stripe":
      return <StripeIcon className={className} />;
    case "wa":
      return <span className="text-[10px] font-bold text-emerald-400">WA</span>;
    case "ai":
      return <span className="text-[10px] font-bold text-teal-400">AI</span>;
    case "framer":
      return <span className="text-[10px] font-bold text-purple-400">F</span>;
    case "expo":
      return <span className="text-[10px] font-bold text-white">E</span>;
    case "sqlite":
      return <span className="text-[10px] font-bold text-sky-400">SQL</span>;
    default:
      return <Code className={`${className} text-amber-400`} />;
  }
}

export function FeatureIcon({ name, className = "w-5 h-5 text-[#FBA919]" }: { name: string; className?: string }) {
  switch (name) {
    case "Shield":
      return <Shield className={className} />;
    case "Lock":
      return <Lock className={className} />;
    case "FileText":
      return <FileText className={className} />;
    case "Activity":
      return <Activity className={className} />;
    case "GraduationCap":
      return <GraduationCap className={className} />;
    case "CreditCard":
      return <CreditCard className={className} />;
    case "Calendar":
      return <Calendar className={className} />;
    case "BarChart2":
      return <BarChart2 className={className} />;
    case "MessageSquare":
      return <MessageSquare className={className} />;
    case "Key":
      return <Key className={className} />;
    case "Send":
      return <Send className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    case "Sliders":
      return <Sliders className={className} />;
    case "Target":
      return <Target className={className} />;
    case "Flame":
      return <Flame className={className} />;
    case "Database":
      return <Database className={className} />;
    case "Smartphone":
      return <Smartphone className={className} />;
    case "Bell":
      return <Bell className={className} />;
    case "Tag":
      return <Tag className={className} />;
    case "ShoppingBag":
      return <ShoppingBag className={className} />;
    case "Compass":
      return <Compass className={className} />;
    case "Maximize2":
      return <Maximize2 className={className} />;
    default:
      return <Layers className={className} />;
  }
}
