import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getDb } from "./_lib/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const sql = getDb();
    const path =
      typeof req.body?.path === "string" ? req.body.path.slice(0, 255) : "/";
    await sql`INSERT INTO page_views (path) VALUES (${path})`;
    res.status(204).end();
  } catch (err) {
    console.error("Failed to record visit:", err);
    res.status(500).json({ error: "Failed to record visit" });
  }
}
