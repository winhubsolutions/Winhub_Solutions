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

async function seedPages() {
  console.log('Seeding Home Page and Custom Blocks in Neon DB...');

  // Delete existing pages
  await pool.query('DELETE FROM pages;');

  // Insert Home Page
  const res = await pool.query(
    `INSERT INTO pages (title, slug, hero_headline, hero_subtitle, seo_meta_title, seo_meta_description, created_at, updated_at)
     VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
     RETURNING id;`,
    [
      'Home',
      'home',
      'WE BUILD THE WEB. YOU BUILD THE FUTURE.',
      'Building Digital Solutions That Move Businesses Forward.',
      'Winhub Solutions | Technology Partner',
      'Building Digital Solutions That Move Businesses Forward. Full-stack web engineering, custom software, autonomous AI agents, and scholarly publishing.',
    ]
  );

  const pageId = res.rows[0].id;
  console.log('Created Page id:', pageId);

  // Insert Hero Block
  await pool.query(
    `INSERT INTO pages_blocks_hero_block (
      _order, _parent_id, _path, id, badge_text, headline, subheadline,
      primary_cta_text, primary_cta_url, secondary_cta_text, secondary_cta_url,
      style_variant, block_name
    ) VALUES (
      1, $1, 'blocks', 'blk_hero_1', $2, $3, $4, $5, $6, $7, $8, '3d-canvas', 'Main Hero Section'
    );`,
    [
      pageId,
      'YOUR TECHNOLOGY PARTNER',
      'WE BUILD THE WEB. YOU BUILD THE FUTURE.',
      'Building Digital Solutions That Move Businesses Forward. Full-stack web engineering, custom enterprise platforms, autonomous AI agents, and scholarly OJS publishing.',
      'Start Your Project',
      '/contact',
      'Explore 18 Disciplines',
      '/services',
    ]
  );

  // Insert Services Grid Block
  await pool.query(
    `INSERT INTO pages_blocks_services_grid_block (
      _order, _parent_id, _path, id, badge, headline, subtext, layout_mode, category_filter, display_limit, block_name
    ) VALUES (
      2, $1, 'blocks', 'blk_srv_1', $2, $3, $4, 'carousel', 'all', 18, 'Services Snap Carousel'
    );`,
    [
      pageId,
      'CORE EXPERTISE',
      '18 Specialized Engineering Disciplines',
      'From sub-second Next.js interfaces to complex asynchronous Node.js backends and scholarly publishing infrastructure.',
    ]
  );

  // Insert Tech Stack Block
  await pool.query(
    `INSERT INTO pages_blocks_tech_stack_block (
      _order, _parent_id, _path, id, badge, headline, subtext, active_category, enable_interactive_tabs, block_name
    ) VALUES (
      3, $1, 'blocks', 'blk_tech_1', $2, $3, $4, 'all', true, 'Full-Stack Technologies Matrix'
    );`,
    [
      pageId,
      'FULL-STACK CAPABILITIES',
      'Modern Technologies & Hardened Stacks',
      'We engineer on proven, high-performance foundations. Zero bloat, strict typing, and resilient databases.',
    ]
  );

  // Insert Terminal Block
  await pool.query(
    `INSERT INTO pages_blocks_terminal_block (
      _order, _parent_id, _path, id, terminal_title, status_indicator, block_name
    ) VALUES (
      4, $1, 'blocks', 'blk_term_1', 'wintech-core-v2.4 ~ bash', 'git:(main) [ONLINE · NEON DB 18.6]', 'Interactive Core CLI Terminal'
    );`,
    [pageId]
  );

  // Insert Projects Showcase Block
  await pool.query(
    `INSERT INTO pages_blocks_projects_showcase_block (
      _order, _parent_id, _path, id, badge, headline, subtext, featured_only, show_view_all_button, block_name
    ) VALUES (
      5, $1, 'blocks', 'blk_proj_1', $2, $3, $4, true, true, 'Featured Enterprise Work'
    );`,
    [
      pageId,
      'SELECTED WORK',
      'Real Platforms. Measurable Impact.',
      'A selection of recent enterprise portals, scholarly journals, and AI automation engines delivered by Winhub Solutions.',
    ]
  );

  // Insert Feature Cards Block
  await pool.query(
    `INSERT INTO pages_blocks_feature_cards_block (
      _order, _parent_id, _path, id, badge, headline, subtext, block_name
    ) VALUES (
      6, $1, 'blocks', 'blk_feat_1', $2, $3, $4, 'Value Pillars'
    );`,
    [
      pageId,
      'WHY WINHUB SOLUTIONS',
      'Engineering Excellence Over Off-the-Shelf Compromise',
      'How we approach custom software design, database security, and system longevity.',
    ]
  );

  // Insert Process Workflow Block
  await pool.query(
    `INSERT INTO pages_blocks_process_workflow_block (
      _order, _parent_id, _path, id, badge, headline, subtext, block_name
    ) VALUES (
      7, $1, 'blocks', 'blk_proc_1', $2, $3, $4, 'Delivery Lifecycle'
    );`,
    [
      pageId,
      'EXECUTION METHODOLOGY',
      'From Architecture Discovery to Zero-Downtime Deployment',
      'Our battle-tested sprint lifecycle ensures predictability, continuous testing, and on-time delivery.',
    ]
  );

  // Insert Statistics Block
  await pool.query(
    `INSERT INTO pages_blocks_statistics_block (
      _order, _parent_id, _path, id, headline, block_name
    ) VALUES (
      8, $1, 'blocks', 'blk_stats_1', 'Engineering By The Numbers', 'Key Metrics Counter'
    );`,
    [pageId]
  );

  // Insert Testimonials Block
  await pool.query(
    `INSERT INTO pages_blocks_testimonials_block (
      _order, _parent_id, _path, id, badge, headline, subtext, featured_only, block_name
    ) VALUES (
      9, $1, 'blocks', 'blk_test_1', $2, $3, $4, true, 'Client Endorsements'
    );`,
    [
      pageId,
      'TRUST & PARTNERSHIPS',
      'Endorsed by Editors, CTOs & Enterprise Founders',
      'Read what technical leaders and academic institutions say about partnering with Winhub Solutions.',
    ]
  );

  // Insert FAQ Block
  await pool.query(
    `INSERT INTO pages_blocks_faq_block (
      _order, _parent_id, _path, id, badge, headline, subtext, category_filter, block_name
    ) VALUES (
      10, $1, 'blocks', 'blk_faq_1', $2, $3, $4, 'all', 'Frequently Asked Questions'
    );`,
    [
      pageId,
      'FREQUENTLY ASKED QUESTIONS',
      'Clear Answers to Technical Questions',
      'Everything you need to know about our stacks, OJS workflows, and engagement models.',
    ]
  );

  // Insert CTA Banner Block
  await pool.query(
    `INSERT INTO pages_blocks_cta_banner_block (
      _order, _parent_id, _path, id, badge, headline, subtext, button_text, button_url, show_contact_snippet, block_name
    ) VALUES (
      11, $1, 'blocks', 'blk_cta_1', $2, $3, $4, $5, $6, true, 'Conversion Banner'
    );`,
    [
      pageId,
      'READY TO BUILD?',
      'Let\'s Architect Your Next Digital Platform',
      'Get in touch with our technical leads in Warangal, Telangana. Schedule a free technical discovery call today.',
      'Schedule Architecture Call',
      '/contact',
    ]
  );

  console.log('Seeded Home Page with 11 Dynamic Custom Blocks!');
  await pool.end();
}

seedPages().catch((err) => {
  console.error('Seeding pages failed:', err);
  pool.end();
  process.exit(1);
});

