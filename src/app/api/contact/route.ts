import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { sendContactNotification } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // 1. Persist directly into Neon PostgreSQL
    let dbRecordId: number | null = null;
    try {
      const sql = `
        INSERT INTO contact_submissions (name, email, phone, service, budget, timeline, message)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, created_at;
      `;
      const res = await query(sql, [
        name,
        email,
        phone || null,
        service || company || "General Inquiry",
        budget || null,
        company || null,
        message || null,
      ]);
      if (res.rows.length > 0) {
        dbRecordId = res.rows[0].id;
      }
    } catch (dbErr) {
      console.error("[api/contact] DB insertion notice:", (dbErr as Error).message);
    }

    const inquiryId = dbRecordId ? `WIN-DB-${dbRecordId}` : `WIN-${Date.now().toString().slice(-6)}`;

    // 2. Dispatch Email via Resend
    let emailDispatched = false;
    let emailId: string | null = null;
    let emailError: string | null = null;

    try {
      const emailResult = await sendContactNotification({
        inquiryId,
        name,
        email,
        phone,
        company,
        service,
        budget,
        message,
      });

      if (emailResult.data) {
        emailDispatched = true;
        emailId = emailResult.data.id;
      } else if (emailResult.error) {
        emailError = emailResult.error.message;
        console.error("[api/contact] Resend dispatch warning:", emailResult.error);
      }
    } catch (err: any) {
      emailError = err.message;
      console.error("[api/contact] Resend exception:", err.message);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your project inquiry has been received. Our engineering team has been notified.",
        inquiryId,
        databaseSynced: !!dbRecordId,
        emailDispatched,
        emailId,
        ...(emailError ? { emailNotice: emailError } : {}),
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to process inquiry submission: " + err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const res = await query(
      "SELECT id, name, email, phone, service, budget, timeline, message, status, created_at FROM contact_submissions ORDER BY created_at DESC LIMIT 50;"
    );
    return NextResponse.json({
      submissions: res.rows,
      total: res.rowCount,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to retrieve submissions: " + err.message, submissions: [] },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();
    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }
    const res = await query(
      "UPDATE contact_submissions SET status = $1 WHERE id = $2 RETURNING id, status;",
      [status, id]
    );
    if (res.rows.length === 0) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, updated: res.rows[0] });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to update lead status: " + err.message }, { status: 500 });
  }
}
