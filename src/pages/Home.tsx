import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { TrustMarquee } from '../components/home/TrustMarquee';
import { AboutSection } from '../components/home/AboutSection';
import { ExpertiseBento } from '../components/home/ExpertiseBento';
import { CourseGridSection } from '../components/home/CourseGridSection';
import { ImpactSection } from '../components/home/ImpactSection';
import { JourneyTimeline } from '../components/home/JourneyTimeline';
import { ActionGallery } from '../components/home/ActionGallery';
import { Testimonials } from '../components/home/Testimonials';
import { CTABand } from '../components/home/CTABand';
import { ContactSection } from '../components/home/ContactSection';

export const Home: React.FC = () => {
  useEffect(() => {
    // Check if there is an anchor hash in URL on mount
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* 1. Hero with 3D Canvas */}
        <HeroSection />

        {/* 2. Trust Marquee */}
        <TrustMarquee />

        {/* 3. About Dual Expertise */}
        <AboutSection />

        {/* 4. Expertise Bento Grid */}
        <ExpertiseBento />

        {/* 5. Course Offerings Grid */}
        <CourseGridSection />

        {/* 6. Impact & Placement Stats */}
        <ImpactSection />

        {/* 7. Career Milestone Timeline */}
        <JourneyTimeline />

        {/* 8. Action Gallery with Lightbox */}
        <ActionGallery />

        {/* 9. Student Testimonials Carousel */}
        <Testimonials />

        {/* 10. High-Conversion CTA Band */}
        <CTABand />

        {/* 11. Contact Form & Executive Info */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
