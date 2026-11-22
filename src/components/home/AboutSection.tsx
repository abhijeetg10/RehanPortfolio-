import React from 'react';
import { Briefcase, GraduationCap, CheckCircle, ShieldCheck } from 'lucide-react';
import { REHAN_INFO } from '../../data/siteData';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-indigo/10 blur-[130px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cyan" size="md">
            The Dual-Pronged Advantage
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
            Enterprise Consulting meets{' '}
            <span className="text-gradient">World-Class Training</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
            Most trainers lack real production experience, while most corporate architects never train. Rehan bridges this gap by leading enterprise microservices delivery in corporate IT and mentoring future software leaders.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Corporate Consulting */}
          <GlassCard tilt={true} glow="indigo" className="p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-indigo/20 border border-brand-indigo/30 flex items-center justify-center text-brand-indigo">
                <Briefcase className="w-6 h-6" />
              </div>

              <div>
                <Badge variant="primary" size="sm" className="mb-2">
                  Corporate IT & Architecture
                </Badge>
                <h3 className="font-display font-bold text-2xl text-foreground">
                  {REHAN_INFO.roles.consulting.title}
                </h3>
                <p className="text-sm font-medium text-brand-cyan mt-0.5">
                  {REHAN_INFO.roles.consulting.organization}
                </p>
              </div>

              <p className="text-sm text-foreground-muted leading-relaxed">
                {REHAN_INFO.roles.consulting.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  "Architecting distributed microservices with Spring Boot & Kafka",
                  "Cloud modernization, Docker containerization & AWS deployment",
                  "PostgreSQL / MongoDB query optimization & high-throughput caching",
                  "Cross-team technical leadership, code reviews & design patterns"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted">
                    <CheckCircle className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-foreground-subtle">
              <span>Domain: FinTech & Global Enterprise Systems</span>
              <span className="text-brand-indigo font-medium">Production Tested</span>
            </div>
          </GlassCard>

          {/* Card 2: Technical Training Leadership */}
          <GlassCard tilt={true} glow="cyan" className="p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <Badge variant="cyan" size="sm" className="mb-2">
                  Leadership & Incubation
                </Badge>
                <h3 className="font-display font-bold text-2xl text-foreground">
                  {REHAN_INFO.roles.training.title}
                </h3>
                <p className="text-sm font-medium text-brand-indigo mt-0.5">
                  {REHAN_INFO.roles.training.organization}
                </p>
              </div>

              <p className="text-sm text-foreground-muted leading-relaxed">
                {REHAN_INFO.roles.training.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  "Trained 7,000+ engineering graduates in Java, Spring Boot & DSA",
                  "Established MoUs & curriculum partnerships with 32+ engineering colleges",
                  "Proven 85% placement conversion into Tier-1 IT & Product firms",
                  "Hands-on live debugging, mock interviews & real industry capstones"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted">
                    <CheckCircle className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-foreground-subtle">
              <span>Placement conversion: 85% average</span>
              <span className="text-brand-cyan font-medium">Verified Placement Record</span>
            </div>
          </GlassCard>

        </div>

        {/* Academic Foundation & Certifications Strip */}
        <div className="rounded-2xl bg-card border border-border p-8 backdrop-blur-md shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border">
            <div>
              <h3 className="font-display font-bold text-xl text-foreground">
                Verified Academic Foundation & Certifications
              </h3>
              <p className="text-xs sm:text-sm text-foreground-muted">
                Rigorous computer engineering education paired with industry cloud credentials.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span className="text-xs font-semibold text-emerald-500">100% Genuine Credentials</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {REHAN_INFO.academic.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-background/50 border border-border space-y-1.5">
                <p className="text-xs font-semibold text-brand-cyan">{edu.duration}</p>
                <h4 className="font-semibold text-sm text-foreground">{edu.degree}</h4>
                <p className="text-xs text-foreground-muted">{edu.institution}</p>
                <p className="text-xs text-emerald-500 font-medium">Score: {edu.score}</p>
              </div>
            ))}
          </div>

          {/* Certifications badges */}
          <div className="pt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs text-foreground-subtle font-medium mr-2">Key Certifications:</span>
            {REHAN_INFO.certifications.map((cert, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-background border border-border text-foreground-muted"
              >
                {cert.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
