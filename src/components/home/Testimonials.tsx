import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../../data/siteData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-cyan/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="primary" size="md">
            Alumni Success Stories
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
            What <span className="text-gradient">Placed Engineers Say</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground-muted">
            Read directly from students who transitioned from campus classrooms to software engineering roles at top tech companies.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <GlassCard tilt={true} glow="cyan" className="p-8 sm:p-12 space-y-6 relative border-border shadow-xl">
            <Quote className="w-12 h-12 text-brand-indigo/20 absolute top-6 right-6 pointer-events-none" />

            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            {/* Quote Body */}
            <p className="text-base sm:text-xl text-foreground leading-relaxed italic">
              "{current.quote}"
            </p>

            {/* Student Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border">
              <div className="space-y-0.5">
                <h4 className="font-display font-bold text-lg text-foreground">
                  {current.name}
                </h4>
                <p className="text-xs sm:text-sm text-brand-cyan font-medium">
                  {current.role} • <strong className="text-foreground font-semibold">{current.company}</strong>
                  {current.package && <span className="text-emerald-500 font-bold ml-2">({current.package})</span>}
                </p>
                <p className="text-xs text-foreground-muted">
                  Course: {current.courseTaken}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 border border-border text-foreground transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 border border-border text-foreground transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </GlassCard>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 pt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-brand-cyan' : 'w-2 bg-foreground/20 hover:bg-foreground/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
