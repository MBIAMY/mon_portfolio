'use client';

import React from 'react';
import { getLocalizedData } from '@/lib/portfolio-data';
import { Language } from '@/lib/i18n';
import EnspyLogo from './EnspyLogo';
import { Award, Layers, Cpu, Server, Shield } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
}

export default function AboutSection({ currentLang }: AboutSectionProps) {
  const data = getLocalizedData(currentLang);
  const { about, pillars, education } = data;

  const pillarIcons = [Server, Cpu, Layers, Shield];

  return (
    <section id="about" className="py-20 sm:py-28 border-b border-slate-800/80 bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            {about.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {about.title}
          </h2>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
              {about.lead}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {about.body1}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {about.body2}
            </p>
            <p className="text-slate-400 leading-relaxed">
              {about.closing}
            </p>

            {/* Academic Defense Distinction Callout with ENSPY Logo */}
            <div className="mt-6 p-5 bg-blue-950/30 border border-blue-900/60 rounded-2xl flex items-start gap-4">
              <div className="shrink-0 pt-0.5">
                <EnspyLogo size="md" />
              </div>
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-white">
                    {education.institution}
                  </span>
                  <span className="text-slate-500">·</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    {about.defenseCardBadge} ({education.defenseYear})
                  </span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {education.thesisTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Right Highlights & Competency Alignment (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl space-y-4">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-200">
                {currentLang === 'fr' ? 'Piliers d\'Ingénierie' : 'Engineering Focus Areas'}
              </h3>

              <div className="space-y-3.5">
                {pillars.map((pillar, idx) => {
                  const Icon = pillarIcons[idx % pillarIcons.length];
                  return (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-xl flex items-start gap-3.5 transition-colors hover:border-slate-700"
                    >
                      <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-semibold text-white">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-normal">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Recruitment perspective note */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>{about.positioningNote}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
