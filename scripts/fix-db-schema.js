/**
 * Migration Script: Align Database Schema for Payload CMS & AI AutoSEO
 */

const { Client } = require('pg');

const client = new Client({
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

async function migrate() {
  console.log('Connecting to Neon PostgreSQL...');
  await client.connect();

  const tables = ['services', 'pages', 'projects', 'blog_posts'];

  for (const table of tables) {
    console.log(`Adding missing AutoSEO columns to ${table}...`);
    await client.query(`
      ALTER TABLE "${table}"
        ADD COLUMN IF NOT EXISTS "seo_focus_keyword" VARCHAR(255),
        ADD COLUMN IF NOT EXISTS "seo_secondary_keywords" TEXT,
        ADD COLUMN IF NOT EXISTS "seo_seo_score" NUMERIC,
        ADD COLUMN IF NOT EXISTS "seo_seo_recommendations" TEXT,
        ADD COLUMN IF NOT EXISTS "seo_structured_data" JSONB,
        ADD COLUMN IF NOT EXISTS "seo_last_s_e_o_analysis" TIMESTAMPTZ;
    `);
  }

  // Handle services_expertiseList and services_processSteps
  console.log('Handling array table names for Services...');

  // 1. expertiseList
  try {
    const checkTable = await client.query(`
      SELECT table_name FROM information_schema.tables 
      WHERE table_name = 'services_expertise_list';
    `);
    if (checkTable.rows.length > 0) {
      await client.query(`ALTER TABLE "services_expertise_list" RENAME TO "services_expertiseList";`);
      console.log('Renamed services_expertise_list to services_expertiseList');
    }
  } catch (e) {
    console.log('Note on expertiseList table:', e.message);
  }

  try {
    await client.query(`
      CREATE OR REPLACE VIEW "services_expertise_list" AS SELECT * FROM "services_expertiseList";
    `);
  } catch (e) {
    console.log('View creation notice:', e.message);
  }

  // 2. processSteps
  try {
    const checkTable2 = await client.query(`
      SELECT table_name FROM information_schema.tables 
      WHERE table_name = 'services_process_steps';
    `);
    if (checkTable2.rows.length > 0) {
      await client.query(`ALTER TABLE "services_process_steps" RENAME TO "services_processSteps";`);
      console.log('Renamed services_process_steps to services_processSteps');
    }
  } catch (e) {
    console.log('Note on processSteps table:', e.message);
  }

  try {
    await client.query(`
      CREATE OR REPLACE VIEW "services_process_steps" AS SELECT * FROM "services_processSteps";
    `);
  } catch (e) {
    console.log('View creation notice:', e.message);
  }

  console.log('Schema alignment complete.');
  await client.end();
}

migrate().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});

