import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { AGENCY_CONFIG } from "@/data/agencyData";

export async function GET() {
  try {
    const res = await query(
      "SELECT value, updated_at FROM site_telemetry WHERE key = 'site_settings' LIMIT 1;"
    );

    if (res.rows.length > 0) {
      return NextResponse.json({
        success: true,
        source: "neon_db",
        settings: res.rows[0].value,
        updatedAt: res.rows[0].updated_at,
      });
    }

    // Default fallback to static agency config
    return NextResponse.json({
      success: true,
      source: "agency_config_default",
      settings: {
        name: AGENCY_CONFIG.name,
        email: AGENCY_CONFIG.contacts.email,
        phone: AGENCY_CONFIG.contacts.phone,
        address: AGENCY_CONFIG.address.full,
        status: AGENCY_CONFIG.status,
      },
    });
  } catch (err: any) {
    // Fallback to static agency config on DB connection or table missing
    return NextResponse.json({
      success: true,
      source: "agency_config_fallback",
      settings: {
        name: AGENCY_CONFIG.name,
        email: AGENCY_CONFIG.contacts.email,
        phone: AGENCY_CONFIG.contacts.phone,
        address: AGENCY_CONFIG.address.full,
        status: AGENCY_CONFIG.status,
      },
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const sql = `
      INSERT INTO site_telemetry (key, value, updated_at)
      VALUES ('site_settings', $1, CURRENT_TIMESTAMP)
      ON CONFLICT (key)
      DO UPDATE SET
        value = EXCLUDED.value,
        updated_at = CURRENT_TIMESTAMP
      RETURNING key, value, updated_at;
    `;

    const res = await query(sql, [JSON.stringify(body)]);

    return NextResponse.json({
      success: true,
      message: "Global Site Settings successfully persisted to Neon PostgreSQL.",
      saved: res.rows[0],
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to save site settings: " + err.message },
      { status: 500 }
    );
  }
}

