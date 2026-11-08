export interface ServiceFAQItem {
  id: string;
  category: string;
  serviceTitle: string;
  serviceSlug?: string;
  iconName: string;
  question: string;
  answer: string;
}

export interface ServiceCategoryMeta {
  id: string;
  title: string;
  shortLabel: string;
  iconName: string;
  serviceSlug?: string;
  description: string;
}

export const FAQ_CATEGORIES: ServiceCategoryMeta[] = [
  {
    id: "web-dev",
    title: "Website Design & Development",
    shortLabel: "Web Design",
    iconName: "Globe",
    serviceSlug: "website-design-development",
    description: "Modern websites, Next.js/React engineering, responsive design, speed optimization & CMS setups.",
  },
  {
    id: "web-apps",
    title: "Custom Web Applications & SaaS",
    shortLabel: "Web Apps & SaaS",
    iconName: "Layers",
    serviceSlug: "custom-web-applications",
    description: "Enterprise web applications, management portals, SaaS platforms, Node.js, React & Angular backends.",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    shortLabel: "Mobile Apps",
    iconName: "Smartphone",
    serviceSlug: "mobile-app-development",
    description: "iOS, Android, React Native & Flutter mobile applications with complete App Store deployment.",
  },
  {
    id: "ai-automation",
    title: "AI Agents & Intelligent Automation",
    shortLabel: "AI & Automation",
    iconName: "Cpu",
    serviceSlug: "ai-agent-development",
    description: "Autonomous AI agents, MCP servers, enterprise LLM pipelines, RAG systems & workflow automation.",
  },
  {
    id: "ojs-publishing",
    title: "OJS Scholarly & Academic Publishing",
    shortLabel: "OJS Publishing",
    iconName: "BookOpen",
    serviceSlug: "ojs-development",
    description: "Turnkey Open Journal Systems setup, bespoke academic themes, Crossref DOI, and journal migrations.",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design & Prototyping",
    shortLabel: "UI/UX Design",
    iconName: "Palette",
    serviceSlug: "uiux-design",
    description: "Research-driven user interfaces, Figma design systems, interactive prototypes & usability optimization.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    shortLabel: "E-Commerce",
    iconName: "ShoppingBag",
    serviceSlug: "ecommerce-development",
    description: "Scalable online storefronts, Shopify, WooCommerce, payment gateways & automated inventory sync.",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Technical SEO",
    shortLabel: "Marketing & SEO",
    iconName: "TrendingUp",
    serviceSlug: "digital-marketing",
    description: "Technical SEO audits, Core Web Vitals optimization, Google Ads (PPC) & organic search dominance.",
  },
  {
    id: "partnership",
    title: "Partnership, Pricing & SLAs",
    shortLabel: "Partnership & SLAs",
    iconName: "ShieldCheck",
    serviceSlug: "contact",
    description: "Engagement models, bilateral NDAs, 100% IP code ownership, maintenance SLAs & global offshore delivery.",
  },
];

export const ALL_SERVICES_FAQS: ServiceFAQItem[] = [
  // 1. Website Design & Modern Development
  {
    id: "web-1",
    category: "Website Design & Development",
    serviceTitle: "Website Design & Development",
    serviceSlug: "website-design-development",
    iconName: "Globe",
    question: "How long does it take to design and develop a custom website?",
    answer:
      "A typical custom corporate website takes 2 to 4 weeks depending on the number of unique page layouts, interactive components, and content readiness. Large multi-language portals or complex web platforms with custom API integrations typically take 4 to 8 weeks. We deliver working previews every sprint so you can track progress continuously.",
  },
  {
    id: "web-2",
    category: "Website Design & Development",
    serviceTitle: "Website Design & Development",
    serviceSlug: "website-design-development",
    iconName: "Globe",
    question: "Will my website be mobile-friendly and responsive across all devices?",
    answer:
      "Yes. Every platform we build follows a strict mobile-first engineering approach. We rigorously test across physical smartphones, tablets, laptops, and ultra-wide desktop monitors to ensure fluid typography, adaptive navigation, and flawless user experiences.",
  },
  {
    id: "web-3",
    category: "Website Design & Development",
    serviceTitle: "Website Design & Development",
    serviceSlug: "website-design-development",
    iconName: "Globe",
    question: "Can I update the website content, text, and images myself after launch?",
    answer:
      "Absolutely. We integrate intuitive content management solutions (such as Payload CMS, headless CMSs, or custom admin control panels) allowing your non-technical team to edit text, update case studies, upload blog articles, and modify banners without writing a single line of code.",
  },
  {
    id: "web-4",
    category: "Website Design & Development",
    serviceTitle: "Next.js Development",
    serviceSlug: "nextjs-development",
    iconName: "Globe",
    question: "Why is Next.js superior to standard React or WordPress for business websites?",
    answer:
      "Next.js provides hybrid Server-Side Rendering (SSR) and Static Site Generation (SSG). This delivers instant sub-second page loads, near-perfect Google PageSpeed scores, zero security vulnerabilities from PHP plugins, and native search engine indexing out of the box.",
  },
  {
    id: "web-5",
    category: "Website Design & Development",
    serviceTitle: "Next.js Development",
    serviceSlug: "nextjs-development",
    iconName: "Globe",
    question: "What is Incremental Static Regeneration (ISR) and how does it help?",
    answer:
      "ISR allows Next.js to pre-render static HTML pages at build time and periodically revalidate individual pages in the background when content changes in the CMS—without needing a full recompile or server downtime.",
  },
  {
    id: "web-6",
    category: "Website Design & Development",
    serviceTitle: "Gatsby Development",
    serviceSlug: "gatsby-development",
    iconName: "Globe",
    question: "When should we choose Gatsby for our web presence?",
    answer:
      "Gatsby is ideal for content-heavy marketing websites, documentation hubs, and blogs where content is sourced from headless CMSs via GraphQL. It compiles everything into static assets hosted on edge CDNs for maximum security and global speed.",
  },

  // 2. Custom Web Applications & Enterprise Software
  {
    id: "app-1",
    category: "Custom Web Applications & SaaS",
    serviceTitle: "Custom Web Applications",
    serviceSlug: "custom-web-applications",
    iconName: "Layers",
    question: "What types of custom web applications do you build?",
    answer:
      "We engineer multi-tenant SaaS platforms, customer portals, custom ERP/CRM systems, internal operations management dashboards, inventory tracking systems, automated billing software, and custom booking engines tailored to your precise workflow requirements.",
  },
  {
    id: "app-2",
    category: "Custom Web Applications & SaaS",
    serviceTitle: "Custom Web Applications",
    serviceSlug: "custom-web-applications",
    iconName: "Layers",
    question: "Can the web application integrate with our existing accounting, CRM, or ERP software?",
    answer:
      "Yes. We specialize in building secure REST and GraphQL API integrations connecting your custom web platform with SAP, Salesforce, HubSpot, Zoho, Tally, QuickBooks, payment gateways, and custom on-premise databases.",
  },
  {
    id: "app-3",
    category: "Custom Web Applications & SaaS",
    serviceTitle: "Custom Web Applications",
    serviceSlug: "custom-web-applications",
    iconName: "Layers",
    question: "How do you ensure enterprise data security in web applications?",
    answer:
      "We implement granular Role-Based Access Control (RBAC), end-to-end HTTPS/TLS encryption, JWT/OAuth2 session tokens, parameterized database queries to eliminate SQL injections, automated audit logs, and strict OWASP Top-10 compliance.",
  },
  {
    id: "app-4",
    category: "Custom Web Applications & SaaS",
    serviceTitle: "Node.js Development",
    serviceSlug: "nodejs-development",
    iconName: "Layers",
    question: "Why choose Node.js for backend application architecture?",
    answer:
      "Node.js utilizes an asynchronous, non-blocking event-driven I/O model that excels at processing thousands of concurrent connections with low memory overhead. It is ideal for real-time dashboards, microservices, and high-throughput transactional APIs.",
  },
  {
    id: "app-5",
    category: "Custom Web Applications & SaaS",
    serviceTitle: "React.js Development",
    serviceSlug: "reactjs-development",
    iconName: "Layers",
    question: "Can you migrate our legacy web application or Angular/Vue app to React?",
    answer:
      "Yes. We execute smooth, phased migrations—either through micro-frontend architecture or modular component refactoring—ensuring zero business disruption, preserved user data, and immediate performance gains.",
  },
  {
    id: "app-6",
    category: "Custom Web Applications & SaaS",
    serviceTitle: "Angular Development",
    serviceSlug: "angular-development",
    iconName: "Layers",
    question: "When is Angular the recommended framework for enterprise platforms?",
    answer:
      "Angular provides an opinionated, batteries-included framework with strict TypeScript enforcement, robust dependency injection, built-in form validation, and reactive RxJS pipelines. It is the enterprise gold standard for large-scale administrative consoles and banking portals.",
  },
  {
    id: "app-7",
    category: "Custom Web Applications & SaaS",
    serviceTitle: "Custom Software Development",
    serviceSlug: "custom-software-development",
    iconName: "Layers",
    question: "Why should we build custom software instead of paying for commercial SaaS licenses?",
    answer:
      "Commercial SaaS platforms charge steep per-seat monthly subscriptions, restrict your workflow to their rigid features, and trap your business data. Custom software delivers 100% feature alignment, zero perpetual licensing fees, and full ownership of your intellectual property.",
  },

  // 3. Mobile App Development
  {
    id: "mob-1",
    category: "Mobile App Development",
    serviceTitle: "Mobile App Development",
    serviceSlug: "mobile-app-development",
    iconName: "Smartphone",
    question: "Should I build a native app (Kotlin/Swift) or a cross-platform app (Flutter/React Native)?",
    answer:
      "For 90% of business applications, cross-platform frameworks like Flutter or React Native deliver 60fps native-feeling performance from a single shared codebase, cutting development and maintenance costs by 40-50%. If your application requires deep hardware-level integration (e.g., custom Bluetooth sensors or heavy AR processing), we engineer dedicated native apps.",
  },
  {
    id: "mob-2",
    category: "Mobile App Development",
    serviceTitle: "Mobile App Development",
    serviceSlug: "mobile-app-development",
    iconName: "Smartphone",
    question: "Do you handle the entire Apple App Store and Google Play Store submission process?",
    answer:
      "Yes. We manage privacy manifests, developer accounts, build signing, screenshot generation, store listing optimization, and guideline compliance until your app is officially approved and live on both stores.",
  },
  {
    id: "mob-3",
    category: "Mobile App Development",
    serviceTitle: "Android Development",
    serviceSlug: "android-development",
    iconName: "Smartphone",
    question: "Do you develop Android apps using Kotlin and Jetpack Compose?",
    answer:
      "Yes. Our native Android engineering leverages modern Kotlin with Jetpack Compose, Coroutines for asynchronous concurrency, and Material You design guidelines, supporting Android versions back to API 24 (covering 99%+ of global active devices).",
  },
  {
    id: "mob-4",
    category: "Mobile App Development",
    serviceTitle: "iOS Development",
    serviceSlug: "ios-development",
    iconName: "Smartphone",
    question: "What architecture and languages do you use for iOS app development?",
    answer:
      "We develop iOS apps using Swift and SwiftUI with clean MVVM architecture, ensuring high-speed rendering, biometric FaceID authentication, Apple Pay integrations, and adherence to Apple Human Interface Guidelines.",
  },
  {
    id: "mob-5",
    category: "Mobile App Development",
    serviceTitle: "Mobile App Development",
    serviceSlug: "mobile-app-development",
    iconName: "Smartphone",
    question: "Can our mobile app function offline without an active internet connection?",
    answer:
      "Yes. We implement offline-first architectures using local SQLite/WatermelonDB storage. Users can draft records, view cached documents, and perform actions offline; data automatically synchronizes with the cloud backend once connectivity is restored.",
  },

  // 4. AI Agents & Intelligent Automation
  {
    id: "ai-1",
    category: "AI Agents & Intelligent Automation",
    serviceTitle: "AI Agent Development",
    serviceSlug: "ai-agent-development",
    iconName: "Cpu",
    question: "What is an autonomous AI Agent and how is it different from a basic chatbot?",
    answer:
      "A basic chatbot merely matches hardcoded phrases or predicts conversational text. An autonomous AI Agent understands complex business objectives, reasons through multi-step tasks, queries internal databases via Retrieval-Augmented Generation (RAG), and calls external APIs to execute real actions (such as booking appointments, updating CRMs, or issuing refunds).",
  },
  {
    id: "ai-2",
    category: "AI Agents & Intelligent Automation",
    serviceTitle: "AI Agent Development",
    serviceSlug: "ai-agent-development",
    iconName: "Cpu",
    question: "Is our proprietary company data secure when deploying custom AI solutions?",
    answer:
      "Yes. We enforce strict data privacy protocols. We utilize enterprise API tiers where customer prompts are never used for model training, or deploy self-hosted open-weights models (such as LLaMA or Mistral) inside your private Virtual Private Cloud (VPC) with zero external data exposure.",
  },
  {
    id: "ai-3",
    category: "AI Agents & Intelligent Automation",
    serviceTitle: "AI Agent Development",
    serviceSlug: "ai-agent-development",
    iconName: "Cpu",
    question: "What is Model Context Protocol (MCP) and how does Winhub utilize it?",
    answer:
      "Model Context Protocol (MCP) is the open standard that connects AI models directly to real-world development environments, databases, file systems, and business tools. Winhub develops custom MCP servers that allow your AI models to securely read enterprise data and trigger business workflows safely.",
  },
  {
    id: "ai-4",
    category: "AI Agents & Intelligent Automation",
    serviceTitle: "AI Automation",
    serviceSlug: "ai-automation",
    iconName: "Cpu",
    question: "How does AI workflow automation differ from traditional Robotic Process Automation (RPA)?",
    answer:
      "Traditional RPA relies on brittle, predefined click-paths that break when a website or document layout changes. AI automation incorporates computer vision and language comprehension, allowing the system to understand variable PDF invoices, ambiguous email inquiries, and unstructured documents with resilient human-like flexibility.",
  },

  // 5. OJS Scholarly & Academic Publishing
  {
    id: "ojs-1",
    category: "OJS Scholarly & Academic Publishing",
    serviceTitle: "Open Journal Systems Development",
    serviceSlug: "ojs-development",
    iconName: "BookOpen",
    question: "What is Open Journal Systems (OJS) and how can Winhub Solutions assist our journal?",
    answer:
      "OJS is the world's leading open-source journal management and publishing system developed by the Public Knowledge Project (PKP). Winhub Solutions provides turnkey OJS installation, bespoke responsive theme development, automated indexing configuration, and editorial workflow customization for universities, academic societies, and independent publishers.",
  },
  {
    id: "ojs-2",
    category: "OJS Scholarly & Academic Publishing",
    serviceTitle: "Open Journal Systems Development",
    serviceSlug: "ojs-development",
    iconName: "BookOpen",
    question: "Can you install and configure OJS on our existing university server or cPanel hosting?",
    answer:
      "Yes. We configure OJS on dedicated Linux servers, AWS/DigitalOcean VPS instances, or standard cPanel/Plesk environments with optimized PHP-FPM, MySQL database tuning, SSL certificates, SMTP email routing, and automated daily backups.",
  },
  {
    id: "ojs-3",
    category: "OJS Scholarly & Academic Publishing",
    serviceTitle: "Open Journal Systems Development",
    serviceSlug: "ojs-development",
    iconName: "BookOpen",
    question: "Do you support safe version upgrades from older OJS 2.x or 3.2 to the latest OJS 3.4+?",
    answer:
      "Yes. We perform multi-stage database migrations, audit table collations, adapt deprecated plugins, and verify article metadata integrity in an isolated staging environment before migrating production data, guaranteeing zero loss of published scholarly articles or review histories.",
  },
  {
    id: "ojs-4",
    category: "OJS Scholarly & Academic Publishing",
    serviceTitle: "Open Journal Systems Development",
    serviceSlug: "ojs-development",
    iconName: "BookOpen",
    question: "Can you integrate Crossref DOI registration, ORCID, and Google Scholar indexing?",
    answer:
      "Yes. We configure automated Crossref XML deposit plugins for instant DOI minting, connect the ORCID member API for author authentication, and verify Dublin Core / Highwire Press meta tags so all published papers are indexed by Google Scholar, DOAJ, and Scopus.",
  },

  // 6. UI/UX Design & Prototyping
  {
    id: "ui-1",
    category: "UI/UX Design & Prototyping",
    serviceTitle: "UI/UX Design",
    serviceSlug: "uiux-design",
    iconName: "Palette",
    question: "What specific deliverables do we receive from a Winhub UI/UX engagement?",
    answer:
      "You receive organized Figma files containing complete responsive screen designs (mobile, tablet, desktop), interactive clickable prototypes, design token libraries (colors, typography, grid specs), component variants, micro-interaction guidelines, and full developer handoff documentation.",
  },
  {
    id: "ui-2",
    category: "UI/UX Design & Prototyping",
    serviceTitle: "UI/UX Design",
    serviceSlug: "uiux-design",
    iconName: "Palette",
    question: "Can you redesign our existing software or web portal to modernize the interface?",
    answer:
      "Yes. We conduct a comprehensive UX heuristic audit of your current platform to identify usability bottlenecks, navigation friction, and drop-off points. We then formulate a clean modern design system that improves user satisfaction and reduces operational errors.",
  },
  {
    id: "ui-3",
    category: "UI/UX Design & Prototyping",
    serviceTitle: "UI/UX Design",
    serviceSlug: "uiux-design",
    iconName: "Palette",
    question: "How do you ensure accessibility (WCAG) compliance in your designs?",
    answer:
      "We design according to WCAG 2.1 AA accessibility guidelines, validating color contrast ratios, defining visible focus states for keyboard navigation, ensuring minimum touch-target sizing for mobile devices, and structuring semantic headings for screen-reader readability.",
  },

  // 7. E-Commerce Solutions
  {
    id: "ecom-1",
    category: "E-Commerce Solutions",
    serviceTitle: "E-Commerce Development",
    serviceSlug: "ecommerce-development",
    iconName: "ShoppingBag",
    question: "Which e-commerce platform is right for our business (Shopify vs WooCommerce vs Custom)?",
    answer:
      "Shopify is best for rapid time-to-market with minimal operational overhead. WooCommerce is optimal for content-driven brands wanting full open-source control on WordPress. Custom headless e-commerce (Next.js + Medusa/Node.js) is recommended for high-volume enterprise brands requiring bespoke checkout funnels and complex ERP integrations.",
  },
  {
    id: "ecom-2",
    category: "E-Commerce Solutions",
    serviceTitle: "E-Commerce Development",
    serviceSlug: "ecommerce-development",
    iconName: "ShoppingBag",
    question: "Can you integrate domestic and international payment gateways?",
    answer:
      "Yes. We integrate Razorpay, Stripe, PayPal, Cashfree, PayU, and regional payment rails supporting UPI, credit/debit cards, NetBanking, Apple Pay, and Google Pay with PCI-DSS compliant checkout and automated webhook validation.",
  },
  {
    id: "ecom-3",
    category: "E-Commerce Solutions",
    serviceTitle: "E-Commerce Development",
    serviceSlug: "ecommerce-development",
    iconName: "ShoppingBag",
    question: "How do you handle multi-currency pricing and international taxation?",
    answer:
      "We set up geolocation-based currency detection with real-time exchange rates, local pricing rounding, and automated tax calculations (such as GST for India, VAT for Europe, and state sales taxes for the US) to provide transparent international checkout.",
  },

  // 8. Digital Marketing & Technical SEO
  {
    id: "mkt-1",
    category: "Digital Marketing & Technical SEO",
    serviceTitle: "SEO Services",
    serviceSlug: "seo-services",
    iconName: "TrendingUp",
    question: "Why is Technical SEO and Core Web Vitals essential for ranking on Google?",
    answer:
      "Google's ranking algorithms heavily penalize slow, unstable websites. Technical SEO ensures search spiders can crawl and index your site without encountering broken redirect loops or render-blocking scripts, while 100/100 Core Web Vitals (LCP, FID, CLS) directly improve search result placement.",
  },
  {
    id: "mkt-2",
    category: "Digital Marketing & Technical SEO",
    serviceTitle: "SEO Services",
    serviceSlug: "seo-services",
    iconName: "TrendingUp",
    question: "How long does it take to see measurable results from organic SEO?",
    answer:
      "Technical SEO improvements and indexing fixes typically show initial positive movement within 2 to 4 weeks. High-impact competitive keyword rankings and sustained organic traffic growth typically mature within 3 to 6 months of continuous optimization, quality content publishing, and authority building.",
  },
  {
    id: "mkt-3",
    category: "Digital Marketing & Technical SEO",
    serviceTitle: "Digital Marketing",
    serviceSlug: "digital-marketing",
    iconName: "TrendingUp",
    question: "Do you manage Pay-Per-Click (PPC) campaigns such as Google Ads and Meta Ads?",
    answer:
      "Yes. We manage end-to-end paid search and paid social campaigns. We conduct keyword intent research, craft high-converting ad copy and dedicated landing pages, configure conversion tracking pixels, and optimize bidding strategies for maximum ROAS (Return On Ad Spend).",
  },

  // 9. Partnership, Pricing & SLAs
  {
    id: "part-1",
    category: "Partnership, Pricing & SLAs",
    serviceTitle: "Agency Partnership",
    serviceSlug: "contact",
    iconName: "ShieldCheck",
    question: "Do you sign Non-Disclosure Agreements (NDAs) before discussing project details?",
    answer:
      "Yes, 100%. We routinely sign bilateral NDAs before reviewing sensitive business requirements, technical architectures, or proprietary data. Your intellectual property and concept confidentiality are strictly protected from day one.",
  },
  {
    id: "part-2",
    category: "Partnership, Pricing & SLAs",
    serviceTitle: "Agency Partnership",
    serviceSlug: "contact",
    iconName: "ShieldCheck",
    question: "What engagement and pricing models do you provide?",
    answer:
      "We offer two primary models: 1) Fixed-Price Milestone Contracts for projects with clearly defined scopes, deliverables, and timelines; and 2) Dedicated Engineering Teams / Time & Material for evolving software roadmaps requiring agile sprint allocation.",
  },
  {
    id: "part-3",
    category: "Partnership, Pricing & SLAs",
    serviceTitle: "Agency Partnership",
    serviceSlug: "contact",
    iconName: "ShieldCheck",
    question: "Who owns the source code and intellectual property once the project is finished?",
    answer:
      "You own 100% of the intellectual property, design assets, and source code upon final milestone settlement. We transfer the complete Git repository, database schemas, and deployment credentials directly to your organization.",
  },
  {
    id: "part-4",
    category: "Partnership, Pricing & SLAs",
    serviceTitle: "Agency Partnership",
    serviceSlug: "contact",
    iconName: "ShieldCheck",
    question: "What post-launch warranty and technical maintenance support do you provide?",
    answer:
      "Every project includes an initial 30-day post-launch warranty period covering bug fixes and adjustments at zero additional cost. Beyond warranty, we offer monthly SLA maintenance packages providing security patches, framework upgrades, 24/7 server monitoring, and guaranteed response times.",
  },
  {
    id: "part-5",
    category: "Partnership, Pricing & SLAs",
    serviceTitle: "Agency Partnership",
    serviceSlug: "contact",
    iconName: "ShieldCheck",
    question: "How do you manage communication and time-zone differences for international clients?",
    answer:
      "We serve clients across the US, UK, Europe, Australia, and the Middle East. Our engineering leadership maintains 4-5 hours of daily overlap with US and European business hours, providing real-time Slack/Teams communication, weekly video sprint reviews, and transparent Jira task boards.",
  },
];

