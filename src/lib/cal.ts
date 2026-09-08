// Vite exposes only import.meta.env.VITE_* to client code - this must stay
// unset (not hardcoded) until VITE_CALCOM_URL is configured in Vercel.
export const CALCOM_URL: string = import.meta.env.VITE_CALCOM_URL ?? "";

// The embed API takes a "calLink" (e.g. "arhmetwally/30min"), not the full
// URL, so the env var can stay a normal https://cal.com/... link like the
// one Cal.com's own UI shows you.
function calLinkFromUrl(url: string): string {
  if (!url) return "";
  try {
    return new URL(url).pathname.replace(/^\/+/, "");
  } catch {
    return url;
  }
}

const CAL_LINK = calLinkFromUrl(CALCOM_URL);
const EMBED_JS_SRC = "https://app.cal.com/embed/embed.js";

let initialized = false;

// Cal.com's own official embed snippet (see https://cal.com/docs). It sets
// up a `window.Cal` stub that queues every Cal(...) call until the real
// embed.js script - loaded lazily here, only once, on first actual use -
// is ready to process them. That queueing means calling "init" and then
// "modal"/"inline" back-to-back below is always safe regardless of how long
// the script takes to load; nothing needs to be awaited.
function ensureCal(): void {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;

  (function (C: Window, embedJsSrc: string, initKeyword: string) {
    const push = (api: CalApi, args: unknown[]) => api.q.push(args);
    const d = C.document;
    C.Cal =
      C.Cal ||
      ((...args: unknown[]) => {
        const cal = C.Cal!;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = embedJsSrc;
          cal.loaded = true;
        }
        if (args[0] === initKeyword) {
          const namespace = args[1] as string | undefined;
          const api = ((...apiArgs: unknown[]) => push(api, apiArgs)) as CalApi;
          api.q = [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            push(cal.ns[namespace], args);
            push(cal, ["initNamespace", namespace]);
          } else {
            push(cal, args);
          }
          return;
        }
        push(cal, args);
      });
  })(window, EMBED_JS_SRC, "init");

  window.Cal!("init", { origin: "https://cal.com" });
}

export function openCalPopup(): void {
  if (!CALCOM_URL) {
    console.warn("VITE_CALCOM_URL is not configured.");
    return;
  }
  ensureCal();
  window.Cal?.("modal", { calLink: CAL_LINK });
}

export function initInlineWidget(container: HTMLElement): void {
  if (!CALCOM_URL) return;
  ensureCal();
  window.Cal?.("inline", { elementOrSelector: container, calLink: CAL_LINK });
}

interface CalApi {
  (...args: unknown[]): void;
  q: unknown[][];
}

declare global {
  interface Window {
    Cal?: CalApi & { loaded?: boolean; ns: Record<string, CalApi> };
  }
}
