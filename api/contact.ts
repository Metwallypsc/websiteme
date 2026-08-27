import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { verifyTurnstileToken } from "./_lib/turnstile.js";
import { sendContactNotification } from "./_lib/email.js";

// Mirrors src/lib/contactSchema.ts. Not imported directly - that file's
// validation messages are localized client-side (built from `t()`), while
// this one only needs to accept/reject the shape, so duplicating the
// handful of structural rules here keeps the two bundlers (Vite for the
// client, Vercel's function bundler for /api) independent.
const contactPayloadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.enum([
    "pmaas",
    "business-analysis",
    "team-building",
    "mentorship",
    "technical-liaison",
    "other",
  ]),
  budgetTimeline: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(4000),
  website: z.string().max(0).optional().or(z.literal("")),
  turnstileToken: z.string().min(1),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const parsed = contactPayloadSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid submission" });
    return;
  }

  const values = parsed.data;

  // Honeypot: a real visitor never fills this field.
  if (values.website) {
    res.status(200).json({ ok: true });
    return;
  }

  const remoteIp = (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim();
  const captchaOk = await verifyTurnstileToken(values.turnstileToken, remoteIp);
  if (!captchaOk) {
    res.status(400).json({ error: "Captcha verification failed" });
    return;
  }

  try {
    await sendContactNotification({
      name: values.name,
      email: values.email,
      company: values.company,
      service: values.service,
      budgetTimeline: values.budgetTimeline,
      message: values.message,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
}
