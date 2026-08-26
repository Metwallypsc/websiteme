import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
