import React from 'react';
import { PARTNERS_AND_TECH } from '../../data/siteData';

export const TrustMarquee: React.FC = () => {
  const items = [...PARTNERS_AND_TECH, ...PARTNERS_AND_TECH];

  return (
    <section className="relative py-10 bg-background-secondary border-y border-border overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 mb-4 text-center">
        <p className="text-xs uppercase tracking-widest text-foreground-subtle font-semibold">
          Trusted By Engineering Colleges, Corporate Teams & Developers Across India
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap gap-6 py-2">
          {items.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-card border border-border backdrop-blur-sm text-sm font-medium text-foreground-muted hover:text-brand-cyan hover:border-brand-indigo/30 transition-all duration-300 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
              <span className="text-foreground">{item.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-foreground/5 text-foreground-subtle uppercase tracking-wider">
                {item.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
