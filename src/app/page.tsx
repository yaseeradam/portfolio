import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-orange-500/30 selection:text-orange-300 font-sans">
      {/* Top Floating Navbar */}
      <Navbar />

      {/* Hero Section with 3D Avatar & Revolving Orbit */}
      <HeroSection />

      {/* Technical Skills Grid */}
      <SkillsSection />

      {/* Experience & Stats Counter */}
      <ExperienceSection />

      {/* GitHub Featured Projects */}
      <ProjectsSection />

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}
