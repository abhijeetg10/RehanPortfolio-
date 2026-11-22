import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Download, Search, CheckCircle2, XCircle, Clock, Eye, X } from 'lucide-react';
import { AdminSidebar } from '../components/layout/AdminSidebar';
import { useData } from '../context/DataContext';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Registration } from '../types';

export const AdminRegistrations: React.FC = () => {
  const { isAdmin, registrations, updateRegistrationStatus } = useData();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'verified' | 'rejected'>('all');
  const [selectedReg, setSelectedReg] = useState<Registration | null>(null);

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  const filtered = registrations.filter(r => {
    const matchesSearch = 
      r.student_name.toLowerCase().includes(search.toLowerCase()) ||
      r.student_email.toLowerCase().includes(search.toLowerCase()) ||
      r.college.toLowerCase().includes(search.toLowerCase()) ||
      (r.course_name && r.course_name.toLowerCase().includes(search.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || r.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const exportCSV = () => {
    const headers = ["ID", "Student Name", "Email", "Phone", "College", "Branch", "Year", "CGPA", "Course", "Status", "Applied Date"];
    const rows = filtered.map(r => [
      r.id,
      `"${r.student_name}"`,
      r.student_email,
      r.student_phone,
      `"${r.college}"`,
      r.branch,
      r.year,
      r.cgpa,
      `"${r.course_name || ''}"`,
      r.status,
      r.created_date
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `registrations_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-display font-bold text-3xl text-foreground">
                Student Registrations
              </h1>
              <p className="text-xs sm:text-sm text-foreground-muted mt-1">
                Verify payment proofs, manage admission statuses, and export candidate data.
              </p>
            </div>
            <Button size="sm" variant="secondary" onClick={exportCSV} icon={<Download className="w-4 h-4" />}>
              Export to CSV
            </Button>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-foreground-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by student, email, college..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-foreground text-xs focus:border-brand-indigo focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              {(['all', 'pending', 'verified', 'rejected'] as const).map(status => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                    statusFilter === status
                      ? 'bg-brand-indigo text-white shadow-md'
                      : 'bg-white/5 text-foreground-muted hover:text-white'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Registrations Table */}
          <div className="rounded-2xl bg-[#0F111A] border border-white/10 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-foreground-muted">
                <thead className="border-b border-white/5 uppercase text-[10px] tracking-wider text-foreground-subtle bg-white/[0.02]">
                  <tr>
                    <th className="py-3 px-4">Candidate</th>
                    <th className="py-3 px-4">Contact</th>
                    <th className="py-3 px-4">Course</th>
                    <th className="py-3 px-4">College</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-foreground-muted">
                        No registrations matching the filter.
                      </td>
                    </tr>
                  ) : (
                    filtered.map(reg => (
                      <tr key={reg.id} className="hover:bg-white/[0.02]">
                        <td className="py-3.5 px-4">
                          <p className="font-semibold text-white">{reg.student_name}</p>
                          <p className="text-[11px] text-brand-indigo">{reg.id}</p>
                        </td>
                        <td className="py-3.5 px-4">
                          <p className="text-foreground">{reg.student_email}</p>
                          <p className="text-[11px] text-foreground-subtle">{reg.student_phone}</p>
                        </td>
                        <td className="py-3.5 px-4 font-medium text-foreground">{reg.course_name}</td>
                        <td className="py-3.5 px-4">
                          <p className="text-foreground">{reg.college}</p>
                          <p className="text-[11px] text-foreground-subtle">{reg.branch} • {reg.cgpa} CGPA</p>
                        </td>
                        <td className="py-3.5 px-4">
                          <Badge
                            variant={reg.status === 'verified' ? 'success' : reg.status === 'pending' ? 'warning' : 'outline'}
                            size="sm"
                          >
                            {reg.status}
                          </Badge>
                        </td>
                        <td className="py-3.5 px-4 text-right space-x-1.5">
                          <button
                            onClick={() => setSelectedReg(reg)}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-foreground transition-colors"
                            title="View Details & Proof"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          {reg.status !== 'verified' && (
                            <button
                              onClick={() => updateRegistrationStatus(reg.id, 'verified')}
                              className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors"
                              title="Approve / Verify"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {reg.status !== 'rejected' && (
                            <button
                              onClick={() => updateRegistrationStatus(reg.id, 'rejected')}
                              className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                              title="Reject"
                            >
                              <XCircle className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Details Modal */}
          {selectedReg && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
              <div className="relative w-full max-w-lg rounded-2xl bg-[#0F111A] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">
                      Registration Details
                    </h3>
                    <p className="text-xs text-brand-indigo mt-0.5">{selectedReg.id}</p>
                  </div>
                  <button onClick={() => setSelectedReg(null)} className="text-foreground-muted hover:text-foreground">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div>
                      <p className="text-foreground-muted">Candidate</p>
                      <p className="font-semibold text-white mt-0.5">{selectedReg.student_name}</p>
                    </div>
                    <div>
                      <p className="text-foreground-muted">Course Applied</p>
                      <p className="font-semibold text-brand-cyan mt-0.5">{selectedReg.course_name}</p>
                    </div>
                    <div>
                      <p className="text-foreground-muted">Email</p>
                      <p className="text-foreground mt-0.5">{selectedReg.student_email}</p>
                    </div>
                    <div>
                      <p className="text-foreground-muted">Phone</p>
                      <p className="text-foreground mt-0.5">{selectedReg.student_phone}</p>
                    </div>
                    <div>
                      <p className="text-foreground-muted">College</p>
                      <p className="text-foreground mt-0.5">{selectedReg.college}</p>
                    </div>
                    <div>
                      <p className="text-foreground-muted">Year / Branch</p>
                      <p className="text-foreground mt-0.5">{selectedReg.year} ({selectedReg.branch})</p>
                    </div>
                  </div>

                  {/* Payment Proof / Note */}
                  <div className="space-y-1.5">
                    <p className="text-foreground-muted font-medium">Payment Proof / UTR Reference:</p>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 font-mono text-white text-xs">
                      {selectedReg.payment_proof_url}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      updateRegistrationStatus(selectedReg.id, 'rejected');
                      setSelectedReg(null);
                    }}
                  >
                    Mark as Rejected
                  </Button>
                  <Button
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white"
                    onClick={() => {
                      updateRegistrationStatus(selectedReg.id, 'verified');
                      setSelectedReg(null);
                    }}
                  >
                    Verify & Approve Enrolment
                  </Button>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};
