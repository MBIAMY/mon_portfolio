'use client';

import React from 'react';
import { getLocalizedData, PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { Language } from '@/lib/i18n';
import EnspyLogo from './EnspyLogo';
import { Award, BookOpen, MapPin, Calendar } from 'lucide-react';

interface EducationSectionProps {
  currentLang: Language;
}

export default function EducationSection({ currentLang }: EducationSectionProps) {
  const data = getLocalizedData(currentLang);
  const { education } = data;
  const config = PORTFOLIO_CONFIG;

  return (
    <section id="education" className="py-20 sm:py-28 border-b border-slate-800/80 bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            {education.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {education.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            {education.subtitle}
          </p>
        </div>

        {/* Education Degree & Defense Card with ENSPY Logo */}
        <div className="p-6 sm:p-8 bg-[#090d18] border border-slate-800 rounded-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="flex items-start gap-4">
              {/* Prominent ENSPY Logo */}
              <div className="shrink-0 pt-1">
                <EnspyLogo size="lg" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                  <span>POLYTECHNIQUE // ENSPY</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {education.institution}
                </h3>
                <p className="text-sm font-semibold text-slate-300">
                  {education.degree}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <Award className="w-3.5 h-3.5" />
                {education.honors}
              </span>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  {education.defenseYear}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {education.country}
                </span>
              </div>
            </div>
          </div>

          {/* Master Thesis Details */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{education.thesisHeading}</span>
            </div>

            <div className="p-4 sm:p-5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2">
              <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                &ldquo;{education.thesisTitle}&rdquo;
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {education.thesisContext}
              </p>
            </div>
          </div>

          {/* Academic Veracity Notice */}
          <div className="pt-2 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <EnspyLogo size="sm" />
              <span>{education.veracityNotice}</span>
            </div>
            <span className="text-emerald-400 font-mono text-[11px]">{education.honors}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
