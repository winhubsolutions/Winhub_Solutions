import { Pool } from "pg";
import type { PoolConfig, QueryResult, QueryResultRow } from "pg";
import { promises as dns } from "dns";

// Ensure resilient DNS fallback (resolves AWS Neon endpoints even if local stub resolver fails)
dns.setServers(["8.8.8.8", "1.1.1.1"]);

let pool: Pool | null = null;
let resolvedHostIp: string | null = null;

const NEON_DEFAULT_HOST = "ep-red-sun-bc56t67s-pooler.c-16.us-east-1.aws.neon.tech";

async function getPool(): Promise<Pool> {
  if (pool) return pool;

  const rawHost = process.env.PGHOST || NEON_DEFAULT_HOST;

  // Resolve hostname with fallback to 8.8.8.8
  try {
    const addresses = await dns.resolve4(rawHost);
    if (addresses && addresses.length > 0) {
      resolvedHostIp = addresses[0];
    }
  } catch (e) {
    console.warn("[db] DNS fallback resolution notice:", (e as Error).message);
    resolvedHostIp = rawHost;
  }

  const config: PoolConfig = {
    user: process.env.PGUSER || "neondb_owner",
    password: process.env.PGPASSWORD || "npg_FmYh0t1uXLSP",
    database: process.env.PGDATABASE || "neondb",
    host: resolvedHostIp || rawHost,
    port: parseInt(process.env.PGPORT || "5432", 10),
    ssl: {
      rejectUnauthorized: false,
      servername: rawHost,
    },
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
  };

  pool = new Pool(config);

  pool.on("error", (err) => {
    console.error("[db] Unexpected idle PostgreSQL client error:", err.message);
  });

  return pool;
}

/**
 * Execute a parameterized SQL query against Neon PostgreSQL
 */
export async function query<T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> {
  const p = await getPool();
  return p.query<T>(text, params);
}

/**
 * Initialize core database tables if they do not exist
 */
export async function initDb(): Promise<void> {
  const initSql = `
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(100),
      service VARCHAR(255),
      budget VARCHAR(100),
      timeline VARCHAR(100),
      message TEXT,
      status VARCHAR(50) DEFAULT 'new',
      ip_address VARCHAR(100),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS media_items (
      id SERIAL PRIMARY KEY,
      filename VARCHAR(255) NOT NULL,
      mime_type VARCHAR(100),
      file_size INTEGER,
      url TEXT NOT NULL,
      uploaded_by VARCHAR(255) DEFAULT 'admin',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS site_telemetry (
      id SERIAL PRIMARY KEY,
      key VARCHAR(100) UNIQUE NOT NULL,
      value JSONB NOT NULL,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await query(initSql);
    console.log("[db] Neon PostgreSQL schema verified and synchronized.");
  } catch (err) {
    console.error("[db] Schema init warning:", (err as Error).message);
  }
}

/**
 * Health check helper to test Neon DB connectivity
 */
export async function testConnection(): Promise<{
  connected: boolean;
  version?: string;
  timestamp?: string;
  error?: string;
}> {
  try {
    const res = await query("SELECT version(), NOW() as current_time;");
    return {
      connected: true,
      version: res.rows[0].version,
      timestamp: res.rows[0].current_time,
    };
  } catch (err) {
    return {
      connected: false,
      error: (err as Error).message,
    };
  }
}

