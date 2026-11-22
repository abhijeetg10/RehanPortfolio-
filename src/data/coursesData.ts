import { Course } from '../types';

export const INITIAL_COURSES: Course[] = [
  {
    id: "68e6d8a853c136dd553bf1b7",
    name: "Java Full Stack Development",
    description: "Master Java, Spring Boot, React, PostgreSQL, and build enterprise-level full stack applications from scratch.",
    duration: "3 months",
    fee: 15000,
    start_date: "2025-02-01",
    instructor: "Rehan R. Chougale",
    category: "Java Full Stack",
    status: "upcoming",
    max_students: 50,
    enrolled_students: 38,
    level: "All Levels",
    mode: "Online Live",
    poster_url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Enterprise Microservices Architecture",
      "Full Stack React 18 + Spring Boot 3",
      "Production CI/CD & Dockerization",
      "Mock Technical Interviews & Resume Review",
      "100% Placement Assistance"
    ],
    prerequisites: ["Basic understanding of programming logic"],
    syllabus: [
      {
        module: "Module 1: Core Java & Modern Java 17/21",
        topics: [
          "JVM Architecture, Memory Model & Garbage Collection",
          "OOP in Depth: Polymorphism, Abstraction, Encapsulation",
          "Collections Framework & Stream API Mastery",
          "Multithreading, Concurrency & Virtual Threads",
          "Exception Handling & Clean Code Practices"
        ]
      },
      {
        module: "Module 2: Enterprise Backend with Spring Boot 3",
        topics: [
          "IoC Container, Dependency Injection & Spring Beans",
          "Spring Data JPA, Hibernate, Complex Queries & Auditing",
          "Building RESTful APIs with OpenAPI / Swagger Documentation",
          "Spring Security 6 with JWT & OAuth2 Tokens",
          "Validation, Exception Handling & Logging (SLF4J/Logback)"
        ]
      },
      {
        module: "Module 3: Database Engineering & SQL",
        topics: [
          "PostgreSQL & MySQL Schema Design & Normalization",
          "Indexing Strategies, Query Optimization & EXPLAIN ANALYZE",
          "MongoDB for Unstructured Data & Document Stores",
          "Database Migration with Flyway / Liquibase"
        ]
      },
      {
        module: "Module 4: Modern Frontend with React & Tailwind",
        topics: [
          "React 18 Architecture: Hooks, Custom Hooks & Context API",
          "State Management with Redux Toolkit / Zustand",
          "Axios Integration & Interceptors for Auth Tokens",
          "Tailwind CSS Design Systems & Responsive UIs"
        ]
      },
      {
        module: "Module 5: Capstone Enterprise Project & Deployment",
        topics: [
          "End-to-End Enterprise E-Commerce / FinTech Platform",
          "Docker Containerization & Docker Compose",
          "Cloud Deployment on AWS (EC2, RDS, S3)",
          "Performance Profiling & Unit Testing with JUnit 5 & Mockito"
        ]
      }
    ]
  },
  {
    id: "68e6d8a853c136dd553bf1b9",
    name: "Microservices Architecture & Design",
    description: "Learn to design and build scalable microservices using Spring Boot, API Gateway, Kafka, and cloud technologies.",
    duration: "6 weeks",
    fee: 12000,
    start_date: "2025-02-10",
    instructor: "Rehan R. Chougale",
    category: "Microservices",
    status: "upcoming",
    max_students: 30,
    enrolled_students: 24,
    level: "Intermediate",
    mode: "Online Live",
    poster_url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Distributed Systems Principles",
      "Event-Driven Architecture with Apache Kafka",
      "Service Discovery & API Gateway Routing",
      "Resilience with Resilience4j (Circuit Breakers)",
      "Distributed Tracing with Zipkin & Prometheus"
    ],
    prerequisites: ["Core Java", "Spring Boot Basics"],
    syllabus: [
      {
        module: "Module 1: Monolith to Distributed Microservices",
        topics: [
          "Decomposition Strategies: Domain-Driven Design (DDD) & Bounded Contexts",
          "Microservices Communication: Synchronous REST vs Asynchronous Messaging",
          "Database per Service Pattern & Eventual Consistency"
        ]
      },
      {
        module: "Module 2: Service Discovery & Routing",
        topics: [
          "Spring Cloud Netflix Eureka / Consul Service Registry",
          "Spring Cloud API Gateway: Dynamic Routing, Filters & Rate Limiting",
          "Centralized Configuration with Spring Cloud Config & Vault"
        ]
      },
      {
        module: "Module 3: Resilient Distributed Systems",
        topics: [
          "Circuit Breaker, Rate Limiter & Retry Patterns with Resilience4j",
          "Distributed Transactions: Saga Pattern (Orchestration vs Choreography)",
          "Outbox Pattern & CDC (Change Data Capture)"
        ]
      },
      {
        module: "Module 4: Event-Driven Microservices with Kafka",
        topics: [
          "Kafka Architecture: Topics, Partitions, Consumer Groups",
          "Event Streaming, Message Serialization & Schema Registry",
          "Dead Letter Queues (DLQ) & Error Handling"
        ]
      },
      {
        module: "Module 5: Observability, Security & Cloud Deployment",
        topics: [
          "Distributed Tracing: Micrometer, Zipkin & OpenTelemetry",
          "Centralized Logging with ELK Stack",
          "Microservice Security: OAuth2 Resource Servers & Mutual TLS",
          "Kubernetes Deployment Essentials"
        ]
      }
    ]
  },
  {
    id: "68e6d8a853c136dd553bf1b8",
    name: "Data Structures & Algorithms Masterclass",
    description: "Deep dive into DSA with 100+ problems, patterns, and interview preparation for top tech product companies.",
    duration: "2 months",
    fee: 10000,
    start_date: "2025-01-15",
    instructor: "Rehan R. Chougale",
    category: "Data Structures",
    status: "active",
    max_students: 40,
    enrolled_students: 40,
    level: "All Levels",
    mode: "Hybrid",
    poster_url: "https://images.unsplash.com/photo-1516116211227-bbc679099ad4?auto=format&fit=crop&w=1200&q=80",
    features: [
      "100+ Curated LeetCode Medium/Hard Patterns",
      "Time & Space Complexity Proofs",
      "System Design Crash Course for SDE-1/SDE-2",
      "Live Coding & Mock FAANG Interview Rounds",
      "Lifetime Problem Set Access"
    ],
    prerequisites: ["Any programming language (Java / C++)"],
    syllabus: [
      {
        module: "Module 1: Foundations & Algorithmic Analysis",
        topics: [
          "Asymptotic Analysis (Big O, Omega, Theta)",
          "Bit Manipulation & Math Techniques",
          "Recursion & Backtracking Deep-Dive"
        ]
      },
      {
        module: "Module 2: Linear Data Structures & Sliding Windows",
        topics: [
          "Arrays, Two-Pointers & Sliding Window Patterns",
          "Singly, Doubly & Circular Linked Lists",
          "Stacks, Monotonic Stacks & Queues",
          "Hashing & Collision Resolution Techniques"
        ]
      },
      {
        module: "Module 3: Non-Linear Structures: Trees & Graphs",
        topics: [
          "Binary Trees, BSTs, AVL & Red-Black Tree Principles",
          "Tries for Fast String Searching & Autocomplete",
          "Graph Representations, BFS & DFS Traversals",
          "Shortest Path: Dijkstra, Bellman-Ford, Floyd-Warshall",
          "Minimum Spanning Trees: Kruskal & Prim's Algorithms"
        ]
      },
      {
        module: "Module 4: Dynamic Programming & Greedy Algorithms",
        topics: [
          "Memoization vs Tabulation Paradigms",
          "1D & 2D DP Patterns (Knapsack, LCS, LIS, Matrix Chain)",
          "DP on Trees & Graphs",
          "Greedy Strategies & Interval Scheduling"
        ]
      }
    ]
  }
];
