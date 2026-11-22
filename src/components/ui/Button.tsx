import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  glow = false,
  icon,
  iconPosition = 'left',
  className,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 focus:ring-offset-2 focus:ring-offset-background active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-brand-indigo via-indigo-500 to-brand-cyan text-white shadow-lg hover:shadow-brand-indigo/30 hover:scale-[1.02] border border-white/20',
    secondary: 'bg-background-elevated hover:bg-background-secondary text-foreground border border-border hover:border-brand-indigo/40 hover:scale-[1.01]',
    outline: 'border border-brand-indigo/50 hover:border-brand-cyan text-brand-indigo hover:text-brand-cyan bg-brand-indigo/5 hover:bg-brand-indigo/10',
    ghost: 'text-foreground-muted hover:text-foreground hover:bg-white/5',
    glass: 'bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-indigo/40 text-foreground hover:bg-white/15 shadow-glass',
  };

  const glowStyle = glow ? 'shadow-[0_0_25px_rgba(99,102,241,0.4)]' : '';

  return (
    <button
      className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], glowStyle, className))}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};
