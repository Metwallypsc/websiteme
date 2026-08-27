import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { adminLogin, fetchAdminStats } from "@/lib/adminApi";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // react-helmet-async doesn't reliably re-apply <title> on client-side
  // route changes (same gap fixed for the public pages in SEO.tsx).
  useEffect(() => {
    document.title = "Admin Login | Abdulrhman Metwally";
  }, []);

  useEffect(() => {
    let active = true;
    fetchAdminStats()
      .then((data) => {
        if (!active) return;
        if (data.authenticated) {
          navigate("/admin/dashboard", { replace: true });
        } else {
          setChecking(false);
        }
      })
      .catch(() => {
        if (active) setChecking(false);
      });
    return () => {
      active = false;
    };
  }, [navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const result = await adminLogin(username, password);
    setLoading(false);
    if (result.ok) {
      navigate("/admin/dashboard", { replace: true });
    } else {
      setError(result.error ?? "Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-6">
      <Helmet>
        <title>Admin Login | Abdulrhman Metwally</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <img
            src="/logo.svg"
            alt="Abdulrhman Metwally"
            width={169}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 min-h-[280px]">
          {checking ? (
            <div className="animate-pulse flex flex-col gap-4">
              <div className="h-5 w-2/3 bg-slate-100 rounded" />
              <div className="h-9 bg-slate-100 rounded mt-4" />
              <div className="h-9 bg-slate-100 rounded" />
              <div className="h-9 bg-slate-100 rounded mt-2" />
            </div>
          ) : (
            <>
              <h1 className="text-xl font-bold text-slate-900 mb-1">Admin Login</h1>
              <p className="text-sm text-slate-500 mb-6">Sign in to manage your site.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="admin-username">Username</Label>
                  <Input
                    id="admin-username"
                    name="username"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="admin-password">Password</Label>
                  <Input
                    id="admin-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {loading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
