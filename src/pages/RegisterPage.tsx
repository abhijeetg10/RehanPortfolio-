import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { CheckCircle2, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { useData } from '../context/DataContext';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const RegisterPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { courses, adminSettings, addRegistration } = useData();

  const courseIdParam = searchParams.get('courseId');

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [createdRegId, setCreatedRegId] = useState<string>('');

  const [formData, setFormData] = useState({
    course_id: courseIdParam || (courses[0]?.id || ''),
    student_name: '',
    student_email: '',
    student_phone: '',
    college: '',
    branch: 'Computer Science & Engineering',
    year: 'Final Year (2025)',
    cgpa: '',
    payment_proof_url: '',
    terms_accepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (courseIdParam) {
      setFormData(prev => ({ ...prev, course_id: courseIdParam }));
    }
  }, [courseIdParam]);

  const selectedCourse = courses.find(c => c.id === formData.course_id) || courses[0];

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.student_name.trim()) errs.student_name = 'Name is required';
    if (!formData.student_email.trim() || !/\S+@\S+\.\S+/.test(formData.student_email)) {
      errs.student_email = 'Valid email is required';
    }
    if (!formData.student_phone.trim() || formData.student_phone.length < 10) {
      errs.student_phone = 'Valid phone number is required';
    }
    if (!formData.college.trim()) errs.college = 'College/Institute name is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!formData.terms_accepted) errs.terms_accepted = 'Please accept the enrollment terms';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (validateStep1()) setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    const newReg = addRegistration({
      course_id: formData.course_id,
      student_name: formData.student_name,
      student_email: formData.student_email,
      student_phone: formData.student_phone,
      college: formData.college,
      branch: formData.branch,
      year: formData.year,
      cgpa: formData.cgpa || 'N/A',
      payment_proof_url: formData.payment_proof_url || 'Verified via GPay / UPI',
      terms_accepted: formData.terms_accepted,
    });

    setCreatedRegId(newReg.id);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[800px] mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-10 space-y-3">
            <Badge variant="primary" size="md">
              Secure Enrolment
            </Badge>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
              Course <span className="text-gradient">Registration</span>
            </h1>
            <p className="text-sm sm:text-base text-foreground-muted">
              Complete your enrolment in 3 simple steps to reserve your seat in the upcoming cohort.
            </p>
          </div>

          {/* Step Progress Bar */}
          <div className="grid grid-cols-3 gap-2 mb-10">
            {[
              { num: 1, label: 'Student Info' },
              { num: 2, label: 'Course & Fee' },
              { num: 3, label: 'Confirm & Enrol' },
            ].map(step => (
              <div
                key={step.num}
                className={`py-3 px-2 rounded-xl text-center border transition-all duration-300 ${
                  currentStep === step.num
                    ? 'bg-brand-indigo/15 border-brand-indigo text-foreground font-semibold shadow-md'
                    : currentStep > step.num
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500 font-medium'
                    : 'bg-card border-border text-foreground-subtle'
                }`}
              >
                <div className="text-xs">Step {step.num}</div>
                <div className="text-xs sm:text-sm truncate">{step.label}</div>
              </div>
            ))}
          </div>

          {/* Form Card */}
          <GlassCard className="p-8 sm:p-10 border-border shadow-xl">
            {isSuccess ? (
              <div className="text-center py-8 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
                    Enrolment Submitted Successfully!
                  </h2>
                  <p className="text-sm text-foreground-muted max-w-md mx-auto">
                    Thank you, <strong className="text-foreground">{formData.student_name}</strong>. Your registration for <strong className="text-brand-cyan">{selectedCourse?.name}</strong> has been logged.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-background border border-border inline-block text-left text-xs space-y-1">
                  <p><span className="text-foreground-muted">Registration ID:</span> <strong className="text-brand-indigo">{createdRegId}</strong></p>
                  <p><span className="text-foreground-muted">Registered Email:</span> <strong className="text-foreground">{formData.student_email}</strong></p>
                  <p><span className="text-foreground-muted">Status:</span> <span className="text-amber-500 font-semibold">Under Verification</span></p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link to="/">
                    <Button variant="secondary" size="md">
                      Return to Portfolio
                    </Button>
                  </Link>
                  <a
                    href={`https://wa.me/917588171372?text=Hi%20Rehan,%20I%20have%20registered%20for%20${encodeURIComponent(selectedCourse?.name || 'course')}%20with%20ID%20${createdRegId}.`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="md" className="bg-emerald-600 hover:bg-emerald-500 text-white">
                      Confirm on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* STEP 1: Personal Info */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-display font-bold text-xl text-foreground border-b border-border pb-3">
                      Step 1: Student Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground-muted">Full Name *</label>
                        <input
                          type="text"
                          value={formData.student_name}
                          onChange={e => setFormData({ ...formData, student_name: e.target.value })}
                          placeholder="e.g. Aditya Patil"
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                        />
                        {errors.student_name && <p className="text-xs text-rose-500">{errors.student_name}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground-muted">Email Address *</label>
                        <input
                          type="email"
                          value={formData.student_email}
                          onChange={e => setFormData({ ...formData, student_email: e.target.value })}
                          placeholder="e.g. aditya@gmail.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                        />
                        {errors.student_email && <p className="text-xs text-rose-500">{errors.student_email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground-muted">Phone Number (WhatsApp) *</label>
                        <input
                          type="tel"
                          value={formData.student_phone}
                          onChange={e => setFormData({ ...formData, student_phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                        />
                        {errors.student_phone && <p className="text-xs text-rose-500">{errors.student_phone}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground-muted">College / Institute *</label>
                        <input
                          type="text"
                          value={formData.college}
                          onChange={e => setFormData({ ...formData, college: e.target.value })}
                          placeholder="e.g. Shivaji University / DY Patil"
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                        />
                        {errors.college && <p className="text-xs text-rose-500">{errors.college}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground-muted">Branch / Stream</label>
                        <input
                          type="text"
                          value={formData.branch}
                          onChange={e => setFormData({ ...formData, branch: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground-muted">Academic Year</label>
                        <select
                          value={formData.year}
                          onChange={e => setFormData({ ...formData, year: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                        >
                          <option value="Final Year (2025)">Final Year (2025)</option>
                          <option value="Third Year (2026)">Third Year (2026)</option>
                          <option value="Second Year (2027)">Second Year (2027)</option>
                          <option value="Passout / Working Professional">Passout / Working Professional</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground-muted">Current CGPA / %</label>
                        <input
                          type="text"
                          value={formData.cgpa}
                          onChange={e => setFormData({ ...formData, cgpa: e.target.value })}
                          placeholder="e.g. 8.5 / 82%"
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Course Selection & Payment Instructions */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-display font-bold text-xl text-foreground border-b border-border pb-3">
                      Step 2: Course Selection & Payment Details
                    </h3>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground-muted">Selected Program</label>
                      <select
                        value={formData.course_id}
                        onChange={e => setFormData({ ...formData, course_id: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm font-semibold"
                      >
                        {courses.map(c => (
                          <option key={c.id} value={c.id}>
                            {c.name} — ₹{c.fee.toLocaleString('en-IN')} ({c.duration})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Payment Instruction & QR Code Box */}
                    <div className="p-6 rounded-2xl bg-background border border-border grid grid-cols-1 md:grid-cols-2 gap-6 items-center shadow-sm">
                      <div className="space-y-3">
                        <Badge variant="cyan" size="sm">UPI Payment Gateway</Badge>
                        <h4 className="font-display font-bold text-lg text-foreground">
                          Scan & Pay: ₹{selectedCourse?.fee.toLocaleString('en-IN')}
                        </h4>
                        <p className="text-xs text-foreground-muted leading-relaxed">
                          {adminSettings.payment_instructions}
                        </p>
                        <div className="p-3 rounded-xl bg-card border border-border text-xs font-mono text-brand-cyan">
                          UPI ID: <strong className="text-foreground">{adminSettings.upi_id}</strong>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white text-black text-center shadow-md">
                        <img
                          src={adminSettings.payment_qr_code_url}
                          alt="Payment QR Code"
                          className="w-40 h-40 object-contain"
                        />
                        <span className="text-[11px] font-semibold text-slate-800 mt-2">
                          Scan with PhonePe / GPay / Paytm
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Confirm & Enrol */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-display font-bold text-xl text-foreground border-b border-border pb-3">
                      Step 3: Confirm Enrolment
                    </h3>

                    <div className="p-6 rounded-2xl bg-background border border-border space-y-3 text-sm shadow-sm">
                      <div className="flex justify-between py-1 border-b border-border">
                        <span className="text-foreground-muted">Course:</span>
                        <span className="font-semibold text-foreground">{selectedCourse?.name}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border">
                        <span className="text-foreground-muted">Student:</span>
                        <span className="font-semibold text-foreground">{formData.student_name}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border">
                        <span className="text-foreground-muted">Contact:</span>
                        <span className="text-foreground">{formData.student_phone} ({formData.student_email})</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border">
                        <span className="text-foreground-muted">College:</span>
                        <span className="text-foreground">{formData.college}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-foreground-muted">Total Enrolment Fee:</span>
                        <span className="font-display font-bold text-base text-brand-cyan">
                          ₹{selectedCourse?.fee.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-foreground-muted">
                        UTR / Transaction ID or Payment Proof Note
                      </label>
                      <input
                        type="text"
                        value={formData.payment_proof_url}
                        onChange={e => setFormData({ ...formData, payment_proof_url: e.target.value })}
                        placeholder="e.g. UTR 428192847291 or Paid via GPay"
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                      />
                    </div>

                    <label className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.terms_accepted}
                        onChange={e => setFormData({ ...formData, terms_accepted: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-brand-indigo focus:ring-0 cursor-pointer"
                      />
                      <span className="text-xs text-foreground-muted leading-relaxed">
                        I confirm that the details provided are accurate and agree to abide by the course attendance guidelines and project submission deadlines.
                      </span>
                    </label>
                    {errors.terms_accepted && <p className="text-xs text-rose-500">{errors.terms_accepted}</p>}
                  </div>
                )}

                {/* Form Navigation Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      variant="secondary"
                      size="md"
                      onClick={handleBack}
                      icon={<ArrowLeft className="w-4 h-4" />}
                    >
                      Back
                    </Button>
                  ) : <div />}

                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      size="md"
                      onClick={handleNext}
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      size="lg"
                      glow={true}
                      icon={<Check className="w-4 h-4" />}
                    >
                      Complete Registration
                    </Button>
                  )}
                </div>

              </form>
            )}
          </GlassCard>

        </div>
      </main>

      <Footer />
    </div>
  );
};
