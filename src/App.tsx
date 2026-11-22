import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { CoursesPage } from './pages/CoursesPage';
import { RegisterPage } from './pages/RegisterPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminCourses } from './pages/AdminCourses';
import { AdminRegistrations } from './pages/AdminRegistrations';
import { AdminSettings } from './pages/AdminSettings';
import { AdminLogin } from './pages/AdminLogin';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        
        {/* Support both lowercase and original Base44 uppercase paths */}
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/Courses" element={<CoursesPage />} />
        
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Register" element={<RegisterPage />} />

        {/* Admin Portal Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/AdminCourses" element={<AdminCourses />} />
        
        <Route path="/admin/registrations" element={<AdminRegistrations />} />
        <Route path="/AdminRegistrations" element={<AdminRegistrations />} />
        
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/AdminSettings" element={<AdminSettings />} />
        
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
