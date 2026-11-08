export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "Website Development" | "Web Applications" | "Mobile Applications" | "CMS Development" | "AI & Automation" | "E-Commerce";
  year: string;
  tagline: string;
  description: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  color: string;
  featured: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  subServices: string[];
  features: string[];
  techStack: string[];
  deliverables: string[];
  icon: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: "Web Development" | "Artificial Intelligence" | "Software Development" | "Digital Marketing" | "UI/UX Design" | "Technology Trends" | "Business Automation";
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const AGENCY_CONFIG = {
  name: "Winhub Solutions",
  legalName: "Winhub Solutions",
  tagline: "WE BUILD THE WEB. YOU BUILD THE FUTURE.",
  subtagline: "Building Digital Solutions That Move Businesses Forward",
  heroSmallLabel: "YOUR TECHNOLOGY PARTNER",
  headline: "Building Digital Solutions That Move Businesses Forward",
  description:
    "Winhub Solutions is a technology-driven IT company delivering innovative web development, custom software, mobile applications, AI automation and digital marketing solutions. We transform business ideas into powerful digital experiences using modern technologies and scalable architecture.",
  heroHighlights: [
    "Custom Development",
    "AI-Powered Solutions",
    "Scalable Technology",
    "Business-Focused Innovation",
  ],
  experienceYears: "5+",
  projectsCompleted: "100+",
  headquarters: "Hanamkonda, Warangal & Knowledge City Hyderabad, Telangana, India",
  address: {
    line1: "Hanamkonda, Warangal – 506001",
    line2: "Knowledge City Rd, Raidurgam, Hyderabad – 500032",
    line3: "Telangana, India",
    full: "Hanamkonda, Warangal – 506001 & Knowledge City Rd, Raidurgam, Hyderabad – 500032, Telangana, India",
    warangal: {
      name: "Warangal (Registered Office)",
      line1: "Hanamkonda, Warangal,",
      line2: "Telangana, India – 506001",
      line3: "",
      full: "Hanamkonda, Warangal, Telangana, India – 506001",
    },
    hyderabad: {
      name: "Hyderabad (Corporate Office)",
      line1: "Knowledge City Rd, Panmaktha,",
      line2: "Raidurgam, Serilingampalle (M),",
      line3: "Hyderabad, Telangana – 500032",
      full: "Raidurgam, Knowledge City Rd, Panmaktha, Hyderabad, Serilingampalle (M), Telangana 500032",
    },
  },
  contacts: {
    email: "contact@winhubsolutions.com",
    phone: "+91 73865 66445",
    phoneRaw: "+917386566445",
  },
  status: "ACCEPTING NEW COMMISSIONS",
  socials: [
    { name: "GitHub", url: "https://github.com" },
    { name: "Twitter / X", url: "https://twitter.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ],
};

export const ABOUT_DATA = {
  title: "About Winhub Solutions",
  subtitle: "Empowering Businesses Through Technology",
  intro:
    "Winhub Solutions is an IT services and digital development company focused on delivering innovative technology solutions for businesses, startups, educational institutions and organizations.",
  descriptionParagraphs: [
    "We specialize in website design and development, custom software engineering, mobile application development, AI-powered automation, UI/UX design and digital marketing.",
    "Our approach combines creativity, technical knowledge and business understanding to develop solutions that address real-world challenges.",
    "With more than five years of experience and over 100 completed projects, we continue to help organizations strengthen their digital presence and improve their business operations.",
  ],
  highlights: [
    { label: "Experience", value: "5+ Years of Experience" },
    { label: "Completed", value: "100+ Projects Completed" },
    { label: "Architecture", value: "Custom-Built Solutions" },
    { label: "Approach", value: "Client-Focused Development" },
  ],
  mission:
    "To empower businesses through innovative, reliable and affordable technology solutions that simplify operations, improve efficiency and create opportunities for growth.",
  vision:
    "To become a trusted technology partner for businesses worldwide by delivering impactful digital products and continuously embracing emerging technologies.",
  coreValues: [
    {
      title: "Innovation",
      desc: "Embracing modern technologies and creative thinking.",
      icon: "Zap",
    },
    {
      title: "Quality",
      desc: "Maintaining high standards throughout every development stage.",
      icon: "ShieldCheck",
    },
    {
      title: "Integrity",
      desc: "Building relationships through transparency and trust.",
      icon: "Lock",
    },
    {
      title: "Collaboration",
      desc: "Working closely with clients to achieve shared goals.",
      icon: "Users",
    },
    {
      title: "Commitment",
      desc: "Delivering dependable solutions and long-term support.",
      icon: "Award",
    },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "website-design-development",
    number: "01",
    title: "Website Design & Development",
    shortDesc:
      "We design and develop modern, responsive websites that communicate your brand identity, engage visitors and support your business objectives.",
    fullDesc:
      "From high-impact corporate platforms to custom responsive web interfaces, we engineer websites that reflect your unique brand identity and convert visitors into long-term clients with sub-second speeds and flawless responsive design.",
    subServices: [
      "Custom Website Design",
      "Responsive Web Development",
      "Corporate Websites",
      "Business Websites",
      "Landing Page Development",
      "Website Redesign",
      "Website Maintenance",
    ],
    features: [
      "Responsive layout for mobile, tablet, and desktop",
      "Modern Next.js & React framework foundations",
      "SEO-friendly semantic HTML and fast page loads",
      "Interactive animations and spatial aesthetics",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    deliverables: ["Custom Web Design", "Production Codebase", "SEO Schema Setup", "Deployment"],
    icon: "Globe",
  },
  {
    id: "custom-web-applications",
    number: "02",
    title: "Custom Web Applications",
    shortDesc:
      "Build powerful business applications, management systems, dashboards and SaaS platforms designed around your specific workflows.",
    fullDesc:
      "We develop secure, high-concurrency web applications that streamline operational complexity, automate repetitive workflows, and offer intuitive administrative dashboards tailored to your exact business specifications.",
    subServices: [
      "Custom Web Applications",
      "Node.js Development",
      "React.js Development",
      "Angular Development",
      "Next.js Development",
      "Gatsby Development",
      "Enterprise Web Applications",
    ],
    features: [
      "Microservice and event-driven architecture",
      "Role-based access control (RBAC)",
      "Real-time data synchronization",
      "Interactive analytics & custom reporting",
    ],
    techStack: ["Node.js", "React.js", "Next.js", "Angular", "Express.js", "PostgreSQL"],
    deliverables: ["Full-Stack App", "Database Architecture", "Admin Dashboard", "API Documentation"],
    icon: "Layers",
  },
  {
    id: "mobile-app-development",
    number: "03",
    title: "Mobile App Development",
    shortDesc:
      "Transform your ideas into mobile experiences with feature-rich Android and iOS applications.",
    fullDesc:
      "We build intuitive, fluid mobile applications for iOS and Android platforms, balancing native performance with rapid cross-platform deployment to deliver delightful mobile user experiences.",
    subServices: [
      "Android App Development",
      "iOS App Development",
      "Cross-Platform Development",
      "Mobile UI/UX Design",
      "API Development & Integration",
    ],
    features: [
      "120fps fluid mobile UI animations",
      "Offline-first sync capabilities",
      "Push notification systems",
      "App Store & Google Play launch support",
    ],
    techStack: ["Flutter", "React Native", "Android", "iOS / Swift", "Kotlin", "Firebase"],
    deliverables: ["Android APK/Bundle", "iOS IPA Build", "Backend API Setup", "Store Submission"],
    icon: "Smartphone",
  },
  {
    id: "ai-agent-development",
    number: "04",
    title: "AI Agent Development",
    shortDesc:
      "Develop intelligent AI agents that automate repetitive tasks, understand user requirements and execute business workflows.",
    fullDesc:
      "We architect autonomous AI agents, enterprise LLM pipelines, and Model Context Protocol (MCP) servers that connect language models to your internal databases, software tools, and operational workflows.",
    subServices: [
      "AI Agent Development",
      "AI Chatbot Development",
      "Business Process Automation",
      "AI Content Generation",
      "Document Processing Automation",
      "MCP Server Development",
      "AI API Integration",
    ],
    features: [
      "Goal-driven autonomous agents",
      "Model Context Protocol (MCP) integrations",
      "Enterprise LLM pipeline orchestration",
      "Automated document and data parsing",
    ],
    techStack: ["Python", "FastAPI", "OpenAI", "LangChain", "MCP", "Vector DBs"],
    deliverables: ["Custom AI Agent", "Tool Connectors", "Vector DB Pipeline", "Admin Console"],
    icon: "Cpu",
  },
  {
    id: "ojs-development",
    number: "05",
    title: "OJS Development",
    shortDesc:
      "Specialized Open Journal Systems development for academic institutions, research organizations and scholarly publishers.",
    fullDesc:
      "As Open Journal Systems (OJS) specialists, we deliver turnkey academic publishing platforms, bespoke journal themes, custom plugin architectures, and indexing integration for universities and global journals.",
    subServices: [
      "OJS Installation & Configuration",
      "Custom OJS Theme Development",
      "OJS Plugin Development",
      "Journal Migration",
      "OJS Version Upgrades",
      "DOI & Crossref Integration",
      "Journal Workflow Customization",
    ],
    features: [
      "Complete editorial & peer-review workflow configuration",
      "DOI, Crossref, and Google Scholar indexing setup",
      "Bespoke mobile-friendly academic theme design",
      "Zero data-loss version migration and upgrades",
    ],
    techStack: ["PHP", "OJS 3.x", "MySQL / MariaDB", "Smarty", "Apache", "Nginx"],
    deliverables: ["Configured OJS Portal", "Custom Theme", "Editorial Workflow", "Staff Training"],
    icon: "BookOpen",
  },
  {
    id: "ui-ux-design",
    number: "06",
    title: "UI/UX Design",
    shortDesc:
      "Create intuitive, attractive and user-friendly digital experiences through research-driven interface design.",
    fullDesc:
      "We design modern, user-centered digital interfaces that merge visual appeal with effortless usability. From wireframes to atomic design systems, we craft every screen to maximize user retention and engagement.",
    subServices: [
      "Website UI/UX Design",
      "Mobile App Interface Design",
      "Dashboard Design",
      "Wireframing & Prototyping",
      "Design Systems",
      "User Experience Optimization",
    ],
    features: [
      "Research-backed user persona journeys",
      "Comprehensive design systems and component libraries",
      "High-fidelity interactive Figma prototypes",
      "Accessibility (WCAG 2.1) compliance",
    ],
    techStack: ["Figma", "Design Tokens", "Wireframing", "Prototyping", "Adobe XD"],
    deliverables: ["Figma Design Files", "Interactive Prototypes", "Design System Specs", "Developer Handoff"],
    icon: "Palette",
  },
  {
    id: "ecommerce-development",
    number: "07",
    title: "E-Commerce Development",
    shortDesc:
      "Build secure, scalable online stores with seamless shopping experiences, payment integrations and inventory management.",
    fullDesc:
      "We engineer scalable e-commerce platforms that drive revenue. Whether building custom storefronts or integrating Shopify and WooCommerce, we ensure seamless checkout funnels, payment security, and automated order management.",
    subServices: [
      "Custom E-Commerce Websites",
      "Shopify Development",
      "WooCommerce Development",
      "Multi-Vendor Platforms",
      "Payment Gateway Integration",
      "Shopping Cart Development",
    ],
    features: [
      "Fast, frictionless one-step checkout",
      "Secure payment gateway integrations (Stripe, Razorpay, PayPal)",
      "Automated inventory and order tracking",
      "Multi-currency & localized pricing support",
    ],
    techStack: ["Shopify", "WooCommerce", "Next.js", "Node.js", "Payment APIs"],
    deliverables: ["Live Storefront", "Payment Integration", "Inventory Management", "Analytics Setup"],
    icon: "ShoppingBag",
  },
  {
    id: "digital-marketing",
    number: "08",
    title: "Digital Marketing",
    shortDesc:
      "Improve your online visibility through SEO, social media marketing, performance optimization and strategic digital campaigns.",
    fullDesc:
      "We combine technical SEO, paid marketing, and performance optimization to amplify your brand's digital reach, attract high-intent customers, and accelerate measurable business growth.",
    subServices: [
      "Search Engine Optimization",
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Link Building",
      "Social Media Marketing",
      "Google Ads & PPC",
      "Website Performance Optimization",
    ],
    features: [
      "Comprehensive technical & on-page SEO audits",
      "Schema markup and search spider indexation",
      "High-ROI paid search and social campaigns",
      "Core Web Vitals & Google PageSpeed optimization",
    ],
    techStack: ["Google Search Console", "Google Ads", "Google Analytics 4", "Meta Ads", "Ahrefs"],
    deliverables: ["SEO Strategy Document", "Keyword Roadmap", "Performance Audit", "Monthly Growth Reports"],
    icon: "TrendingUp",
  },
];

export const FEATURED_MODERN_BUSINESS_CARDS = [
  {
    title: "Custom Web Applications",
    description: "Business portals, SaaS platforms, dashboards and custom management systems built around your requirements.",
    icon: "Layers",
    tag: "Scalable SaaS & Portals",
  },
  {
    title: "AI Agents & Automation",
    description: "Intelligent automation solutions that simplify operations, improve productivity and reduce manual work.",
    icon: "Cpu",
    tag: "Autonomous Workflows",
  },
  {
    title: "Website Development",
    description: "Modern websites built with responsive interfaces, optimized performance and search engine-friendly architecture.",
    icon: "Globe",
    tag: "Sub-Second Speed",
  },
  {
    title: "OJS & Academic Publishing",
    description: "Complete journal publishing platforms with submission management, peer review and editorial workflows.",
    icon: "BookOpen",
    tag: "Turnkey Publishing",
  },
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: "Modern Technology Stack",
    description: "We work with modern frameworks, programming languages and development tools to build reliable digital products.",
    icon: "Terminal",
  },
  {
    title: "Business-Focused Development",
    description: "We understand your business objectives and create solutions that improve productivity, customer experience and growth.",
    icon: "Briefcase",
  },
  {
    title: "Reliable Support & Maintenance",
    description: "Our relationship doesn't end at deployment. We provide ongoing technical support, updates and improvements.",
    icon: "ShieldCheck",
  },
  {
    title: "Secure & Scalable Solutions",
    description: "We follow development best practices to build secure applications that can adapt to changing business requirements.",
    icon: "Lock",
  },
];

export const TECH_CATEGORIES_DATA = [
  {
    category: "Frontend",
    description: "Responsive, ultra-performant, and modern web interfaces.",
    items: [
      { name: "React.js", badge: "UI Library" },
      { name: "Next.js", badge: "React Framework" },
      { name: "Angular", badge: "Google Framework" },
      { name: "Vue.js", badge: "Progressive UI" },
      { name: "TypeScript", badge: "Strict Typing" },
      { name: "HTML5", badge: "Semantic Web" },
      { name: "CSS3", badge: "Modern Styling" },
    ],
  },
  {
    category: "Backend",
    description: "Reliable, high-concurrency server architectures and REST/GraphQL APIs.",
    items: [
      { name: "Node.js", badge: "Runtime Engine" },
      { name: "PHP", badge: "Modern PHP 8+" },
      { name: "Python", badge: "Asynchronous I/O" },
      { name: "Java", badge: "Enterprise JVM" },
      { name: ".NET", badge: "Microsoft Core" },
    ],
  },
  {
    category: "Database",
    description: "High-integrity relational and distributed NoSQL databases.",
    items: [
      { name: "PostgreSQL", badge: "ACID Relational" },
      { name: "MySQL", badge: "Reliable SQL" },
      { name: "MongoDB", badge: "Distributed NoSQL" },
      { name: "Microsoft SQL Server", badge: "Enterprise DB" },
    ],
  },
  {
    category: "CMS & E-Commerce",
    description: "Headless CMS, scholarly publishing, and enterprise digital storefronts.",
    items: [
      { name: "Payload CMS", badge: "Next-Gen Headless" },
      { name: "WordPress", badge: "Publishing Standard" },
      { name: "Drupal", badge: "Enterprise CMS" },
      { name: "Open Journal Systems", badge: "Scholarly Publishing" },
      { name: "Shopify", badge: "Modern Commerce" },
      { name: "Magento", badge: "Enterprise Commerce" },
    ],
  },
  {
    category: "AI Technologies",
    description: "Intelligent autonomous models, agentic workflows, and MCP architectures.",
    items: [
      { name: "Large Language Models", badge: "LLM Infrastructure" },
      { name: "AI Agents", badge: "Autonomous Systems" },
      { name: "AI Automation", badge: "Workflow Systems" },
      { name: "Natural Language Processing", badge: "NLP Pipelines" },
      { name: "API Integrations", badge: "Enterprise Connectors" },
      { name: "Model Context Protocol (MCP)", badge: "Agentic Protocol" },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    phase: "Discovery & Planning",
    duration: "Phase 1",
    title: "Discovery & Planning",
    description: "We understand your requirements, business objectives and project expectations.",
  },
  {
    step: "02",
    phase: "Strategy & Design",
    duration: "Phase 2",
    title: "Strategy & Design",
    description: "Our team prepares the technical architecture, user experience and project roadmap.",
  },
  {
    step: "03",
    phase: "Development",
    duration: "Phase 3",
    title: "Development",
    description: "We transform approved designs into functional, scalable and secure digital products.",
  },
  {
    step: "04",
    phase: "Testing & Quality Assurance",
    duration: "Phase 4",
    title: "Testing & Quality Assurance",
    description: "We test functionality, performance, responsiveness and security before launch.",
  },
  {
    step: "05",
    phase: "Deployment & Launch",
    duration: "Phase 5",
    title: "Deployment & Launch",
    description: "We deploy your solution and ensure everything works smoothly in the production environment.",
  },
  {
    step: "06",
    phase: "Support & Growth",
    duration: "Phase 6",
    title: "Support & Growth",
    description: "We provide ongoing maintenance, technical support and future enhancements.",
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What services does Winhub Solutions provide?",
    answer:
      "We provide website development, custom software development, mobile applications, AI solutions, OJS development, UI/UX design, e-commerce and digital marketing services.",
  },
  {
    question: "Does Winhub Solutions develop custom websites?",
    answer:
      "Yes. We design and develop custom websites based on your brand identity, business objectives and functional requirements.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We work with React, Next.js, Angular, Node.js, TypeScript, PHP, Python, Payload CMS, PostgreSQL and other modern technologies.",
  },
  {
    question: "Do you develop AI-powered applications?",
    answer:
      "Yes. We develop AI agents, intelligent chatbots, workflow automation systems and custom AI integrations.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We provide website maintenance, security updates, performance optimization, bug fixes and technical support.",
  },
  {
    question: "Can you develop custom software for my business?",
    answer:
      "Yes. We develop customized CRM, ERP, management systems, dashboards and business applications.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes. We can collaborate with businesses and organizations across different locations through remote project communication.",
  },
  {
    question: "How can I start a project with Winhub Solutions?",
    answer:
      "Contact our team with your project requirements. We will discuss your objectives, suggest an appropriate solution and provide a project estimate.",
  },
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "proj-1",
    slug: "custom-erp-saas",
    title: "Enterprise ERP & Workflow System",
    client: "Global Logistics Group",
    category: "Custom Software" as any,
    year: "2026",
    tagline: "Scalable business portal, real-time inventory tracking and automated billing.",
    description:
      "Engineered an enterprise-grade ERP system with role-based access, inventory tracking, invoice generation, and automated accounting workflows.",
    impactMetrics: [
      { label: "Operational Speed", value: "+300%" },
      { label: "Manual Effort", value: "-75%" },
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    color: "#FF7120",
    featured: true,
  },
  {
    id: "proj-2",
    slug: "ai-support-agent",
    title: "Autonomous AI Support & Workflow Agent",
    client: "Cognitive Tech Inc",
    category: "AI & Automation",
    year: "2026",
    tagline: "Intelligent agent capable of resolving inquiries and executing API workflows.",
    description:
      "Developed an autonomous customer service and internal workflow AI agent utilizing LLMs and vector memory to automate ticket triage and operational queries.",
    impactMetrics: [
      { label: "Resolution Time", value: "<15s" },
      { label: "Ticket Deflection", value: "82%" },
    ],
    tags: ["Python", "FastAPI", "OpenAI", "LangChain", "Vector DB"],
    color: "#0A0A0A",
    featured: true,
  },
  {
    id: "proj-3",
    slug: "international-ojs-journal",
    title: "Scholarly Open Access Journal Portal",
    client: "BioMed Research Institute",
    category: "CMS Development",
    year: "2025",
    tagline: "Custom Open Journal Systems (OJS) portal with automated peer-review workflows.",
    description:
      "Bespoke OJS 3.x theme design, DOI and Crossref indexing configuration, and secure database migration for a high-impact peer-reviewed medical publication.",
    impactMetrics: [
      { label: "Annual Submissions", value: "2,500+" },
      { label: "Citation Indexing", value: "100% Crossref" },
    ],
    tags: ["PHP", "OJS 3", "MySQL", "Custom Theme"],
    color: "#242428",
    featured: true,
  },
  {
    id: "proj-4",
    slug: "luxury-ecommerce-store",
    title: "Modern E-Commerce Storefront",
    client: "Aura Lifestyle",
    category: "E-Commerce",
    year: "2025",
    tagline: "High-converting online store with seamless multi-currency checkout.",
    description:
      "Modern e-commerce platform built with responsive interfaces, optimized performance, frictionless checkout funnels, and integrated payment gateways.",
    impactMetrics: [
      { label: "Conversion Rate", value: "+64%" },
      { label: "Page Load Speed", value: "0.5s" },
    ],
    tags: ["Shopify", "Next.js", "Tailwind CSS", "Stripe"],
    color: "#3D3D45",
    featured: true,
  },
  {
    id: "proj-5",
    slug: "corporate-agency-platform",
    title: "Winhub Corporate Platform",
    client: "Apex Financial",
    category: "Website Development",
    year: "2026",
    tagline: "Modern responsive corporate website with sub-second performance.",
    description:
      "Designed and developed a corporate web platform communicating brand authority, featuring interactive spatial components and full search engine optimization.",
    impactMetrics: [
      { label: "Google PageSpeed", value: "99/100" },
      { label: "Organic Inquiries", value: "+180%" },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "#FF7120",
    featured: true,
  },
  {
    id: "proj-6",
    slug: "cross-platform-mobile-app",
    title: "Health & Fitness Mobile App",
    client: "PulseFit",
    category: "Mobile Applications",
    year: "2025",
    tagline: "Feature-rich cross-platform iOS and Android application with real-time tracking.",
    description:
      "Built a fluid, responsive mobile experience for iOS and Android with live activity tracking, push notifications, and seamless user onboarding.",
    impactMetrics: [
      { label: "Active Installs", value: "45,000+" },
      { label: "App Store Rating", value: "4.9/5.0" },
    ],
    tags: ["Flutter", "Dart", "Firebase", "REST APIs"],
    color: "#1A1A20",
    featured: true,
  },
];

export const BLOG_ARTICLES: InsightArticle[] = [
  {
    id: "blog-1",
    slug: "building-modern-web-applications-nextjs",
    title: "Building Scalable Modern Web Applications with Next.js & React",
    date: "November 2026",
    readTime: "5 min read",
    category: "Web Development",
    excerpt:
      "Explore how modern React architecture and Next.js App Router empower businesses to deliver blazing fast, responsive web applications.",
    author: {
      name: "Winhub Engineering Team",
      role: "Core Web Architects",
    },
  },
  {
    id: "blog-2",
    slug: "ai-agents-business-process-automation",
    title: "How Autonomous AI Agents Are Transforming Business Workflow Automation",
    date: "October 2026",
    readTime: "6 min read",
    category: "Artificial Intelligence",
    excerpt:
      "A practical guide to implementing AI agents that understand user requirements, connect to internal APIs, and automate operational workflows.",
    author: {
      name: "Winhub AI Lab",
      role: "AI & Automation Specialists",
    },
  },
  {
    id: "blog-3",
    slug: "optimizing-ojs-academic-publishing",
    title: "Best Practices for Open Journal Systems (OJS) Setup, Themes & Indexing",
    date: "September 2026",
    readTime: "7 min read",
    category: "Software Development",
    excerpt:
      "Key considerations for universities and scholarly publishers when configuring OJS themes, Crossref DOI indexing, and peer-review workflows.",
    author: {
      name: "Winhub Publishing Group",
      role: "OJS Specialists",
    },
  },
  {
    id: "blog-4",
    slug: "technical-seo-core-web-vitals-guide",
    title: "Technical SEO & Core Web Vitals: Ranking Higher with Performance",
    date: "August 2026",
    readTime: "4 min read",
    category: "Digital Marketing",
    excerpt:
      "Learn how website performance optimization, schema markup, and clean code architecture drive long-term organic search dominance.",
    author: {
      name: "Winhub Marketing Team",
      role: "Growth & SEO Strategists",
    },
  },
];


export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  projectType: string;
}

export const STATISTICS_DATA = [
  {
    id: "projects",
    value: "100+",
    numericValue: 100,
    suffix: "+",
    label: "Projects Completed",
    description: "Enterprise web platforms and applications deployed globally.",
  },
  {
    id: "uptime",
    value: "5+ Yrs",
    numericValue: 5,
    suffix: "+ Yrs",
    label: "Years Experience",
    description: "Hands-on engineering across startups, educational institutes, and enterprises.",
  },
  {
    id: "valuation",
    value: "99.9%",
    numericValue: 99.9,
    suffix: "%",
    label: "Client Satisfaction",
    description: "High-retention client partnerships and reliable post-launch maintenance.",
  },
  {
    id: "awards",
    value: "24/7",
    numericValue: 24,
    suffix: "/7",
    label: "Technical Support",
    description: "Dedicated SLA maintenance, security updates, and performance tuning.",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Winhub Solutions delivered our enterprise portal with flawless execution. Their technical depth in modern web development and prompt communication made our product launch an outstanding success.",
    author: "Rajesh Rao",
    role: "Director of Technology",
    company: "Apex Enterprise Systems",
    rating: 5,
    projectType: "Enterprise Web Application",
  },
  {
    id: "test-2",
    quote:
      "The custom OJS journal platform engineered by Winhub Solutions completely streamlined our peer-review and Crossref DOI indexing workflows. Exceptional reliability and support.",
    author: "Dr. K. Srinivas",
    role: "Chief Editor",
    company: "BioMed Research Publications",
    rating: 5,
    projectType: "OJS Academic Platform",
  },
  {
    id: "test-3",
    quote:
      "Their AI agent integration saved our operational team hundreds of manual hours every month. Winhub Solutions is our long-term technology partner for all digital initiatives.",
    author: "Ananya Mehta",
    role: "VP of Digital Operations",
    company: "Nexus Growth Tech",
    rating: 5,
    projectType: "AI Workflow Automation",
  },
];

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: "ai-agent-guide",
    slug: "what-is-an-ai-agent",
    title: "What Is an AI Agent? Architecture, Autonomous Workflows & Real-World Use Cases",
    date: "November 2026",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    excerpt:
      "An AI Agent is a software system that can observe its environment, process information, and take actions to achieve specific goals. Discover the three-step perception loop and agent types.",
    author: {
      name: "Winhub AI Lab",
      role: "Lead AI Architect",
    },
  },
  {
    id: "nextjs-web-apps",
    slug: "building-modern-web-applications-nextjs",
    title: "Building Scalable Modern Web Applications with Next.js & React Server Components",
    date: "November 2026",
    readTime: "5 min read",
    category: "Web Development",
    excerpt:
      "Explore how modern React architecture and Next.js App Router empower businesses to deliver blazing fast, responsive web applications with sub-second TTFB.",
    author: {
      name: "Winhub Web Team",
      role: "Senior Frontend Engineer",
    },
  },
  {
    id: "ojs-academic-guide",
    slug: "optimizing-ojs-academic-publishing",
    title: "Best Practices for Open Journal Systems (OJS) Setup, Themes & DOI Indexing",
    date: "October 2026",
    readTime: "7 min read",
    category: "Software Development",
    excerpt:
      "Key technical considerations for universities and scholarly publishers when configuring OJS themes, Crossref DOI indexing, and peer-review workflows.",
    author: {
      name: "Winhub Publishing Group",
      role: "OJS Specialist",
    },
  },
];


export const OJS_FAQS = [
  {
    q: "What is OJS (Open Journal Systems)?",
    a: "OJS is an open-source journal management and publishing platform used by universities, research institutions, and publishers to manage the full journal workflow—from submission to publication.",
  },
  {
    q: "What services does Winhub Solutions provide for OJS?",
    a: "Winhub Solutions offers complete OJS services including installation & setup, theme design & customization, plugin development, version upgrades & migration, journal workflow configuration, performance & security optimization, and technical support & maintenance.",
  },
  {
    q: "Can you install OJS on our hosting or server?",
    a: "Yes. We can install and configure OJS on shared hosting, VPS / dedicated servers, and cloud servers (AWS, DigitalOcean, etc.).",
  },
  {
    q: "Do you support OJS upgrades (old to latest version)?",
    a: "Yes. We handle safe upgrades from older OJS versions to the latest release with proper backups, testing, and data protection.",
  },
  {
    q: "Will you migrate our old journal website to OJS?",
    a: "Yes. We can migrate articles, issues, users, categories/sections, PDFs, and media files.",
  },
  {
    q: "Can you design a custom OJS theme as per our branding?",
    a: "Absolutely. We create modern, responsive OJS themes with mobile-friendly layout, fast loading, clean UI/UX, matching your college/university or publisher branding.",
  },
  {
    q: "Can you add new features or custom modules in OJS?",
    a: "Yes. We build custom features such as custom submission steps, author dashboard improvements, advanced search filters, homepage layouts, special issue sections, and custom email templates.",
  },
  {
    q: "Do you provide DOI integration in OJS?",
    a: "Yes. We can configure DOI setup with Crossref DOI registration, auto-generation, and metadata configuration.",
  },
  {
    q: "Can you integrate ORCID in OJS?",
    a: "Yes. We can enable ORCID integration so authors can link their ORCID ID during submission and publishing.",
  },
  {
    q: "Do you provide OJS security and backup setup?",
    a: "Yes. We improve journal security through SSL setup, secure permissions & hardening, regular backups (daily/weekly/monthly), and malware protection guidance.",
  },
  {
    q: "Why is my OJS website slow?",
    a: "Common reasons include low server resources, large database size, heavy theme or plugins, or missing caching configuration. Winhub Solutions optimizes OJS performance for maximum speed.",
  },
  {
    q: "Can OJS support multiple journals on one installation?",
    a: "Yes. OJS allows multi-journal hosting, meaning you can manage multiple journals under a single OJS setup.",
  },
  {
    q: "Does OJS support peer review workflow?",
    a: "Yes. OJS supports single-blind, double-blind, and open review workflows.",
  },
  {
    q: "Can you customize the submission and review process?",
    a: "Yes. We can configure your OJS workflow based on your journal rules including submission checklists, review forms, editorial decision steps, and automated notifications.",
  },
  {
    q: "Do you provide OJS maintenance and support services?",
    a: "Yes. We offer ongoing support including bug fixing, updates & upgrades, plugin monitoring, theme changes, and backup monitoring.",
  },
  {
    q: "Can you integrate payment/subscription in OJS?",
    a: "Yes. We can help set up paid journal subscriptions, article processing charges (APC), and payment gateway configuration.",
  },
  {
    q: "How long does OJS setup take?",
    a: "Basic setup: 1–2 days; Theme customization: 3–7 days; Full migration + customization: 1–3 weeks.",
  },
  {
    q: "How much does OJS development cost?",
    a: "Cost depends on theme complexity, custom features, migration effort, and hosting work. We provide a clear quote after understanding your requirements.",
  },
  {
    q: "Can you host our OJS website?",
    a: "Yes, we can help with hosting setup and deployment on secure servers with backup and maintenance options.",
  },
  {
    q: "How do we get started with Winhub Solutions for OJS?",
    a: "Simply contact us with your journal website link, OJS version, required design/customization details, and migration or feature needs.",
  },
];

export const ANGULAR_FAQS = [
  {
    q: "What is Angular used for?",
    a: "Angular is a powerful front-end framework used to build fast, scalable, and dynamic web applications, especially dashboards, portals, and enterprise systems.",
  },
  {
    q: "Why choose Angular for web development?",
    a: "Angular offers strong TypeScript support, structured modular architecture, reusable components, and high performance for enterprise applications.",
  },
  {
    q: "Does Winhub Solutions provide Angular development services?",
    a: "Yes. Winhub Solutions provides end-to-end Angular development services including UI development, API integration, SPA development, and enterprise dashboards.",
  },
  {
    q: "Can you build Single Page Applications (SPA) in Angular?",
    a: "Yes, we build high-performance Angular SPAs that load quickly and deliver a smooth user experience.",
  },
  {
    q: "Do you provide Angular admin panels and dashboards?",
    a: "Yes. We develop admin panels, CRM dashboards, ERP interfaces, and analytics/reporting portals in Angular.",
  },
  {
    q: "Can you integrate APIs into Angular applications?",
    a: "Absolutely. We integrate REST APIs, third-party APIs, payment gateways, and authentication systems.",
  },
  {
    q: "Do you offer Angular migration and upgrade services?",
    a: "Yes. We help upgrade older Angular versions to the latest release and migrate legacy front-end applications into modern Angular architecture.",
  },
  {
    q: "Is Angular good for enterprise applications?",
    a: "Yes. Angular is one of the best choices for enterprise development because it supports scalability, structured modules, and long-term maintainability.",
  },
  {
    q: "How long does Angular development take?",
    a: "Basic UI screens: 1–2 weeks; Dashboard web app: 3–6 weeks; Enterprise system: 6+ weeks.",
  },
  {
    q: "Can Winhub Solutions provide Angular maintenance support?",
    a: "Yes. We offer ongoing support including bug fixing, performance optimization, new feature development, security updates, and version upgrades.",
  },
  {
    q: "Do you build responsive Angular websites?",
    a: "Yes, all our Angular applications are mobile-friendly and responsive, optimized for all screen sizes.",
  },
  {
    q: "How can I hire Angular developers from Winhub Solutions?",
    a: "Simply contact us with your project requirements. We will share the best solution plan, timeline, and cost estimate.",
  },
];
