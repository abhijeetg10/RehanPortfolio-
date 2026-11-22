import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowRight, ShieldCheck } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isAdmin } = useData();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Expertise', href: '/#expertise' },
    { label: 'Courses', href: '/courses' },
    { label: 'Impact', href: '/#impact' },
    { label: 'Journey', href: '/#journey' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-background/85 backdrop-blur-xl border-b border-border shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-cyan flex items-center justify-center font-display font-bold text-white shadow-md shadow-brand-indigo/25 group-hover:scale-105 transition-transform duration-300">
              RC
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base md:text-lg tracking-tight text-foreground group-hover:text-brand-cyan transition-colors">
                Rehan R. Chougale
              </span>
              <span className="text-[11px] font-medium text-foreground-muted tracking-wider uppercase">
                Consultant & Tech Trainer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('/#') && location.pathname === '/') {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="px-3 py-1.5 text-sm font-medium text-foreground-muted hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground border border-border transition-all duration-200 cursor-pointer"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Admin Badge/Link if logged in */}
            {isAdmin ? (
              <Link to="/admin">
                <Button variant="secondary" size="sm" icon={<ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />}>
                  Admin Panel
                </Button>
              </Link>
            ) : (
              <Link to="/admin/login" className="text-xs text-foreground-muted hover:text-foreground px-2 py-1">
                Admin
              </Link>
            )}

            {/* Primary Enrolment CTA */}
            <Link to="/register">
              <Button size="sm" glow={true} icon={<ArrowRight className="w-3.5 h-3.5" />} iconPosition="right">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-foreground/5 text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground rounded-lg hover:bg-foreground/5"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden flex flex-col pt-24 px-6 pb-8 justify-between animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('/#') && location.pathname === '/') {
                    e.preventDefault();
                    handleNavClick(link.href);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-lg font-display font-medium text-foreground py-2 border-b border-border/50 hover:text-brand-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6">
            <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
              <Button size="lg" className="w-full" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Register for Courses
              </Button>
            </Link>
            <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="secondary" size="md" className="w-full">
                Admin Portal
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
