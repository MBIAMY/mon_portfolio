'use client';

import React, { useState } from 'react';
import { getLocalizedData, PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { Language } from '@/lib/i18n';
import { Phone, Mail, Copy, Check, Download, Send, MapPin, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export default function ContactSection({ currentLang }: ContactSectionProps) {
  const data = getLocalizedData(currentLang);
  const { contact, personal } = data;
  const config = PORTFOLIO_CONFIG;
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | 'draft' | null>(null);

  // Message composer state
  const [senderName, setSenderName] = useState('');
  const [senderSubject, setSenderSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');

  const handleCopy = async (text: string, type: 'email' | 'phone' | 'draft') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    } catch {
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    }
  };

  const handleDownloadVCard = () => {
    const vcardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${config.personal.fullName}`,
      `N:MBIAMY NGAMENI;Steven Loic;;;`,
      `TITLE:${personal.role}`,
      `ORG:ENSPY Graduate`,
      `TEL;TYPE=CELL:${config.personal.phone}`,
      `EMAIL;TYPE=INTERNET:${config.personal.email}`,
      `ADR;TYPE=HOME:;;Yaoundé;Centre;;Cameroon`,
      `NOTE:${personal.tagline} - ${personal.specializations}`,
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Steven_Loic_Mbiamy_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleComposeMail = () => {
    const defaultSub = currentLang === 'fr'
      ? `Opportunité d'ingénierie logicielle — ${senderName || 'Prise de contact'}`
      : `Software Engineering Opportunity — ${senderName || 'Discussion'}`;
    const subject = encodeURIComponent(senderSubject || defaultSub);
    const defaultBody = currentLang === 'fr'
      ? `Bonjour Steven,\n\n${messageBody || 'Je souhaite échanger avec vous concernant une opportunité d\'ingénierie logicielle.'}\n\nBien cordialement,\n${senderName || ''}`
      : `Hello Steven,\n\n${messageBody || 'I would like to discuss a software engineering opportunity with you.'}\n\nBest regards,\n${senderName || ''}`;
    const body = encodeURIComponent(defaultBody);
    window.location.href = `mailto:${config.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-slate-800/80 bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            {contact.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {contact.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {contact.subtitle}
          </p>
        </div>

        {/* Primary Contact Channels & Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Direct Verified Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Card */}
            <div className="p-5 bg-[#090d18] border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  {contact.phoneLabel}
                </span>
                <span className="text-[11px] font-mono text-emerald-400">{contact.availableStatus}</span>
              </div>

              <a
                href={`tel:${config.personal.phoneTel}`}
                className="text-lg sm:text-xl font-bold text-white hover:text-blue-400 transition-colors block"
              >
                {config.personal.phone}
              </a>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={`tel:${config.personal.phoneTel}`}
                  className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
                >
                  {contact.callNow}
                </a>
                <button
                  onClick={() => handleCopy(config.personal.phone, 'phone')}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  {copiedType === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{contact.copyPhone}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 bg-[#090d18] border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  {contact.emailLabel}
                </span>
                <span className="text-[11px] font-mono text-blue-400">{contact.priorityStatus}</span>
              </div>

              <a
                href={`mailto:${config.personal.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-blue-400 transition-colors block break-all"
              >
                {config.personal.email}
              </a>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={`mailto:${config.personal.email}`}
                  className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
                >
                  {currentLang === 'fr' ? 'Envoyer un e-mail' : 'Send an Email'}
                </a>
                <button
                  onClick={() => handleCopy(config.personal.email, 'email')}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{contact.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & vCard Download Card */}
            <div className="p-5 bg-[#090d18] border border-slate-800 rounded-xl space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-semibold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {contact.locationLabel}
                </span>
                <span className="text-slate-300">{personal.location}</span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {personal.availability}
              </p>

              <button
                onClick={handleDownloadVCard}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-blue-400" />
                <span>{contact.downloadVCard}</span>
              </button>
            </div>
          </div>

          {/* Right: Direct Message Composer (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-7 bg-[#090d18] border border-slate-800 rounded-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>{contact.quickMessage}</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">{contact.directLauncher}</span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-medium block">
                    {contact.senderName}
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder={currentLang === 'fr' ? 'Ex: Franck Johnson / Société' : 'e.g. Franck Johnson / Company'}
                    className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-medium block">
                    {contact.subject}
                  </label>
                  <input
                    type="text"
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    placeholder={currentLang === 'fr' ? 'Ex: Opportunité Ingénieur Logiciel' : 'e.g. Software Engineer Position / Technical Project'}
                    className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-300 font-medium block">
                  {contact.message}
                </label>
                <textarea
                  rows={4}
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  placeholder={currentLang === 'fr' ? 'Décrivez votre projet, le contexte du poste ou votre demande de collaboration...' : 'Describe your role requirements, project scope or collaboration inquiry...'}
                  className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 resize-none leading-relaxed"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleComposeMail}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md shadow-blue-600/20 whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{contact.openMailClient}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const text = `To: ${config.personal.email}\nSubject: ${senderSubject || 'Engineering Opportunity'}\nFrom: ${senderName}\n\n${messageBody}`;
                    handleCopy(text, 'draft');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
                >
                  {copiedType === 'draft' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{contact.copyMessageText}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-400 pt-1">
                {contact.privacyNotice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
