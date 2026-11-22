import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const CTABand: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-brand-indigo via-indigo-600 to-brand-cyan text-white overflow-hidden shadow-2xl">
      {/* Background patterned mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/15 to-transparent pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center space-y-6">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20">
          <Sparkles className="w-3.5 h-3.5" /> Next Batch Starting Soon
        </span>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Master Enterprise Java Full Stack & Microservices?
        </h2>

        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of successful alumni. Learn directly from Rehan R. Chougale and build real-world distributed applications with production code reviews.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs sm:text-sm font-medium text-white/80">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            <span>Limited Batch Sizes (Max 30-50 Students)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            <span>Live Interactive Zoom Sessions</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            <span>100% Placement Guidance</span>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/90 shadow-2xl border border-white/20"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Enrol in Course Now
            </Button>
          </Link>
          <a href="#contact">
            <Button
              variant="glass"
              size="lg"
              className="bg-white/20 text-white hover:bg-white/30 border-white/30"
            >
              Contact Instructor
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
