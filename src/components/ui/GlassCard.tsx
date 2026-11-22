import React, { useRef, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tilt?: boolean;
  glow?: 'indigo' | 'cyan' | 'none';
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  tilt = false,
  glow = 'none',
  className,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -6;
    const rY = ((x - centerX) / centerX) * 6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!tilt) return;
    setRotateX(0);
    setRotateY(0);
  };

  const glowStyles = {
    none: '',
    indigo: 'hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.25)] hover:border-brand-indigo/40',
    cyan: 'hover:shadow-[0_0_35px_-5px_rgba(34,211,238,0.25)] hover:border-brand-cyan/40',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tilt ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : undefined,
        transition: tilt ? 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease' : undefined,
      }}
      className={twMerge(
        clsx(
          'relative rounded-2xl bg-card backdrop-blur-xl border border-border p-6 shadow-xl transition-all duration-300',
          glowStyles[glow],
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
