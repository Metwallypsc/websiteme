import type { VercelRequest, VercelResponse } from "@vercel/node";
import { COOKIE_NAME, parseCookies, verifySessionToken } from "./_lib/auth.js";
import { getDb } from "./_lib/db.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const cookies = parseCookies(req.headers.cookie);
  if (!verifySessionToken(cookies[COOKIE_NAME])) {
    res.status(401).json({ error: "Not authenticated" });
    return;
  }

  try {
    const sql = getDb();
    const rows = await sql`SELECT COUNT(*)::int AS total FROM page_views`;
    const total = (rows[0] as { total: number } | undefined)?.total ?? 0;
    res.status(200).json({ totalVisitors: total });
  } catch (err) {
    console.error("Failed to load stats:", err);
    res.status(500).json({ error: "Failed to load stats" });
  }
}
