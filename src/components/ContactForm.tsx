import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TurnstileWidget from "@/components/TurnstileWidget";
import BookCallButton from "@/components/BookCallButton";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  CONTACT_SERVICE_OPTIONS,
  createContactFormSchema,
  type ContactFormValues,
  type ContactServiceOption,
} from "@/lib/contactSchema";
import { submitContactForm } from "@/lib/contactApi";
import { trackEvent } from "@/lib/analytics";
import { PERSON_EMAIL } from "@/data/structuredData";

type Status = "idle" | "submitting" | "success" | "error";

const SERVICE_LABEL_KEYS: Record<ContactServiceOption, string> = {
  pmaas: "footerService1",
  "business-analysis": "footerService2",
  "team-building": "footerService3",
  mentorship: "footerService4",
  "technical-liaison": "footerService5",
  other: "contactServiceOther",
};

const ContactForm = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const statusRef = useRef<HTMLDivElement>(null);

  const captchaConfigured = Boolean(import.meta.env.VITE_TURNSTILE_SITE_KEY);

  const schema = useMemo(
    () =>
      createContactFormSchema(
        {
          nameRequired: t("validationNameRequired"),
          emailInvalid: t("validationEmailInvalid"),
          serviceRequired: t("validationServiceRequired"),
          messageRequired: t("validationMessageRequired"),
          captchaRequired: t("validationCaptchaMissing"),
        },
        captchaConfigured
      ),
    [t, captchaConfigured]
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: undefined,
      budgetTimeline: "",
      message: "",
      website: "",
      turnstileToken: "",
    },
  });

  // Runs after React has actually committed the success/error box to the
  // DOM (a ref set synchronously right after setState would still be null -
  // that state hasn't rendered yet), so the focus call reliably lands.
  useEffect(() => {
    if (status === "success" || status === "error") {
      statusRef.current?.focus();
    }
  }, [status]);

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    const result = await submitContactForm(values);
    if (result.ok) {
      setStatus("success");
      trackEvent("contact_form_submit", { service: values.service });
      form.reset();
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-green-200 bg-green-50 p-6 outline-none"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-slate-900 mb-1">{t("contactFormSuccessTitle")}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {t("contactFormSuccessText")}
            </p>
            <BookCallButton
              source="contact_form_success"
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        id="contact-form"
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-5"
      >
        {status === "error" && (
          <div
            ref={statusRef}
            tabIndex={-1}
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-4 outline-none flex items-start gap-3"
          >
            <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900 text-sm mb-1">
                {t("contactFormErrorTitle")}
              </p>
              <p className="text-sm text-slate-600">{t("contactFormErrorText")}</p>
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contactFormNameLabel")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("contactFormNamePlaceholder")} autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contactFormEmailLabel")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("contactFormEmailPlaceholder")}
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contactFormCompanyLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("contactFormCompanyPlaceholder")} autoComplete="organization" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contactFormServiceLabel")}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t("contactFormServicePlaceholder")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CONTACT_SERVICE_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {t(SERVICE_LABEL_KEYS[option])}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="budgetTimeline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contactFormBudgetLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("contactFormBudgetPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contactFormMessageLabel")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("contactFormMessagePlaceholder")}
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Honeypot - hidden from sighted and screen-reader users, bots fill every field */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...form.register("website")}
          />
        </div>

        <FormField
          control={form.control}
          name="turnstileToken"
          render={({ fieldState }) => (
            <FormItem>
              <TurnstileWidget onVerify={(token) => form.setValue("turnstileToken", token, { shouldValidate: true })} />
              {fieldState.error && (
                <p className="text-sm font-medium text-destructive">{fieldState.error.message}</p>
              )}
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={status === "submitting"}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {status === "submitting" ? t("contactFormSubmitting") : t("contactFormSubmit")}
        </Button>

        <p className="text-sm text-slate-500 text-center">
          {t("contactFormEmailFallback")}{" "}
          <a href={`mailto:${PERSON_EMAIL}`} className="text-blue-600 hover:underline">
            {PERSON_EMAIL}
          </a>
        </p>
      </form>
    </Form>
  );
};

export default ContactForm;
