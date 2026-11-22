import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course, Registration, AdminSettings } from '../types';
import { INITIAL_COURSES } from '../data/coursesData';

interface DataContextType {
  courses: Course[];
  registrations: Registration[];
  adminSettings: AdminSettings;
  isLoading: boolean;
  isAdmin: boolean;
  loginAdmin: (tokenOrPin: string) => boolean;
  logoutAdmin: () => void;
  addCourse: (course: Omit<Course, 'id'>) => Course;
  updateCourse: (id: string, updates: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  addRegistration: (registration: Omit<Registration, 'id' | 'created_date' | 'status'>) => Registration;
  updateRegistrationStatus: (id: string, status: 'pending' | 'verified' | 'rejected') => void;
  updateAdminSettings: (settings: Partial<AdminSettings>) => void;
}

const DEFAULT_SETTINGS: AdminSettings = {
  payment_qr_code_url: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=7588171372@ybl&pn=Rehan%20R%20Chougale&cu=INR",
  upi_id: "7588171372@ybl",
  payment_instructions: "Scan the UPI QR code using GPay, PhonePe, or Paytm. Enter course fee amount and keep the UTR/transaction ID screenshot handy to upload in step 3."
};

const SAMPLE_REGISTRATIONS: Registration[] = [
  {
    id: "reg-1",
    course_id: "68e6d8a853c136dd553bf1b7",
    course_name: "Java Full Stack Development",
    student_name: "Vikram R. Patil",
    student_email: "vikram.patil@gmail.com",
    student_phone: "+91 98223 45678",
    college: "DY Patil College of Engineering, Kolhapur",
    branch: "Computer Science",
    year: "Final Year (2025)",
    cgpa: "8.7",
    payment_proof_url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    terms_accepted: true,
    status: "verified",
    created_date: "2025-01-10T14:22:00Z"
  },
  {
    id: "reg-2",
    course_id: "68e6d8a853c136dd553bf1b9",
    course_name: "Microservices Architecture & Design",
    student_name: "Ananya Deshmukh",
    student_email: "ananya.d@outlook.com",
    student_phone: "+91 97654 32109",
    college: "Walchand College of Engineering, Sangli",
    branch: "Information Technology",
    year: "Third Year (2026)",
    cgpa: "9.1",
    payment_proof_url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    terms_accepted: true,
    status: "pending",
    created_date: "2025-01-12T09:15:00Z"
  },
  {
    id: "reg-3",
    course_id: "68e6d8a853c136dd553bf1b8",
    course_name: "Data Structures & Algorithms Masterclass",
    student_name: "Siddharth Shinde",
    student_email: "sid.shinde@gmail.com",
    student_phone: "+91 98901 23456",
    college: "KIT's College of Engineering, Kolhapur",
    branch: "Electronics & Telecommunication",
    year: "Final Year (2025)",
    cgpa: "8.3",
    payment_proof_url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    terms_accepted: true,
    status: "verified",
    created_date: "2025-01-08T11:45:00Z"
  }
];

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>(() => {
    try {
      const saved = localStorage.getItem('rehan_courses');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn("Could not parse saved courses, using defaults", e);
    }
    return INITIAL_COURSES;
  });

  const [registrations, setRegistrations] = useState<Registration[]>(() => {
    try {
      const saved = localStorage.getItem('rehan_registrations');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn("Could not parse saved registrations", e);
    }
    return SAMPLE_REGISTRATIONS;
  });

  const [adminSettings, setAdminSettings] = useState<AdminSettings>(() => {
    try {
      const saved = localStorage.getItem('rehan_admin_settings');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn("Could not parse admin settings", e);
    }
    return DEFAULT_SETTINGS;
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem('rehan_admin_auth') === 'true';
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Sync state to local storage for persistent CRUD
  useEffect(() => {
    localStorage.setItem('rehan_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('rehan_registrations', JSON.stringify(registrations));
  }, [registrations]);

  useEffect(() => {
    localStorage.setItem('rehan_admin_settings', JSON.stringify(adminSettings));
  }, [adminSettings]);

  const loginAdmin = (pin: string) => {
    // Admin password or demo unlock
    if (pin.trim() === 'admin123' || pin.trim() === 'rehan2025' || pin.trim() === 'admin') {
      setIsAdmin(true);
      localStorage.setItem('rehan_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem('rehan_admin_auth');
  };

  const addCourse = (newCourseData: Omit<Course, 'id'>) => {
    const newCourse: Course = {
      ...newCourseData,
      id: `course-${Date.now()}`
    };
    setCourses(prev => [newCourse, ...prev]);
    return newCourse;
  };

  const updateCourse = (id: string, updates: Partial<Course>) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
  };

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  const addRegistration = (regData: Omit<Registration, 'id' | 'created_date' | 'status'>) => {
    const course = courses.find(c => c.id === regData.course_id);
    const newReg: Registration = {
      ...regData,
      id: `REG-${Math.floor(100000 + Math.random() * 900000)}`,
      course_name: course ? course.name : 'Selected Course',
      status: 'pending',
      created_date: new Date().toISOString()
    };
    setRegistrations(prev => [newReg, ...prev]);
    return newReg;
  };

  const updateRegistrationStatus = (id: string, status: 'pending' | 'verified' | 'rejected') => {
    setRegistrations(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const updateAdminSettings = (settings: Partial<AdminSettings>) => {
    setAdminSettings(prev => ({ ...prev, ...settings }));
  };

  return (
    <DataContext.Provider value={{
      courses,
      registrations,
      adminSettings,
      isLoading,
      isAdmin,
      loginAdmin,
      logoutAdmin,
      addCourse,
      updateCourse,
      deleteCourse,
      addRegistration,
      updateRegistrationStatus,
      updateAdminSettings
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
