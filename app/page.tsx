'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/i18n';
import { ProjectItem } from '@/lib/portfolio-data';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EngineeringApproachSection from '@/components/EngineeringApproachSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CaseStudyModal from '@/components/CaseStudyModal';
import CVModal from '@/components/CVModal';

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('mbiamy_lang') as Language;
        if (saved === 'en' || saved === 'fr') {
          return saved;
        }
      } catch {
        // Fallback
      }
    }
    return 'fr';
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const toggleLanguage = () => {
    setCurrentLang((prev) => {
      const next: Language = prev === 'en' ? 'fr' : 'en';
      try {
        localStorage.setItem('mbiamy_lang', next);
      } catch {
        // Ignore
      }
      return next;
    });
  };

  return (
    <main className="min-h-screen bg-[#060911] text-slate-200">
      {/* Sticky Top Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onRequestCV={() => setIsCVModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        currentLang={currentLang}
        onRequestCV={() => setIsCVModalOpen(true)}
      />

      {/* About Section */}
      <AboutSection
        currentLang={currentLang}
      />

      {/* Projects Section (with embedded AGT-Voice Architecture visualizer) */}
      <ProjectsSection
        currentLang={currentLang}
        onOpenCaseStudy={(proj) => setSelectedProject(proj)}
      />

      {/* Technical Skills Section */}
      <SkillsSection
        currentLang={currentLang}
      />

      {/* Engineering Approach Section (8 Principles) */}
      <EngineeringApproachSection
        currentLang={currentLang}
      />

      {/* Education & ENSPY Thesis Section */}
      <EducationSection
        currentLang={currentLang}
      />

      {/* Contact Section */}
      <ContactSection
        currentLang={currentLang}
      />

      {/* Footer */}
      <Footer
        currentLang={currentLang}
      />

      {/* Case Study Full Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        currentLang={currentLang}
        onClose={() => setSelectedProject(null)}
      />

      {/* CV Request & Download Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        currentLang={currentLang}
        onClose={() => setIsCVModalOpen(false)}
      />
    </main>
  );
}
