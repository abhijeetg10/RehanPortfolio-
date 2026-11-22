import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'cyan' | 'success' | 'warning' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  dot = false,
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full tracking-wide transition-colors';

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2',
  };

  const variantStyles = {
    primary: 'bg-brand-indigo/15 text-indigo-400 border border-brand-indigo/30',
    cyan: 'bg-brand-cyan/15 text-cyan-400 border border-brand-cyan/30',
    success: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    warning: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
    neutral: 'bg-white/10 text-slate-300 border border-white/10',
    outline: 'bg-transparent text-slate-400 border border-slate-700',
  };

  const dotColors = {
    primary: 'bg-brand-indigo animate-pulse',
    cyan: 'bg-brand-cyan animate-pulse',
    success: 'bg-emerald-400',
    warning: 'bg-amber-400',
    neutral: 'bg-slate-400',
    outline: 'bg-slate-400',
  };

  return (
    <span className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}>
      {dot && <span className={clsx('w-1.5 h-1.5 rounded-full', dotColors[variant])} />}
      {children}
    </span>
  );
};
