import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { REHAN_INFO } from '../../data/siteData';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Java Full Stack Course',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const body = encodeURIComponent(
      `Hi Rehan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${REHAN_INFO.email}?subject=Inquiry from Portfolio - ${formData.name}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 bg-background-secondary border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-indigo/10 blur-[130px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cyan" size="md">
            Direct Line
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
            Let's Collaborate & <span className="text-gradient">Build Together</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground-muted">
            Interested in corporate IT consulting, organizing a college training bootcamp, or enrolling in an upcoming course batch? Get in touch directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-8 space-y-6 border-border shadow-xl">
              <h3 className="font-display font-bold text-2xl text-foreground">
                Get In Touch
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Rehan responds within 24 hours to all training inquiries, corporate consulting proposals, and student mentorship requests.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${REHAN_INFO.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border hover:border-brand-indigo/40 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-indigo/15 flex items-center justify-center text-brand-indigo group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground-muted">Direct Email</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-brand-cyan transition-colors">
                      {REHAN_INFO.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${REHAN_INFO.phone}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border hover:border-brand-cyan/40 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground-muted">Phone / Call</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-brand-cyan transition-colors">
                      {REHAN_INFO.phoneDisplay}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground-muted">Location</p>
                    <p className="text-sm font-semibold text-foreground">
                      {REHAN_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={REHAN_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-emerald-600/30 hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp Directly
                </a>
              </div>
            </GlassCard>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 space-y-6 border-border shadow-xl">
              <h3 className="font-display font-bold text-2xl text-foreground">
                Send a Message
              </h3>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-3 rounded-xl bg-brand-indigo/10 border border-brand-indigo/30">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="font-semibold text-lg text-foreground">Message Dispatched!</h4>
                  <p className="text-xs text-foreground-muted max-w-sm mx-auto">
                    Your inquiry has been transferred to email. Rehan will review and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-brand-cyan hover:underline mt-2 inline-block"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground-muted">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground-muted">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground-muted">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground-muted">Inquiry Subject</label>
                      <select
                        value={formData.interest}
                        onChange={e => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                      >
                        <option value="Java Full Stack Course">Java Full Stack Development</option>
                        <option value="Microservices Course">Microservices & Kafka Architecture</option>
                        <option value="DSA Masterclass">Data Structures & Algorithms</option>
                        <option value="College Campus Training">College Campus Training / MoU</option>
                        <option value="Corporate Consulting">Corporate Consulting Engagement</option>
                        <option value="Other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground-muted">Message / Requirements</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your background, career goals, or training requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" icon={<Send className="w-4 h-4" />}>
                    Send Message to Rehan
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};
