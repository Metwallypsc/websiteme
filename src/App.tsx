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
//
// The public pages are mounted twice: once at the bare (English/canonical)
// paths and once under "/ar" (Arabic) - same components both times, since
// LanguageProvider (inside Layout) derives the active language from the URL
// itself. Keep this list in sync with localizePath/delocalizePath in
// LanguageContext.tsx and the route list in scripts/prerender.mjs.
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

    <Route path="/ar" element={<Layout />}>
      <Route index element={<Index />} />
      <Route path="about" element={<About />} />
      <Route path="cv" element={<CVPage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>

    {/* Admin panel - deliberately outside Layout, no public header/footer */}
    <Route path="/admin" element={<AdminLoginPage />} />
    <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
  </Routes>
);

export default AppRoutes;
