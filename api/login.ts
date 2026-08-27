import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createSessionToken, sessionCookieHeader, timingSafeStringEqual } from "./_lib/auth.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedUsername || !expectedPassword) {
    res.status(500).json({ error: "Admin credentials are not configured" });
    return;
  }

  const { username, password } = req.body ?? {};
  const valid =
    typeof username === "string" &&
    typeof password === "string" &&
    timingSafeStringEqual(username, expectedUsername) &&
    timingSafeStringEqual(password, expectedPassword);

  if (!valid) {
    res.status(401).json({ error: "Invalid username or password" });
    return;
  }

  res.setHeader("Set-Cookie", sessionCookieHeader(createSessionToken()));
  res.status(200).json({ ok: true });
}
