import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Check, BookOpen } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Course } from '../../types';

export const CourseGridSection: React.FC = () => {
  const { courses, isLoading } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'Java Full Stack', label: 'Java Full Stack' },
    { id: 'Microservices', label: 'Microservices' },
    { id: 'Data Structures', label: 'Data Structures' },
  ];

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <section id="courses" className="relative py-24 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-indigo/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="cyan" size="md">
              Placement-Ready Programs
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
              Industry-Crafted <span className="text-gradient">Training Curricula</span>
            </h2>
            <p className="text-foreground-muted text-base">
              Designed from ground-up by Rehan R. Chougale to transform beginners and intermediate coders into enterprise-grade Java full-stack developers.
            </p>
          </div>

          <Link to="/courses">
            <Button variant="secondary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              View Full Catalog
            </Button>
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-indigo to-brand-cyan text-white shadow-md shadow-brand-indigo/25'
                  : 'bg-card hover:bg-foreground/5 text-foreground-muted border border-border shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="rounded-2xl bg-card border border-border p-6 animate-pulse h-96" />
            ))}
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-16 rounded-2xl bg-card border border-border shadow-sm">
            <BookOpen className="w-12 h-12 text-foreground-muted mx-auto mb-3" />
            <p className="text-foreground font-semibold">No courses found in this category.</p>
            <p className="text-sm text-foreground-muted mt-1">Check back soon for newly scheduled batches.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <GlassCard
                key={course.id}
                tilt={true}
                glow="indigo"
                className="flex flex-col justify-between overflow-hidden p-0 border-border hover:border-brand-indigo/50 group"
              >
                {/* Course Header Poster/Gradient */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-tr from-brand-indigo/30 via-slate-900 to-brand-cyan/20">
                  {course.poster_url && (
                    <img
                      src={course.poster_url}
                      alt={course.name}
                      className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Status & Category Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <Badge variant={course.status === 'active' ? 'success' : 'primary'} size="sm">
                      {course.status === 'active' ? 'Enrolling Now' : 'Upcoming Cohort'}
                    </Badge>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                      ₹{course.fee.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4">
                    <span className="text-[11px] font-semibold text-brand-cyan uppercase tracking-wider">
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Course Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-foreground group-hover:text-brand-cyan transition-colors line-clamp-1">
                      {course.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground-muted line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Highlights / Features */}
                  <div className="space-y-1.5 pt-2 border-t border-border">
                    {course.features?.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-foreground-muted">
                        <Check className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metadata Row */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border text-[11px] text-foreground-subtle">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-indigo" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Starts {course.start_date}</span>
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="pt-2 flex items-center gap-2">
                    <Link to={`/register?courseId=${course.id}`} className="flex-1">
                      <Button size="sm" className="w-full" icon={<ArrowRight className="w-3.5 h-3.5" />} iconPosition="right">
                        Register Now
                      </Button>
                    </Link>
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="px-3 py-2 text-xs font-medium text-foreground-muted hover:text-foreground bg-foreground/5 hover:bg-foreground/10 rounded-full border border-border transition-colors cursor-pointer"
                    >
                      Syllabus
                    </button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        )}

        {/* Course Syllabus Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-card border border-border p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                <div>
                  <Badge variant="cyan" size="sm" className="mb-1">
                    {selectedCourse.category}
                  </Badge>
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    {selectedCourse.name}
                  </h3>
                  <p className="text-xs text-foreground-muted mt-1">
                    Instructor: {selectedCourse.instructor} • Duration: {selectedCourse.duration}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="p-1.5 rounded-lg text-foreground-muted hover:text-foreground bg-foreground/5 hover:bg-foreground/10 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground uppercase tracking-wider">
                  Full Course Syllabus
                </h4>
                {selectedCourse.syllabus && selectedCourse.syllabus.length > 0 ? (
                  <div className="space-y-3">
                    {selectedCourse.syllabus.map((mod, mIdx) => (
                      <div key={mIdx} className="rounded-xl bg-background border border-border p-4 space-y-2">
                        <p className="font-semibold text-sm text-brand-cyan">{mod.module}</p>
                        <ul className="space-y-1 text-xs text-foreground-muted pl-4 list-disc">
                          {mod.topics.map((t, tIdx) => (
                            <li key={tIdx}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-foreground-muted">Detailed syllabus will be provided upon registration.</p>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-display font-bold text-lg text-foreground">
                  Fee: ₹{selectedCourse.fee.toLocaleString('en-IN')}
                </span>
                <Link to={`/register?courseId=${selectedCourse.id}`}>
                  <Button size="md" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                    Proceed to Registration
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
