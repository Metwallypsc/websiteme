export interface AdminStats {
  authenticated: boolean;
  totalVisitors?: number;
}

export async function adminLogin(
  username: string,
  password: string
): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    credentials: "include",
  });
  if (res.ok) return { ok: true };
  const data = await res.json().catch(() => ({}));
  return { ok: false, error: data.error ?? "Invalid username or password" };
}

export async function adminLogout(): Promise<void> {
  await fetch("/api/logout", { method: "POST", credentials: "include" }).catch(() => {});
}

export async function fetchAdminStats(): Promise<AdminStats> {
  const res = await fetch("/api/stats", { credentials: "include" });
  if (res.status === 401) return { authenticated: false };
  if (!res.ok) throw new Error("Failed to load stats");
  const data = await res.json();
  return { authenticated: true, totalVisitors: data.totalVisitors };
}

export function trackVisit(): void {
  if (typeof window === "undefined") return;
  if (sessionStorage.getItem("visit_tracked")) return;
  sessionStorage.setItem("visit_tracked", "1");
  fetch("/api/track-visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: window.location.pathname }),
  }).catch(() => {});
}
