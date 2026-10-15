'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_CONFIG, getLocalizedData } from '@/lib/portfolio-data';
import { Language } from '@/lib/i18n';
import EnspyLogo from './EnspyLogo';
import { ArrowDown, Mail, FileText, CheckCircle2, ShieldCheck, Terminal, User } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onRequestCV: () => void;
}

export default function Hero({ currentLang, onRequestCV }: HeroProps) {
  const data = getLocalizedData(currentLang);
  const { personal, hero, proofStrip } = data;
  const config = PORTFOLIO_CONFIG;

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden border-b border-slate-800/80 bg-grid-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & CTAs (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category / Institution Indicator */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-blue-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>{personal.role}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400 flex items-center gap-1.5">
                <EnspyLogo size="sm" />
                <span>ENSPY 2026</span>
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                {config.personal.fullName}
              </h1>
              <p className="mt-2 text-sm sm:text-base font-semibold text-slate-300">
                {personal.specializations}
              </p>
              <p className="mt-1 text-sm sm:text-base font-medium italic text-blue-400 font-serif">
                &ldquo;{personal.tagline}&rdquo;
              </p>
            </div>

            {/* Professional Narrative Body */}
            <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              <p className="text-white font-medium text-base sm:text-lg leading-relaxed">
                {hero.headline}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {hero.paragraph1}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {hero.paragraph2}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-md shadow-blue-600/25 whitespace-nowrap"
              >
                <span>{hero.ctaExplore}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{hero.ctaContact}</span>
              </a>

              <button
                onClick={onRequestCV}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/60 border border-slate-700/80 rounded-lg transition-all whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>{config.personal.resumePdfUrl ? hero.ctaCV : hero.ctaCVRequest}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Prominent Large Photo Frame (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg p-5 sm:p-7 bg-slate-900/60 border border-slate-800 rounded-3xl backdrop-blur-sm shadow-2xl">
              {/* Outer decorative indicators */}
              <div className="absolute top-3.5 left-4 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-blue-400" />
                <span>{hero.profileCode}</span>
              </div>
              <div className="absolute top-3.5 right-4 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>{hero.verifiedEnspy}</span>
              </div>

              {/* Large Portrait Frame (significantly expanded as requested) */}
              <div className="mt-7 flex flex-col items-center text-center">
                <div className="relative group w-full flex justify-center">
                  {/* Subtle electric blue ambient glow */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/35 via-blue-400/20 to-cyan-500/30 rounded-3xl blur-md transition-all group-hover:blur-lg" />

                  {/* High-Impact Full Rectangular Photo Frame */}
                  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-[24rem] sm:h-[27rem] lg:h-[30rem] rounded-2xl overflow-hidden bg-[#090f1e] border-2 border-slate-700/90 shadow-2xl flex flex-col justify-end">
                    {config.personal.avatarUrl ? (
                      <>
                        <Image
                          src={config.personal.avatarUrl}
                          alt={config.personal.fullName}
                          fill
                          className="object-cover"
                          priority
                          referrerPolicy="no-referrer"
                        />
                        {/* Subtle bottom gradient scrim for legible text overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060911]/90 via-[#060911]/20 to-transparent pointer-events-none" />
                        <div className="relative z-10 p-5 text-left space-y-1">
                          <div className="text-base sm:text-lg font-bold text-white">
                            {config.personal.fullName}
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-blue-400">
                            {personal.role}
                          </div>
                          <div className="text-[11px] text-slate-300">
                            {personal.location}
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Full Rectangular Engineering Profile Card */
                      <div className="relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b from-[#0e172a] via-[#091022] to-[#060a14] text-center">
                        {/* Top technical badge */}
                        <div className="flex items-center justify-between w-full">
                          <span className="text-[10px] font-mono text-blue-400 px-2.5 py-1 rounded bg-blue-950/80 border border-blue-800/50">
                            INGÉNIEUR ENSPY
                          </span>
                          <EnspyLogo size="sm" />
                        </div>

                        {/* Portrait Silhouette / Engineering Graphic */}
                        <div className="flex-1 flex flex-col items-center justify-center py-6">
                          <div className="relative flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-b from-blue-900/30 to-blue-950/60 border border-blue-500/20 flex items-center justify-center shadow-lg shadow-blue-950/50">
                              <User className="w-14 h-14 sm:w-16 sm:h-16 text-blue-400/60 stroke-[1.5]" />
                            </div>
                            <div className="mt-3 text-xs font-semibold text-slate-300 tracking-wide">
                              {personal.role}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Identity Overlay */}
                        <div className="pt-3 border-t border-slate-800/80 text-left space-y-0.5">
                          <div className="text-base sm:text-lg font-bold text-white">
                            {config.personal.fullName}
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-blue-400">
                            {personal.specializations.split('·')[0].trim()}
                          </div>
                          <div className="flex items-center justify-between pt-1">
                            <span className="text-xs text-slate-400">{personal.location}</span>
                            <span className="text-[10px] text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/50">
                              Mention Excellente
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Verification metadata with ENSPY Logo below photo */}
                <div className="mt-5 w-full pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <EnspyLogo size="sm" />
                    <span className="font-medium text-slate-200">ENSPY Yaoundé</span>
                  </div>
                  <span className="text-emerald-400 font-semibold font-mono text-[11px]">
                    Mention Excellente (2026)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Proof Strip below split */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {proofStrip.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium flex items-center gap-1.5">
                {idx === 0 && <EnspyLogo size="sm" />}
                <span>{item.label}</span>
              </span>
              <div className="text-sm font-semibold text-white">
                {item.val}
              </div>
              <div className={`text-xs ${idx === 0 ? 'text-emerald-400 font-medium' : 'text-slate-400'}`}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
