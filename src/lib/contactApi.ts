import type { ContactFormValues } from "@/lib/contactSchema";

export interface SubmitContactResult {
  ok: boolean;
  error?: string;
}

export async function submitContactForm(
  values: ContactFormValues
): Promise<SubmitContactResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) return { ok: true };
    const data = await res.json().catch(() => ({}));
    return { ok: false, error: data.error };
  } catch {
    return { ok: false, error: "network" };
  }
}
