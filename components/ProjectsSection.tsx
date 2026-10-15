'use client';

import React from 'react';
import { getLocalizedData, ProjectItem } from '@/lib/portfolio-data';
import { Language } from '@/lib/i18n';
import ArchitectureDiagram from './ArchitectureDiagram';
import EnspyLogo from './EnspyLogo';
import { ArrowUpRight, Award, Globe, ExternalLink, CheckCircle2 } from 'lucide-react';

interface ProjectsSectionProps {
  currentLang: Language;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export default function ProjectsSection({ currentLang, onOpenCaseStudy }: ProjectsSectionProps) {
  const data = getLocalizedData(currentLang);
  const { projects, projectItems } = data;
  const flagshipProject = projectItems.find((p) => p.id === 'agt-voice') || projectItems[0];
  const secondaryProjects = projectItems.filter((p) => p.id !== 'agt-voice');

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-slate-800/80 bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            {projects.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {projects.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            {projects.subtitle}
          </p>
        </div>

        {/* FLAGSHIP PROJECT: AGT-Voice */}
        <div className="p-6 sm:p-10 bg-[#080d19] border border-blue-950/80 rounded-2xl space-y-8 shadow-xl">
          {/* Flagship Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="px-2.5 py-0.5 rounded bg-blue-950/80 text-blue-400 font-semibold border border-blue-800/60">
                  {projects.flagshipBadge}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <EnspyLogo size="sm" />
                  <Award className="w-3.5 h-3.5" />
                  {flagshipProject.statusLabel}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {flagshipProject.title}
              </h3>
              <p className="text-sm font-medium text-slate-300">
                {flagshipProject.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {flagshipProject.caseStudy.demoUrl && (
                <a
                  href={flagshipProject.caseStudy.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow-md shadow-emerald-600/20 whitespace-nowrap"
                >
                  <Globe className="w-4 h-4" />
                  <span>{flagshipProject.caseStudy.demoLabel || (currentLang === 'fr' ? 'Tester en direct' : 'Live Demo')}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              )}

              <button
                onClick={() => onOpenCaseStudy(flagshipProject)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md shadow-blue-600/20 whitespace-nowrap"
              >
                <span>{projects.viewCaseStudy}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-4 sm:p-5 bg-slate-950/70 border border-slate-800/80 rounded-xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {projects.problemHeading}
              </div>
              <p className="text-slate-300 leading-relaxed">
                {flagshipProject.problemSummary}
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-slate-950/70 border border-slate-800/80 rounded-xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
                {projects.solutionHeading}
              </div>
              <p className="text-slate-300 leading-relaxed">
                {flagshipProject.solutionSummary}
              </p>
            </div>
          </div>

          {/* Key Technologies */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-1">
            <span className="font-semibold text-slate-300">{projects.stackHeading}</span>
            {flagshipProject.tags.map((tag, idx) => (
              <React.Fragment key={tag}>
                <span className="text-slate-200">{tag}</span>
                {idx < flagshipProject.tags.length - 1 && <span className="text-slate-600">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Embedded Interactive Architecture Diagram */}
          <div className="pt-2">
            <ArchitectureDiagram currentLang={currentLang} />
          </div>
        </div>

        {/* SECONDARY PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 bg-[#080d19] border border-slate-800/90 rounded-2xl flex flex-col justify-between space-y-6 hover:border-slate-700 transition-all"
            >
              <div className="space-y-4">
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium flex items-center gap-1.5">
                    {project.statusLabel.includes('ENSPY') && <EnspyLogo size="sm" />}
                    <span>{project.statusLabel}</span>
                  </span>
                  <div className="text-[11px] font-mono text-blue-400 uppercase">
                    {(() => {
                      switch (project.id) {
                        case 'vtc-microservices-portal':
                          return currentLang === 'fr' ? 'MICRO-SERVICES & VTC' : 'MICROSERVICES & VTC';
                        case 'vtc-fare-calculator-ml':
                          return currentLang === 'fr' ? 'MACHINE LEARNING END-TO-END' : 'END-TO-END MACHINE LEARNING';
                        case 'agt-bot-hub':
                          return currentLang === 'fr' ? 'ORCHESTRATION IA' : 'AI ORCHESTRATION';
                        case 'geospatial-road-monitor':
                          return currentLang === 'fr' ? 'SIG & DONNÉES SPATIALES' : 'GIS & DATA MODELING';
                        default:
                          return currentLang === 'fr' ? 'INGÉNIERIE LOGICIELLE' : 'SOFTWARE ENGINEERING';
                      }
                    })()}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Problem snippet */}
                <div className="p-3 bg-slate-950/70 border border-slate-800/70 rounded-lg text-xs text-slate-400 space-y-1">
                  <span className="text-slate-300 font-semibold block">{projects.problemHeading}:</span>
                  <p>{project.problemSummary}</p>
                </div>

                {/* Tech list */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 pt-1">
                  {project.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span className="text-slate-300">{tag}</span>
                      {idx < project.tags.length - 1 && <span className="text-slate-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
                  >
                    <span>{projects.viewCaseStudy}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                  </button>

                  {project.caseStudy.demoUrl && (
                    <a
                      href={project.caseStudy.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-600/30"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>{project.caseStudy.demoLabel || (currentLang === 'fr' ? 'Démo en ligne' : 'Live Demo')}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  )}
                </div>

                <span className="text-[11px] text-slate-400 font-mono">
                  {currentLang === 'fr' ? 'Étude détaillée' : 'Detailed Study'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
