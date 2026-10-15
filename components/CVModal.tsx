'use client';

import React, { useEffect } from 'react';
import { getLocalizedData, PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { Language } from '@/lib/i18n';
import EnspyLogo from './EnspyLogo';
import { X, FileText, Mail, Download, CheckCircle } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  currentLang: Language;
  onClose: () => void;
}

export default function CVModal({ isOpen, currentLang, onClose }: CVModalProps) {
  const data = getLocalizedData(currentLang);
  const { cvModal } = data;
  const config = PORTFOLIO_CONFIG;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleRequestByEmail = () => {
    const subject = encodeURIComponent(
      currentLang === 'fr'
        ? `Demande de CV — ${config.personal.fullName}`
        : `Resume Request — ${config.personal.fullName}`
    );
    const body = encodeURIComponent(
      currentLang === 'fr'
        ? `Bonjour Steven,\n\nJ'ai consulté votre portfolio et souhaite recevoir une copie à jour de votre CV d'ingénieur pour une opportunité.\n\nBien cordialement,\n[Votre Nom]\n[Votre Entreprise / Organisation]`
        : `Hello Steven,\n\nI visited your portfolio and would like to receive an up-to-date copy of your Resume / CV for an engineering opportunity.\n\nBest regards,\n[Your Name]\n[Your Company / Organization]`
    );
    window.location.href = `mailto:${config.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0a0e1a] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-950/80 text-blue-400 border border-blue-900/50">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {cvModal.title}
              </h3>
              <p className="text-xs text-slate-400">
                {config.personal.fullName}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Status Content */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {config.personal.resumePdfUrl ? (
            <div className="space-y-4">
              <p>{cvModal.directDownloadText}</p>
              <a
                href={config.personal.resumePdfUrl}
                download
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-600/25"
              >
                <Download className="w-4 h-4" />
                <span>{cvModal.downloadBtn}</span>
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-emerald-400">
                  <EnspyLogo size="sm" />
                  <CheckCircle className="w-4 h-4" />
                  <span>{cvModal.verifiedEnspyText}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {data.education.thesisTitle}
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {cvModal.requestExplanation}
              </p>

              <button
                onClick={handleRequestByEmail}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-600/25"
              >
                <Mail className="w-4 h-4" />
                <span>{cvModal.requestBtn} ({config.personal.email})</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
