import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const res = await query(
      "SELECT id, filename, mime_type, file_size, url, uploaded_by, created_at FROM media_items ORDER BY created_at DESC;"
    );
    return NextResponse.json({
      success: true,
      media: res.rows,
      total: res.rowCount,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to list media items", media: [] }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const file = form.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const safeFilename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    const uploadDir = path.join(process.cwd(), "public/uploads");
    const filePath = path.join(uploadDir, safeFilename);

    await writeFile(filePath, buffer);
    const fileUrl = `/uploads/${safeFilename}`;

    // Record in Neon PostgreSQL
    const res = await query(
      `INSERT INTO media_items (filename, mime_type, file_size, url)
       VALUES ($1, $2, $3, $4)
       RETURNING id, filename, url, created_at;`,
      [file.name, file.type, file.size, fileUrl]
    );

    return NextResponse.json(
      {
        success: true,
        item: res.rows[0],
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Upload failed" }, { status: 500 });
  }
}

