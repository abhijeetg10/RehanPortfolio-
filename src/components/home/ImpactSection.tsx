import React from 'react';
import { Users, Building2, TrendingUp, Briefcase } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const metrics = [
    {
      value: "7,000+",
      label: "Students Mentored",
      detail: "Graduates trained in Java, Spring Boot & Distributed Microservices.",
      icon: Users,
      gradient: "from-brand-indigo to-indigo-500"
    },
    {
      value: "32+",
      label: "Partner Institutes",
      detail: "Leading engineering colleges & universities across Maharashtra & India.",
      icon: Building2,
      gradient: "from-brand-cyan to-blue-500"
    },
    {
      value: "85%",
      label: "Placement Conversion",
      detail: "Proven track record of placing trainees in top-tier MNCs and product companies.",
      icon: TrendingUp,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      value: "4+ Years",
      label: "Consulting & Leadership",
      detail: "Hands-on enterprise systems delivery and curriculum engineering.",
      icon: Briefcase,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="impact" className="relative py-24 bg-background-secondary border-y border-border overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-brand-indigo/10 blur-[130px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-cyan px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            Real Metrics. Real Outcomes.
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
            Measurable Impact Across{' '}
            <span className="text-gradient">Higher Education & Industry</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground-muted">
            The tangible results of high-touch mentorship, rigorous technical curriculum, and corporate-standard code reviews.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="relative p-7 rounded-2xl bg-card border border-border backdrop-blur-xl hover:border-brand-indigo/40 transition-all duration-300 group space-y-4 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center text-foreground group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-brand-cyan" />
                </div>

                <div>
                  <h3 className={`font-display font-extrabold text-4xl sm:text-5xl tracking-tight bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
                    {metric.value}
                  </h3>
                  <p className="font-semibold text-base text-foreground mt-1">
                    {metric.label}
                  </p>
                </div>

                <p className="text-xs text-foreground-muted leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
