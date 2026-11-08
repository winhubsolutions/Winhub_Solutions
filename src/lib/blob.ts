import { put, list, del, head } from "@vercel/blob";

export const BLOB_STORE_ID = process.env.WIN_TECH_STORE_ID || "store_iSlfGrIDnKiPskBJ";
export const BLOB_TOKEN =
  process.env.BLOB_READ_WRITE_TOKEN ||
  process.env.WIN_TECH_READ_WRITE_TOKEN ||
  "vercel_blob_rw_iSlfGrIDnKiPskBJ_xdYeXQGLDddCoTO2f2lbjsXcq9o1dK";

/**
 * Upload a binary buffer or file stream to Winhub Solutions Vercel Blob Storage
 */
export async function uploadAssetToBlob(
  filename: string,
  data: Buffer | Blob | ReadableStream,
  options?: { access?: "private" | "public"; addRandomSuffix?: boolean }
) {
  return await put(filename, data, {
    access: options?.access || "private",
    token: BLOB_TOKEN,
    addRandomSuffix: options?.addRandomSuffix !== undefined ? options.addRandomSuffix : true,
  });
}

/**
 * List all assets currently stored in the Winhub Solutions Vercel Blob Store
 */
export async function listBlobAssets(options?: { limit?: number; cursor?: string }) {
  return await list({
    limit: options?.limit || 100,
    cursor: options?.cursor,
    token: BLOB_TOKEN,
  });
}

/**
 * Get metadata for a specific blob asset
 */
export async function getBlobMetadata(url: string) {
  return await head(url, {
    token: BLOB_TOKEN,
  });
}

/**
 * Delete an asset from Vercel Blob Storage by URL
 */
export async function deleteBlobAsset(url: string) {
  return await del(url, {
    token: BLOB_TOKEN,
  });
}
