'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_CONFIG } from '@/lib/portfolio-data';

import enspyLogoImg from '../src/assets/images/enspy-logo.png';

interface EnspyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function EnspyLogo({ className = '', size = 'md' }: EnspyLogoProps) {
  const sizeClasses = {
    sm: 'w-7 h-7 text-[8px]',
    md: 'w-10 h-10 text-[10px]',
    lg: 'w-14 h-14 text-xs',
    xl: 'w-20 h-20 text-sm',
  };

  const pxSizes = {
    sm: 28,
    md: 40,
    lg: 56,
    xl: 80,
  };

  return (
    <div
      className={`relative rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-slate-900/60 border border-amber-500/40 shadow-sm hover:border-amber-300 hover:shadow-amber-500/10 transition-all ${sizeClasses[size]} ${className}`}
      title="École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)"
    >
      <Image
        src={enspyLogoImg}
        alt="ENSPY Logo - École Nationale Supérieure Polytechnique de Yaoundé"
        width={pxSizes[size]}
        height={pxSizes[size]}
        className="object-contain w-full h-full rounded-full"
        referrerPolicy="no-referrer"
        priority={size === 'lg' || size === 'xl'}
      />
    </div>
  );
}
