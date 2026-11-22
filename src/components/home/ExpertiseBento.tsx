import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Layers, 
  Cloud, 
  Terminal, 
  Cpu 
} from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';

export const ExpertiseBento: React.FC = () => {
  const skills = [
    {
      title: "Core & Enterprise Java",
      level: "95% Mastery",
      category: "Language Architecture",
      icon: Code2,
      description: "Java 17/21 LTS, JVM Internals, Garbage Collection tuning, Concurrency, Stream API, and OOP design patterns.",
      tags: ["Java 17/21", "JVM Tuning", "Multithreading", "Streams"],
      glow: "indigo",
      colSpan: "lg:col-span-8",
    },
    {
      title: "Spring Boot 3 & Security",
      level: "92% Mastery",
      category: "Backend Framework",
      icon: Server,
      description: "Enterprise REST APIs, Spring Data JPA, Hibernate, JWT, OAuth2, and Actuator metrics.",
      tags: ["Spring Boot 3", "Spring Data", "Spring Security", "JWT"],
      glow: "cyan",
      colSpan: "lg:col-span-4",
    },
    {
      title: "Distributed Microservices & Kafka",
      level: "92% Mastery",
      category: "System Design",
      icon: Layers,
      description: "Event-driven architecture with Apache Kafka, Spring Cloud Gateway, Resilience4j circuit breakers, and Eureka service registry.",
      tags: ["Kafka", "API Gateway", "Resilience4j", "Saga Pattern"],
      glow: "cyan",
      colSpan: "lg:col-span-4",
    },
    {
      title: "Database Engineering & SQL",
      level: "90% Mastery",
      category: "Data Layer",
      icon: Database,
      description: "High-performance schema normalization, EXPLAIN indexing strategies in PostgreSQL, MySQL, and MongoDB document modeling.",
      tags: ["PostgreSQL", "MongoDB", "Query Optimization", "Flyway"],
      glow: "indigo",
      colSpan: "lg:col-span-4",
    },
    {
      title: "Cloud & DevOps Containerization",
      level: "85% Mastery",
      category: "Infrastructure",
      icon: Cloud,
      description: "Docker containerization, Docker Compose multi-service networks, AWS EC2, S3, RDS, and CI/CD pipelines.",
      tags: ["Docker", "AWS", "CI/CD", "Linux"],
      glow: "indigo",
      colSpan: "lg:col-span-4",
    },
    {
      title: "Frontend Engineering with React",
      level: "85% Mastery",
      category: "Web Interfaces",
      icon: Cpu,
      description: "Modern component-driven web development with React 18, TypeScript, Tailwind CSS, and REST API consumption.",
      tags: ["React 18", "TypeScript", "Tailwind CSS", "Axios"],
      glow: "indigo",
      colSpan: "lg:col-span-6",
    },
    {
      title: "API Testing & Observability",
      level: "90% Mastery",
      category: "Quality Assurance",
      icon: Terminal,
      description: "Comprehensive automated API testing with Postman, JUnit 5, Mockito, and distributed tracing with Zipkin & Prometheus.",
      tags: ["Postman", "JUnit 5", "Mockito", "Zipkin"],
      glow: "cyan",
      colSpan: "lg:col-span-6",
    },
  ];

  return (
    <section id="expertise" className="relative py-24 bg-background-secondary border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-cyan/10 blur-[130px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="primary" size="md">
            Production-Proven Stack
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
            Technical Mastery & <span className="text-gradient">Architectural Depth</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
            Every technology listed below is actively utilized in corporate consulting engagements and deeply covered in Rehan's live training curricula.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <GlassCard
                key={idx}
                tilt={true}
                glow={skill.glow as 'indigo' | 'cyan'}
                className={`${skill.colSpan} p-7 flex flex-col justify-between group transition-all duration-300 hover:border-brand-indigo/50`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center text-brand-indigo group-hover:text-brand-cyan transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-indigo/10 text-brand-cyan border border-brand-indigo/20">
                      {skill.level}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-foreground-subtle">
                      {skill.category}
                    </span>
                    <h3 className="font-display font-bold text-xl text-foreground mt-1 transition-colors">
                      {skill.title}
                    </h3>
                  </div>

                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-border flex flex-wrap gap-2">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 rounded-lg bg-background border border-border text-foreground-muted transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
