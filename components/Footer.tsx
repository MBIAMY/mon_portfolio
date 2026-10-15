'use client';

import React from 'react';
import { getLocalizedData, PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { Language } from '@/lib/i18n';
import EnspyLogo from './EnspyLogo';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const data = getLocalizedData(currentLang);
  const { footer, personal } = data;
  const config = PORTFOLIO_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070e] border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <EnspyLogo size="sm" />
              <span className="text-base font-bold text-white tracking-tight">
                {config.personal.fullName}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {personal.role} · {personal.specializations}
            </p>
          </div>

          {/* Quick contact access in footer as required */}
          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a
              href={`tel:${config.personal.phoneTel}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{config.personal.phone}</span>
            </a>
            <a
              href={`mailto:${config.personal.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{config.personal.email}</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{personal.location}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {config.personal.fullName}. {footer.rights}
          </div>

          <div className="flex items-center gap-6">
            <span>{footer.engineeredWith}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
              aria-label={footer.backToTop}
            >
              <span>{footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
