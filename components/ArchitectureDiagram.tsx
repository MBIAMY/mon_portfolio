'use client';

import React, { useState } from 'react';
import { getLocalizedData, ArchitectureStage } from '@/lib/portfolio-data';
import { Language } from '@/lib/i18n';
import { Radio, Database, Server, Zap, ShieldAlert } from 'lucide-react';
import EnspyLogo from './EnspyLogo';

interface ArchitectureDiagramProps {
  currentLang: Language;
}

export default function ArchitectureDiagram({ currentLang }: ArchitectureDiagramProps) {
  const data = getLocalizedData(currentLang);
  const { diagram } = data;
  const stages = diagram.stages;

  const [selectedStageId, setSelectedStageId] = useState<string>('llm');
  const [bargeInActive, setBargeInActive] = useState(false);

  const selectedStage = stages.find((s) => s.id === selectedStageId) || stages[4];

  return (
    <div className="p-6 sm:p-8 bg-[#090d18] border border-slate-800 rounded-2xl space-y-8">
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5" />
            <span>{diagram.title}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
            {diagram.subtitle}
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {diagram.desc}
          </p>
        </div>

        {/* Barge-In Simulator Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setBargeInActive(!bargeInActive)}
            className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-all flex items-center gap-2 ${
              bargeInActive
                ? 'bg-amber-950/60 border-amber-500/80 text-amber-300'
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            <ShieldAlert className={`w-3.5 h-3.5 ${bargeInActive ? 'text-amber-400 animate-pulse' : 'text-slate-400'}`} />
            <span>{bargeInActive ? diagram.bargeInBtnActive : diagram.bargeInBtnInactive}</span>
          </button>
        </div>
      </div>

      {/* Interactive Flow Diagram */}
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {diagram.streamTitle}
        </div>

        {/* Pipeline Nodes Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {stages.map((stage, idx) => {
            const isSelected = selectedStage.id === stage.id;
            const isAborted = bargeInActive && (stage.id === 'chunker' || stage.id === 'tts' || stage.id === 'ws-out');

            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className={`p-3 text-left rounded-xl border transition-all relative flex flex-col justify-between h-28 ${
                  isSelected
                    ? 'bg-blue-950/70 border-blue-500 text-white shadow-md shadow-blue-950'
                    : isAborted
                    ? 'bg-amber-950/20 border-amber-900/50 text-amber-200/80'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>0{idx + 1}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                    {isAborted && <span className="text-[9px] text-amber-400 font-bold">ABORT</span>}
                  </div>
                  <div className="mt-1 text-xs font-bold leading-tight line-clamp-2">
                    {stage.name}
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 truncate mt-auto font-mono">
                  {stage.tech.split('/')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Cross-Cutting Infrastructure Layer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 bg-slate-950/40 border border-slate-800/80 rounded-xl flex items-center gap-3 text-xs text-slate-300">
            <Database className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <span className="font-semibold text-white block">{diagram.crossCutting.redis.title}</span>
              <span className="text-[11px] text-slate-400">{diagram.crossCutting.redis.desc}</span>
            </div>
          </div>

          <div className="p-3 bg-slate-950/40 border border-slate-800/80 rounded-xl flex items-center gap-3 text-xs text-slate-300">
            <Server className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <span className="font-semibold text-white block">{diagram.crossCutting.admin.title}</span>
              <span className="text-[11px] text-slate-400">{diagram.crossCutting.admin.desc}</span>
            </div>
          </div>

          <div className="p-3 bg-slate-950/40 border border-slate-800/80 rounded-xl flex items-center gap-3 text-xs text-slate-300">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <span className="font-semibold text-white block">{diagram.crossCutting.bargein.title}</span>
              <span className="text-[11px] text-slate-400">{diagram.crossCutting.bargein.desc}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Node Deep-Dive Inspector */}
      <div className="p-5 bg-slate-950/90 border border-slate-800 rounded-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-blue-400 uppercase">
              {diagram.selectedStageLabel}
            </span>
            <span className="text-sm font-bold text-white">
              {selectedStage.name}
            </span>
            <span className="text-xs text-slate-400">
              ({selectedStage.category})
            </span>
          </div>
          <div className="text-xs font-mono text-slate-400">
            {diagram.techLabel} <span className="text-blue-300 font-medium">{selectedStage.tech}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-slate-300 block mb-1">{diagram.roleLabel}</span>
              <p className="text-slate-400 leading-relaxed">
                {selectedStage.role}
              </p>
            </div>
            <div>
              <span className="font-semibold text-slate-300 block mb-1">{diagram.protocolLabel}</span>
              <p className="text-slate-400 font-mono text-[11px]">
                {selectedStage.protocol}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <span className="font-semibold text-slate-300 block mb-1">{diagram.latencyLabel}</span>
              <p className="text-slate-400 leading-relaxed">
                {selectedStage.latencyImpact}
              </p>
            </div>
            <div>
              <span className="font-semibold text-slate-300 block mb-1">{diagram.resilienceLabel}</span>
              <p className="text-slate-400 leading-relaxed">
                {selectedStage.resilience}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latency & Evaluation Telemetry Methodology */}
      <div className="p-4 bg-blue-950/20 border border-blue-900/40 rounded-xl text-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-blue-300 flex items-center gap-2">
            <EnspyLogo size="sm" />
            <span>{diagram.metricsTitle}</span>
          </span>
          <span className="text-[11px] text-slate-400 font-mono">
            {diagram.metricsProtocol}
          </span>
        </div>
        <p className="text-slate-300 leading-relaxed text-[11px]">
          {diagram.metricsBody}
        </p>
      </div>
    </div>
  );
}
