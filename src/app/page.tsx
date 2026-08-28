import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0c0805] text-[#e6ded8] selection:bg-orange-500/30 selection:text-orange-300">
      {/* Top Floating Navbar */}
      <Navbar />

      {/* Hero Section with 3D Avatar & Floating Badges */}
      <HeroSection />

      {/* Technical Skills Grid */}
      <SkillsSection />

      {/* GitHub Featured Projects */}
      <ProjectsSection />

      {/* Experience & Stats Counter */}
      <ExperienceSection />

      {/* Interactive Contact & Socials */}
      <ContactSection />

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}
