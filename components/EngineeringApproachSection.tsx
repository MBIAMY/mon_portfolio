'use client';

import React from 'react';
import { getLocalizedData } from '@/lib/portfolio-data';
import { Language } from '@/lib/i18n';

interface EngineeringApproachProps {
  currentLang: Language;
}

export default function EngineeringApproachSection({ currentLang }: EngineeringApproachProps) {
  const data = getLocalizedData(currentLang);
  const { approach, principles } = data;

  return (
    <section id="approach" className="py-20 sm:py-28 border-b border-slate-800/80 bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            {approach.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {approach.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            {approach.subtitle}
          </p>
        </div>

        {/* 8 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="p-5 bg-[#080d19] border border-slate-800/80 rounded-2xl flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-blue-400 font-bold">
                  {principle.number}.
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {principle.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1">
                <span className="text-slate-300 font-semibold block">
                  {currentLang === 'fr' ? 'Application concrète :' : 'Practice Rationale:'}
                </span>
                <p className="text-slate-400 italic">
                  &ldquo;{principle.practiceExample}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Framing Notice */}
        <div className="p-4 bg-slate-950/60 border border-slate-800/70 rounded-xl text-xs text-slate-400 flex items-center justify-between">
          <span>{approach.note}</span>
          <span className="text-blue-400 font-medium font-mono text-[11px]">{approach.badge}</span>
        </div>
      </div>
    </section>
  );
}
