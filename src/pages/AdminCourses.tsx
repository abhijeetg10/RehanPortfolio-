import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, BookOpen, Clock, Calendar, Check, X } from 'lucide-react';
import { AdminSidebar } from '../components/layout/AdminSidebar';
import { useData } from '../context/DataContext';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Course } from '../types';

export const AdminCourses: React.FC = () => {
  const { isAdmin, courses, addCourse, updateCourse, deleteCourse } = useData();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    duration: '8 weeks',
    fee: '12000',
    start_date: '2025-02-15',
    instructor: 'Rehan R. Chougale',
    category: 'Java Full Stack' as Course['category'],
    status: 'upcoming' as Course['status'],
    max_students: '40',
    poster_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
  });

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleOpenAdd = () => {
    setEditingCourse(null);
    setFormData({
      name: '',
      description: '',
      duration: '8 weeks',
      fee: '12000',
      start_date: '2025-02-15',
      instructor: 'Rehan R. Chougale',
      category: 'Java Full Stack',
      status: 'upcoming',
      max_students: '40',
      poster_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      name: course.name,
      description: course.description,
      duration: course.duration,
      fee: course.fee.toString(),
      start_date: course.start_date,
      instructor: course.instructor || 'Rehan R. Chougale',
      category: course.category,
      status: course.status,
      max_students: (course.max_students || 40).toString(),
      poster_url: course.poster_url || '',
    });
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCourse) {
      updateCourse(editingCourse.id, {
        ...formData,
        fee: parseFloat(formData.fee),
        max_students: parseInt(formData.max_students) || null,
      });
    } else {
      addCourse({
        ...formData,
        fee: parseFloat(formData.fee),
        max_students: parseInt(formData.max_students) || null,
      });
    }
    setModalOpen(false);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete course "${name}"?`)) {
      deleteCourse(id);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-display font-bold text-3xl text-foreground">
                Course Management
              </h1>
              <p className="text-xs sm:text-sm text-foreground-muted mt-1">
                Create, update, and manage public courses and curriculum parameters.
              </p>
            </div>
            <Button size="sm" onClick={handleOpenAdd} icon={<Plus className="w-4 h-4" />}>
              Add New Course
            </Button>
          </div>

          {/* Courses Table */}
          <div className="rounded-2xl bg-[#0F111A] border border-white/10 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-foreground-muted">
                <thead className="border-b border-white/5 uppercase text-[10px] tracking-wider text-foreground-subtle bg-white/[0.02]">
                  <tr>
                    <th className="py-3 px-4">Course Name</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Duration</th>
                    <th className="py-3 px-4">Fee</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Start Date</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {courses.map(course => (
                    <tr key={course.id} className="hover:bg-white/[0.02]">
                      <td className="py-3.5 px-4">
                        <p className="font-semibold text-white">{course.name}</p>
                        <p className="text-[11px] text-foreground-muted line-clamp-1 max-w-xs">{course.description}</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-brand-cyan text-[11px]">
                          {course.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-foreground">{course.duration}</td>
                      <td className="py-3.5 px-4 font-semibold text-white">₹{course.fee.toLocaleString('en-IN')}</td>
                      <td className="py-3.5 px-4">
                        <Badge variant={course.status === 'active' ? 'success' : course.status === 'upcoming' ? 'primary' : 'outline'} size="sm">
                          {course.status}
                        </Badge>
                      </td>
                      <td className="py-3.5 px-4">{course.start_date}</td>
                      <td className="py-3.5 px-4 text-right space-x-2">
                        <button
                          onClick={() => handleOpenEdit(course)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-brand-cyan transition-colors"
                          title="Edit Course"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(course.id, course.name)}
                          className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                          title="Delete Course"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add / Edit Course Modal */}
          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
              <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F111A] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {editingCourse ? 'Edit Course Details' : 'Create New Course'}
                  </h3>
                  <button onClick={() => setModalOpen(false)} className="text-foreground-muted hover:text-foreground">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground-muted">Course Title *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Advanced Java & Microservices Masterclass"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground-muted">Description *</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.description}
                      onChange={e => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-indigo focus:outline-none text-foreground text-sm resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground-muted">Category</label>
                      <select
                        value={formData.category}
                        onChange={e => setFormData({ ...formData, category: e.target.value as Course['category'] })}
                        className="w-full px-4 py-2.5 rounded-xl bg-background-elevated border border-white/10 text-foreground text-sm"
                      >
                        <option value="Java Full Stack">Java Full Stack</option>
                        <option value="Microservices">Microservices</option>
                        <option value="Data Structures">Data Structures</option>
                        <option value="Spring Boot">Spring Boot</option>
                        <option value="React">React</option>
                        <option value="API Testing">API Testing</option>
                        <option value="Placement Preparation">Placement Preparation</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground-muted">Status</label>
                      <select
                        value={formData.status}
                        onChange={e => setFormData({ ...formData, status: e.target.value as Course['status'] })}
                        className="w-full px-4 py-2.5 rounded-xl bg-background-elevated border border-white/10 text-foreground text-sm"
                      >
                        <option value="upcoming">Upcoming</option>
                        <option value="active">Active (Enrolling)</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground-muted">Fee (INR) *</label>
                      <input
                        type="number"
                        required
                        value={formData.fee}
                        onChange={e => setFormData({ ...formData, fee: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground-muted">Duration *</label>
                      <input
                        type="text"
                        required
                        value={formData.duration}
                        onChange={e => setFormData({ ...formData, duration: e.target.value })}
                        placeholder="e.g. 3 months"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground-muted">Start Date</label>
                      <input
                        type="date"
                        value={formData.start_date}
                        onChange={e => setFormData({ ...formData, start_date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-indigo focus:outline-none text-foreground text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                    <Button type="button" variant="secondary" size="sm" onClick={() => setModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" size="sm">
                      {editingCourse ? 'Save Changes' : 'Create Course'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};
