// Vite exposes only import.meta.env.VITE_* to client code - this must stay
// unset (not hardcoded) until VITE_CALENDLY_URL is configured in Vercel.
export const CALENDLY_URL: string = import.meta.env.VITE_CALENDLY_URL ?? "";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const STYLESHEET_HREF = "https://assets.calendly.com/assets/external/widget.css";

let scriptLoadPromise: Promise<void> | null = null;

// Loads the Calendly widget script/stylesheet exactly once, no matter how
// many components request it (popup button, inline embed, etc.).
function loadCalendlyAssets(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();
  if (scriptLoadPromise) return scriptLoadPromise;

  if (!document.querySelector(`link[href="${STYLESHEET_HREF}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = STYLESHEET_HREF;
    document.head.appendChild(link);
  }

  scriptLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Failed to load Calendly")));
      if (window.Calendly) resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Calendly"));
    document.body.appendChild(script);
  });

  return scriptLoadPromise;
}

function withLocale(url: string, locale: "en" | "ar"): string {
  if (!url) return url;
  try {
    const parsed = new URL(url);
    // Calendly only supports a handful of locales; Arabic isn't one, so it
    // intentionally falls back to its default rather than passing an
    // unsupported locale code.
    if (locale === "en") parsed.searchParams.set("locale", "en");
    return parsed.toString();
  } catch {
    return url;
  }
}

export async function openCalendlyPopup(locale: "en" | "ar" = "en"): Promise<void> {
  if (!CALENDLY_URL) {
    console.warn("VITE_CALENDLY_URL is not configured.");
    return;
  }
  await loadCalendlyAssets();
  window.Calendly?.initPopupWidget({ url: withLocale(CALENDLY_URL, locale) });
}

export async function initInlineWidget(
  container: HTMLElement,
  locale: "en" | "ar" = "en"
): Promise<void> {
  if (!CALENDLY_URL) return;
  await loadCalendlyAssets();
  window.Calendly?.initInlineWidget({
    url: withLocale(CALENDLY_URL, locale),
    parentElement: container,
  });
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}
