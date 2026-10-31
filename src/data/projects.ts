export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  categories: ("web" | "mobile" | "desktop" | "opensource")[];
  badge: { label: string; color: string };
  image: string;
  description: string;
  fullOverview: string;
  role: string;
  timeline: string;
  client: string;
  status: string;
  liveUrl?: string;
  githubUrl: string;
  metrics: { label: string; value: string }[];
  tags: { name: string; iconKey: string }[];
  features: { title: string; description: string; iconName: string }[];
  techStack: {
    category: string;
    items: { name: string; iconKey: string }[];
  }[];
  challenges: { challenge: string; solution: string }[];
}

export const projectsList: ProjectDetail[] = [
  {
    id: "police-record-system",
    title: "Police Record System",
    tagline: "Modern digital records management system for law enforcement agencies.",
    categories: ["web", "desktop", "opensource"],
    badge: { label: "Web & Desktop", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
    image: "/images/projects/police.png",
    description:
      "A modern digital records system for managing police cases, arrests, patrol logs and reports with an admin dashboard.",
    fullOverview:
      "A high-security, resilient case management and crime records logging system designed for law enforcement precincts. The application provides secure administrative workflows, real-time suspect profiling, incident dispatch logs, and role-based access control to modernize paper-based policing processes.",
    role: "Full-Stack Engineer & Database Designer",
    timeline: "2024",
    client: "Public Sector / Open Source",
    status: "Completed",
    githubUrl: "https://github.com/yaseeradam/FrontalMindsDRS",
    metrics: [
      { label: "Audit Integrity", value: "99.9%" },
      { label: "Query Execution", value: "< 120ms" },
      { label: "Access Tiers", value: "4 Levels" },
      { label: "Data Uptime", value: "99.99%" },
    ],
    tags: [
      { name: "Next.js", iconKey: "next" },
      { name: "React", iconKey: "react" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
      { name: "PostgreSQL", iconKey: "postgres" },
    ],
    features: [
      {
        title: "Real-Time Case & Suspect Tracking",
        description:
          "Centralized registry for managing active criminal investigations, court warrants, incident timelines, and biometric/evidence records.",
        iconName: "Shield",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description:
          "Granular cryptographic permissions ensuring patrol officers, detectives, supervisors, and sysadmins only view authorized case files.",
        iconName: "Lock",
      },
      {
        title: "Automated Incident Reporting",
        description:
          "One-click generation of exportable case summaries, statistical precinct heatmaps, and court-ready documentation.",
        iconName: "FileText",
      },
      {
        title: "Tamper-Evident Audit Logs",
        description:
          "Every record access, modification, and status alteration is securely timestamped with operator credentials to prevent unauthorized changes.",
        iconName: "Activity",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        items: [
          { name: "Next.js 14", iconKey: "next" },
          { name: "React", iconKey: "react" },
          { name: "Tailwind CSS", iconKey: "tailwind" },
          { name: "TypeScript", iconKey: "typescript" },
        ],
      },
      {
        category: "Backend & Storage",
        items: [
          { name: "Node.js", iconKey: "node" },
          { name: "PostgreSQL", iconKey: "postgres" },
          { name: "Docker", iconKey: "docker" },
        ],
      },
      {
        category: "Security & Tools",
        items: [
          { name: "Git & GitHub", iconKey: "git" },
          { name: "NextAuth / JWT", iconKey: "shield" },
        ],
      },
    ],
    challenges: [
      {
        challenge: "Ensuring sensitive criminal evidence remains tamper-proof across distributed precinct units.",
        solution:
          "Implemented cryptographic immutable audit trail tables in PostgreSQL with strict database triggers and row-level security.",
      },
      {
        challenge: "Providing fast, intuitive search across thousands of historical suspect entries without performance lag.",
        solution:
          "Constructed optimized GIN full-text indexes and debounced server-side query endpoints with sub-120ms retrieval.",
      },
    ],
  },
  {
    id: "academyhub-dashboard",
    title: "AcademyHub Dashboard",
    tagline: "All-in-one institutional school management system and student intelligence hub.",
    categories: ["web", "opensource"],
    badge: { label: "SaaS Platform", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
    image: "/images/projects/academyhub.png",
    description:
      "A complete school management system with student records, fees, results and analytics.",
    fullOverview:
      "A comprehensive academic governance and school administration portal designed to streamline institutional operations. Integrates student enrollment records, automated fee reconciliation, report card generation, grade book analytics, and teacher-parent correspondence into one cohesive web suite.",
    role: "Lead Full-Stack Architect",
    timeline: "2024",
    client: "EdTech Platform",
    status: "Live & Maintained",
    liveUrl: "https://myacademy-pi.vercel.app",
    githubUrl: "https://github.com/yaseeradam/AcademyHub",
    metrics: [
      { label: "Students Managed", value: "1,000+" },
      { label: "Admin Overhead Saved", value: "85%" },
      { label: "Report Generation", value: "Instant" },
      { label: "System Availability", value: "99.9%" },
    ],
    tags: [
      { name: "Next.js", iconKey: "next" },
      { name: "React", iconKey: "react" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
      { name: "MongoDB", iconKey: "mongodb" },
    ],
    features: [
      {
        title: "Dynamic Gradebook & Transcript Engine",
        description:
          "Auto-calculates term GPAs, subject ranks, and weighted scores, compiling downloadable standardized PDF report cards.",
        iconName: "GraduationCap",
      },
      {
        title: "Tuition & Financial Management",
        description:
          "Structured tuition billing, partial payment tracking, receipt generation, and real-time alerts for overdue balances.",
        iconName: "CreditCard",
      },
      {
        title: "Attendance & Scheduling",
        description:
          "Interactive visual attendance calendars for teachers, class schedules, and automated absence notifications.",
        iconName: "Calendar",
      },
      {
        title: "Institutional Analytics",
        description:
          "Interactive chart dashboards providing school principals with insights on revenue collection, student trends, and grade distribution.",
        iconName: "BarChart2",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        items: [
          { name: "Next.js", iconKey: "next" },
          { name: "React", iconKey: "react" },
          { name: "Tailwind CSS", iconKey: "tailwind" },
          { name: "TypeScript", iconKey: "typescript" },
        ],
      },
      {
        category: "Backend & Database",
        items: [
          { name: "Node.js", iconKey: "node" },
          { name: "MongoDB", iconKey: "mongodb" },
        ],
      },
      {
        category: "Deployment",
        items: [
          { name: "Vercel", iconKey: "next" },
          { name: "Git", iconKey: "git" },
        ],
      },
    ],
    challenges: [
      {
        challenge: "Generating clean, printable multi-page student report cards on demand without browser rendering quirks.",
        solution:
          "Built a serverless PDF compilation pipeline that produces pixel-perfect student transcripts with uniform styling.",
      },
      {
        challenge: "Handling complex academic term transitions without corrupting historical student grade data.",
        solution:
          "Structured versioned database schemas in MongoDB linking students to immutable academic session snapshots.",
      },
    ],
  },
  {
    id: "whatsapp-bot",
    title: "AcademyHub WhatsApp Bot",
    tagline: "AI conversational assistant bringing the entire school management portal into WhatsApp.",
    categories: ["web", "opensource"],
    badge: { label: "AI & Bot", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    image: "/images/projects/whatsapp_bot.png",
    description:
      "An AI-powered WhatsApp chatbot that brings the entire school portal into WhatsApp. Parents can check reports, fees and more — in plain English.",
    fullOverview:
      "An intelligent conversational bot bridging the gap between parents, students, and school portals. Utilizing natural language processing and WhatsApp Business messaging, guardians can query terminal exam results, check outstanding tuition balances, and receive real-time notices directly on WhatsApp without navigating complicated web logins.",
    role: "AI & Backend Engineer",
    timeline: "2024",
    client: "EdTech Innovation",
    status: "Live & Active",
    liveUrl: "https://aiacademy-sandy.vercel.app",
    githubUrl: "https://github.com/yaseeradam/aiacademy",
    metrics: [
      { label: "Response Latency", value: "< 2s" },
      { label: "Parent Adoption", value: "94%" },
      { label: "App Download Req.", value: "0 MB" },
      { label: "Queries Handled", value: "10k+" },
    ],
    tags: [
      { name: "Node.js", iconKey: "node" },
      { name: "WhatsApp API", iconKey: "wa" },
      { name: "OpenAI", iconKey: "ai" },
      { name: "MongoDB", iconKey: "mongodb" },
    ],
    features: [
      {
        title: "Natural Language Portal Queries",
        description:
          "Guardians can chat informally in natural English: 'Show me Adam's math score' or 'How much is left on Fatima's tuition?'",
        iconName: "MessageSquare",
      },
      {
        title: "Secure Identity Verification",
        description:
          "Instant one-time security pins and phone number hashing to protect confidential student academic records.",
        iconName: "Key",
      },
      {
        title: "Automated Broadcasts & Receipts",
        description:
          "School-wide emergency bulletins, event reminders, and instant digital payment confirmation slips sent to WhatsApp.",
        iconName: "Send",
      },
      {
        title: "Low Bandwidth Accessibility",
        description:
          "Works even on minimal 2G/3G connections where heavy web portals fail to load.",
        iconName: "Zap",
      },
    ],
    techStack: [
      {
        category: "Core Engine",
        items: [
          { name: "Node.js", iconKey: "node" },
          { name: "Express", iconKey: "node" },
          { name: "WhatsApp Cloud API", iconKey: "wa" },
        ],
      },
      {
        category: "Intelligence & Data",
        items: [
          { name: "OpenAI GPT", iconKey: "ai" },
          { name: "MongoDB", iconKey: "mongodb" },
        ],
      },
      {
        category: "Deployment",
        items: [
          { name: "Vercel / Cloud Run", iconKey: "next" },
          { name: "Git", iconKey: "git" },
        ],
      },
    ],
    challenges: [
      {
        challenge: "Preventing hallucinations when parents query sensitive financial and grade numbers.",
        solution:
          "Designed a strict RAG retrieval pipeline where GPT only structures responses from authoritative database query payloads.",
      },
      {
        challenge: "Handling WhatsApp rate limits during simultaneous term-end result releases.",
        solution:
          "Implemented asynchronous Redis-backed message queuing with exponential backoff and jitter retry policies.",
      },
    ],
  },
  {
    id: "ai-marketing",
    title: "AI Marketing Landing Page",
    tagline: "High-converting marketing platform crafted with modern interactive animations.",
    categories: ["web", "opensource"],
    badge: { label: "Landing Experience", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
    image: "/images/projects/ai_marketing.png",
    description:
      "A high-converting landing page for an AI marketing consultancy with modern design and animations.",
    fullOverview:
      "A sleek, conversion-focused landing page designed for an artificial intelligence marketing consultancy. Built with fluid micro-interactions, responsive typography, and performance-tuned layout aesthetics to drive visitor engagement and client consultation bookings.",
    role: "Frontend Developer & UI/UX Designer",
    timeline: "2024",
    client: "Marketing Agency / AI Consultancy",
    status: "Live & Deployed",
    liveUrl: "https://aimarket-mauve.vercel.app",
    githubUrl: "https://github.com/yaseeradam/AIMARKET",
    metrics: [
      { label: "Lighthouse Score", value: "98+" },
      { label: "CTA Click-through", value: "+34%" },
      { label: "FCP", value: "< 0.8s" },
      { label: "Frame Rate", value: "60 FPS" },
    ],
    tags: [
      { name: "Next.js", iconKey: "next" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
      { name: "Framer Motion", iconKey: "framer" },
      { name: "TypeScript", iconKey: "typescript" },
    ],
    features: [
      {
        title: "Cinematic Micro-Interactions",
        description:
          "Scroll-triggered reveals, ambient spotlight glow gradients, and reactive hover physics powered by Framer Motion.",
        iconName: "Sparkles",
      },
      {
        title: "Interactive ROI Calculator",
        description:
          "Live slider widget demonstrating projected ad spend savings and lead amplification when using AI automation.",
        iconName: "Sliders",
      },
      {
        title: "Conversion-Optimized Hierarchy",
        description:
          "Strategic visual layout leading visitors effortlessly from social proof to case studies to calendar booking.",
        iconName: "Target",
      },
      {
        title: "High Performance & SEO",
        description:
          "Fully static pre-rendering, modern image compression, and semantic OpenGraph cards for viral sharing.",
        iconName: "Flame",
      },
    ],
    techStack: [
      {
        category: "UI & Animation",
        items: [
          { name: "Next.js", iconKey: "next" },
          { name: "React", iconKey: "react" },
          { name: "Tailwind CSS", iconKey: "tailwind" },
          { name: "Framer Motion", iconKey: "framer" },
        ],
      },
      {
        category: "Architecture",
        items: [
          { name: "TypeScript", iconKey: "typescript" },
          { name: "Vercel Edge Network", iconKey: "next" },
        ],
      },
    ],
    challenges: [
      {
        challenge: "Combining rich graphic animations without tanking mobile battery life or Lighthouse performance scores.",
        solution:
          "Utilized GPU-accelerated CSS transforms and IntersectionObserver lazy hydration to pause animations when out of viewport.",
      },
      {
        challenge: "Maintaining consistent responsive alignment across ultrawide monitors and small phones.",
        solution:
          "Adopted fluid typography with clamp() and dynamic Tailwind container query breakpoints.",
      },
    ],
  },
  {
    id: "taskmaster",
    title: "TaskMaster (To-Do App)",
    tagline: "Offline-first cross-platform task manager with intelligent scheduling and reminders.",
    categories: ["mobile", "opensource"],
    badge: { label: "Mobile App", color: "text-pink-400 bg-pink-500/10 border-pink-500/20" },
    image: "/images/projects/taskmaster.png",
    description:
      "A simple and effective task management app with reminders, categories and local storage.",
    fullOverview:
      "An intuitive, offline-first mobile productivity application designed for managing daily workflows, priorities, and deadlines. Built with React Native and Expo, utilizing embedded SQLite for zero-latency local operations and instant search without depending on cloud servers.",
    role: "Mobile App Engineer",
    timeline: "2024",
    client: "Personal Productivity Tool",
    status: "Completed & Open Source",
    githubUrl: "https://github.com/yaseeradam/checkpay",
    metrics: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Offline Support", value: "100%" },
      { label: "Storage Latency", value: "0ms" },
      { label: "Battery Impact", value: "Minimal" },
    ],
    tags: [
      { name: "React Native", iconKey: "react" },
      { name: "Expo", iconKey: "expo" },
      { name: "SQLite", iconKey: "sqlite" },
      { name: "TypeScript", iconKey: "typescript" },
    ],
    features: [
      {
        title: "Zero-Latency Local Storage",
        description:
          "Local SQLite embedded database provides instantaneous response with no loading spinners or network stalls.",
        iconName: "Database",
      },
      {
        title: "Gesture-Driven Interactions",
        description:
          "Smooth swipe gestures to complete, snooze, or categorize tasks with subtle haptic vibration triggers.",
        iconName: "Smartphone",
      },
      {
        title: "Intelligent Scheduled Reminders",
        description:
          "Local notification engine triggers alerts on schedule, respecting device focus modes and quiet hours.",
        iconName: "Bell",
      },
      {
        title: "Categories & Priority Filtering",
        description:
          "Organize by work, personal, urgent, or backlog tags with instant color-coded visual sorting.",
        iconName: "Tag",
      },
    ],
    techStack: [
      {
        category: "Mobile Core",
        items: [
          { name: "React Native", iconKey: "react" },
          { name: "Expo", iconKey: "expo" },
          { name: "TypeScript", iconKey: "typescript" },
        ],
      },
      {
        category: "Data & Storage",
        items: [
          { name: "SQLite", iconKey: "sqlite" },
          { name: "AsyncStorage", iconKey: "database" },
        ],
      },
    ],
    challenges: [
      {
        challenge: "Reliable background notifications across both iOS and Android background execution restrictions.",
        solution:
          "Configured native Expo Notifications with local scheduled triggers rather than unreliable remote pushes.",
      },
      {
        challenge: "Maintaining 60 FPS while rendering long lists of active and archived items.",
        solution:
          "Implemented FlashList with item size pre-calculation and memoized render delegates.",
      },
    ],
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Store",
    tagline: "Luxury fragrance digital boutique featuring smooth animations and Stripe checkout.",
    categories: ["web", "opensource"],
    badge: { label: "Web App", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    image: "/images/projects/ecommerce.png",
    description:
      "A modern e-commerce website for a perfume brand with smooth animations and secure checkout.",
    fullOverview:
      "A bespoke, luxury e-commerce experience designed for high-end perfumes and fragrances. Features fluid scent family filtering, an immersive slide-out cart drawer, inventory availability indicators, and PCI-compliant checkout powered by Stripe.",
    role: "Full-Stack Developer",
    timeline: "2024",
    client: "Boutique Fragrance Brand",
    status: "Live & Deployed",
    liveUrl: "https://globalpeak-delta.vercel.app",
    githubUrl: "https://github.com/yaseeradam/globalpeak",
    metrics: [
      { label: "Payment Security", value: "PCI-DSS" },
      { label: "Checkout Initiation", value: "< 1.2s" },
      { label: "Cart Error Rate", value: "0%" },
      { label: "SEO Indexing", value: "100%" },
    ],
    tags: [
      { name: "Next.js", iconKey: "next" },
      { name: "React", iconKey: "react" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
      { name: "Stripe", iconKey: "stripe" },
    ],
    features: [
      {
        title: "Slide-Out Cart & Optimistic Updates",
        description:
          "Instant cart quantity changes with zero layout freezing, subtotal recalculations, and coupon application.",
        iconName: "ShoppingBag",
      },
      {
        title: "Fragrance Note Architecture",
        description:
          "Exploration filters for top, heart, and base notes (Woody, Citrus, Amber, Floral) to guide buyer taste.",
        iconName: "Compass",
      },
      {
        title: "Stripe Integrated Checkout",
        description:
          "One-click payment with Apple Pay, Google Pay, and credit cards with webhook fulfillment processing.",
        iconName: "CreditCard",
      },
      {
        title: "High-Resolution Product Zoom",
        description:
          "Responsive multi-angle bottle photography with zoom view and scent concentration descriptions.",
        iconName: "Maximize2",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        items: [
          { name: "Next.js", iconKey: "next" },
          { name: "React", iconKey: "react" },
          { name: "Tailwind CSS", iconKey: "tailwind" },
          { name: "TypeScript", iconKey: "typescript" },
        ],
      },
      {
        category: "Payments & Backend",
        items: [
          { name: "Stripe API", iconKey: "stripe" },
          { name: "Next.js Server Actions", iconKey: "next" },
        ],
      },
      {
        category: "Deployment",
        items: [
          { name: "Vercel", iconKey: "next" },
          { name: "Git", iconKey: "git" },
        ],
      },
    ],
    challenges: [
      {
        challenge: "Handling concurrent stock counts during peak sales without risking overselling.",
        solution:
          "Configured Stripe Checkout session line-item verification and inventory validation webhooks.",
      },
      {
        challenge: "Displaying heavy, high-DPI fragrance photography without degrading mobile loading speeds.",
        solution:
          "Implemented Next/Image AVIF/WebP automatic responsive transcoding with blur placeholders.",
      },
    ],
  },
];

export function getProjectById(id: string): ProjectDetail | undefined {
  return projectsList.find((p) => p.id === id);
}

export function getAllProjectIds(): string[] {
  return projectsList.map((p) => p.id);
}

export function getAdjacentProjects(currentId: string): {
  prev: ProjectDetail;
  next: ProjectDetail;
} {
  const currentIndex = projectsList.findIndex((p) => p.id === currentId);
  const prevIndex = (currentIndex - 1 + projectsList.length) % projectsList.length;
  const nextIndex = (currentIndex + 1) % projectsList.length;

  return {
    prev: projectsList[prevIndex],
    next: projectsList[nextIndex],
  };
}
