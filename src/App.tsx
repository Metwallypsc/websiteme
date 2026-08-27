import { Routes, Route } from "react-router-dom";

import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import CVPage from "./pages/CVPage";
import NotFound from "./pages/NotFound";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

// Route tree only - no Router or providers here, so the same tree can be
// mounted under BrowserRouter (client) or StaticRouter (SSR prerendering).
const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/cv" element={<CVPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>

    {/* Admin panel - deliberately outside Layout, no public header/footer */}
    <Route path="/admin" element={<AdminLoginPage />} />
    <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
  </Routes>
);

export default AppRoutes;
