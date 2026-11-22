import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Users, BookOpen, Clock, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { AdminSidebar } from '../components/layout/AdminSidebar';
import { useData } from '../context/DataContext';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export const AdminDashboard: React.FC = () => {
  const { isAdmin, courses, registrations } = useData();

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  const pendingRegs = registrations.filter(r => r.status === 'pending');
  const verifiedRegs = registrations.filter(r => r.status === 'verified');
  const activeCourses = courses.filter(c => c.status === 'active');

  const stats = [
    { label: 'Total Enrolments', value: registrations.length, icon: Users, color: 'text-brand-indigo', bg: 'bg-brand-indigo/10' },
    { label: 'Pending Review', value: pendingRegs.length, icon: Clock, color: 'text-amber-400', bg: 'bg-amber-400/10' },
    { label: 'Verified Students', value: verifiedRegs.length, icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { label: 'Active Courses', value: activeCourses.length, icon: BookOpen, color: 'text-brand-cyan', bg: 'bg-brand-cyan/10' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-display font-bold text-3xl text-foreground">
                Executive Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-foreground-muted mt-1">
                Overview of student registrations, active courses, and platform operations.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/admin/courses">
                <Button size="sm" variant="secondary" icon={<BookOpen className="w-3.5 h-3.5" />}>
                  Manage Courses
                </Button>
              </Link>
              <Link to="/admin/registrations">
                <Button size="sm" icon={<Users className="w-3.5 h-3.5" />}>
                  Review Registrations
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-[#0F111A] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground-muted">{stat.label}</span>
                    <div className={`w-8 h-8 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="font-display font-extrabold text-3xl text-foreground">
                    {stat.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Recent Registrations Table */}
          <div className="rounded-2xl bg-[#0F111A] border border-white/10 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  Recent Course Registrations
                </h3>
                <p className="text-xs text-foreground-muted">Latest student applications requiring review.</p>
              </div>
              <Link to="/admin/registrations" className="text-xs text-brand-cyan hover:underline flex items-center gap-1">
                View all ({registrations.length}) <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-foreground-muted">
                <thead className="border-b border-white/5 uppercase text-[10px] tracking-wider text-foreground-subtle">
                  <tr>
                    <th className="py-3 px-4">Student</th>
                    <th className="py-3 px-4">Course</th>
                    <th className="py-3 px-4">College</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Applied</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {registrations.slice(0, 5).map(reg => (
                    <tr key={reg.id} className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4">
                        <p className="font-semibold text-white">{reg.student_name}</p>
                        <p className="text-[11px] text-foreground-muted">{reg.student_email}</p>
                      </td>
                      <td className="py-3 px-4 text-foreground">{reg.course_name}</td>
                      <td className="py-3 px-4">{reg.college}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={reg.status === 'verified' ? 'success' : reg.status === 'pending' ? 'warning' : 'outline'}
                          size="sm"
                        >
                          {reg.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right">{new Date(reg.created_date).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
