// Thin wrapper around gtag so every call site doesn't need to guard for it
// itself - safe to call even before the Google tag has loaded (or if it
// never loads, e.g. blocked by an ad blocker).
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, params);
}
