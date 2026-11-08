/**
 * Winhub Solutions - Automated Neon PostgreSQL Database Dumper
 * Exports full SQL schemas, INSERT statements, and structured JSON data.
 */

const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const outputDir = process.argv[2] || path.join(__dirname, '../backups/db');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const client = new Client({
  host: process.env.PGHOST_IP || '44.218.206.133',
  port: 5432,
  user: process.env.PGUSER || 'neondb_owner',
  password: process.env.PGPASSWORD || 'npg_FmYh0t1uXLSP',
  database: process.env.PGDATABASE || 'neondb',
  ssl: {
    rejectUnauthorized: false,
    servername: 'ep-red-sun-bc56t67s-pooler.c-16.us-east-1.aws.neon.tech',
  },
});

function escapeSqlValue(val) {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'boolean') return val ? 'TRUE' : 'FALSE';
  if (typeof val === 'number') return String(val);
  if (val instanceof Date) return `'${val.toISOString()}'`;
  if (typeof val === 'object') {
    return `'${JSON.stringify(val).replace(/'/g, "''")}'::jsonb`;
  }
  const str = String(val);
  return `'${str.replace(/'/g, "''")}'`;
}

async function runDump() {
  console.log('Connecting to Neon PostgreSQL cluster...');
  await client.connect();
  console.log('Connected successfully. Fetching schema definitions...');

  const tablesRes = await client.query(`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
    ORDER BY table_name;
  `);

  const tableNames = tablesRes.rows.map(r => r.table_name);
  console.log(`Found ${tableNames.length} tables in public schema.`);

  const fullDumpSql = [];
  const fullDumpJson = {};
  const stats = {
    dumpDate: new Date().toISOString(),
    database: 'neondb',
    totalTables: tableNames.length,
    tableRowCounts: {},
    totalRows: 0,
  };

  fullDumpSql.push(`-- ========================================================`);
  fullDumpSql.push(`-- Winhub Solutions - Neon PostgreSQL Database Backup`);
  fullDumpSql.push(`-- Generated: ${stats.dumpDate}`);
  fullDumpSql.push(`-- Database: neondb (Serverless Cluster)`);
  fullDumpSql.push(`-- Total Tables: ${tableNames.length}`);
  fullDumpSql.push(`-- ========================================================\n`);
  fullDumpSql.push(`SET statement_timeout = 0;`);
  fullDumpSql.push(`SET client_encoding = 'UTF8';`);
  fullDumpSql.push(`SET standard_conforming_strings = on;`);
  fullDumpSql.push(`SET check_function_bodies = false;`);
  fullDumpSql.push(`SET client_min_messages = warning;`);
  fullDumpSql.push(`SET row_security = off;\n`);

  for (const tableName of tableNames) {
    // 1. Column definitions
    const colsRes = await client.query(`
      SELECT column_name, data_type, udt_name, is_nullable, column_default
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = $1
      ORDER BY ordinal_position;
    `, [tableName]);

    const colDefs = colsRes.rows.map(col => {
      let type = col.data_type;
      if (type === 'USER-DEFINED') type = col.udt_name;
      const notNull = col.is_nullable === 'NO' ? ' NOT NULL' : '';
      const def = col.column_default ? ` DEFAULT ${col.column_default}` : '';
      return `  "${col.column_name}" ${type}${notNull}${def}`;
    });

    fullDumpSql.push(`-- Table: ${tableName}`);
    fullDumpSql.push(`CREATE TABLE IF NOT EXISTS "${tableName}" (\n${colDefs.join(',\n')}\n);\n`);

    // 2. Fetch row data
    const rowsRes = await client.query(`SELECT * FROM "${tableName}";`);
    const rows = rowsRes.rows;
    stats.tableRowCounts[tableName] = rows.length;
    stats.totalRows += rows.length;
    fullDumpJson[tableName] = rows;

    // Save individual table JSON file
    fs.writeFileSync(
      path.join(outputDir, `${tableName}.json`),
      JSON.stringify(rows, null, 2)
    );

    if (rows.length > 0) {
      const colNames = colsRes.rows.map(c => `"${c.column_name}"`).join(', ');
      for (const row of rows) {
        const values = colsRes.rows.map(c => escapeSqlValue(row[c.column_name])).join(', ');
        fullDumpSql.push(`INSERT INTO "${tableName}" (${colNames}) VALUES (${values});`);
      }
      fullDumpSql.push('');
    }
  }

  // Write full SQL dump
  const sqlDumpPath = path.join(outputDir, 'neondb_full_dump.sql');
  fs.writeFileSync(sqlDumpPath, fullDumpSql.join('\n'));

  // Write full JSON dump
  const jsonDumpPath = path.join(outputDir, 'neondb_full_dump.json');
  fs.writeFileSync(jsonDumpPath, JSON.stringify(fullDumpJson, null, 2));

  // Write stats manifest
  fs.writeFileSync(
    path.join(outputDir, 'database_manifest.json'),
    JSON.stringify(stats, null, 2)
  );

  await client.end();

  console.log('\n--- Neon DB Backup Complete ---');
  console.log(`Tables Dumped: ${stats.totalTables}`);
  console.log(`Total Records: ${stats.totalRows}`);
  console.log(`SQL Dump: ${sqlDumpPath} (${(fs.statSync(sqlDumpPath).size / 1024).toFixed(1)} KB)`);
  console.log(`JSON Dump: ${jsonDumpPath} (${(fs.statSync(jsonDumpPath).size / 1024).toFixed(1)} KB)`);
}

runDump().catch(err => {
  console.error('Database Dump Failed:', err);
  process.exit(1);
});

