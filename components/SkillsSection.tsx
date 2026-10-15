'use client';

import React, { useState } from 'react';
import { getLocalizedData } from '@/lib/portfolio-data';
import { Language } from '@/lib/i18n';
import { Layers, Server, Cpu, Cloud, Shield, CheckCircle2, BookOpen } from 'lucide-react';

interface SkillsSectionProps {
  currentLang: Language;
}

export default function SkillsSection({ currentLang }: SkillsSectionProps) {
  const data = getLocalizedData(currentLang);
  const { skills, skillItems } = data;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: skills.all, icon: Layers },
    { id: 'fullstack', label: skills.fullstack, icon: Layers },
    { id: 'backend', label: skills.backend, icon: Server },
    { id: 'ai', label: skills.ai, icon: Cpu },
    { id: 'devops', label: skills.devops, icon: Cloud },
    { id: 'cybersecurity', label: skills.cybersecurity, icon: Shield },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-slate-800/80 bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            {skills.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {skills.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            {skills.subtitle}
          </p>
        </div>

        {/* Interactive Filter Tabs (Segmented Control Buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-950/80 border border-slate-800/80 rounded-xl max-w-fit">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pb-2">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-200 font-medium">{skills.appliedBadge}</span>
          </div>
          <span className="text-slate-700">·</span>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-200 font-medium">{skills.deepeningBadge}</span>
          </div>
          <span className="text-slate-700">·</span>
          <span className="text-slate-400">{skills.noPillsNote}</span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => {
            const isApplied = skill.level === 'applied';
            return (
              <div
                key={idx}
                className="p-4 bg-[#090d18] border border-slate-800/80 rounded-xl space-y-2 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    {skill.name}
                  </h3>
                  <span
                    className={`text-[10px] font-mono flex items-center gap-1 ${
                      isApplied ? 'text-emerald-400' : 'text-blue-400'
                    }`}
                  >
                    {isApplied ? (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{skill.levelLabel}</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-3 h-3" />
                        <span>{skill.levelLabel}</span>
                      </>
                    )}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.context}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
