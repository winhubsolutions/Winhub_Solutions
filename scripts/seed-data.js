const { Pool } = require('pg');

const pool = new Pool({
  host: '44.218.206.133',
  port: 5432,
  user: 'neondb_owner',
  password: 'npg_FmYh0t1uXLSP',
  database: 'neondb',
  ssl: {
    rejectUnauthorized: false,
    servername: 'ep-red-sun-bc56t67s-pooler.c-16.us-east-1.aws.neon.tech',
  },
});

async function seed() {
  console.log('Connecting to Neon PostgreSQL...');

  // 1. Seed Technologies
  console.log('Seeding Technologies...');
  await pool.query('DELETE FROM technologies;');
  
  const technologies = [
    { name: 'React', category: 'frontend', icon: 'react', desc: 'Component-driven reactive library for modern, fluid user interfaces.', featured: true, order: 1 },
    { name: 'Next.js 15', category: 'frontend', icon: 'nextjs', desc: 'The React Framework for production with App Router and Server Components.', featured: true, order: 2 },
    { name: 'Angular', category: 'frontend', icon: 'angular', desc: 'Enterprise-grade TypeScript framework for scalable, maintainable SPAs.', featured: true, order: 3 },
    { name: 'Vue.js', category: 'frontend', icon: 'vue', desc: 'Progressive JavaScript framework for building reactive front-end applications.', featured: true, order: 4 },
    { name: 'TypeScript', category: 'frontend', icon: 'typescript', desc: 'Strictly typed superset of JavaScript ensuring type safety across the stack.', featured: true, order: 5 },
    { name: 'JavaScript (ES2024)', category: 'frontend', icon: 'javascript', desc: 'High-performance modern ECMAScript standard scripting for browsers and runtime engines.', featured: false, order: 6 },
    { name: 'HTML5 & CSS3', category: 'frontend', icon: 'html5', desc: 'Semantic, accessible, and high-performance markup and styling standards.', featured: false, order: 7 },
    { name: 'Tailwind CSS', category: 'frontend', icon: 'tailwind', desc: 'Utility-first CSS framework for rapid and modern design system implementations.', featured: true, order: 8 },
    { name: 'Three.js & WebGL', category: 'frontend', icon: 'threejs', desc: 'Hardware-accelerated 3D graphics, interactive canvas scenes, and shaders.', featured: true, order: 9 },

    { name: 'Node.js', category: 'backend', icon: 'nodejs', desc: 'Event-driven, asynchronous I/O runtime for high-throughput server backends.', featured: true, order: 10 },
    { name: 'Express.js', category: 'backend', icon: 'express', desc: 'Fast, unopinionated, minimalist web framework for building REST APIs.', featured: true, order: 11 },
    { name: 'Python', category: 'backend', icon: 'python', desc: 'Versatile language for backend services, automation pipelines, and machine learning.', featured: true, order: 12 },
    { name: 'PHP 8.3', category: 'backend', icon: 'php', desc: 'Modern server-side language powering CMS engines, scholarly platforms, and APIs.', featured: true, order: 13 },
    { name: 'Java', category: 'backend', icon: 'java', desc: 'Robust object-oriented programming language for enterprise microservices.', featured: false, order: 14 },
    { name: '.NET Core', category: 'backend', icon: 'dotnet', desc: 'Cross-platform, high-performance enterprise application framework.', featured: false, order: 15 },

    { name: 'PostgreSQL', category: 'database', icon: 'postgresql', desc: 'Advanced open-source relational database with ACID compliance and JSON support.', featured: true, order: 20 },
    { name: 'Neon Serverless Postgres', category: 'database', icon: 'neon', desc: 'Serverless PostgreSQL with instant autoscaling, branching, and connection pooling.', featured: true, order: 21 },
    { name: 'MySQL', category: 'database', icon: 'mysql', desc: 'Reliable, widely adopted open-source relational database management system.', featured: false, order: 22 },
    { name: 'MongoDB', category: 'database', icon: 'mongodb', desc: 'Document-based distributed database designed for modern unstructured applications.', featured: true, order: 23 },
    { name: 'Microsoft SQL Server', category: 'database', icon: 'mssql', desc: 'Enterprise relational database management system with advanced security.', featured: false, order: 24 },

    { name: 'Payload CMS 3.x', category: 'cms', icon: 'payload', desc: 'Official code-first headless CMS natively integrated into Next.js App Router.', featured: true, order: 30 },
    { name: 'Open Journal Systems (OJS)', category: 'cms', icon: 'ojs', desc: 'World-leading open-source journal management and scholarly publishing system.', featured: true, order: 31 },
    { name: 'WordPress', category: 'cms', icon: 'wordpress', desc: 'Flexible content platform for publications, corporate sites, and portals.', featured: false, order: 32 },
    { name: 'Drupal', category: 'cms', icon: 'drupal', desc: 'Enterprise digital experience platform for structured high-security content.', featured: false, order: 33 },

    { name: 'Amazon Web Services (AWS)', category: 'cloud', icon: 'aws', desc: 'Scalable cloud infrastructure, S3 storage, compute instances, and cloud networking.', featured: true, order: 40 },
    { name: 'Vercel Edge Platform', category: 'cloud', icon: 'vercel', desc: 'Global serverless edge deployment platform with instant zero-cold-start delivery.', featured: true, order: 41 },
    { name: 'Docker', category: 'cloud', icon: 'docker', desc: 'Containerization standard ensuring reproducible dev and production deployments.', featured: true, order: 42 },
    { name: 'Cloudflare', category: 'cloud', icon: 'cloudflare', desc: 'Global CDN, DDoS mitigation, DNS management, and edge security proxying.', featured: false, order: 43 },
    { name: 'Linux Server Administration', category: 'cloud', icon: 'linux', desc: 'Hardened Ubuntu/Debian production servers, reverse proxies, and system daemons.', featured: true, order: 44 },

    { name: 'Autonomous AI Agents', category: 'ai', icon: 'ai-agents', desc: 'Autonomous reasoning agents orchestrating tools, code, and system operations.', featured: true, order: 50 },
    { name: 'Model Context Protocol (MCP)', category: 'ai', icon: 'mcp', desc: 'Open standard protocol enabling AI models to interact with local tools and DBs.', featured: true, order: 51 },
    { name: 'LLM Integration (Claude, Gemini, GPT)', category: 'ai', icon: 'llm', desc: 'State-of-the-art foundation models integrated into business logic and workflows.', featured: true, order: 52 },
    { name: 'Workflow Automation', category: 'ai', icon: 'automation', desc: 'End-to-end intelligent data pipelines, automated testing, and synchronization.', featured: true, order: 53 },
  ];

  for (const t of technologies) {
    await pool.query(
      `INSERT INTO technologies (name, category, icon_identifier, description, featured, "order", created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW());`,
      [t.name, t.category, t.icon, t.desc, t.featured, t.order]
    );
  }
  console.log(`Inserted ${technologies.length} Technologies!`);

  // 2. Seed Services (All 18)
  console.log('Seeding Services...');
  await pool.query('DELETE FROM services;');

  const services = [
    {
      title: "Website Design & Development",
      slug: "website-design-development",
      category: "web-development",
      featured: true,
      short: "Modern, responsive, high-performance websites engineered for brand authority and measurable business conversions.",
      h1: "Website Design & Development Services in India",
    },
    {
      title: "Custom Web Applications",
      slug: "custom-web-applications",
      category: "custom-software",
      featured: true,
      short: "Tailored, scalable cloud web applications built with modern architectures for complex business workflows.",
      h1: "Custom Web Application Development",
    },
    {
      title: "Node.js Development",
      slug: "nodejs-development",
      category: "web-development",
      featured: true,
      short: "High-throughput asynchronous microservices, REST/GraphQL APIs, and real-time backend systems.",
      h1: "Node.js Backend & API Development Services",
    },
    {
      title: "React.js Development",
      slug: "reactjs-development",
      category: "web-development",
      featured: true,
      short: "Fast, dynamic, and component-driven SPAs and interactive web frontends engineered in React 19.",
      h1: "React.js Front-End Engineering Services",
    },
    {
      title: "Angular Development",
      slug: "angular-development",
      category: "web-development",
      featured: true,
      short: "Enterprise Single Page Applications built with strictly typed Angular, RxJS, and clean architecture.",
      h1: "Enterprise Angular Development Services",
    },
    {
      title: "AI Agent Development",
      slug: "ai-agent-development",
      category: "ai-automation",
      featured: true,
      short: "Autonomous AI agents, tool-calling systems, MCP servers, and intelligent multi-agent automation.",
      h1: "Autonomous AI Agent Development & Integration",
    },
    {
      title: "AI Automation Solutions",
      slug: "ai-automation-solutions",
      category: "ai-automation",
      featured: true,
      short: "Enterprise workflow automation, intelligent document processing, and generative AI integrations.",
      h1: "AI-Powered Business Workflow Automation",
    },
    {
      title: "Open Journal Systems (OJS) Development",
      slug: "open-journal-systems",
      category: "scholarly-publishing",
      featured: true,
      short: "End-to-end OJS journal setup, custom themes, indexing optimization, Crossref DOI, and editorial workflows.",
      h1: "Open Journal Systems (OJS) Setup, Theme & Indexing Services",
    },
    {
      title: "Custom Software Development",
      slug: "custom-software-development",
      category: "custom-software",
      featured: true,
      short: "Full-cycle bespoke enterprise software engineering designed to solve specific operational bottlenecks.",
      h1: "Custom Enterprise Software Engineering",
    },
    {
      title: "E-Commerce Solutions",
      slug: "ecommerce-solutions",
      category: "web-development",
      featured: true,
      short: "High-converting online stores, multi-currency payment gateways, and scalable inventory backends.",
      h1: "Custom E-Commerce Store & Marketplace Development",
    },
    {
      title: "CMS Development & Headless Solutions",
      slug: "cms-development",
      category: "web-development",
      featured: true,
      short: "Headless CMS implementations with Payload CMS, WordPress, and custom decoupled content architectures.",
      h1: "Modern CMS & Headless Content Management Systems",
    },
    {
      title: "API Development & Integration",
      slug: "api-development-integration",
      category: "custom-software",
      featured: false,
      short: "Secure, documented RESTful and GraphQL APIs connecting third-party platforms, payments, and legacy systems.",
      h1: "REST & GraphQL API Engineering and System Integration",
    },
    {
      title: "Cloud Deployment & DevOps",
      slug: "cloud-deployment-devops",
      category: "custom-software",
      featured: false,
      short: "Automated CI/CD pipelines, Docker containerization, AWS cloud architecture, and zero-downtime hosting.",
      h1: "DevOps Consulting & Hardened Cloud Architecture",
    },
    {
      title: "Mobile App Development",
      slug: "mobile-app-development",
      category: "mobile-development",
      featured: false,
      short: "Cross-platform iOS and Android mobile apps engineered with React Native and modern native bridges.",
      h1: "Mobile Application Development for iOS & Android",
    },
    {
      title: "UI/UX Design & Prototyping",
      slug: "ui-ux-design",
      category: "design-ux",
      featured: true,
      short: "Research-backed user interfaces, wireframes, interactive Figma design systems, and design tokens.",
      h1: "Product UI/UX Design & Design Systems",
    },
    {
      title: "SEO & Digital Marketing",
      slug: "seo-digital-marketing",
      category: "marketing-seo",
      featured: false,
      short: "Technical SEO, schema markup, performance optimization, and organic visibility strategies.",
      h1: "Technical SEO & Digital Marketing Strategy",
    },
    {
      title: "Website Maintenance & Support",
      slug: "website-maintenance-support",
      category: "web-development",
      featured: false,
      short: "24/7 uptime monitoring, security patching, speed optimization, and ongoing functional updates.",
      h1: "Website Maintenance, Security & Technical Support",
    },
    {
      title: "Database Design & Optimization",
      slug: "database-design-optimization",
      category: "custom-software",
      featured: false,
      short: "Relational data modeling, index tuning, query optimization, and high-availability database setups.",
      h1: "PostgreSQL Database Architecture & Query Tuning",
    },
  ];

  for (const s of services) {
    await pool.query(
      `INSERT INTO services (title, slug, category, featured, short_description, h1_heading, seo_meta_title, seo_meta_description, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW());`,
      [s.title, s.slug, s.category, s.featured, s.short, s.h1, `${s.title} · Winhub Solutions`, s.short]
    );
  }
  console.log(`Inserted ${services.length} Services!`);

  // 3. Seed Global Site Settings
  console.log('Seeding Global Site Settings...');
  await pool.query('DELETE FROM site_settings;');
  await pool.query(
    `INSERT INTO site_settings (
      id, company_name, tagline, headquarters, registered_address,
      contacts_email, contacts_phone, contacts_whatsapp, telemetry_status,
      social_links_linkedin, social_links_twitter, social_links_github, social_links_instagram,
      created_at, updated_at
    ) VALUES (
      1, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW(), NOW()
    );`,
    [
      'Winhub Solutions',
      'WE BUILD THE WEB. YOU BUILD THE FUTURE.',
      'Warangal, Telangana, India',
      'Winhub Solutions, Kakatiya IT Park, Warangal, Telangana 506001, India',
      'contact@winhubsolutions.in',
      '+91 99887 76655',
      '+91 99887 76655',
      'ONLINE · NEON POSTGRESQL 18.6 · NEXT.JS 15',
      'https://linkedin.com/company/winhub-solutions',
      'https://x.com/winhubsolutions',
      'https://github.com/winhub-solutions',
      'https://instagram.com/winhubsolutions',
    ]
  );
  console.log('Global Site Settings seeded!');

  // 4. Seed FAQs
  console.log('Seeding FAQs...');
  await pool.query('DELETE FROM faqs;');
  const faqs = [
    { q: "What web development technologies does Winhub Solutions specialize in?", a: "We specialize in modern enterprise web development using Next.js 15, React 19, Angular, Node.js, TypeScript, PostgreSQL, and Payload CMS 3.x.", cat: "general", order: 1 },
    { q: "Do you offer full setup and theme customization for Open Journal Systems (OJS)?", a: "Yes, we are a leading OJS service provider in India. We handle OJS 3.x installations, responsive custom theme development, Crossref DOI registration, and scholarly indexing.", cat: "ojs", order: 2 },
    { q: "Can Winhub Solutions develop custom AI agents and workflow automations?", a: "Yes, we build autonomous AI agents with Model Context Protocol (MCP), tool-calling capabilities, vector databases, and integrations with foundation models.", cat: "ai", order: 3 },
    { q: "What is your typical project delivery lifecycle?", a: "Our process includes Architecture Discovery, UI/UX Wireframing, Agile Sprint Implementation, Automated Testing, and Hardened Cloud Deployment with ongoing support.", cat: "support", order: 4 },
  ];
  for (const f of faqs) {
    await pool.query(
      `INSERT INTO faqs (question, answer, category, "order", created_at, updated_at)
       VALUES ($1, $2, $3, $4, NOW(), NOW());`,
      [f.q, f.a, f.cat, f.order]
    );
  }
  console.log(`Inserted ${faqs.length} FAQs!`);

  // 5. Seed Testimonials
  console.log('Seeding Testimonials...');
  await pool.query('DELETE FROM testimonials;');
  const testimonials = [
    { author: "Dr. Rajeshwar Rao", pos: "Editor-in-Chief", comp: "Asian Journal of Applied Sciences", quote: "Winhub Solutions transformed our academic journal with an outstanding OJS 3.x upgrade and responsive theme. Our submissions increased significantly.", rating: 5, featured: true },
    { author: "Vikram Reddy", pos: "CTO", comp: "AstraLogix Enterprise", quote: "Their team built a high-throughput React & Node.js platform that handles hundreds of thousands of daily requests with sub-second latency.", rating: 5, featured: true },
    { author: "Priya Sharma", pos: "VP Product", comp: "Nexus FinTech Labs", quote: "The AI agent automation designed by Winhub cut our operational ticket triage time by 75%. Exceptional engineering precision.", rating: 5, featured: true },
  ];
  for (const t of testimonials) {
    await pool.query(
      `INSERT INTO testimonials (author, position, company, quote, rating, featured, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW());`,
      [t.author, t.pos, t.comp, t.quote, t.rating, t.featured]
    );
  }
  console.log(`Inserted ${testimonials.length} Testimonials!`);

  // 6. Seed Projects
  console.log('Seeding Projects...');
  await pool.query('DELETE FROM projects;');
  const projects = [
    { title: "Enterprise FinTech Platform", slug: "enterprise-fintech-platform", client: "Nexus Capital", cat: "Web Applications", year: "2024", short: "High-performance trading and portfolio intelligence portal built on Next.js, Node.js, and Neon PostgreSQL.", featured: true },
    { title: "International Scholarly Journal Portal", slug: "international-scholarly-journal", client: "Academic Press International", cat: "CMS Development", year: "2024", short: "Custom OJS 3.4 publishing platform with Crossref automated DOI issuance and global researcher indexing.", featured: true },
    { title: "Autonomous Customer Support AI Agent", slug: "autonomous-customer-support-ai", client: "OmniChannel Retail", cat: "AI & Automation", year: "2024", short: "Multi-agent LLM workflow reducing response latency from hours to seconds with live database integrations.", featured: true },
    { title: "Modern Multi-Vendor Marketplace", slug: "modern-multi-vendor-marketplace", client: "UrbanCart Global", cat: "E-Commerce", year: "2024", short: "Scalable e-commerce engine with sub-second catalog search, Stripe/Razorpay processing, and inventory sync.", featured: true },
  ];
  for (const p of projects) {
    await pool.query(
      `INSERT INTO projects (title, slug, client, category, year, short_description, featured, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW());`,
      [p.title, p.slug, p.client, p.cat, p.year, p.short, p.featured]
    );
  }
  console.log(`Inserted ${projects.length} Projects!`);

  console.log('--- ALL SEEDING COMPLETED SUCCESSFULLY ---');
  await pool.end();
}

seed().catch(err => {
  console.error('Seeding failed:', err);
  pool.end();
  process.exit(1);
});

