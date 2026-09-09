import { Resend } from "resend";

// Resend's account is unverified (no custom domain yet), so it can only
// deliver to the account's own signup address - sending to Arhmetwally@
// outlook.com gets rejected with "You can only send testing emails to
// your own email address". Switch this back once a domain is verified at
// resend.com/domains (see DEFAULT_FROM below).
const NOTIFY_EMAIL = "abdo04590@gmail.com";
// resend.dev requires no domain verification, so this ships working out of
// the box - swap RESEND_FROM_EMAIL to an address on a verified domain
// later for better deliverability/branding.
const DEFAULT_FROM = "Contact form <onboarding@resend.dev>";

let client: Resend | null = null;

function getClient(): Resend {
  if (!client) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not set");
    }
    client = new Resend(apiKey);
  }
  return client;
}

export interface ContactEmailPayload {
  name: string;
  email: string;
  company?: string;
  service: string;
  budgetTimeline?: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactNotification(payload: ContactEmailPayload): Promise<void> {
  const resend = getClient();
  const from = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM;

  const rows: [string, string][] = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Company", payload.company || "-"],
    ["Service", payload.service],
    ["Budget / timeline", payload.budgetTimeline || "-"],
  ];

  const html = `
    <div style="font-family: sans-serif; font-size: 15px; color: #0f172a;">
      <h2 style="margin: 0 0 16px;">New contact form submission</h2>
      <table style="border-collapse: collapse; margin-bottom: 20px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 4px 12px 4px 0; color: #64748b; vertical-align: top;">${escapeHtml(label)}</td>
            <td style="padding: 4px 0;">${escapeHtml(value)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="color: #64748b; margin: 0 0 6px;">Message</p>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(payload.message)}</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from,
    to: NOTIFY_EMAIL,
    replyTo: payload.email,
    subject: `New contact form message from ${payload.name}`,
    html,
  });

  if (error) {
    throw new Error(error.message ?? "Resend failed to send the email");
  }
}
