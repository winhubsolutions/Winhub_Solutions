#!/usr/bin/env python3
"""
Generate bespoke, ultra-high-quality service visual SVGs for all 18 Winhub Solutions services.
Each SVG features dedicated device mockups, architecture diagrams, circuit telemetry, and branding.
"""

import os
import xml.etree.ElementTree as ET

SERVICES = {
    "ios-development": {
        "title": "Apple iOS & Swift Architecture",
        "badge": "APPLE ECOSYSTEM // SWIFTUI",
        "accent": "#FF7120",
        "accent_secondary": "#FF9E42",
        "tag": "SWIFT 5.10 · SWIFTUI · 120Hz PROMOTION",
        "code": "struct View: App { var body: some Scene { ... } }",
        "sub": "iOS 18 Native CoreData & Metal Shaders",
        "metric_left": "FPS: 120 PROMOTION",
        "metric_right": "APPLE APP STORE: 100% PASS",
        "visual_type": "ios_device"
    },
    "android-development": {
        "title": "Android & Kotlin Engineering",
        "badge": "GOOGLE ANDROID // JETPACK COMPOSE",
        "accent": "#3DDC84",
        "accent_secondary": "#4285F4",
        "tag": "KOTLIN 2.0 · JETPACK COMPOSE · MATERIAL 3",
        "code": "@Composable fun DashboardScreen(viewModel: CoreVM)",
        "sub": "Clean MVVM Architecture & Coroutines Flow",
        "metric_left": "STARTUP: 420ms COLD",
        "metric_right": "PLAY STORE: AAB READY",
        "visual_type": "android_device"
    },
    "website-design-development": {
        "title": "Responsive Web Architecture",
        "badge": "MODERN WEB // NEXT-GEN CSS",
        "accent": "#FF7120",
        "accent_secondary": "#6366F1",
        "tag": "CSS GRID · FLUID BREAKPOINTS · CORE WEB VITALS",
        "code": "<section className=\"grid grid-cols-12 gap-8\">",
        "sub": "Desktop · Tablet · Mobile Pixel Perfection",
        "metric_left": "PERFORMANCE: 100/100",
        "metric_right": "LCP: 0.6s · CLS: 0.00",
        "visual_type": "browser_window"
    },
    "custom-web-applications": {
        "title": "Enterprise Cloud SaaS Platform",
        "badge": "CLOUD ARCHITECTURE // DISTRIBUTED SAAS",
        "accent": "#00D2FF",
        "accent_secondary": "#3A7BD5",
        "tag": "API GATEWAY · REDIS CACHE · POSTGRESQL CLUSTER",
        "code": "cluster.route('/api/v2/stream').pipe(microservice)",
        "sub": "High-Concurrency Multi-Tenant Architecture",
        "metric_left": "THROUGHPUT: 120k RPS",
        "metric_right": "UPTIME: 99.99% SLA",
        "visual_type": "cloud_mesh"
    },
    "nextjs-development": {
        "title": "Next.js 14 App Router Architecture",
        "badge": "FULL-STACK REACT // REACT SERVER COMPONENTS",
        "accent": "#FFFFFF",
        "accent_secondary": "#FF7120",
        "tag": "SERVER ACTIONS · TURBOPACK · EDGE RUNTIME",
        "code": "export async function Page({ params }: Props) { ... }",
        "sub": "Zero-Bundle Streaming SSR with Suspense",
        "metric_left": "TTFB: 45ms GLOBAL EDGE",
        "metric_right": "SSR CACHE: HIT 99.4%",
        "visual_type": "nextjs_monogram"
    },
    "reactjs-development": {
        "title": "React.js Modern Interactive Front-End",
        "badge": "VIRTUAL DOM // REACT 19 COMPILER",
        "accent": "#61DAFB",
        "accent_secondary": "#FF7120",
        "tag": "CUSTOM HOOKS · ZUSTAND STATE · TAILWIND CSS",
        "code": "const [state, dispatch] = useReducer(coreReducer);",
        "sub": "Fine-Grained Memoization & Atomic State",
        "metric_left": "RE-RENDER TIME: < 1.2ms",
        "metric_right": "BUNDLE: GZIPPED 38KB",
        "visual_type": "react_atom"
    },
    "nodejs-development": {
        "title": "Node.js High-Throughput Microservices",
        "badge": "NON-BLOCKING I/O // LIBUV EVENT LOOP",
        "accent": "#68A063",
        "accent_secondary": "#FF7120",
        "tag": "FASTIFY · WEBSOCKETS · WORKER THREAD POOL",
        "code": "server.register(streamPipeline, { concurrency: 256 })",
        "sub": "Asynchronous Event Reactor & Cluster Engine",
        "metric_left": "LATENCY: 4.2ms P99",
        "metric_right": "MEMORY LEAK: 0.00% DETECTED",
        "visual_type": "nodejs_hexagon"
    },
    "angular-development": {
        "title": "Angular Enterprise Frontend Architecture",
        "badge": "TYPESCRIPT 5 // ANGULAR SIGNALS",
        "accent": "#DD0031",
        "accent_secondary": "#C3002F",
        "tag": "ZONEELESS SIGNALS · RXJS MARBLES · STANDALONE APIS",
        "code": "readonly dataSignal = computed(() => this.store.query())",
        "sub": "Strictly-Typed Enterprise Component Architecture",
        "metric_left": "SIGNALS COMPILATION: FAST",
        "metric_right": "TEST COVERAGE: 98.4%",
        "visual_type": "angular_shield"
    },
    "mobile-app-development": {
        "title": "Cross-Platform Mobile Ecosystem",
        "badge": "REACT NATIVE & FLUTTER // UNIFIED CORE",
        "accent": "#FF7120",
        "accent_secondary": "#02569B",
        "tag": "SHARED BUSINESS LOGIC · 100% NATIVE PERFORMANCE",
        "code": "mobileBridge.invokeNativeModule('HardwareSecureEnclave')",
        "sub": "Dual-OS Deployment for iPhone and Android",
        "metric_left": "CODE REUSE: 92.5%",
        "metric_right": "PLATFORMS: DUAL TARGET",
        "visual_type": "dual_device"
    },
    "custom-software-development": {
        "title": "Bespoke Enterprise Systems Engineering",
        "badge": "ENTERPRISE SYSTEMS // EVENT-DRIVEN BLUEPRINT",
        "accent": "#FF7120",
        "accent_secondary": "#8B5CF6",
        "tag": "KAFKA STREAMS · SECURE VAULT · HIGH AVAILABILITY",
        "code": "enterpriseCluster.orchestrate(missionCriticalNode)",
        "sub": "Resilient Microservices with Auto-Healing Nodes",
        "metric_left": "FAULT TOLERANCE: N+2",
        "metric_right": "SECURITY: ISO / SOC-2",
        "visual_type": "enterprise_matrix"
    },
    "ecommerce-development": {
        "title": "High-Conversion E-Commerce Architecture",
        "badge": "HEADLESS COMMERCE // INSTANT CHECKOUT",
        "accent": "#10B981",
        "accent_secondary": "#FF7120",
        "tag": "STRIPE CONNECT · REAL-TIME INVENTORY · SHOPIFY / CUSTOM",
        "code": "checkoutPipeline.processPayment({ instantAuth: true })",
        "sub": "Sub-Second Cart-to-Payment Conversion Funnel",
        "metric_left": "CHECKOUT SPEED: 1.8s",
        "metric_right": "ABANDON REDUCTION: -38%",
        "visual_type": "ecommerce_cart"
    },
    "ojs-development": {
        "title": "Open Journal Systems (OJS) Publishing",
        "badge": "SCHOLARLY PUBLISHING // PKP ECOSYSTEM",
        "accent": "#3B82F6",
        "accent_secondary": "#FF7120",
        "tag": "CROSSREF DOI · OAI-PMH HARVESTING · DOUBLE-BLIND REVIEW",
        "code": "ojsPlugin.registerDOI('10.1000/winhub.scholarly.2026')",
        "sub": "Automated Indexing for Scopus, WoS, Google Scholar",
        "metric_left": "HARVEST PROTOCOL: OAI 2.0",
        "metric_right": "DOI REGISTER: VERIFIED",
        "visual_type": "ojs_journal"
    },
    "ai-agent-development": {
        "title": "Autonomous AI Agent Cognition System",
        "badge": "AUTONOMOUS REASONING // MULTI-AGENT LOOP",
        "accent": "#8B5CF6",
        "accent_secondary": "#FF7120",
        "tag": "LLM ORCHESTRATION · MCP TOOL CALLING · VECTOR RAG",
        "code": "agent.planAndExecute({ tools: [Search, DB, CodeExec] })",
        "sub": "Self-Reflecting Perception-Action Feedback Loop",
        "metric_left": "REASONING DEPTH: HIGH",
        "metric_right": "AUTONOMY: LEVEL 4",
        "visual_type": "ai_agent_nodes"
    },
    "ai-automation": {
        "title": "Intelligent Workflow Automation Engine",
        "badge": "RPA & AI DECISION MATRIX // ZERO-TOUCH",
        "accent": "#EC4899",
        "accent_secondary": "#FF7120",
        "tag": "EVENT WEBHOOKS · VISION OCR · ERP/CRM AUTO-SYNC",
        "code": "workflow.trigger('onInvoiceReceived').autoResolve()",
        "sub": "Autonomous Multi-System Data Synchronization",
        "metric_left": "HOURS SAVED: 1,400+/mo",
        "metric_right": "ERROR RATE: 0.001%",
        "visual_type": "automation_pipes"
    },
    "uiux-design": {
        "title": "Futuristic UI/UX Product Design Systems",
        "badge": "DESIGN SYSTEMS // VECTOR ARCHITECTURE",
        "accent": "#F59E0B",
        "accent_secondary": "#EC4899",
        "tag": "ATOMIC DESIGN · FIGMA TOKENS · MICRO-INTERACTIONS",
        "code": ":root { --token-surface-glass: rgba(14,14,18,0.85); }",
        "sub": "Component Hierarchies and Fluid Motion Choreography",
        "metric_left": "ACCESSIBILITY: AAA WCAG",
        "metric_right": "DESIGN SYSTEM: 400+ TOKENS",
        "visual_type": "vector_canvas"
    },
    "seo-services": {
        "title": "Technical & Organic Search Engine Dominance",
        "badge": "SEARCH ENGINE DOMINANCE // DATA INTELLIGENCE",
        "accent": "#10B981",
        "accent_secondary": "#3B82F6",
        "tag": "SCHEMA JSON-LD · CANONICAL CLUSTERS · TOPICAL AUTHORITY",
        "code": "@type: 'TechArticle', rankScore: 99.8, indexed: true",
        "sub": "Exponential Organic Traffic and First-Page SERP Rankings",
        "metric_left": "GOOGLE SERP: RANK #1",
        "metric_right": "ORGANIC SURGE: +340%",
        "visual_type": "seo_analytics"
    },
    "digital-marketing": {
        "title": "Performance Growth & Marketing Engine",
        "badge": "GROWTH ENGINE // OMNICHANNEL ATTRIBUTION",
        "accent": "#FF7120",
        "accent_secondary": "#EF4444",
        "tag": "ROAS OPTIMIZATION · CONVERSION FUNNELS · ADS MATRIX",
        "code": "analyticsEngine.calculateROAS({ target: 'enterprise' })",
        "sub": "High-Efficiency Paid Campaigns & Retargeting Loops",
        "metric_left": "ROAS: 4.8X BLENDED",
        "metric_right": "CAC REDUCTION: -42%",
        "visual_type": "growth_radar"
    },
    "gatsby-development": {
        "title": "Gatsby High-Speed Static Platform",
        "badge": "STATIC SITE GENERATION // GRAPHQL DATA LAYER",
        "accent": "#663399",
        "accent_secondary": "#FF7120",
        "tag": "CONTENTFUL / SANITY · EDGE CDN · HYDRATION SPEED",
        "code": "export const query = graphql`{ allSitePage { nodes { ... } } }`",
        "sub": "Blazing Fast Pre-Rendered JAMstack Edge Delivery",
        "metric_left": "STATIC BUILD: 14s",
        "metric_right": "PAGE SPEED: 100/100",
        "visual_type": "gatsby_monogram"
    }
}

# Add alias mappings
SERVICES["e-commerce-development"] = SERVICES["ecommerce-development"]
SERVICES["ui-ux-design"] = SERVICES["uiux-design"]

def generate_visual_element(vtype, accent, sec):
    """Generate bespoke SVG graphic elements based on the visual type."""
    if vtype == "ios_device":
        return f'''
        <!-- iPhone Device Mockup Graphic -->
        <g transform="translate(360, 40)">
          <!-- iPhone Outer Frame -->
          <rect x="0" y="0" width="130" height="230" rx="26" fill="#181820" stroke="{accent}" stroke-width="2" stroke-opacity="0.8"/>
          <!-- Screen Glass -->
          <rect x="5" y="5" width="120" height="220" rx="22" fill="#0A0A0E"/>
          <!-- Dynamic Island -->
          <rect x="42" y="12" width="46" height="12" rx="6" fill="#000000" stroke="#333333" stroke-width="0.8"/>
          <circle cx="76" cy="18" r="2.5" fill="{accent}"/>
          <!-- App UI Elements inside Phone -->
          <rect x="15" y="38" width="100" height="45" rx="10" fill="{accent}" fill-opacity="0.15" stroke="{accent}" stroke-width="1" stroke-opacity="0.4"/>
          <circle cx="32" cy="60" r="10" fill="{accent}" fill-opacity="0.8"/>
          <rect x="50" y="52" width="55" height="6" rx="3" fill="#FFFFFF"/>
          <rect x="50" y="63" width="38" height="5" rx="2.5" fill="#888888"/>
          <!-- SwiftUI Component Cards -->
          <rect x="15" y="92" width="46" height="50" rx="8" fill="#1C1C24" stroke="#333338" stroke-width="0.8"/>
          <rect x="23" y="100" width="30" height="4" rx="2" fill="{accent}"/>
          <rect x="23" y="108" width="20" height="3" rx="1.5" fill="#777777"/>
          <rect x="69" y="92" width="46" height="50" rx="8" fill="#1C1C24" stroke="#333338" stroke-width="0.8"/>
          <circle cx="92" cy="112" r="12" fill="{sec}" fill-opacity="0.3"/>
          <path d="M 88 112 L 91 115 L 97 109" fill="none" stroke="{accent}" stroke-width="2"/>
          <!-- Bottom Indicator Bar -->
          <rect x="40" y="214" width="50" height="3" rx="1.5" fill="#FFFFFF" fill-opacity="0.5"/>
        </g>
        '''
    elif vtype == "android_device":
        return f'''
        <!-- Android Phone Mockup Graphic -->
        <g transform="translate(360, 40)">
          <!-- Android Chassis -->
          <rect x="0" y="0" width="130" height="230" rx="18" fill="#121814" stroke="{accent}" stroke-width="2" stroke-opacity="0.8"/>
          <!-- Screen Glass -->
          <rect x="4" y="4" width="122" height="222" rx="15" fill="#060A08"/>
          <!-- Centered Camera Punch Hole -->
          <circle cx="65" cy="14" r="3.5" fill="#000000" stroke="#3DDC84" stroke-width="0.8"/>
          <!-- Material You Pastel Card -->
          <rect x="14" y="32" width="102" height="55" rx="14" fill="{accent}" fill-opacity="0.12" stroke="{accent}" stroke-width="1" stroke-opacity="0.5"/>
          <rect x="24" y="44" width="50" height="7" rx="3.5" fill="#FFFFFF"/>
          <rect x="24" y="56" width="70" height="5" rx="2.5" fill="#888888"/>
          <circle cx="96" cy="59" r="10" fill="{accent}"/>
          <path d="M 93 59 L 95 61 L 99 57" fill="none" stroke="#000000" stroke-width="1.8"/>
          <!-- Jetpack Compose LazyColumn rows -->
          <rect x="14" y="96" width="102" height="30" rx="8" fill="#18241D" stroke="#26382C" stroke-width="0.8"/>
          <circle cx="28" cy="111" r="7" fill="{accent}" fill-opacity="0.6"/>
          <rect x="42" y="106" width="45" height="5" rx="2.5" fill="#FFFFFF"/>
          <rect x="42" y="115" width="30" height="4" rx="2" fill="#777777"/>
          <rect x="14" y="132" width="102" height="30" rx="8" fill="#18241D" stroke="#26382C" stroke-width="0.8"/>
          <circle cx="28" cy="147" r="7" fill="{sec}" fill-opacity="0.6"/>
          <rect x="42" y="142" width="50" height="5" rx="2.5" fill="#FFFFFF"/>
          <rect x="42" y="151" width="35" height="4" rx="2" fill="#777777"/>
          <!-- Nav pill -->
          <rect x="48" y="216" width="34" height="2.5" rx="1.2" fill="#FFFFFF" fill-opacity="0.4"/>
        </g>
        '''
    elif vtype == "browser_window":
        return f'''
        <!-- Browser Window Layout Mockup -->
        <g transform="translate(325, 40)">
          <!-- Window frame -->
          <rect x="0" y="0" width="170" height="230" rx="12" fill="#0C0E14" stroke="{accent}" stroke-width="1.5" stroke-opacity="0.7"/>
          <!-- Window Header Bar -->
          <rect x="0" y="0" width="170" height="24" rx="12" fill="#161822"/>
          <circle cx="12" cy="12" r="3" fill="#FF5F56"/>
          <circle cx="22" cy="12" r="3" fill="#FFBD2E"/>
          <circle cx="32" cy="12" r="3" fill="#27C93F"/>
          <rect x="44" y="6" width="115" height="12" rx="4" fill="#0C0E14" stroke="#262838" stroke-width="0.6"/>
          <!-- Wireframe Web Layout -->
          <!-- Hero Section -->
          <rect x="12" y="34" width="146" height="50" rx="6" fill="{accent}" fill-opacity="0.12" stroke="{accent}" stroke-width="0.8"/>
          <rect x="22" y="44" width="65" height="7" rx="3.5" fill="#FFFFFF"/>
          <rect x="22" y="55" width="85" height="4" rx="2" fill="#888888"/>
          <rect x="22" y="65" width="35" height="10" rx="5" fill="{accent}"/>
          <!-- 3 Grid Cards -->
          <rect x="12" y="92" width="44" height="55" rx="6" fill="#181A26" stroke="#282C3E" stroke-width="0.8"/>
          <rect x="18" y="100" width="20" height="4" rx="2" fill="{accent}"/>
          <rect x="18" y="108" width="32" height="3" rx="1.5" fill="#666666"/>
          <rect x="63" y="92" width="44" height="55" rx="6" fill="#181A26" stroke="{accent}" stroke-width="1"/>
          <rect x="69" y="100" width="25" height="4" rx="2" fill="{sec}"/>
          <rect x="69" y="108" width="32" height="3" rx="1.5" fill="#666666"/>
          <rect x="114" y="92" width="44" height="55" rx="6" fill="#181A26" stroke="#282C3E" stroke-width="0.8"/>
          <rect x="120" y="100" width="22" height="4" rx="2" fill="{accent}"/>
          <rect x="120" y="108" width="32" height="3" rx="1.5" fill="#666666"/>
          <!-- Responsive Breakpoint Badge -->
          <rect x="12" y="156" width="146" height="28" rx="6" fill="#141822" stroke="{accent}" stroke-width="0.8" stroke-opacity="0.4"/>
          <text x="22" y="174" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold">● 1920px · 768px · 390px</text>
        </g>
        '''
    elif vtype == "cloud_mesh":
        return f'''
        <!-- Cloud Microservices Diagram -->
        <g transform="translate(330, 45)">
          <!-- Node 1: Client / CDN -->
          <rect x="0" y="10" width="55" height="40" rx="8" fill="#121824" stroke="{accent}" stroke-width="1.2"/>
          <text x="27" y="27" fill="#FFFFFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">CLIENT</text>
          <text x="27" y="38" fill="{accent}" font-family="monospace" font-size="7" text-anchor="middle">EDGE CDN</text>

          <!-- Connector 1 -->
          <path d="M 55 30 L 85 30" stroke="{accent}" stroke-width="2" stroke-dasharray="3 2"/>

          <!-- Node 2: API Gateway -->
          <rect x="85" y="0" width="75" height="60" rx="10" fill="#182236" stroke="{accent}" stroke-width="1.8"/>
          <text x="122" y="22" fill="#FFFFFF" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">GATEWAY</text>
          <text x="122" y="35" fill="{accent}" font-family="monospace" font-size="8" text-anchor="middle">ROUTER</text>
          <text x="122" y="47" fill="#00D2FF" font-family="monospace" font-size="7" text-anchor="middle">RATE LIMIT</text>

          <!-- Split Connectors -->
          <path d="M 160 20 L 190 10 L 210 10" stroke="{accent}" stroke-width="1.5"/>
          <path d="M 160 40 L 190 70 L 210 70" stroke="{sec}" stroke-width="1.5"/>

          <!-- Microservice A -->
          <rect x="85" y="80" width="75" height="45" rx="8" fill="#141C2C" stroke="{sec}" stroke-width="1"/>
          <text x="122" y="100" fill="#FFFFFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">REDIS CLUSTER</text>
          <text x="122" y="114" fill="{sec}" font-family="monospace" font-size="7" text-anchor="middle">CACHE 0.4ms</text>

          <!-- Microservice B: DB -->
          <rect x="85" y="140" width="75" height="50" rx="8" fill="#141C2C" stroke="{accent}" stroke-width="1"/>
          <text x="122" y="160" fill="#FFFFFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">POSTGRESQL</text>
          <text x="122" y="174" fill="{accent}" font-family="monospace" font-size="7" text-anchor="middle">READ-REPLICAS</text>
          
          <path d="M 122 60 L 122 80" stroke="{accent}" stroke-width="1.5" stroke-dasharray="3 2"/>
          <path d="M 122 125 L 122 140" stroke="{sec}" stroke-width="1.5" stroke-dasharray="3 2"/>
        </g>
        '''
    elif vtype == "nextjs_monogram":
        return f'''
        <!-- Next.js Monogram & App Router Flow -->
        <g transform="translate(340, 45)">
          <circle cx="80" cy="80" r="70" fill="#111116" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.3"/>
          <circle cx="80" cy="80" r="60" fill="#0A0A0E" stroke="{accent}" stroke-width="1" stroke-dasharray="4 3"/>
          <!-- Next.js N Symbol -->
          <path d="M 55 110 L 55 50 L 105 110" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round"/>
          <path d="M 105 50 L 105 85" fill="none" stroke="{accent}" stroke-width="8" stroke-linecap="round"/>
          <!-- Badges -->
          <rect x="15" y="165" width="130" height="28" rx="14" fill="#14141C" stroke="{accent}" stroke-width="1"/>
          <text x="80" y="183" fill="#FFFFFF" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">TURBOPACK 14 // RSC</text>
        </g>
        '''
    elif vtype == "react_atom":
        return f'''
        <!-- React Atom Orbit Graphic -->
        <g transform="translate(330, 40)">
          <!-- Core Nucleus -->
          <circle cx="85" cy="85" r="14" fill="{accent}"/>
          <circle cx="85" cy="85" r="20" fill="none" stroke="{accent}" stroke-width="1" stroke-opacity="0.5"/>
          <!-- 3 Electron Orbits -->
          <ellipse cx="85" cy="85" rx="75" ry="28" fill="none" stroke="{accent}" stroke-width="1.8" stroke-opacity="0.8" transform="rotate(0 85 85)"/>
          <ellipse cx="85" cy="85" rx="75" ry="28" fill="none" stroke="{accent}" stroke-width="1.8" stroke-opacity="0.8" transform="rotate(60 85 85)"/>
          <ellipse cx="85" cy="85" rx="75" ry="28" fill="none" stroke="{accent}" stroke-width="1.8" stroke-opacity="0.8" transform="rotate(120 85 85)"/>
          <!-- Orbiting Particles -->
          <circle cx="155" cy="85" r="4.5" fill="#FFFFFF"/>
          <circle cx="50" cy="30" r="4.5" fill="{sec}"/>
          <circle cx="50" cy="140" r="4.5" fill="{accent}"/>
          <!-- Telemetry Tag -->
          <rect x="20" y="175" width="130" height="26" rx="13" fill="#101824" stroke="{accent}" stroke-width="1"/>
          <text x="85" y="192" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">REACT 19 COMPILER</text>
        </g>
        '''
    elif vtype == "nodejs_hexagon":
        return f'''
        <!-- Node.js Hexagon & Event Loop -->
        <g transform="translate(330, 45)">
          <!-- Hexagon Outer -->
          <polygon points="85,10 150,47 150,123 85,160 20,123 20,47" fill="#0D1A10" stroke="{accent}" stroke-width="2"/>
          <!-- Inner Event Loop Circle -->
          <circle cx="85" cy="85" r="38" fill="none" stroke="{accent}" stroke-width="2" stroke-dasharray="8 4"/>
          <text x="85" y="80" fill="#FFFFFF" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">LIBUV</text>
          <text x="85" y="93" fill="{accent}" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">EVENT LOOP</text>
          <!-- 6 Event Phase Dots -->
          <circle cx="85" cy="47" r="4" fill="{sec}"/>
          <circle cx="123" cy="85" r="4" fill="{accent}"/>
          <circle cx="85" cy="123" r="4" fill="#FFFFFF"/>
          <circle cx="47" cy="85" r="4" fill="{accent}"/>
          <!-- Telemetry Tag -->
          <rect x="20" y="175" width="130" height="26" rx="13" fill="#142416" stroke="{accent}" stroke-width="1"/>
          <text x="85" y="192" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">NON-BLOCKING I/O</text>
        </g>
        '''
    elif vtype == "angular_shield":
        return f'''
        <!-- Angular Shield & Signals -->
        <g transform="translate(340, 45)">
          <!-- Shield polygon -->
          <path d="M 80 15 L 140 35 L 125 125 L 80 155 L 35 125 L 20 35 Z" fill="#1F080C" stroke="{accent}" stroke-width="2"/>
          <!-- Inner A letter -->
          <path d="M 80 40 L 115 115 L 98 115 L 90 95 L 70 95 L 62 115 L 45 115 Z M 75 80 L 85 80 L 80 62 Z" fill="{accent}"/>
          <!-- Signals badge -->
          <rect x="15" y="170" width="130" height="26" rx="13" fill="#240A10" stroke="{accent}" stroke-width="1"/>
          <text x="80" y="187" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">ANGULAR 18 SIGNALS</text>
        </g>
        '''
    elif vtype == "dual_device":
        return f'''
        <!-- Dual Device (iOS + Android) Cross Platform -->
        <g transform="translate(325, 45)">
          <!-- iOS Phone Left -->
          <rect x="0" y="15" width="85" height="150" rx="18" fill="#14141C" stroke="{accent}" stroke-width="1.5"/>
          <rect x="4" y="19" width="77" height="142" rx="14" fill="#0A0A0E"/>
          <rect x="26" y="23" width="33" height="7" rx="3.5" fill="#000000" stroke="{accent}" stroke-width="0.5"/>
          <rect x="12" y="42" width="61" height="25" rx="6" fill="{accent}" fill-opacity="0.2"/>
          <text x="42" y="58" fill="#FFFFFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">iOS 18</text>

          <!-- Android Phone Right -->
          <rect x="75" y="0" width="85" height="150" rx="14" fill="#121814" stroke="{sec}" stroke-width="1.5"/>
          <rect x="79" y="4" width="77" height="142" rx="11" fill="#060A08"/>
          <circle cx="117" cy="11" r="2.5" fill="{sec}"/>
          <rect x="87" y="27" width="61" height="25" rx="6" fill="{sec}" fill-opacity="0.2"/>
          <text x="117" y="43" fill="#FFFFFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">Android 15</text>

          <!-- Shared Bridge Core Badge -->
          <rect x="15" y="175" width="135" height="26" rx="13" fill="#181822" stroke="{accent}" stroke-width="1"/>
          <text x="82" y="192" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">1 CODEBASE · 2 STORES</text>
        </g>
        '''
    elif vtype == "enterprise_matrix":
        return f'''
        <!-- Enterprise Architecture Matrix -->
        <g transform="translate(325, 45)">
          <!-- 4 Interconnected Enterprise Nodes -->
          <rect x="0" y="10" width="70" height="50" rx="8" fill="#141824" stroke="{accent}" stroke-width="1.2"/>
          <text x="35" y="32" fill="#FFFFFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">CORE ENGINE</text>
          <text x="35" y="44" fill="{accent}" font-family="monospace" font-size="7" text-anchor="middle">MICROSERVICES</text>

          <rect x="90" y="10" width="70" height="50" rx="8" fill="#141824" stroke="{sec}" stroke-width="1.2"/>
          <text x="125" y="32" fill="#FFFFFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">EVENT BUS</text>
          <text x="125" y="44" fill="{sec}" font-family="monospace" font-size="7" text-anchor="middle">KAFKA CLUSTER</text>

          <rect x="0" y="80" width="70" height="50" rx="8" fill="#141824" stroke="{sec}" stroke-width="1.2"/>
          <text x="35" y="102" fill="#FFFFFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">AUTH VAULT</text>
          <text x="35" y="114" fill="{sec}" font-family="monospace" font-size="7" text-anchor="middle">OAUTH 2.1 / SAML</text>

          <rect x="90" y="80" width="70" height="50" rx="8" fill="#141824" stroke="{accent}" stroke-width="1.2"/>
          <text x="125" y="102" fill="#FFFFFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">STORAGE</text>
          <text x="125" y="114" fill="{accent}" font-family="monospace" font-size="7" text-anchor="middle">MULTI-REGION</text>

          <!-- Connecting cross lines -->
          <line x1="70" y1="35" x2="90" y2="35" stroke="{accent}" stroke-width="1.5"/>
          <line x1="70" y1="105" x2="90" y2="105" stroke="{sec}" stroke-width="1.5"/>
          <line x1="35" y1="60" x2="35" y2="80" stroke="{accent}" stroke-width="1.5"/>
          <line x1="125" y1="60" x2="125" y2="80" stroke="{sec}" stroke-width="1.5"/>

          <!-- Security Badge -->
          <rect x="15" y="150" width="130" height="26" rx="13" fill="#1A1828" stroke="{accent}" stroke-width="1"/>
          <text x="80" y="167" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">SOC-2 · ISO 27001</text>
        </g>
        '''
    elif vtype == "ecommerce_cart":
        return f'''
        <!-- E-Commerce Checkout Graphic -->
        <g transform="translate(325, 45)">
          <!-- Storefront Card -->
          <rect x="0" y="0" width="160" height="155" rx="14" fill="#0C1410" stroke="{accent}" stroke-width="1.5"/>
          <!-- Product Preview -->
          <rect x="14" y="14" width="60" height="60" rx="8" fill="#14241C" stroke="{accent}" stroke-width="0.8"/>
          <circle cx="44" cy="44" r="16" fill="{accent}" fill-opacity="0.4"/>
          <!-- Product Details -->
          <rect x="84" y="18" width="62" height="6" rx="3" fill="#FFFFFF"/>
          <rect x="84" y="30" width="45" height="5" rx="2.5" fill="#888888"/>
          <text x="84" y="52" fill="{accent}" font-family="sans-serif" font-weight="bold" font-size="14">$2,499.00</text>
          <rect x="84" y="60" width="62" height="14" rx="4" fill="{accent}"/>
          <text x="115" y="71" fill="#000000" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">BUY NOW</text>
          <!-- Checkout Step Pipeline -->
          <rect x="14" y="90" width="132" height="48" rx="8" fill="#121E18" stroke="#1E382A" stroke-width="0.8"/>
          <circle cx="34" cy="114" r="10" fill="{accent}"/>
          <path d="M 31 114 L 33 116 L 37 112" fill="none" stroke="#000000" stroke-width="1.8"/>
          <line x1="44" y1="114" x2="68" y2="114" stroke="{accent}" stroke-width="2"/>
          <circle cx="80" cy="114" r="10" fill="{accent}"/>
          <path d="M 77 114 L 79 116 L 83 112" fill="none" stroke="#000000" stroke-width="1.8"/>
          <line x1="90" y1="114" x2="114" y2="114" stroke="{accent}" stroke-width="2"/>
          <circle cx="126" cy="114" r="10" fill="{sec}"/>
          <text x="126" y="117" fill="#FFFFFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">✓</text>
          <!-- Conversion Badge -->
          <rect x="15" y="170" width="130" height="26" rx="13" fill="#102016" stroke="{accent}" stroke-width="1"/>
          <text x="80" y="187" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">SUB-SECOND CHECKOUT</text>
        </g>
        '''
    elif vtype == "ojs_journal":
        return f'''
        <!-- OJS Scholarly Journal Diagram -->
        <g transform="translate(325, 45)">
          <!-- Journal Book Mockup -->
          <rect x="0" y="5" width="105" height="145" rx="6" fill="#0E1624" stroke="{accent}" stroke-width="1.5"/>
          <rect x="12" y="18" width="80" height="8" rx="2" fill="#FFFFFF"/>
          <rect x="12" y="32" width="60" height="5" rx="2" fill="#888888"/>
          <rect x="12" y="42" width="75" height="4" rx="2" fill="#666666"/>
          <line x1="12" y1="56" x2="92" y2="56" stroke="{accent}" stroke-width="0.8"/>
          <!-- DOI Badge inside Journal -->
          <rect x="12" y="65" width="80" height="20" rx="4" fill="#16243A" stroke="{accent}" stroke-width="0.8"/>
          <text x="52" y="78" fill="{accent}" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">DOI: 10.1000/OJS</text>
          <!-- Peer Review Nodes -->
          <rect x="12" y="94" width="80" height="40" rx="4" fill="#141C2E"/>
          <text x="52" y="108" fill="#FFFFFF" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">DOUBLE-BLIND</text>
          <text x="52" y="122" fill="{sec}" font-family="monospace" font-size="7" text-anchor="middle">PEER REVIEWED ✓</text>
          <!-- Side Certification Seal -->
          <circle cx="130" cy="50" r="22" fill="#142036" stroke="{accent}" stroke-width="1.5"/>
          <text x="130" y="47" fill="#FFFFFF" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">PKP</text>
          <text x="130" y="57" fill="{accent}" font-family="monospace" font-size="6" text-anchor="middle">OFFICIAL</text>
          <!-- Bottom Indexing Tag -->
          <rect x="5" y="165" width="145" height="26" rx="13" fill="#121D30" stroke="{accent}" stroke-width="1"/>
          <text x="77" y="182" fill="{accent}" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">SCOPUS &amp; WoS READY</text>
        </g>
        '''
    elif vtype == "ai_agent_nodes":
        return f'''
        <!-- Autonomous AI Agent Cognitive Loop -->
        <g transform="translate(325, 45)">
          <!-- Central LLM Brain Node -->
          <circle cx="80" cy="70" r="28" fill="#1A1230" stroke="{accent}" stroke-width="2"/>
          <text x="80" y="68" fill="#FFFFFF" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">COGNITIVE</text>
          <text x="80" y="79" fill="{accent}" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">LLM CORE</text>
          <!-- Surrounding Tool Calling Satellites -->
          <!-- Satellite 1: Search -->
          <circle cx="20" cy="30" r="16" fill="#141828" stroke="{sec}" stroke-width="1.2"/>
          <text x="20" y="33" fill="#FFFFFF" font-family="monospace" font-size="7" text-anchor="middle">SEARCH</text>
          <line x1="34" y1="38" x2="58" y2="54" stroke="{accent}" stroke-width="1.5" stroke-dasharray="3 2"/>
          <!-- Satellite 2: Code Execution -->
          <circle cx="140" cy="30" r="16" fill="#141828" stroke="{accent}" stroke-width="1.2"/>
          <text x="140" y="33" fill="#FFFFFF" font-family="monospace" font-size="7" text-anchor="middle">PYTHON</text>
          <line x1="126" y1="38" x2="102" y2="54" stroke="{accent}" stroke-width="1.5" stroke-dasharray="3 2"/>
          <!-- Satellite 3: Memory Vector DB -->
          <circle cx="20" cy="115" r="16" fill="#141828" stroke="{accent}" stroke-width="1.2"/>
          <text x="20" y="118" fill="#FFFFFF" font-family="monospace" font-size="7" text-anchor="middle">VECTOR</text>
          <line x1="34" y1="105" x2="58" y2="85" stroke="{accent}" stroke-width="1.5" stroke-dasharray="3 2"/>
          <!-- Satellite 4: External API -->
          <circle cx="140" cy="115" r="16" fill="#141828" stroke="{sec}" stroke-width="1.2"/>
          <text x="140" y="118" fill="#FFFFFF" font-family="monospace" font-size="7" text-anchor="middle">MCP API</text>
          <line x1="126" y1="105" x2="102" y2="85" stroke="{sec}" stroke-width="1.5" stroke-dasharray="3 2"/>
          <!-- Autonomy Loop Badge -->
          <rect x="15" y="160" width="130" height="26" rx="13" fill="#1E1436" stroke="{accent}" stroke-width="1"/>
          <text x="80" y="177" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">RECURSIVE RAG LOOP</text>
        </g>
        '''
    elif vtype == "automation_pipes":
        return f'''
        <!-- Robotic Process Automation Workflow -->
        <g transform="translate(325, 45)">
          <!-- Trigger Webhook Node -->
          <rect x="0" y="10" width="60" height="38" rx="8" fill="#1C1020" stroke="{accent}" stroke-width="1.5"/>
          <text x="30" y="26" fill="#FFFFFF" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">TRIGGER</text>
          <text x="30" y="37" fill="{accent}" font-family="monospace" font-size="6" text-anchor="middle">WEBHOOK</text>

          <path d="M 60 29 L 95 29" stroke="{accent}" stroke-width="2" stroke-dasharray="4 2"/>

          <!-- Decision Filter Node -->
          <polygon points="125,5 155,29 125,53 95,29" fill="#241428" stroke="{sec}" stroke-width="1.5"/>
          <text x="125" y="32" fill="#FFFFFF" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">AI RULES</text>

          <!-- Branch A: Direct Execution -->
          <path d="M 125 53 L 125 80" stroke="{accent}" stroke-width="2"/>
          <rect x="90" y="80" width="70" height="40" rx="8" fill="#1C1020" stroke="{accent}" stroke-width="1.2"/>
          <text x="125" y="98" fill="#FFFFFF" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">AUTO EXEC</text>
          <text x="125" y="110" fill="{accent}" font-family="monospace" font-size="6" text-anchor="middle">ERP SYNC</text>

          <!-- Branch B: Action -->
          <rect x="0" y="80" width="65" height="40" rx="8" fill="#141824" stroke="{sec}" stroke-width="1.2"/>
          <text x="32" y="98" fill="#FFFFFF" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">AUDIT LOG</text>
          <text x="32" y="110" fill="{sec}" font-family="monospace" font-size="6" text-anchor="middle">IMMUTABLE</text>
          <path d="M 90 100 L 65 100" stroke="{sec}" stroke-width="1.5" stroke-dasharray="3 2"/>

          <!-- Telemetry Tag -->
          <rect x="15" y="155" width="130" height="26" rx="13" fill="#201026" stroke="{accent}" stroke-width="1"/>
          <text x="80" y="172" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">ZERO-TOUCH PIPELINE</text>
        </g>
        '''
    elif vtype == "vector_canvas":
        return f'''
        <!-- Vector UI/UX Canvas Mockup -->
        <g transform="translate(325, 45)">
          <rect x="0" y="0" width="160" height="150" rx="12" fill="#14121A" stroke="{accent}" stroke-width="1.5"/>
          <!-- Pen Tool Bezier Curve with Control Handles -->
          <path d="M 20 110 C 40 20, 110 30, 140 100" fill="none" stroke="{accent}" stroke-width="2.5"/>
          <!-- Anchor Points & Handles -->
          <circle cx="20" cy="110" r="4" fill="#FFFFFF" stroke="{accent}" stroke-width="1.5"/>
          <circle cx="140" cy="100" r="4" fill="#FFFFFF" stroke="{accent}" stroke-width="1.5"/>
          <circle cx="40" cy="20" r="3" fill="{sec}"/>
          <line x1="20" y1="110" x2="40" y2="20" stroke="{sec}" stroke-width="1" stroke-opacity="0.6"/>
          <!-- Color Swatch Palette -->
          <circle cx="30" cy="130" r="8" fill="#FF7120"/>
          <circle cx="50" cy="130" r="8" fill="#F59E0B"/>
          <circle cx="70" cy="130" r="8" fill="#EC4899"/>
          <circle cx="90" cy="130" r="8" fill="#6366F1"/>
          <circle cx="110" cy="130" r="8" fill="#10B981"/>
          <!-- Design System Badge -->
          <rect x="15" y="165" width="130" height="26" rx="13" fill="#201824" stroke="{accent}" stroke-width="1"/>
          <text x="80" y="182" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">ATOMIC DESIGN SYSTEM</text>
        </g>
        '''
    elif vtype == "seo_analytics":
        return f'''
        <!-- SEO SERP Rank & Growth Analytics Chart -->
        <g transform="translate(325, 45)">
          <!-- Google SERP Card #1 -->
          <rect x="0" y="0" width="160" height="60" rx="10" fill="#0C1410" stroke="{accent}" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="8" fill="{accent}"/>
          <text x="20" y="24" fill="#000000" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">#1</text>
          <text x="36" y="22" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="10">Google Search Rank</text>
          <rect x="36" y="30" width="110" height="4" rx="2" fill="{accent}" fill-opacity="0.4"/>
          <rect x="36" y="38" width="80" height="4" rx="2" fill="#666666"/>
          <!-- Exponential Growth Curve -->
          <rect x="0" y="70" width="160" height="85" rx="10" fill="#0E1612" stroke="#1A2820" stroke-width="1"/>
          <!-- Curve Path -->
          <path d="M 15 140 Q 60 135 90 105 T 145 85" fill="none" stroke="{accent}" stroke-width="2.5"/>
          <circle cx="145" cy="85" r="4" fill="#FFFFFF" stroke="{accent}" stroke-width="1.5"/>
          <!-- Chart Grid lines -->
          <line x1="15" y1="100" x2="145" y2="100" stroke="#FFFFFF" stroke-opacity="0.06"/>
          <line x1="15" y1="120" x2="145" y2="120" stroke="#FFFFFF" stroke-opacity="0.06"/>
          <!-- Metric text inside chart -->
          <text x="20" y="90" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold">+340% ORGANIC</text>
          <!-- SEO Badge -->
          <rect x="15" y="165" width="130" height="26" rx="13" fill="#102016" stroke="{accent}" stroke-width="1"/>
          <text x="80" y="182" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">TOPICAL AUTHORITY</text>
        </g>
        '''
    elif vtype == "growth_radar":
        return f'''
        <!-- Growth Marketing Performance Dashboard -->
        <g transform="translate(325, 45)">
          <!-- ROAS Dial -->
          <rect x="0" y="0" width="160" height="150" rx="12" fill="#181014" stroke="{accent}" stroke-width="1.5"/>
          <!-- Gauge Arc -->
          <path d="M 35 90 A 45 45 0 0 1 125 90" fill="none" stroke="#33222A" stroke-width="10" stroke-linecap="round"/>
          <path d="M 35 90 A 45 45 0 0 1 115 60" fill="none" stroke="{accent}" stroke-width="10" stroke-linecap="round"/>
          <text x="80" y="80" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="20" text-anchor="middle">4.8X</text>
          <text x="80" y="95" fill="{accent}" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">BLENDED ROAS</text>
          <!-- Omnichannel icons strip -->
          <rect x="15" y="112" width="130" height="26" rx="6" fill="#24141C" stroke="#381E2C" stroke-width="0.8"/>
          <text x="25" y="128" fill="{accent}" font-family="monospace" font-size="8" font-weight="bold">GOOGLE · META · ADS</text>
          <!-- Growth Badge -->
          <rect x="15" y="165" width="130" height="26" rx="13" fill="#201016" stroke="{accent}" stroke-width="1"/>
          <text x="80" y="182" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">HIGH-CONVERSION ROI</text>
        </g>
        '''
    elif vtype == "gatsby_monogram":
        return f'''
        <!-- Gatsby Monogram & GraphQL Pipeline -->
        <g transform="translate(340, 45)">
          <circle cx="80" cy="80" r="70" fill="#140C1A" stroke="{accent}" stroke-width="2"/>
          <!-- Gatsby G Symbol -->
          <path d="M 120 70 A 45 45 0 1 0 120 95 L 90 95 L 90 80 L 120 80" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round"/>
          <circle cx="80" cy="80" r="30" fill="none" stroke="{sec}" stroke-width="1" stroke-dasharray="4 3"/>
          <!-- Badge -->
          <rect x="15" y="165" width="130" height="28" rx="14" fill="#1E1226" stroke="{accent}" stroke-width="1"/>
          <text x="80" y="183" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">GRAPHQL DATA LAYER</text>
        </g>
        '''
    else:
        # Fallback circuit
        return f'''
        <g transform="translate(330, 45)">
          <rect width="150" height="150" rx="14" fill="#101018" stroke="{accent}" stroke-width="1"/>
          <circle cx="75" cy="75" r="40" fill="{accent}" fill-opacity="0.2"/>
        </g>
        '''

def build_svg(slug, data):
    accent = data["accent"]
    sec = data["accent_secondary"]
    title = data["title"]
    badge = data["badge"]
    tag = data["tag"]
    code = data["code"]
    sub = data["sub"]
    metric_left = data["metric_left"]
    metric_right = data["metric_right"]
    vtype = data["visual_type"]

    visual_element = generate_visual_element(vtype, accent, sec)

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad_{slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#08080C"/>
      <stop offset="50%" stop-color="#101018"/>
      <stop offset="100%" stop-color="#06060A"/>
    </linearGradient>
    <linearGradient id="accentGrad_{slug}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="{accent}"/>
      <stop offset="100%" stop-color="{sec}"/>
    </linearGradient>
    <linearGradient id="ambientOrb_{slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="{accent}" stop-opacity="0.0"/>
    </linearGradient>
    <pattern id="grid_{slug}" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#FFFFFF" stroke-width="0.5" stroke-opacity="0.05"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="600" height="400" rx="24" fill="url(#bgGrad_{slug})"/>
  <rect width="600" height="400" rx="24" fill="url(#grid_{slug})"/>

  <!-- High-Tech Ambient Glow Orb -->
  <circle cx="480" cy="120" r="170" fill="url(#ambientOrb_{slug})" filter="blur(45px)"/>

  <!-- Outer Glassmorphism Frame Border -->
  <rect x="1.5" y="1.5" width="597" height="397" rx="22.5" fill="none" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1.5"/>

  <!-- Header Telemetry Strip -->
  <g transform="translate(35, 42)">
    <circle cx="6" cy="6" r="5" fill="{accent}"/>
    <circle cx="6" cy="6" r="9" fill="none" stroke="{accent}" stroke-opacity="0.4"/>
    <text x="24" y="10" fill="#9CA3AF" font-family="monospace" font-size="11" letter-spacing="1.5" font-weight="bold">WINHUB SOLUTIONS // SYSTEM SPEC</text>
    <rect x="390" y="-3" width="140" height="20" rx="10" fill="#FFFFFF" fill-opacity="0.06"/>
    <text x="460" y="11" fill="{accent}" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">STATUS: ACTIVE</text>
  </g>

  <!-- Central Work Area -->
  <g transform="translate(35, 78)">
    <!-- Left Column: Service Details & Live Code Console -->
    <g transform="translate(0, 0)">
      <!-- Domain Badge -->
      <rect x="0" y="0" width="280" height="22" rx="6" fill="{accent}" fill-opacity="0.12" stroke="{accent}" stroke-width="0.8" stroke-opacity="0.4"/>
      <text x="10" y="15" fill="{accent}" font-family="monospace" font-size="10" font-weight="bold" letter-spacing="1">// {badge}</text>

      <!-- Main Headline Title -->
      <text x="0" y="48" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="20" letter-spacing="-0.5">{title}</text>
      <text x="0" y="68" fill="#9CA3AF" font-family="sans-serif" font-size="12">{sub}</text>

      <!-- Live Code / Deployment Terminal Snippet -->
      <g transform="translate(0, 88)">
        <rect width="280" height="96" rx="10" fill="#0D0D14" stroke="#22222E" stroke-width="1"/>
        <!-- Terminal Header dots -->
        <circle cx="14" cy="14" r="3" fill="#EF4444"/>
        <circle cx="23" cy="14" r="3" fill="#F59E0B"/>
        <circle cx="32" cy="14" r="3" fill="#10B981"/>
        <text x="44" y="17" fill="#6B7280" font-family="monospace" font-size="8">bash - {slug}</text>

        <!-- Command Line & Output -->
        <text x="12" y="38" fill="#E5E7EB" font-family="monospace" font-size="9.5">$ core.deploy(&quot;{slug}&quot;)</text>
        <text x="12" y="56" fill="{accent}" font-family="monospace" font-size="9">{code}</text>
        <text x="12" y="74" fill="#9CA3AF" font-family="monospace" font-size="8.5">✓ {tag}</text>
        <rect x="12" y="82" width="256" height="3" rx="1.5" fill="#22222E"/>
        <rect x="12" y="82" width="180" height="3" rx="1.5" fill="url(#accentGrad_{slug})"/>
      </g>
    </g>

    <!-- Right Column: Bespoke Dedicated Visual Architecture -->
    {visual_element}
  </g>

  <!-- Bottom Badges Bar -->
  <g transform="translate(35, 335)">
    <rect width="255" height="34" rx="17" fill="#FFFFFF" fill-opacity="0.05" stroke="#FFFFFF" stroke-opacity="0.08"/>
    <text x="20" y="21" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="11">{metric_left}</text>

    <rect x="270" y="0" width="260" height="34" rx="17" fill="{accent}" fill-opacity="0.12" stroke="{accent}" stroke-opacity="0.35"/>
    <text x="400" y="21" fill="{accent}" font-family="monospace" font-weight="bold" font-size="10.5" text-anchor="middle">{metric_right}</text>
  </g>
</svg>
'''
    return svg

def main():
    target_dir = "public/images/services"
    os.makedirs(target_dir, exist_ok=True)
    generated = 0
    for slug, data in SERVICES.items():
        filepath = os.path.join(target_dir, f"{slug}.svg")
        content = build_svg(slug, data)
        # Validate XML before writing
        try:
            ET.fromstring(content)
        except Exception as e:
            print(f"XML VALIDATION FAILED for {slug}: {e}")
            raise e

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        generated += 1

    print(f"Successfully generated and validated {generated} bespoke service SVGs in {target_dir}!")

if __name__ == "__main__":
    main()

