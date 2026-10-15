'use client';

import React, { useEffect } from 'react';
import { ProjectItem } from '@/lib/portfolio-data';
import { I18N, Language } from '@/lib/i18n';
import EnspyLogo from './EnspyLogo';
import { X, CheckCircle, Clock, AlertCircle, ArrowUpRight, Award, Globe, ExternalLink } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  currentLang: Language;
  onClose: () => void;
}

export default function CaseStudyModal({ project, currentLang, onClose }: CaseStudyModalProps) {
  const t = I18N[currentLang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;
  const s = t.caseStudyModal.sections;

  const labels = currentLang === 'fr' ? {
    caseStudyHeader: 'ÉTUDE_DE_CAS',
    studyBy: 'MBIAMY NGAMENI Steven Loic · Étude d\'Ingénierie Logicielle',
    rationale: 'Justification :',
    tradeOff: 'Compromis :',
    methodology: 'Méthodologie :',
    evaluatedMetrics: 'Métriques de latence évaluées :',
    observations: 'Observations :',
    delivered: 'Livré',
    prototype: 'Prototype',
    planned: 'Planifié',
    repoAccess: 'Accès au dépôt de code disponible pour les évaluateurs et recruteurs techniques sur demande.',
  } : {
    caseStudyHeader: 'CASE_STUDY',
    studyBy: 'MBIAMY NGAMENI Steven Loic · Software Engineering Study',
    rationale: 'Rationale:',
    tradeOff: 'Trade-Off:',
    methodology: 'Methodology:',
    evaluatedMetrics: 'Evaluated Latency Metrics:',
    observations: 'Observations:',
    delivered: 'Delivered',
    prototype: 'Prototype',
    planned: 'Planned',
    repoAccess: 'Repository access available to technical interviewers upon request via email.',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#090d18] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 px-6 py-4 bg-[#090d18]/95 backdrop-blur-md border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <EnspyLogo size="md" />
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                <span>{`${labels.caseStudyHeader} // ${project.id.toUpperCase()}`}</span>
                <span>·</span>
                <span className="text-emerald-400">{project.statusLabel}</span>
              </div>
              <h2 id="case-study-title" className="text-lg sm:text-xl font-bold text-white mt-0.5">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {caseStudy.demoUrl && (
              <a
                href={caseStudy.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{caseStudy.demoLabel || (currentLang === 'fr' ? 'Plateforme en direct' : 'Live Platform')}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-700/80 rounded-lg transition-colors focus:outline-none"
              aria-label={t.caseStudyModal.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10 text-sm leading-relaxed">
          {/* 1. Project Overview */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              01. {s.overview}
            </h3>
            <p className="text-slate-200 text-base leading-relaxed">
              {caseStudy.overview}
            </p>
          </section>

          {/* 2. Problem Statement */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              02. {s.problemStatement}
            </h3>
            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-300 leading-relaxed">
              {caseStudy.problemStatement}
            </div>
          </section>

          {/* 3. Objectives */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              03. {s.objectives}
            </h3>
            <ul className="space-y-2">
              {caseStudy.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-300">
                  <span className="text-blue-400 font-mono text-xs mt-0.5">0{i + 1}.</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Technical Constraints */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              04. {s.technicalConstraints}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.technicalConstraints.map((constraint, i) => (
                <div key={i} className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-lg text-xs text-slate-300">
                  {constraint}
                </div>
              ))}
            </div>
          </section>

          {/* 5. System Architecture */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              05. {s.architecture}
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {caseStudy.architectureDescription}
            </p>
          </section>

          {/* 6. Engineering Decisions & Trade-offs */}
          <section className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              06. {s.engineeringDecisions}
            </h3>
            <div className="space-y-3">
              {caseStudy.engineeringDecisions.map((dec, i) => (
                <div key={i} className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2">
                  <div className="font-semibold text-white text-sm flex items-center gap-2">
                    <span className="text-blue-400 font-mono text-xs">§{i + 1}</span>
                    <span>{dec.title}</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    <strong className="text-slate-400">{labels.rationale}</strong> {dec.rationale}
                  </p>
                  <p className="text-xs text-amber-300/90">
                    <strong className="text-amber-400">{labels.tradeOff}</strong> {dec.tradeOff}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Technology Stack */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              07. {s.technologyStack}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.technologyStack.map((stackGroup, i) => (
                <div key={i} className="p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    {stackGroup.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {stackGroup.tools.map((tool, j) => (
                      <span key={j} className="text-slate-200">
                        {tool}{j < stackGroup.tools.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Implemented Features */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              08. {s.implementedFeatures}
            </h3>
            <div className="divide-y divide-slate-800/60 border border-slate-800 rounded-xl overflow-hidden bg-slate-950/50">
              {caseStudy.implementedFeatures.map((item, i) => (
                <div key={i} className="p-3 flex items-center justify-between text-xs gap-3">
                  <span className="text-slate-200">{item.feature}</span>
                  <div className="shrink-0 flex items-center gap-1.5 font-mono text-[11px]">
                    {item.status === 'delivered' && (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> {labels.delivered}
                      </span>
                    )}
                    {item.status === 'prototype' && (
                      <span className="text-blue-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {labels.prototype}
                      </span>
                    )}
                    {item.status === 'planned' && (
                      <span className="text-slate-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {labels.planned}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Results and Evaluation */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              09. {s.resultsAndEvaluation}
            </h3>
            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-3">
              <p className="text-xs text-slate-300">
                <strong className="text-white">{labels.methodology}</strong> {caseStudy.resultsAndEvaluation.methodology}
              </p>
              <div>
                <span className="text-xs font-semibold text-white block mb-1">{labels.evaluatedMetrics}</span>
                <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                  {caseStudy.resultsAndEvaluation.metricsTracked.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-slate-300 border-t border-slate-800/80 pt-2">
                <strong className="text-white">{labels.observations}</strong> {caseStudy.resultsAndEvaluation.observations}
              </p>
            </div>
          </section>

          {/* 10. Limitations & Future Work */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              10. {s.limitationsAndFutureWork}
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
              {caseStudy.limitationsAndFutureWork.map((lim, i) => (
                <li key={i}>{lim}</li>
              ))}
            </ul>
          </section>

          {/* 11. Source Code & Demo Access */}
          <section className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              11. {s.sourceCodeOrDemo}
            </h3>
            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-xs space-y-2">
              <div className="flex items-start gap-2.5">
                {caseStudy.demoNotes?.includes('ENSPY') && (
                  <div className="shrink-0 pt-0.5">
                    <EnspyLogo size="sm" />
                  </div>
                )}
                <p className="text-slate-300 leading-relaxed flex-1">
                  {caseStudy.demoNotes}
                </p>
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {caseStudy.demoUrl && (
                  <a
                    href={caseStudy.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md shadow-blue-600/30"
                  >
                    <Globe className="w-4 h-4" />
                    <span>
                      {caseStudy.demoLabel
                        ? (currentLang === 'fr' ? `Accéder : ${caseStudy.demoLabel}` : `Access: ${caseStudy.demoLabel}`)
                        : (currentLang === 'fr' ? 'Accéder à la plateforme en direct' : 'Access Live Platform')}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {caseStudy.sourceCodeUrl ? (
                  <a
                    href={caseStudy.sourceCodeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs text-blue-400 hover:text-blue-300 font-semibold bg-slate-950 border border-slate-800 rounded-lg"
                  >
                    <span>{t.projects.viewSource}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-slate-400 text-xs">
                    {labels.repoAccess}
                  </span>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#090d18] border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400">{labels.studyBy}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            {t.caseStudyModal.close}
          </button>
        </div>
      </div>
    </div>
  );
}
