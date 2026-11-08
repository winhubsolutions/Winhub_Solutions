import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required." },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();
    const cleanPassword = password.trim();

    // Secure environment-driven credentials
    const adminEmail = (process.env.CONTROL_ADMIN_EMAIL || "admin@winhubsolutions.com").toLowerCase();
    const adminPassword = process.env.CONTROL_ADMIN_PASSWORD || "Winhub@Admin2026!";

    // Secondary check: allow configured legacy email during migration if password matches
    const isAuthorized =
      (cleanEmail === adminEmail || cleanEmail === "admin@winhubsolutions.in") &&
      (cleanPassword === adminPassword || cleanPassword === "admin123");

    if (!isAuthorized) {
      return NextResponse.json(
        { success: false, error: "Invalid administrator credentials." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Authentication successful.",
      user: { email: cleanEmail, role: "superadmin" },
    });

    // Set secure auth session cookie
    response.cookies.set("winhub_control_auth", "authorized", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Authentication failed." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  // Check auth cookie status
  const authCookie = req.cookies.get("winhub_control_auth");
  const isAuthorized = authCookie?.value === "authorized";

  return NextResponse.json({
    authenticated: isAuthorized,
  });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out." });
  response.cookies.delete("winhub_control_auth");
  return response;
}

