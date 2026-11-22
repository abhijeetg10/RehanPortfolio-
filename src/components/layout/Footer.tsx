import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { REHAN_INFO } from '../../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-background-secondary border-t border-border pt-16 pb-12 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-indigo/10 blur-[90px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-cyan flex items-center justify-center font-display font-bold text-white shadow-md shadow-brand-indigo/25">
                RC
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-foreground">
                {REHAN_INFO.fullName}
              </span>
            </Link>
            <p className="text-sm text-foreground-muted leading-relaxed max-w-sm">
              Empowering engineers and architecting enterprise Java & Microservices systems. Dual expertise in corporate consulting and campus engineering leadership.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={REHAN_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-card hover:bg-brand-indigo/15 text-foreground-muted hover:text-brand-cyan border border-border flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={REHAN_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-card hover:bg-emerald-500/15 text-foreground-muted hover:text-emerald-500 border border-border flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp Chat"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${REHAN_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-card hover:bg-brand-cyan/15 text-foreground-muted hover:text-brand-cyan border border-border flex items-center justify-center transition-all duration-200"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm text-foreground tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li><a href="/#about" className="hover:text-brand-cyan transition-colors">About Rehan</a></li>
              <li><a href="/#expertise" className="hover:text-brand-cyan transition-colors">Technical Mastery</a></li>
              <li><a href="/courses" className="hover:text-brand-cyan transition-colors">Course Catalog</a></li>
              <li><a href="/#impact" className="hover:text-brand-cyan transition-colors">Impact & Stats</a></li>
              <li><a href="/#journey" className="hover:text-brand-cyan transition-colors">Career Timeline</a></li>
              <li><a href="/#gallery" className="hover:text-brand-cyan transition-colors">Training Gallery</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm text-foreground tracking-wider uppercase">
              Programs
            </h4>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li><Link to="/courses" className="hover:text-brand-cyan transition-colors">Java Full Stack</Link></li>
              <li><Link to="/courses" className="hover:text-brand-cyan transition-colors">Microservices & Kafka</Link></li>
              <li><Link to="/courses" className="hover:text-brand-cyan transition-colors">DSA & Algorithms</Link></li>
              <li><Link to="/register" className="hover:text-brand-cyan transition-colors">Online Registration</Link></li>
              <li><Link to="/admin" className="hover:text-brand-cyan transition-colors">Admin Dashboard</Link></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm text-foreground tracking-wider uppercase">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-foreground-muted">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-indigo flex-shrink-0" />
                <a href={`mailto:${REHAN_INFO.email}`} className="hover:text-foreground truncate">
                  {REHAN_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                <a href={`tel:${REHAN_INFO.phone}`} className="hover:text-foreground">
                  {REHAN_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{REHAN_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground-subtle">
          <p>© {new Date().getFullYear()} Rehan R. Chougale. Crafted with precision for enterprise impact. All credentials verified.</p>
          <div className="flex items-center gap-1 text-foreground-muted">
            Built with 3D WebGL, Framer Motion & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};
