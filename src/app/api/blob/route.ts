import { NextResponse } from "next/server";
import { uploadAssetToBlob, listBlobAssets, deleteBlobAsset } from "@/lib/blob";

export async function GET() {
  try {
    const data = await listBlobAssets();
    return NextResponse.json({ success: true, storeId: "store_iSlfGrIDnKiPskBJ", blobs: data.blobs }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to list blobs" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const file = form.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const filename = `media/${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
    const blob = await uploadAssetToBlob(filename, file, { access: "private" });

    return NextResponse.json({ success: true, blob }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Upload failed" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { url } = await request.json();
    if (!url) {
      return NextResponse.json({ error: "Missing blob URL" }, { status: 400 });
    }
    await deleteBlobAsset(url);
    return NextResponse.json({ success: true, deleted: url }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Delete failed" }, { status: 500 });
  }
}
