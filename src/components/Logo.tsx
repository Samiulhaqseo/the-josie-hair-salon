import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
    lg: 'px-8 py-3 text-lg',
  };

  const textSizes = {
    sm: {
      sub: 'text-[8px] tracking-[0.22em]',
      main: 'text-sm font-semibold tracking-[0.24em]',
      tag: 'text-[8px] tracking-[0.26em]',
    },
    md: {
      sub: 'text-[9px] tracking-[0.25em]',
      main: 'text-lg font-semibold tracking-[0.26em]',
      tag: 'text-[9px] tracking-[0.28em]',
    },
    lg: {
      sub: 'text-xs tracking-[0.3em]',
      main: 'text-3xl font-semibold tracking-[0.28em]',
      tag: 'text-xs tracking-[0.35em]',
    },
  };

  return (
    <div
      id="salon-brand-logo"
      className={`inline-flex flex-col items-center justify-center border border-[#c5a059]/90 ${sizeClasses[size]} select-none transition-all duration-300 hover:border-[#dfba73] ${className}`}
      style={{
        boxShadow: '0 0 15px rgba(197, 160, 89, 0.08)',
      }}
    >
      <span
        className={`font-serif text-[#c5a059] uppercase leading-none mb-0.5 ${textSizes[size].sub}`}
      >
        CEDAR RAPIDS, IOWA
      </span>
      <span
        className={`font-serif text-[#c5a059] uppercase leading-tight font-medium ${textSizes[size].main}`}
      >
        DELANEY
      </span>
      <span
        className={`font-serif text-[#c5a059] uppercase leading-none mt-0.5 font-light ${textSizes[size].tag}`}
      >
        HAIR STYLIST
      </span>
    </div>
  );
};
