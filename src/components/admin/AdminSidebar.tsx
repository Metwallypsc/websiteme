import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { adminLogout } from "@/lib/adminApi";

// Nav items go here as the panel grows - Logout always stays pinned to the
// bottom of the sidebar, separate from whatever sections come next.
const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await adminLogout();
    navigate("/admin", { replace: true });
  };

  return (
    <aside className="w-44 md:w-60 shrink-0 bg-slate-900 text-slate-300 flex flex-col min-h-screen">
      <div className="px-5 py-6 border-b border-white/10">
        <Link to="/admin/dashboard" className="inline-flex bg-white rounded-lg px-3 py-2">
          <img
            src="/logo.svg"
            alt="Abdulrhman Metwally"
            width={110}
            height={26}
            className="h-6 w-auto"
          />
        </Link>
        <p className="mt-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          Admin Panel
        </p>
      </div>

      <nav aria-label="Admin" className="flex-1 px-3 py-4">
        {/* Future admin sections will be added here */}
      </nav>

      <div className="p-3 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
