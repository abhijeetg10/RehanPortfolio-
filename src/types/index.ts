export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  fee: number;
  start_date: string;
  instructor: string;
  category: 'Java Full Stack' | 'Microservices' | 'Data Structures' | 'Spring Boot' | 'React' | 'API Testing' | 'Placement Preparation';
  status: 'active' | 'upcoming' | 'completed';
  max_students: number | null;
  enrolled_students?: number;
  poster_url?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  mode?: 'Online Live' | 'Hybrid' | 'Classroom';
  syllabus?: {
    module: string;
    topics: string[];
  }[];
  prerequisites?: string[];
  features?: string[];
}

export interface Registration {
  id: string;
  course_id: string;
  course_name?: string;
  student_name: string;
  student_email: string;
  student_phone: string;
  college: string;
  branch: string;
  year: string;
  cgpa: string;
  payment_proof_url: string;
  terms_accepted: boolean;
  status: 'pending' | 'verified' | 'rejected';
  created_date: string;
}

export interface AdminSettings {
  id?: string;
  payment_qr_code_url: string;
  upi_id: string;
  payment_instructions: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  package?: string;
  image?: string;
  rating: number;
  quote: string;
  courseTaken: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  organization: string;
  role: string;
  description: string;
  badge: string;
  skills: string[];
}
