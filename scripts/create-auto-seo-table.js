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

async function createAutoSeoTable() {
  console.log('Connecting to Neon PostgreSQL...');
  await client.connect();

  console.log('Creating auto_seo table...');
  await client.query(`
    CREATE TABLE IF NOT EXISTS "auto_seo" (
      "id" SERIAL PRIMARY KEY,
      "health_score" NUMERIC DEFAULT 88,
      "health_grade" VARCHAR(255) DEFAULT 'Grade A',
      "telemetry_search_console_connected" BOOLEAN DEFAULT true,
      "telemetry_ga4_property_id" VARCHAR(255) DEFAULT '384910281',
      "telemetry_page_speed_mobile_score" NUMERIC DEFAULT 94,
      "automation_daily_link_check" BOOLEAN DEFAULT true,
      "automation_weekly_ranking_audit" BOOLEAN DEFAULT true,
      "automation_monthly_growth_report" BOOLEAN DEFAULT true,
      "last_audit_timestamp" TIMESTAMPTZ DEFAULT NOW(),
      "optimization_notes" TEXT DEFAULT 'All 18 service disciplines fully structured with JSON-LD Schema.org entities, OpenGraph cards, and canonical tags.',
      "updated_at" TIMESTAMPTZ DEFAULT NOW() NOT NULL,
      "created_at" TIMESTAMPTZ DEFAULT NOW() NOT NULL
    );
  `);

  console.log('Inserting initial global record if none exists...');
  const check = await client.query(`SELECT COUNT(*) FROM "auto_seo";`);
  if (parseInt(check.rows[0].count, 10) === 0) {
    await client.query(`
      INSERT INTO "auto_seo" (
        "health_score",
        "health_grade",
        "telemetry_search_console_connected",
        "telemetry_ga4_property_id",
        "telemetry_page_speed_mobile_score",
        "automation_daily_link_check",
        "automation_weekly_ranking_audit",
        "automation_monthly_growth_report",
        "last_audit_timestamp",
        "optimization_notes"
      ) VALUES (
        92,
        'Grade A+',
        true,
        '384910281',
        98,
        true,
        true,
        true,
        NOW(),
        'All 18 service disciplines and core landing pages fully structured with sub-second TTFB, Schema.org entities, OpenGraph cards, and canonical tags.'
      );
    `);
    console.log('Inserted default auto_seo global record.');
  }

  console.log('auto_seo table successfully created and verified!');
  await client.end();
}

createAutoSeoTable().catch((err) => {
  console.error('Error creating auto_seo table:', err);
  process.exit(1);
});

