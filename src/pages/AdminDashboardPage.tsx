import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Users } from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { fetchAdminStats } from "@/lib/adminApi";

type LoadState = "loading" | "ready" | "error";

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<LoadState>("loading");
  const [totalVisitors, setTotalVisitors] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Dashboard | Admin";
  }, []);

  useEffect(() => {
    let active = true;
    fetchAdminStats()
      .then((data) => {
        if (!active) return;
        if (!data.authenticated) {
          navigate("/admin", { replace: true });
          return;
        }
        setTotalVisitors(data.totalVisitors ?? 0);
        setState("ready");
      })
      .catch(() => {
        if (active) setState("error");
      });
    return () => {
      active = false;
    };
  }, [navigate]);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Helmet>
        <title>Dashboard | Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <AdminSidebar />

      <main className="flex-1 min-w-0 p-5 md:p-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Dashboard</h1>

        {state === "loading" && <p className="text-slate-500 text-sm">Loading…</p>}

        {state === "error" && (
          <p className="text-red-600 text-sm">Couldn't load stats. Try refreshing the page.</p>
        )}

        {state === "ready" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-xs shadow-sm">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2">
              <Users className="h-4 w-4" />
              Total Visitors
            </div>
            <div className="text-4xl font-extrabold text-blue-600 tabular-nums">
              {totalVisitors?.toLocaleString()}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboardPage;
