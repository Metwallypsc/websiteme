import { z } from "zod";

export const CONTACT_SERVICE_OPTIONS = [
  "pmaas",
  "business-analysis",
  "team-building",
  "mentorship",
  "technical-liaison",
  "other",
] as const;

export type ContactServiceOption = (typeof CONTACT_SERVICE_OPTIONS)[number];

export interface ContactSchemaMessages {
  nameRequired: string;
  emailInvalid: string;
  serviceRequired: string;
  messageRequired: string;
  captchaRequired: string;
}

// A factory (not a static schema) because the validation messages must
// follow the active language - built fresh whenever `t` changes.
// Mirrored (not imported) in api/contact.ts - see the note there for why.
//
// requireCaptcha mirrors api/_lib/turnstile.ts's own "fail open" behavior:
// TurnstileWidget renders nothing until VITE_TURNSTILE_SITE_KEY is set, so
// requiring a token before then would make the form permanently stuck.
export function createContactFormSchema(
  messages: ContactSchemaMessages,
  requireCaptcha: boolean
) {
  return z.object({
    name: z.string().trim().min(2, messages.nameRequired).max(120),
    email: z.string().trim().email(messages.emailInvalid).max(200),
    company: z.string().trim().max(150).optional().or(z.literal("")),
    service: z.enum(CONTACT_SERVICE_OPTIONS, {
      errorMap: () => ({ message: messages.serviceRequired }),
    }),
    budgetTimeline: z.string().trim().max(200).optional().or(z.literal("")),
    message: z.string().trim().min(10, messages.messageRequired).max(4000),
    // Honeypot: real visitors never see or fill this field. Any value here
    // means a bot filled every input on the page, so the submit is dropped.
    website: z.string().max(0).optional().or(z.literal("")),
    turnstileToken: requireCaptcha
      ? z.string().min(1, messages.captchaRequired)
      : z.string().optional().or(z.literal("")),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactFormSchema>>;
