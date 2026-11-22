import { Testimonial, TimelineMilestone } from '../types';

export const REHAN_INFO = {
  fullName: "Rehan R. Chougale",
  shortName: "Rehan",
  heroTitle: "Consultant. Trainer. Builder of Java Engineers.",
  heroSubline: "Specializing in enterprise Java Full Stack Development, distributed Microservices, and cloud architectures. Transforming ambitious developers into high-performing engineers.",
  email: "rehanchougle2000@gmail.com",
  phone: "+91 7588171372",
  phoneDisplay: "+91 75881 71372",
  whatsappUrl: "https://wa.me/917588171372?text=Hi%20Rehan,%20I%20am%20interested%20in%20your%20consulting%20and%20training%20programs.",
  linkedin: "https://www.linkedin.com/in/rehan-chougale-89634918a",
  github: "https://github.com",
  location: "Maharashtra / India",
  portraitUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/294fef358_16.png",
  aptTechLogo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/6fadf6770_apt-tech-logo-192.png",
  roles: {
    consulting: {
      title: "Technical Consultant",
      organization: "Leading Global Software MNC",
      tagline: "Enterprise Architecture & Microservices",
      description: "Driving enterprise-grade microservices migration, scalable backend design with Spring Boot, high-throughput REST APIs, and reactive data pipelines for mission-critical client applications."
    },
    training: {
      title: "Chief Technology Officer & Lead Technical Trainer",
      organization: "Apt-Tech Solutions",
      tagline: "Engineering Leadership & Talent Incubation",
      description: "Spearheading tech strategy and high-impact curriculum across 32+ partner engineering colleges. Successfully groomed and placed over 7,000+ students in top tier product and service firms."
    }
  },
  stats: [
    { label: "Students Mentored", value: 7000, suffix: "+", description: "Across 32+ universities nationwide" },
    { label: "Partner Institutes", value: 32, suffix: "+", description: "Colleges & tech academies trained" },
    { label: "Placement Success", value: 85, suffix: "%", description: "Graduates working at top MNCs" },
    { label: "Years Experience", value: 4, suffix: "+", description: "Consulting & corporate training" }
  ],
  academic: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Shivaji University, Kolhapur",
      duration: "2017 – 2021",
      score: "85.5% (Distinction)",
      highlights: "Core Focus on Distributed Systems, Advanced Algorithms, and Software Architecture"
    },
    {
      degree: "Higher Secondary Certificate (HSC - Science)",
      institution: "Narayana Junior College, Hyderabad",
      duration: "2015 – 2017",
      score: "93.6%",
      highlights: "Excellence in Mathematics, Physics & Computer Science"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Dr. Allama Iqbal High School",
      duration: "2015",
      score: "91.4%",
      highlights: "Top percentile in state examinations"
    }
  ],
  certifications: [
    { name: "AWS Cloud Fundamentals", issuer: "Amazon Web Services", category: "Cloud" },
    { name: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", category: "Cloud" },
    { name: "Advanced Java with JDBC & Multithreading", issuer: "Oracle Academy", category: "Backend" },
    { name: "Data Structures & OOP Programming", issuer: "Tech Guild", category: "Algorithms" },
    { name: "Java Full Stack with React 2.0 (By CG)", issuer: "Capgemini / Partner", category: "Full Stack" },
    { name: "C++ with Functional & Systems Programming (84%)", issuer: "Spoken Tutorial", category: "Systems" }
  ]
};

export const GALLERY_IMAGES = [
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/012b10f13_IMG_3924.png",
    caption: "Auditorium Workshop on Java Microservices & Cloud Architecture",
    tag: "Campus Seminar"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/dc12dd74a_IMG_1985.png",
    caption: "Interactive Coding Boot Camp with Engineering Final-Year Cohort",
    tag: "Hands-on Lab"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/a4e63a1c1_IMG_1977.png",
    caption: "Data Structures & Algorithmic Problem Solving Bootcamp",
    tag: "DSA Training"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/2d515346c_IMG_3927.png",
    caption: "Keynote on Building Scalable Spring Boot APIs for 500+ Attendees",
    tag: "Keynote"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/fc7f753af_IMG_1972.png",
    caption: "Technical Group Discussion & Mock Interview Prep Session",
    tag: "Placement Prep"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/5b1626583_IMG_1976.png",
    caption: "Full-Stack Development Lab Session: Connecting React to Spring Boot",
    tag: "Full Stack Lab"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/c49e48ea1_IMG_1982.png",
    caption: "System Design & Bounded Contexts Workshop",
    tag: "Architecture"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/d7e1bdfc6_IMG_1981.png",
    caption: "Post-Workshop Q&A with Faculty and Aspiring Software Engineers",
    tag: "Mentorship"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/4ccdf2d25_IMG_3928.png",
    caption: "Live Coding Session: Debugging Enterprise Microservice Failures",
    tag: "Live Coding"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/beb34fd16_IMG_1983.png",
    caption: "Placement Readiness Drive: Code Quality & Clean Architecture",
    tag: "Career Drive"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/505988a30_IMG_1979.png",
    caption: "Campus Training Inauguration with College Leadership",
    tag: "Partnership"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/98a09f789_IMG_2744.png",
    caption: "Intensive 3-Day Spring Boot & Docker Bootcamp",
    tag: "Bootcamp"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a4273ac3a39540724a8f4b/7a5649430_IMG_9727.jpg",
    caption: "Graduation & Certificate Distribution for Placement Achievers",
    tag: "Alumni Success"
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2024 - Present",
    title: "CTO & Technical Consulting Leader",
    organization: "Apt-Tech Solutions & Leading MNC",
    role: "Enterprise Architect & Chief Trainer",
    badge: "Dual Leadership",
    description: "Architecting cloud-native microservices for tier-one corporate clients while directing campus placements across 32+ institutions, training 7,000+ engineers with an 85% placement rate.",
    skills: ["Microservices", "Kafka", "Spring Boot 3", "AWS", "Talent Leadership"]
  },
  {
    year: "2022 - 2024",
    title: "Senior Technical Trainer & Consultant",
    organization: "Apt-Tech Solutions",
    role: "Full Stack & Microservices Specialist",
    badge: "Scale & Growth",
    description: "Expanded technical training partnerships from 8 to 32 engineering colleges. Designed curriculum for Java Full Stack, Spring Data JPA, and modern React ecosystems.",
    skills: ["Java 17", "Spring Security", "React", "PostgreSQL", "Docker"]
  },
  {
    year: "2021 - 2022",
    title: "Software Engineer & Corporate Trainee",
    organization: "Leading Global MNC",
    role: "Backend Java Developer",
    badge: "Corporate Foundation",
    description: "Engineered robust backend RESTful services, optimized SQL database queries, and implemented API security tokens for international enterprise systems.",
    skills: ["Core Java", "JDBC", "REST APIs", "MySQL", "Git"]
  },
  {
    year: "2017 - 2021",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Shivaji University, Kolhapur",
    role: "Student & Tech Community Lead",
    badge: "85.5% Distinction",
    description: "Graduated with honors in Computer Science. Led coding clubs, organized state-level hackathons, and published foundational work on distributed database architectures.",
    skills: ["Algorithms", "Data Structures", "OS", "DBMS", "Computer Networks"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Aditya Patil",
    role: "Software Development Engineer",
    company: "TCS Digital",
    package: "7.5 LPA",
    rating: 5,
    quote: "Rehan sir's Java Full Stack & Microservices training changed my career trajectory. The emphasis on real enterprise architecture and debugging patterns made the corporate interview feel straightforward.",
    courseTaken: "Java Full Stack Development"
  },
  {
    id: "2",
    name: "Sneha Kulkarni",
    role: "Associate Software Engineer",
    company: "Capgemini",
    package: "6.8 LPA",
    rating: 5,
    quote: "The way Rehan sir explains Spring Boot and Kafka is unmatched. You don't just write code; you understand memory management, garbage collection, and resilience patterns.",
    courseTaken: "Microservices Architecture & Design"
  },
  {
    id: "3",
    name: "Rohan Deshmukh",
    role: "Full Stack Engineer",
    company: "Infosys Specialty",
    package: "8.2 LPA",
    rating: 5,
    quote: "From college graduate to cracking a high-paying product role in 3 months. His live coding sessions, mock interviews, and personal mentorship made all the difference.",
    courseTaken: "Java Full Stack Development"
  },
  {
    id: "4",
    name: "Pooja Shinde",
    role: "Backend Engineer",
    company: "Cognizant GenC Next",
    package: "7.0 LPA",
    rating: 5,
    quote: "The DSA masterclass transformed how I approach complex problem solving. Solving 100+ patterns with Rehan sir helped me clear every technical screening round.",
    courseTaken: "Data Structures & Algorithms Masterclass"
  }
];

export const PARTNERS_AND_TECH = [
  { name: "Apt-Tech Solutions", type: "Organization" },
  { name: "Shivaji University", type: "Academic" },
  { name: "Java 21", type: "Technology" },
  { name: "Spring Boot 3", type: "Technology" },
  { name: "Apache Kafka", type: "Technology" },
  { name: "PostgreSQL", type: "Technology" },
  { name: "Docker & AWS", type: "Technology" },
  { name: "React 18", type: "Technology" },
  { name: "32+ Colleges Trained", type: "Milestone" },
  { name: "7000+ Alumni", type: "Community" }
];
