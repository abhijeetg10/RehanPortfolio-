import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Award, Users, CheckCircle2 } from 'lucide-react';
import { REHAN_INFO } from '../../data/siteData';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { HeroCanvas } from '../3d/HeroCanvas';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-background">
      {/* 3D Interactive Canvas in Background */}
      <HeroCanvas />

      {/* Atmospheric Radial Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-indigo/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Positioning & Headlines */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Dual Status Pill */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="primary" dot={true} size="md" className="py-1 px-3.5 shadow-sm">
                Available for Corporate Consulting & Placement Drives
              </Badge>
            </div>

            {/* Big Headline (H1 Clamp 48-96px) */}
            <h1 className="font-display font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-foreground">
              Consultant. Trainer.{' '}
              <span className="block mt-1 text-gradient">
                Builder of Java Engineers.
              </span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Dual expertise in enterprise-grade <strong className="text-foreground font-semibold">Microservices architecture</strong> and engineering leadership. Empowering over <strong className="text-brand-cyan font-semibold">7,000+ students</strong> across 32+ universities with industry-ready skills.
            </p>

            {/* Key Value Proposition Bullets */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs sm:text-sm text-foreground-muted">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Enterprise MNC Consultant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>CTO @ Apt-Tech Solutions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>85% Placement Success</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link to="/courses" className="w-full sm:w-auto">
                <Button size="lg" glow={true} className="w-full sm:w-auto" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  Explore Courses
                </Button>
              </Link>
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="glass" size="lg" className="w-full sm:w-auto" icon={<Sparkles className="w-4 h-4 text-brand-cyan" />}>
                  Book a Consultation
                </Button>
              </a>
            </div>

            {/* Credibility Micro-strip */}
            <div className="pt-6 border-t border-border flex items-center justify-center lg:justify-start gap-8">
              <div>
                <p className="font-display font-bold text-2xl lg:text-3xl text-gradient">7,000+</p>
                <p className="text-xs text-foreground-muted">Students Mentored</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-display font-bold text-2xl lg:text-3xl text-foreground">32+</p>
                <p className="text-xs text-foreground-muted">Partner Institutes</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-display font-bold text-2xl lg:text-3xl text-emerald-500">85%</p>
                <p className="text-xs text-foreground-muted">Placement Rate</p>
              </div>
            </div>
          </div>

          {/* Right Column: Rehan's Portrait with 3D Glass Floating Frame */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-[4/5] group">
              
              {/* Backing Ambient Gradient Halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-indigo/30 via-brand-cyan/20 to-purple-600/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Portrait Container with Glassmorphic Border */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-2xl bg-card flex items-center justify-center">
                <img
                  src={REHAN_INFO.portraitUrl}
                  alt={REHAN_INFO.fullName}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Subtle dark gradient overlay at bottom for text contrast */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-indigo/30 border border-brand-indigo/50 flex items-center justify-center">
                      <Award className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Rehan R. Chougale</p>
                      <p className="text-[11px] text-slate-300">CTO, Apt-Tech Solutions</p>
                    </div>
                  </div>
                  <img
                    src={REHAN_INFO.aptTechLogo}
                    alt="Apt-Tech Solutions"
                    className="h-7 w-auto object-contain opacity-95"
                  />
                </div>
              </div>

              {/* Floating Counter Badge (Top Right) */}
              <div className="absolute -top-3 -right-3 sm:-right-5 bg-card/95 backdrop-blur-xl border border-border px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-indigo" />
                <span className="text-xs font-semibold text-foreground">7k+ Engineers</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
