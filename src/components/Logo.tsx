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
      the: 'text-[9px] tracking-[0.3em]',
      josie: 'text-sm font-semibold tracking-[0.22em]',
      salon: 'text-[9px] tracking-[0.3em]',
    },
    md: {
      the: 'text-[10px] tracking-[0.35em]',
      josie: 'text-lg font-semibold tracking-[0.24em]',
      salon: 'text-[11px] tracking-[0.35em]',
    },
    lg: {
      the: 'text-sm tracking-[0.4em]',
      josie: 'text-3xl font-semibold tracking-[0.26em]',
      salon: 'text-sm tracking-[0.4em]',
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
        className={`font-serif text-[#c5a059] uppercase leading-none mb-0.5 ${textSizes[size].the}`}
      >
        THE
      </span>
      <span
        className={`font-serif text-[#c5a059] uppercase leading-tight font-medium ${textSizes[size].josie}`}
      >
        JOSIE
      </span>
      <span
        className={`font-serif text-[#c5a059] uppercase leading-none mt-0.5 font-light ${textSizes[size].salon}`}
      >
        HAIR SALON
      </span>
    </div>
  );
};
