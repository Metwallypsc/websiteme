import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Outlet />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
