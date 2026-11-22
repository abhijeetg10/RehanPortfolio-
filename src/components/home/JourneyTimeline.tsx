import React from 'react';
import { TIMELINE_MILESTONES } from '../../data/siteData';
import { Badge } from '../ui/Badge';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-brand-indigo/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge variant="primary" size="md">
            Career Evolution
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
            The Journey of a <span className="text-gradient">Builder & Mentor</span>
          </h2>
          <p className="text-base text-foreground-muted">
            From top academic distinction to corporate IT consulting and steering technical strategy at Apt-Tech Solutions.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-border ml-4 md:ml-32 space-y-12">
          {TIMELINE_MILESTONES.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10 group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-brand-indigo group-hover:border-brand-cyan group-hover:scale-125 transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan absolute inset-0 m-auto" />
              </div>

              {/* Year Label (on desktop placed to the left) */}
              <div className="md:absolute md:-left-36 md:top-0.5 md:w-28 md:text-right mb-2 md:mb-0">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-card border border-border text-brand-cyan shadow-sm">
                  {item.year}
                </span>
              </div>

              {/* Milestone Content Card */}
              <div className="p-6 rounded-2xl bg-card border border-border backdrop-blur-md hover:border-brand-indigo/40 transition-all duration-300 space-y-3 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display font-bold text-xl text-foreground transition-colors">
                    {item.title}
                  </h3>
                  <Badge variant="cyan" size="sm">
                    {item.badge}
                  </Badge>
                </div>

                <p className="text-sm font-medium text-brand-indigo">
                  {item.role} • <span className="text-foreground-muted">{item.organization}</span>
                </p>

                <p className="text-sm text-foreground-muted leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] px-2 py-0.5 rounded bg-background border border-border text-foreground-subtle"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
